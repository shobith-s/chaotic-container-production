import { fetch } from 'undici';

const GITHUB_API_URL = "https://api.github.com/graphql";

const query = `
  query UserMetrics($login: String!) {
    user(login: $login) {
      login
      name
      createdAt
      avatarUrl
      followers { totalCount }
      following { totalCount }
      gists { totalCount }
      sponsorshipsAsSponsor { totalCount }
      repositoryDiscussionComments { totalCount }
      issues(states: CLOSED) { totalCount }
      pullRequests(states: MERGED) { totalCount }
      contributionsCollection {
        totalCommitContributions
        totalPullRequestReviewContributions
        totalPullRequestContributions
        totalIssueContributions
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              weekday
            }
          }
        }
      }
      repositories(
        privacy: PUBLIC, ownerAffiliations: OWNER, isFork: false, first: 100, orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        totalCount
        nodes {
          name
          stargazerCount
          forkCount
          primaryLanguage { name color }
        }
      }
      organizations(first: 5) {
        nodes { name }
      }
    }
  }
`;

function buildHeaders(token) {
  return { "Content-Type": "application/json", Authorization: `bearer ${token}` };
}

async function fetchGitHubData(token, username) {
  const response = await fetch(GITHUB_API_URL, {
    method: "POST",
    headers: buildHeaders(token),
    body: JSON.stringify({ query, variables: { login: username } }),
  });
  if (!response.ok) throw new Error(await response.text());
  const body = await response.json();
  if (body.errors) throw new Error(body.errors.map(e => e.message).join("; "));
  return body.data;
}

function calculateStreaks(contributionCalendar) {
  if (!contributionCalendar?.weeks) {
    return { currentStreak: 0, longestStreak: 0, mostActiveDay: 'N/A', totalContributions: 0 };
  }

  const allDays = [];
  contributionCalendar.weeks.forEach(week => {
    week.contributionDays.forEach(day => {
      allDays.push({ date: day.date, count: day.contributionCount, weekday: day.weekday });
    });
  });

  allDays.sort((a, b) => new Date(b.date) - new Date(a.date));

  let currentStreak = 0;
  const today = new Date().toISOString().split('T')[0];
  let foundStart = false;
  
  for (const day of allDays) {
    if (!foundStart && day.count === 0) continue;
    foundStart = true;
    if (day.count > 0) currentStreak++;
    else break;
  }

  let longestStreak = 0, tempStreak = 0;
  allDays.sort((a, b) => new Date(a.date) - new Date(b.date));
  for (const day of allDays) {
    if (day.count > 0) { tempStreak++; longestStreak = Math.max(longestStreak, tempStreak); }
    else tempStreak = 0;
  }

  const weekdayCounts = [0, 0, 0, 0, 0, 0, 0];
  allDays.forEach(day => { weekdayCounts[day.weekday] += day.count; });
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const mostActiveDay = weekdays[weekdayCounts.indexOf(Math.max(...weekdayCounts))];

  return { currentStreak, longestStreak, mostActiveDay, totalContributions: contributionCalendar.totalContributions };
}

function calculateRank(score) {
  if (score > 2000) return { level: "S+", title: "LEGEND" };
  if (score > 1000) return { level: "S", title: "MASTER" };
  if (score > 500) return { level: "A+", title: "SENIOR" };
  if (score > 200) return { level: "A", title: "EXPERT" };
  if (score > 100) return { level: "B", title: "BUILDER" };
  if (score > 50) return { level: "C", title: "CODER" };
  return { level: "D", title: "ROOKIE" };
}

function getPersona(m) {
  if (m.reviews > m.commits * 0.3) return "Code Guardian";
  if (m.stars > 100) return "Star Collector";
  if (m.prs > 50) return "PR Machine";
  if (m.discussionComments > 30) return "Community Voice";
  if (m.commits > 500) return "Commit Legend";
  return "Rising Dev";
}

function mapMetrics(user) {
  const cc = user?.contributionsCollection;
  const commits = cc?.totalCommitContributions ?? 0;
  const reviews = cc?.totalPullRequestReviewContributions ?? 0;
  const discussionComments = user?.repositoryDiscussionComments?.totalCount ?? 0;
  const closedIssues = user?.issues?.totalCount ?? 0;
  const prs = user?.pullRequests?.totalCount ?? 0;
  const followers = user?.followers?.totalCount ?? 0;
  const gists = user?.gists?.totalCount ?? 0;
  const sponsors = user?.sponsorshipsAsSponsor?.totalCount ?? 0;
  
  const repos = user?.repositories?.nodes ?? [];
  const totalRepos = user?.repositories?.totalCount ?? 0;
  const stars = repos.reduce((sum, r) => sum + (r?.stargazerCount ?? 0), 0);
  const forks = repos.reduce((sum, r) => sum + (r?.forkCount ?? 0), 0);

  const topRepos = repos.slice(0, 3).map(r => ({ name: r.name, stars: r.stargazerCount }));

  const langCounts = {};
  let totalReposWithLang = 0;
  repos.forEach(r => { 
    if (r.primaryLanguage?.name) {
      const n = r.primaryLanguage.name;
      if (!langCounts[n]) langCounts[n] = { count: 0, color: r.primaryLanguage.color };
      langCounts[n].count++;
      totalReposWithLang++;
    }
  });

  const topLanguages = Object.entries(langCounts)
    .sort(([,a], [,b]) => b.count - a.count)
    .slice(0, 4)
    .map(([name, data]) => ({
      name,
      color: data.color || "#8b949e",
      percent: totalReposWithLang > 0 ? Math.round((data.count / totalReposWithLang) * 100) : 0
    }));

  const streakData = calculateStreaks(cc?.contributionCalendar);
  const createdYear = new Date(user.createdAt).getFullYear();
  const accountAge = new Date().getFullYear() - createdYear;

  const impactScore = Math.floor((reviews * 3) + (discussionComments * 2) + (commits * 0.1) + (stars * 2) + (prs * 1.5) + (closedIssues * 1));
  const rank = calculateRank(impactScore);

  const metrics = {
    username: user?.login, name: user?.name || user?.login,
    commits, reviews, discussionComments, stars, forks, prs, closedIssues,
    followers, gists, sponsors, totalRepos, topRepos, topLanguages,
    createdYear, accountAge, impactScore, rank, ...streakData
  };
  metrics.persona = getPersona(metrics);
  return metrics;
}

function generateSVG(metrics, options = {}) {
  const { theme = 'default', chaos = 5 } = options;
  
  const themes = {
    default: { bg: ['#0d1117', '#161b22'], container: 'rgba(22,27,34,0.6)', border: '#30363d', card: '#21262d', cardBorder: '#30363d', text: '#e6edf3', textSec: '#8b949e', accent: '#58a6ff', accent2: '#f78166', green: '#3fb950', yellow: '#d29922' },
    dracula: { bg: ['#282a36', '#1e1f29'], container: 'rgba(68,71,90,0.5)', border: '#6272a4', card: '#44475a', cardBorder: '#6272a4', text: '#f8f8f2', textSec: '#6272a4', accent: '#8be9fd', accent2: '#ff79c6', green: '#50fa7b', yellow: '#f1fa8c' },
    nord: { bg: ['#2e3440', '#3b4252'], container: 'rgba(59,66,82,0.6)', border: '#4c566a', card: '#3b4252', cardBorder: '#4c566a', text: '#eceff4', textSec: '#d8dee9', accent: '#88c0d0', accent2: '#bf616a', green: '#a3be8c', yellow: '#ebcb8b' },
    matrix: { bg: ['#0a0a0a', '#0d1a0d'], container: 'rgba(0,255,0,0.05)', border: '#00ff00', card: 'rgba(0,50,0,0.5)', cardBorder: '#00cc00', text: '#00ff00', textSec: '#00aa00', accent: '#00ff00', accent2: '#00ffaa', green: '#00ff55', yellow: '#aaff00' },
    cyberpunk: { bg: ['#0c0c0c', '#1a0a2e'], container: 'rgba(255,0,128,0.1)', border: '#ff0080', card: 'rgba(0,255,255,0.1)', cardBorder: '#00ffff', text: '#ffffff', textSec: '#ff0080', accent: '#00ffff', accent2: '#ff0080', green: '#ffff00', yellow: '#ff8000' },
    sunset: { bg: ['#1a1a2e', '#16213e'], container: 'rgba(233,69,96,0.1)', border: '#e94560', card: 'rgba(233,69,96,0.15)', cardBorder: '#e94560', text: '#eaeaea', textSec: '#a2a2a2', accent: '#e94560', accent2: '#f39c12', green: '#00ff88', yellow: '#f39c12' },
    ocean: { bg: ['#0a1628', '#1a2744'], container: 'rgba(59,130,246,0.1)', border: '#3b82f6', card: 'rgba(59,130,246,0.15)', cardBorder: '#3b82f6', text: '#e0f2fe', textSec: '#93c5fd', accent: '#3b82f6', accent2: '#06b6d4', green: '#10b981', yellow: '#fbbf24' },
    forest: { bg: ['#1a2f1a', '#0d1f0d'], container: 'rgba(34,197,94,0.1)', border: '#22c55e', card: 'rgba(34,197,94,0.15)', cardBorder: '#22c55e', text: '#dcfce7', textSec: '#86efac', accent: '#22c55e', accent2: '#84cc16', green: '#4ade80', yellow: '#facc15' }
  };

  const t = themes[theme] || themes.default;
  const seed = metrics.username.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const sRand = (i) => { const x = Math.sin(seed + i) * 10000; return x - Math.floor(x); };
  const rot = (i) => ((sRand(i) - 0.5) * chaos * 1.5).toFixed(1);

  const icons = `
    <symbol id="i-flame" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></symbol>
    <symbol id="i-trophy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 1012 0V2z"/></symbol>
    <symbol id="i-star" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></symbol>
    <symbol id="i-pr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 012 2v7"/><line x1="6" y1="9" x2="6" y2="21"/></symbol>
    <symbol id="i-eye" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></symbol>
    <symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></symbol>
    <symbol id="i-bolt" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></symbol>
    <symbol id="i-users" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></symbol>
    <symbol id="i-calendar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></symbol>
    <symbol id="i-code" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></symbol>
    <symbol id="i-book" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></symbol>
    <symbol id="i-commit" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/></symbol>
    <symbol id="i-fork" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v1a2 2 0 01-2 2H8a2 2 0 01-2-2V9"/><path d="M12 12v3"/></symbol>
    <symbol id="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></symbol>
    <symbol id="i-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></symbol>
  `;

  const langBars = metrics.topLanguages.map((l, i) => `
    <g transform="translate(0,${i * 20})">
      <rect width="10" height="10" rx="2" fill="${l.color}"/>
      <text x="15" y="9" font-size="9" fill="${t.text}" font-family="'Segoe UI',sans-serif">${l.name}</text>
      <text x="85" y="9" font-size="8" fill="${t.textSec}" font-family="'Segoe UI',sans-serif">${l.percent}%</text>
    </g>
  `).join('');

  const repoList = metrics.topRepos.map((r, i) => `
    <g transform="translate(0,${i * 16})">
      <use href="#i-book" width="10" height="10" stroke="${t.textSec}"/>
      <text x="14" y="9" font-size="8" fill="${t.text}" font-family="'Segoe UI',sans-serif">${r.name.substring(0, 10)}${r.name.length > 10 ? '..' : ''}</text>
      <text x="80" y="9" font-size="7" fill="${t.yellow}" font-family="'Segoe UI',sans-serif">${r.stars}</text>
      <use href="#i-star" x="90" width="8" height="8" stroke="${t.yellow}"/>
    </g>
  `).join('');

  return `<svg width="900" height="450" viewBox="0 0 900 450" xmlns="http://www.w3.org/2000/svg">
  <defs>
    ${icons}
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${t.bg[0]}"/><stop offset="100%" style="stop-color:${t.bg[1]}"/>
    </linearGradient>
    <filter id="shadow"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-opacity="0.3"/></filter>
    <filter id="glow"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>

  <rect width="100%" height="100%" fill="url(#bg)"/>
  <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M 30 0 L 0 0 0 30" fill="none" stroke="${t.border}" stroke-width="0.3" opacity="0.3"/></pattern>
  <rect width="100%" height="100%" fill="url(#grid)" opacity="0.4"/>

  <g transform="translate(40,25)">
    <path d="M 40 40 L 780 40 L 820 15 L 80 15 Z" fill="${t.container}" stroke="${t.border}" opacity="0.4"/>
    <path d="M 40 40 L 40 380 L 80 355 L 80 15 Z" fill="${t.container}" stroke="${t.border}" opacity="0.5"/>
    <path d="M 780 40 L 780 380 L 820 355 L 820 15 Z" fill="${t.container}" stroke="${t.border}" opacity="0.3"/>
    <path d="M 40 380 L 780 380 L 820 355 L 80 355 Z" fill="${t.container}" stroke="${t.border}" opacity="0.6"/>
    <rect x="40" y="40" width="740" height="340" fill="${t.container}" stroke="${t.border}" stroke-width="2" rx="4"/>
    <rect x="45" y="45" width="730" height="8" fill="white" opacity="0.05" rx="2"/>

    <!-- Identity Card -->
    <g transform="translate(60,60) rotate(${rot(1)})" filter="url(#shadow)">
      <rect width="170" height="75" rx="6" fill="${t.card}" stroke="${t.cardBorder}"/>
      <use href="#i-shield" x="10" y="12" width="18" height="18" stroke="${t.accent}"/>
      <text x="34" y="26" font-size="13" font-weight="bold" fill="${t.text}" font-family="'Segoe UI',sans-serif">${metrics.name.substring(0, 14)}</text>
      <text x="34" y="42" font-size="9" fill="${t.textSec}" font-family="'Segoe UI',sans-serif">@${metrics.username}</text>
      <text x="10" y="65" font-size="8" fill="${t.accent}" font-family="'Segoe UI',sans-serif">${metrics.persona}</text>
      <rect x="115" y="50" width="45" height="18" rx="4" fill="${t.accent}" opacity="0.2"/>
      <text x="137" y="63" text-anchor="middle" font-size="10" font-weight="bold" fill="${t.accent}" font-family="'Segoe UI',sans-serif">${metrics.rank.level}</text>
    </g>

    <!-- Streaks Card -->
    <g transform="translate(260,55) rotate(${rot(2)})" filter="url(#shadow)">
      <rect width="150" height="85" rx="6" fill="${t.card}" stroke="${t.cardBorder}"/>
      <g transform="translate(12,14)">
        <use href="#i-flame" width="16" height="16" stroke="${t.accent2}" filter="url(#glow)"/>
        <text x="22" y="5" font-size="7" fill="${t.textSec}" font-family="'Segoe UI',sans-serif">CURRENT</text>
        <text x="22" y="16" font-size="12" font-weight="bold" fill="${t.text}" font-family="'Segoe UI',sans-serif">${metrics.currentStreak} days</text>
      </g>
      <g transform="translate(12,48)">
        <use href="#i-trophy" width="16" height="16" stroke="${t.yellow}"/>
        <text x="22" y="5" font-size="7" fill="${t.textSec}" font-family="'Segoe UI',sans-serif">LONGEST</text>
        <text x="22" y="16" font-size="12" font-weight="bold" fill="${t.text}" font-family="'Segoe UI',sans-serif">${metrics.longestStreak} days</text>
      </g>
      <g transform="translate(105,14)">
        <use href="#i-sun" width="12" height="12" stroke="${t.green}"/>
        <text x="-2" y="24" font-size="7" fill="${t.textSec}" font-family="'Segoe UI',sans-serif">${metrics.mostActiveDay}</text>
      </g>
    </g>

    <!-- Core Stats Card -->
    <g transform="translate(440,50) rotate(${rot(3)})" filter="url(#shadow)">
      <rect width="240" height="100" rx="6" fill="${t.card}" stroke="${t.cardBorder}"/>
      <g transform="translate(12,16)">
        <use href="#i-commit" width="12" height="12" stroke="${t.green}"/>
        <text x="18" y="10" font-size="8" fill="${t.textSec}" font-family="'Segoe UI',sans-serif">Commits</text>
        <text x="80" y="10" font-size="10" font-weight="bold" fill="${t.text}" font-family="'Segoe UI',sans-serif">${metrics.commits.toLocaleString()}</text>
      </g>
      <g transform="translate(125,16)">
        <use href="#i-pr" width="12" height="12" stroke="${t.accent}"/>
        <text x="18" y="10" font-size="8" fill="${t.textSec}" font-family="'Segoe UI',sans-serif">PRs</text>
        <text x="60" y="10" font-size="10" font-weight="bold" fill="${t.text}" font-family="'Segoe UI',sans-serif">${metrics.prs.toLocaleString()}</text>
      </g>
      <g transform="translate(12,38)">
        <use href="#i-eye" width="12" height="12" stroke="${t.accent2}"/>
        <text x="18" y="10" font-size="8" fill="${t.textSec}" font-family="'Segoe UI',sans-serif">Reviews</text>
        <text x="80" y="10" font-size="10" font-weight="bold" fill="${t.text}" font-family="'Segoe UI',sans-serif">${metrics.reviews.toLocaleString()}</text>
      </g>
      <g transform="translate(125,38)">
        <use href="#i-check" width="12" height="12" stroke="${t.green}"/>
        <text x="18" y="10" font-size="8" fill="${t.textSec}" font-family="'Segoe UI',sans-serif">Issues</text>
        <text x="60" y="10" font-size="10" font-weight="bold" fill="${t.text}" font-family="'Segoe UI',sans-serif">${metrics.closedIssues.toLocaleString()}</text>
      </g>
      <g transform="translate(12,60)">
        <use href="#i-star" width="12" height="12" stroke="${t.yellow}"/>
        <text x="18" y="10" font-size="8" fill="${t.textSec}" font-family="'Segoe UI',sans-serif">Stars</text>
        <text x="80" y="10" font-size="10" font-weight="bold" fill="${t.text}" font-family="'Segoe UI',sans-serif">${metrics.stars.toLocaleString()}</text>
      </g>
      <g transform="translate(125,60)">
        <use href="#i-fork" width="12" height="12" stroke="${t.textSec}"/>
        <text x="18" y="10" font-size="8" fill="${t.textSec}" font-family="'Segoe UI',sans-serif">Forks</text>
        <text x="60" y="10" font-size="10" font-weight="bold" fill="${t.text}" font-family="'Segoe UI',sans-serif">${metrics.forks.toLocaleString()}</text>
      </g>
      <g transform="translate(12,82)">
        <text font-size="7" fill="${t.textSec}" font-family="'Segoe UI',sans-serif">TOTAL: </text>
        <text x="35" font-size="8" font-weight="bold" fill="${t.green}" font-family="'Segoe UI',sans-serif">${metrics.totalContributions.toLocaleString()} contributions</text>
      </g>
    </g>

    <!-- Languages Card -->
    <g transform="translate(60,165) rotate(${rot(4)})" filter="url(#shadow)">
      <rect width="115" height="105" rx="6" fill="${t.card}" stroke="${t.cardBorder}"/>
      <use href="#i-code" x="8" y="8" width="12" height="12" stroke="${t.accent}"/>
      <text x="25" y="18" font-size="9" font-weight="bold" fill="${t.text}" font-family="'Segoe UI',sans-serif">Languages</text>
      <line x1="8" y1="26" x2="107" y2="26" stroke="${t.cardBorder}"/>
      <g transform="translate(8,34)">${langBars}</g>
    </g>

    <!-- Top Repos Card -->
    <g transform="translate(200,175) rotate(${rot(5)})" filter="url(#shadow)">
      <rect width="115" height="85" rx="6" fill="${t.card}" stroke="${t.cardBorder}"/>
      <use href="#i-book" x="8" y="8" width="12" height="12" stroke="${t.accent}"/>
      <text x="25" y="18" font-size="9" font-weight="bold" fill="${t.text}" font-family="'Segoe UI',sans-serif">Top Repos</text>
      <line x1="8" y1="26" x2="107" y2="26" stroke="${t.cardBorder}"/>
      <g transform="translate(8,34)">${repoList}</g>
    </g>

    <!-- Social Card -->
    <g transform="translate(340,180) rotate(${rot(6)})" filter="url(#shadow)">
      <rect width="115" height="75" rx="6" fill="${t.card}" stroke="${t.cardBorder}"/>
      <g transform="translate(10,14)">
        <use href="#i-users" width="12" height="12" stroke="${t.accent}"/>
        <text x="18" y="10" font-size="8" fill="${t.textSec}" font-family="'Segoe UI',sans-serif">Followers</text>
        <text x="80" y="10" font-size="9" font-weight="bold" fill="${t.text}" font-family="'Segoe UI',sans-serif">${metrics.followers}</text>
      </g>
      <g transform="translate(10,36)">
        <text x="0" y="10" font-size="8" fill="${t.textSec}" font-family="'Segoe UI',sans-serif">Repos</text>
        <text x="80" y="10" font-size="9" font-weight="bold" fill="${t.text}" font-family="'Segoe UI',sans-serif">${metrics.totalRepos}</text>
      </g>
      <g transform="translate(10,56)">
        <text x="0" y="10" font-size="8" fill="${t.textSec}" font-family="'Segoe UI',sans-serif">Gists</text>
        <text x="80" y="10" font-size="9" font-weight="bold" fill="${t.text}" font-family="'Segoe UI',sans-serif">${metrics.gists}</text>
      </g>
    </g>

    <!-- Impact Score -->
    <g transform="translate(500,185) rotate(${rot(7)})" filter="url(#glow)">
      <circle cx="45" cy="45" r="44" fill="${t.card}" stroke="${t.accent2}" stroke-width="3"/>
      <circle cx="45" cy="45" r="36" fill="none" stroke="${t.accent2}" stroke-width="1.5" stroke-dasharray="4 2" opacity="0.5"/>
      <use href="#i-bolt" x="33" y="15" width="22" height="22" stroke="${t.accent2}"/>
      <text x="45" y="60" text-anchor="middle" font-size="16" font-weight="bold" fill="${t.text}" font-family="'Segoe UI',sans-serif">${metrics.impactScore}</text>
      <text x="45" y="75" text-anchor="middle" font-size="7" fill="${t.textSec}" font-family="'Segoe UI',sans-serif">IMPACT</text>
    </g>

    <!-- Account Age -->
    <g transform="translate(620,200) rotate(${rot(8)})" filter="url(#shadow)">
      <rect width="90" height="60" rx="6" fill="${t.card}" stroke="${t.cardBorder}"/>
      <use href="#i-calendar" x="8" y="10" width="12" height="12" stroke="${t.textSec}"/>
      <text x="25" y="20" font-size="8" fill="${t.textSec}" font-family="'Segoe UI',sans-serif">Est. ${metrics.createdYear}</text>
      <text x="8" y="42" font-size="16" font-weight="bold" fill="${t.accent}" font-family="'Segoe UI',sans-serif">${metrics.accountAge}+</text>
      <text x="45" y="42" font-size="8" fill="${t.textSec}" font-family="'Segoe UI',sans-serif">years</text>
    </g>

    <!-- Rank Watermark -->
    <text x="410" y="400" text-anchor="middle" font-size="50" font-weight="900" fill="${t.text}" opacity="0.03" font-family="'Impact',sans-serif" letter-spacing="8">${metrics.rank.title}</text>
  </g>

  <text x="450" y="438" text-anchor="middle" font-size="9" fill="${t.textSec}" font-family="'Segoe UI',sans-serif" opacity="0.5">chaotic-container • chaos contained</text>
</svg>`;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const token = process.env.GH_TOKEN;
  const username = req.query?.username;
  const theme = req.query?.theme || 'default';
  const chaos = Math.min(Math.max(parseInt(req.query?.chaos) || 5, 0), 10);

  if (!token) return res.status(500).send(errSVG("Server missing GH_TOKEN"));
  if (!username) return res.status(400).send(errSVG("Missing username parameter"));

  try {
    const data = await fetchGitHubData(token, username);
    if (!data?.user) return res.status(404).send(errSVG("User not found"));

    const metrics = mapMetrics(data.user);
    const svg = generateSVG(metrics, { theme, chaos });

    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "public, max-age=14400, s-maxage=14400");
    res.status(200).send(svg);
  } catch (error) {
    console.error(error);
    res.status(500).send(errSVG(error.message));
  }
}

function errSVG(msg) {
  return `<svg width="400" height="100" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#0d1117"/>
    <rect x="10" y="10" width="380" height="80" rx="6" fill="#21262d" stroke="#f85149" stroke-width="2"/>
    <text x="200" y="45" text-anchor="middle" font-size="12" fill="#f85149" font-family="'Segoe UI',sans-serif">Error</text>
    <text x="200" y="65" text-anchor="middle" font-size="10" fill="#8b949e" font-family="'Segoe UI',sans-serif">${msg.substring(0, 50)}</text>
  </svg>`;
}