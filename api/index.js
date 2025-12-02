import { fetch } from 'undici';

// Theme definitions
const THEMES = {
  default: {
    bg: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
    container: '#0d1117',
    border: '#30363d',
    card: '#161b22',
    cardBorder: '#21262d',
    text: '#c9d1d9',
    textSec: '#8b949e',
    accent: '#58a6ff',
    accent2: '#1f6feb',
    green: '#3fb950',
    yellow: '#d29922',
    gradient1: '#1f6feb',
    gradient2: '#58a6ff'
  },
  dracula: {
    bg: 'linear-gradient(135deg, #282a36 0%, #44475a 100%)',
    container: '#282a36',
    border: '#6272a4',
    card: '#44475a',
    cardBorder: '#6272a4',
    text: '#f8f8f2',
    textSec: '#6272a4',
    accent: '#bd93f9',
    accent2: '#ff79c6',
    green: '#50fa7b',
    yellow: '#f1fa8c',
    gradient1: '#bd93f9',
    gradient2: '#ff79c6'
  },
  nord: {
    bg: 'linear-gradient(135deg, #2e3440 0%, #3b4252 100%)',
    container: '#2e3440',
    border: '#4c566a',
    card: '#3b4252',
    cardBorder: '#4c566a',
    text: '#eceff4',
    textSec: '#d8dee9',
    accent: '#88c0d0',
    accent2: '#81a1c1',
    green: '#a3be8c',
    yellow: '#ebcb8b',
    gradient1: '#88c0d0',
    gradient2: '#5e81ac'
  },
  tokyonight: {
    bg: 'linear-gradient(135deg, #1a1b26 0%, #24283b 100%)',
    container: '#1a1b26',
    border: '#414868',
    card: '#24283b',
    cardBorder: '#414868',
    text: '#c0caf5',
    textSec: '#9aa5ce',
    accent: '#7aa2f7',
    accent2: '#bb9af7',
    green: '#9ece6a',
    yellow: '#e0af68',
    gradient1: '#7aa2f7',
    gradient2: '#bb9af7'
  },
  synthwave: {
    bg: 'linear-gradient(135deg, #2b213a 0%, #1a1a2e 100%)',
    container: '#2b213a',
    border: '#ff006e',
    card: '#241b2f',
    cardBorder: '#ff006e',
    text: '#f8f8f2',
    textSec: '#8b949e',
    accent: '#ff006e',
    accent2: '#ffbe0b',
    green: '#72f1b8',
    yellow: '#ffbe0b',
    gradient1: '#ff006e',
    gradient2: '#ffbe0b'
  },
  monokai: {
    bg: 'linear-gradient(135deg, #272822 0%, #3e3d32 100%)',
    container: '#272822',
    border: '#75715e',
    card: '#3e3d32',
    cardBorder: '#75715e',
    text: '#f8f8f2',
    textSec: '#75715e',
    accent: '#a6e22e',
    accent2: '#66d9ef',
    green: '#a6e22e',
    yellow: '#e6db74',
    gradient1: '#a6e22e',
    gradient2: '#66d9ef'
  },
  github_dark: {
    bg: 'linear-gradient(135deg, #010409 0%, #0d1117 100%)',
    container: '#010409',
    border: '#30363d',
    card: '#0d1117',
    cardBorder: '#21262d',
    text: '#e6edf3',
    textSec: '#7d8590',
    accent: '#2f81f7',
    accent2: '#58a6ff',
    green: '#3fb950',
    yellow: '#d29922',
    gradient1: '#2f81f7',
    gradient2: '#58a6ff'
  },
  catppuccin: {
    bg: 'linear-gradient(135deg, #1e1e2e 0%, #181825 100%)',
    container: '#1e1e2e',
    border: '#585b70',
    card: '#181825',
    cardBorder: '#45475a',
    text: '#cdd6f4',
    textSec: '#a6adc8',
    accent: '#89b4fa',
    accent2: '#cba6f7',
    green: '#a6e3a1',
    yellow: '#f9e2af',
    gradient1: '#89b4fa',
    gradient2: '#cba6f7'
  }
};

// Rank definitions
const RANKS = {
  'S+': { level: 10000, title: 'Legendary Coder', color: '#FFD700' },
  'S': { level: 5000, title: 'Elite Developer', color: '#FFA500' },
  'S-': { level: 2500, title: 'Master Programmer', color: '#FF8C00' },
  'A++': { level: 1500, title: 'Expert Developer', color: '#FF6347' },
  'A+': { level: 1000, title: 'Senior Developer', color: '#FF4500' },
  'A': { level: 750, title: 'Advanced Developer', color: '#DC143C' },
  'A-': { level: 500, title: 'Experienced Dev', color: '#C71585' },
  'B+': { level: 300, title: 'Intermediate Dev', color: '#9370DB' },
  'B': { level: 200, title: 'Developing Skills', color: '#8A2BE2' },
  'B-': { level: 100, title: 'Growing Dev', color: '#7B68EE' },
  'C+': { level: 50, title: 'Junior Dev', color: '#6A5ACD' },
  'C': { level: 25, title: 'Beginner Dev', color: '#483D8B' },
  'C-': { level: 0, title: 'New Developer', color: '#4169E1' }
};

// GraphQL query for fetching user data
const USER_QUERY = `
query($username: String!) {
  user(login: $username) {
    login
    name
    createdAt
    avatarUrl
    followers { totalCount }
    following { totalCount }
    gists { totalCount }
    issues(states: [OPEN, CLOSED]) { totalCount }
    pullRequests { totalCount }
    contributionsCollection {
      totalCommitContributions
      totalPullRequestReviewContributions
      restrictedContributionsCount
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
    repositories(first: 100, ownerAffiliations: OWNER, isFork: false, orderBy: {field: STARGAZERS, direction: DESC}) {
      totalCount
      nodes {
        name
        stargazerCount
        forkCount
        primaryLanguage {
          name
          color
        }
        defaultBranchRef {
          target {
            ... on Commit {
              history {
                totalCount
              }
            }
          }
        }
      }
    }
  }
}
`;

// Fetch GitHub data
async function fetchGitHubData(username, token) {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: USER_QUERY,
      variables: { username }
    })
  });

  const data = await response.json();
  
  if (data.errors) {
    throw new Error(data.errors[0]?.message || 'GraphQL query failed');
  }
  
  if (!data.data?.user) {
    throw new Error('User not found');
  }
  
  return data.data.user;
}

// Calculate rank based on score
function calculateRank(score) {
  const rankKeys = Object.keys(RANKS);
  for (const rank of rankKeys) {
    if (score >= RANKS[rank].level) {
      return { rank, ...RANKS[rank] };
    }
  }
  return { rank: 'C-', ...RANKS['C-'] };
}

// Calculate streaks from contribution calendar
function calculateStreaks(contributionCalendar) {
  const days = [];
  
  contributionCalendar.weeks.forEach(week => {
    week.contributionDays.forEach(day => {
      days.push({
        date: new Date(day.date),
        count: day.contributionCount,
        weekday: day.weekday
      });
    });
  });
  
  // Sort by date
  days.sort((a, b) => a.date - b.date);
  
  // Calculate current streak (from today backwards)
  let currentStreak = 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  for (let i = days.length - 1; i >= 0; i--) {
    const dayDate = new Date(days[i].date);
    dayDate.setHours(0, 0, 0, 0);
    
    const diffDays = Math.floor((today - dayDate) / (1000 * 60 * 60 * 24));
    
    if (diffDays === currentStreak && days[i].count > 0) {
      currentStreak++;
    } else if (diffDays > currentStreak) {
      break;
    }
  }
  
  // Calculate longest streak
  let longestStreak = 0;
  let tempStreak = 0;
  
  days.forEach((day, i) => {
    if (day.count > 0) {
      tempStreak++;
      longestStreak = Math.max(longestStreak, tempStreak);
    } else {
      tempStreak = 0;
    }
  });
  
  // Calculate most active day (weekday with most contributions)
  const weekdayTotals = [0, 0, 0, 0, 0, 0, 0]; // Sunday to Saturday
  days.forEach(day => {
    weekdayTotals[day.weekday] += day.count;
  });
  
  const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const maxWeekdayIndex = weekdayTotals.indexOf(Math.max(...weekdayTotals));
  const mostActiveDay = weekdayNames[maxWeekdayIndex];
  
  return {
    currentStreak,
    longestStreak,
    mostActiveDay
  };
}

// Assign persona based on stats
function assignPersona(stats) {
  const { commits, prs, reviews, stars, followers, discussionComments = 0 } = stats;
  
  if (reviews > commits * 0.3) return 'Code Guardian';
  if (stars > 100) return 'Star Collector';
  if (prs > 100) return 'PR Machine';
  if (prs > 50) return 'Merge Master';
  if (discussionComments > 30) return 'Community Voice';
  if (commits > 1000) return 'Commit Legend';
  if (commits > 500) return 'Code Warrior';
  if (followers > 50) return 'Influencer';
  
  return 'Rising Dev';
}

// Calculate account age
function calculateAccountAge(createdAt) {
  const created = new Date(createdAt);
  const now = new Date();
  const diffMs = now - created;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays % 365) / 30);
  
  if (years > 0) {
    return `${years}y ${months}m`;
  } else {
    return `${months}m`;
  }
}

// Generate SVG icons
const ICONS = {
  flame: '<path d="M8 16c3.314 0 6-2.686 6-6 0-1.657-.672-3.157-1.757-4.243.857.857 1.757 2.343 1.757 4.243 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.9.9-3.386 1.757-4.243C2.672 6.843 2 8.343 2 10c0 3.314 2.686 6 6 6z"/>',
  trophy: '<path d="M6 2h4v1H6V2zm0 2h4v1H6V4zm8 8l-2-6H4L2 12l2 2h8l2-2zM8 16c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2z"/>',
  star: '<path d="M8 12.5l-3.5 2 1-4L2 7.5l4-.5L8 3l2 4 4 .5-3.5 3 1 4z"/>',
  pr: '<path d="M11 11V9c0-1.1-.9-2-2-2H7V5h2c2.2 0 4 1.8 4 4v2h-2zM6 10V6H4v4H2l3 3 3-3H6z"/>',
  eye: '<path d="M8 4C4.5 4 1.6 6.5 0 10c1.6 3.5 4.5 6 8 6s6.4-2.5 8-6c-1.6-3.5-4.5-6-8-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z"/>',
  check: '<path d="M13 2L6 9l-3-3L1 8l5 5L15 4z"/>',
  bolt: '<path d="M10 1L5 9h4l-1 6 5-8H9z"/>',
  users: '<path d="M6 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4zm4-4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.3 0-2.6.4-3.7 1 1 .7 1.7 1.5 1.7 3v2h8v-2c0-2.7-3.3-4-6-4z"/>',
  calendar: '<path d="M12 2h1v2h-1V2zm-8 0h1v2H4V2zm9 4H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h10v8z"/>',
  code: '<path d="M5 12l-3-3 3-3v2h6V6l3 3-3 3V10H5z"/>',
  repo: '<path d="M4 2h8c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm0 2v10h8V4H4zm2 2h4v2H6V6zm0 3h4v2H6V9z"/>',
  commit: '<circle cx="8" cy="8" r="2"/><path d="M8 2v4m0 4v4M2 8h4m4 0h4"/>',
  fork: '<path d="M10 3c0-1.1-.9-2-2-2S6 1.9 6 3s.9 2 2 2 2-.9 2-2zM4 11c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm10 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zM8 5v3H4.5M8 8h3.5"/>',
  sun: '<circle cx="8" cy="8" r="3"/><path d="M8 1v2m0 10v2M1 8h2m10 0h2M3 3l1.5 1.5m8 8L14 14M14 3l-1.5 1.5m-8 8L3 14"/>',
  award: '<circle cx="8" cy="7" r="4"/><path d="M5 11l1 4 2-2 2 2 1-4"/>'
};

// Generate SVG card
function generateSVG(userData, theme, chaos, customRepos) {
  const t = THEMES[theme] || THEMES.default;
  
  // Calculate lifetime commits from all repositories
  let lifetimeCommits = 0;
  userData.repositories.nodes.forEach(repo => {
    const commitCount = repo.defaultBranchRef?.target?.history?.totalCount || 0;
    lifetimeCommits += commitCount;
  });
  
  // Calculate stats
  const commits = lifetimeCommits;
  const prs = userData.pullRequests?.totalCount || 0;
  const reviews = userData.contributionsCollection?.totalPullRequestReviewContributions || 0;
  const issues = userData.issues?.totalCount || 0;
  
  const stars = userData.repositories.nodes.reduce((sum, repo) => sum + (repo.stargazerCount || 0), 0);
  const forks = userData.repositories.nodes.reduce((sum, repo) => sum + (repo.forkCount || 0), 0);
  const followers = userData.followers?.totalCount || 0;
  const following = userData.following?.totalCount || 0;
  const gists = userData.gists?.totalCount || 0;
  
  // Calculate score and rank
  const score = commits * 1 + prs * 3 + reviews * 2 + issues * 2 + stars * 4 + followers * 1;
  const rankInfo = calculateRank(score);
  
  // Calculate streaks
  const streaks = calculateStreaks(userData.contributionsCollection.contributionCalendar);
  
  // Assign persona
  const persona = assignPersona({ commits, prs, reviews, stars, followers });
  
  // Calculate account age
  const accountAge = calculateAccountAge(userData.createdAt);
  
  // Get language stats
  const languages = {};
  userData.repositories.nodes.forEach(repo => {
    if (repo.primaryLanguage) {
      const lang = repo.primaryLanguage.name;
      if (!languages[lang]) {
        languages[lang] = {
          count: 0,
          color: repo.primaryLanguage.color || '#858585'
        };
      }
      languages[lang].count++;
    }
  });
  
  const topLanguages = Object.entries(languages)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 5);
  
  // Get top repos (custom or by stars)
  let topRepos = [];
  if (customRepos && customRepos.length > 0) {
    topRepos = userData.repositories.nodes
      .filter(repo => customRepos.includes(repo.name))
      .slice(0, 3);
  } else {
    topRepos = userData.repositories.nodes.slice(0, 3);
  }
  
  // Generate chaos rotation values
  const chaosLevel = Math.min(Math.max(chaos, 0), 10);
  const rotations = Array(8).fill(0).map(() => 
    (Math.random() - 0.5) * chaosLevel * 2
  );
  
  // Calculate progress ring
  const maxScore = RANKS['S+'].level;
  const progress = Math.min((score / maxScore) * 100, 100);
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  // Generate SVG
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="900" height="400" xmlns="http://www.w3.org/2000/svg" role="img">
  <title>GitHub Stats for ${userData.login}</title>
  
  <defs>
    <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${t.gradient1};stop-opacity:0.1"/>
      <stop offset="100%" style="stop-color:${t.gradient2};stop-opacity:0.1"/>
    </linearGradient>
    
    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
      <feOffset dx="2" dy="2" result="offsetblur"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.3"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="${t.border}" stroke-width="0.5" opacity="0.1"/>
    </pattern>
    
    <symbol id="icon-flame" viewBox="0 0 16 16">
      ${ICONS.flame}
    </symbol>
    <symbol id="icon-trophy" viewBox="0 0 16 16">
      ${ICONS.trophy}
    </symbol>
    <symbol id="icon-star" viewBox="0 0 16 16">
      ${ICONS.star}
    </symbol>
    <symbol id="icon-pr" viewBox="0 0 16 16">
      ${ICONS.pr}
    </symbol>
    <symbol id="icon-eye" viewBox="0 0 16 16">
      ${ICONS.eye}
    </symbol>
    <symbol id="icon-check" viewBox="0 0 16 16">
      ${ICONS.check}
    </symbol>
    <symbol id="icon-bolt" viewBox="0 0 16 16">
      ${ICONS.bolt}
    </symbol>
    <symbol id="icon-users" viewBox="0 0 16 16">
      ${ICONS.users}
    </symbol>
    <symbol id="icon-calendar" viewBox="0 0 16 16">
      ${ICONS.calendar}
    </symbol>
    <symbol id="icon-code" viewBox="0 0 16 16">
      ${ICONS.code}
    </symbol>
    <symbol id="icon-repo" viewBox="0 0 16 16">
      ${ICONS.repo}
    </symbol>
    <symbol id="icon-commit" viewBox="0 0 16 16">
      ${ICONS.commit}
    </symbol>
    <symbol id="icon-fork" viewBox="0 0 16 16">
      ${ICONS.fork}
    </symbol>
    <symbol id="icon-sun" viewBox="0 0 16 16">
      ${ICONS.sun}
    </symbol>
    <symbol id="icon-award" viewBox="0 0 16 16">
      ${ICONS.award}
    </symbol>
  </defs>
  
  <!-- Background -->
  <rect width="900" height="400" fill="url(#bg-gradient)"/>
  <rect width="900" height="400" fill="url(#grid)"/>
  
  <!-- Rank watermark -->
  <text x="450" y="200" font-size="200" font-weight="900" fill="${t.border}" opacity="0.05" text-anchor="middle" dominant-baseline="middle">${rankInfo.rank}</text>
  
  <!-- Main container -->
  <rect x="10" y="10" width="880" height="380" rx="15" fill="${t.container}" stroke="${t.border}" stroke-width="2" filter="url(#shadow)"/>
  
  <!-- Identity Card -->
  <g transform="translate(30, 30) rotate(${rotations[0]}, 125, 60)">
    <rect width="250" height="120" rx="10" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <text x="15" y="25" font-size="14" font-weight="700" fill="${t.text}">👤 Identity</text>
    <text x="15" y="50" font-size="18" font-weight="800" fill="${t.accent}">${userData.name || userData.login}</text>
    <text x="15" y="70" font-size="12" fill="${t.textSec}">@${userData.login}</text>
    <text x="15" y="95" font-size="13" font-weight="600" fill="${t.yellow}">✨ ${persona}</text>
  </g>
  
  <!-- Streaks Card -->
  <g transform="translate(300, 30) rotate(${rotations[1]}, 125, 60)">
    <rect width="250" height="120" rx="10" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <text x="15" y="25" font-size="14" font-weight="700" fill="${t.text}">
      <tspan>🔥 Streaks</tspan>
    </text>
    <text x="15" y="50" font-size="12" fill="${t.textSec}">Current: <tspan fill="${t.green}" font-weight="700">${streaks.currentStreak.toLocaleString()}</tspan> days</text>
    <text x="15" y="70" font-size="12" fill="${t.textSec}">Longest: <tspan fill="${t.accent}" font-weight="700">${streaks.longestStreak.toLocaleString()}</tspan> days</text>
    <text x="15" y="95" font-size="11" fill="${t.textSec}">Most active: <tspan fill="${t.yellow}">${streaks.mostActiveDay}</tspan></text>
  </g>
  
  <!-- Core Stats Card -->
  <g transform="translate(570, 30) rotate(${rotations[2]}, 140, 60)">
    <rect width="280" height="120" rx="10" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <text x="15" y="25" font-size="14" font-weight="700" fill="${t.text}">📊 Core Stats</text>
    <g transform="translate(15, 40)">
      <use href="#icon-commit" width="12" height="12" fill="${t.accent}"/>
      <text x="18" y="10" font-size="11" fill="${t.textSec}">Commits: <tspan fill="${t.text}" font-weight="600">${commits.toLocaleString()}</tspan></text>
    </g>
    <g transform="translate(145, 40)">
      <use href="#icon-pr" width="12" height="12" fill="${t.accent}"/>
      <text x="18" y="10" font-size="11" fill="${t.textSec}">PRs: <tspan fill="${t.text}" font-weight="600">${prs.toLocaleString()}</tspan></text>
    </g>
    <g transform="translate(15, 60)">
      <use href="#icon-check" width="12" height="12" fill="${t.green}"/>
      <text x="18" y="10" font-size="11" fill="${t.textSec}">Reviews: <tspan fill="${t.text}" font-weight="600">${reviews.toLocaleString()}</tspan></text>
    </g>
    <g transform="translate(145, 60)">
      <use href="#icon-eye" width="12" height="12" fill="${t.yellow}"/>
      <text x="18" y="10" font-size="11" fill="${t.textSec}">Issues: <tspan fill="${t.text}" font-weight="600">${issues.toLocaleString()}</tspan></text>
    </g>
    <g transform="translate(15, 85)">
      <use href="#icon-star" width="12" height="12" fill="${t.yellow}"/>
      <text x="18" y="10" font-size="11" fill="${t.textSec}">Stars: <tspan fill="${t.text}" font-weight="600">${stars.toLocaleString()}</tspan></text>
    </g>
    <g transform="translate(145, 85)">
      <use href="#icon-fork" width="12" height="12" fill="${t.accent}"/>
      <text x="18" y="10" font-size="11" fill="${t.textSec}">Forks: <tspan fill="${t.text}" font-weight="600">${forks.toLocaleString()}</tspan></text>
    </g>
  </g>
  
  <!-- Languages Card -->
  <g transform="translate(30, 170) rotate(${rotations[3]}, 125, 60)">
    <rect width="250" height="120" rx="10" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <text x="15" y="25" font-size="14" font-weight="700" fill="${t.text}">💻 Languages</text>
    ${topLanguages.map((lang, i) => `
      <g transform="translate(15, ${45 + i * 15})">
        <circle cx="4" cy="4" r="4" fill="${lang[1].color}"/>
        <text x="15" y="8" font-size="11" fill="${t.textSec}">${lang[0]}: <tspan fill="${t.text}" font-weight="600">${lang[1].count}</tspan></text>
      </g>
    `).join('')}
  </g>
  
  <!-- Top Repos Card -->
  <g transform="translate(300, 170) rotate(${rotations[4]}, 125, 60)">
    <rect width="250" height="120" rx="10" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <text x="15" y="25" font-size="14" font-weight="700" fill="${t.text}">🏆 Top Repos</text>
    ${topRepos.map((repo, i) => `
      <g transform="translate(15, ${42 + i * 25})">
        <use href="#icon-repo" width="12" height="12" fill="${t.accent}"/>
        <text x="18" y="10" font-size="11" fill="${t.text}" font-weight="600">${repo.name.length > 20 ? repo.name.substring(0, 20) + '...' : repo.name}</text>
        <text x="18" y="22" font-size="9" fill="${t.textSec}">⭐ ${repo.stargazerCount.toLocaleString()} 🍴 ${repo.forkCount.toLocaleString()}</text>
      </g>
    `).join('')}
  </g>
  
  <!-- Social Card -->
  <g transform="translate(570, 170) rotate(${rotations[5]}, 95, 60)">
    <rect width="190" height="120" rx="10" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <text x="15" y="25" font-size="14" font-weight="700" fill="${t.text}">👥 Social</text>
    <g transform="translate(15, 45)">
      <use href="#icon-users" width="12" height="12" fill="${t.accent}"/>
      <text x="18" y="10" font-size="11" fill="${t.textSec}">Followers: <tspan fill="${t.text}" font-weight="600">${followers.toLocaleString()}</tspan></text>
    </g>
    <g transform="translate(15, 70)">
      <use href="#icon-users" width="12" height="12" fill="${t.accent2}"/>
      <text x="18" y="10" font-size="11" fill="${t.textSec}">Following: <tspan fill="${t.text}" font-weight="600">${following.toLocaleString()}</tspan></text>
    </g>
    <g transform="translate(15, 95)">
      <use href="#icon-code" width="12" height="12" fill="${t.green}"/>
      <text x="18" y="10" font-size="11" fill="${t.textSec}">Gists: <tspan fill="${t.text}" font-weight="600">${gists.toLocaleString()}</tspan></text>
    </g>
  </g>
  
  <!-- Rank Score Ring -->
  <g transform="translate(775, 170) rotate(${rotations[6]}, 50, 60)">
    <rect width="100" height="120" rx="10" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <text x="50" y="25" font-size="11" font-weight="700" fill="${t.text}" text-anchor="middle">RANK</text>
    
    <!-- Progress ring -->
    <circle cx="50" cy="70" r="45" fill="none" stroke="${t.border}" stroke-width="6" opacity="0.3"/>
    <circle cx="50" cy="70" r="45" fill="none" stroke="${rankInfo.color}" stroke-width="6" 
            stroke-dasharray="${circumference}" 
            stroke-dashoffset="${strokeDashoffset}"
            stroke-linecap="round"
            transform="rotate(-90 50 70)"/>
    
    <!-- Rank text -->
    <text x="50" y="70" font-size="20" font-weight="900" fill="${rankInfo.color}" text-anchor="middle" dominant-baseline="middle">${rankInfo.rank}</text>
    <text x="50" y="105" font-size="9" fill="${t.textSec}" text-anchor="middle">${score.toLocaleString()}</text>
  </g>
  
  <!-- Account Age Card -->
  <g transform="translate(30, 310) rotate(${rotations[7]}, 210, 35)">
    <rect width="420" height="70" rx="10" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <g transform="translate(15, 25)">
      <use href="#icon-calendar" width="14" height="14" fill="${t.accent}"/>
      <text x="20" y="12" font-size="12" fill="${t.textSec}">Account Age: <tspan fill="${t.text}" font-weight="600">${accountAge}</tspan></text>
    </g>
    <g transform="translate(15, 50)">
      <use href="#icon-award" width="14" height="14" fill="${rankInfo.color}"/>
      <text x="20" y="12" font-size="11" fill="${t.textSec}">Title: <tspan fill="${rankInfo.color}" font-weight="700">${rankInfo.title}</tspan></text>
    </g>
  </g>
  
  <!-- Signature -->
  <text x="890" y="390" font-size="9" fill="${t.textSec}" text-anchor="end" opacity="0.6">Chaotic Stats v2.1</text>
</svg>`;
}

// Error SVG generator
function generateErrorSVG(message, theme = 'default') {
  const t = THEMES[theme];
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="900" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="900" height="400" fill="${t.container}"/>
  <rect x="10" y="10" width="880" height="380" rx="15" fill="${t.card}" stroke="${t.border}" stroke-width="2"/>
  <text x="450" y="180" font-size="24" font-weight="700" fill="${t.text}" text-anchor="middle">⚠️ Error</text>
  <text x="450" y="220" font-size="16" fill="${t.textSec}" text-anchor="middle">${message}</text>
</svg>`;
}

// Main handler
export default async function handler(req, res) {
  try {
    // Parse query parameters
    const url = new URL(req.url, `http://${req.headers.host}`);
    const username = url.searchParams.get('username');
    const theme = url.searchParams.get('theme') || 'default';
    const chaos = parseInt(url.searchParams.get('chaos') || '3', 10);
    const reposParam = url.searchParams.get('repos');
    const customRepos = reposParam ? reposParam.split(',').map(r => r.trim()) : null;
    
    // Validate parameters
    if (!username) {
      res.setHeader('Content-Type', 'image/svg+xml');
      res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=300');
      return res.status(400).send(generateErrorSVG('Username parameter is required', theme));
    }
    
    // Check for GitHub token
    const token = process.env.GH_TOKEN;
    if (!token) {
      res.setHeader('Content-Type', 'image/svg+xml');
      res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=300');
      return res.status(500).send(generateErrorSVG('GH_TOKEN environment variable not configured', theme));
    }
    
    // Fetch GitHub data
    let userData;
    try {
      userData = await fetchGitHubData(username, token);
    } catch (error) {
      res.setHeader('Content-Type', 'image/svg+xml');
      res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=300');
      return res.status(404).send(generateErrorSVG(error.message || 'User not found', theme));
    }
    
    // Generate SVG
    const svg = generateSVG(userData, theme, chaos, customRepos);
    
    // Set response headers
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=14400, s-maxage=14400');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    return res.status(200).send(svg);
    
  } catch (error) {
    console.error('Unexpected error:', error);
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=300');
    return res.status(500).send(generateErrorSVG('Internal server error', 'default'));
  }
}
