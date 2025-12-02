import { fetch } from 'undici';

// Theme definitions
const THEMES = {
  default: {
    bg: ['#0d1117', '#161b22'],
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
    bg: ['#282a36', '#44475a'],
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
    bg: ['#2e3440', '#3b4252'],
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
    bg: ['#1a1b26', '#24283b'],
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
    bg: ['#2b213a', '#1a1a2e'],
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
    bg: ['#272822', '#3e3d32'],
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
    bg: ['#010409', '#0d1117'],
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
    bg: ['#1e1e2e', '#181825'],
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

// Color palette for contributions
const COLOR_PALETTE = {
  primary: '#58a6ff',    // Blue - PRs, links
  success: '#3fb950',    // Green - Commits, positive
  warning: '#d29922',    // Gold - Reviews, stars
  danger: '#f85149',     // Red - Issues, alerts
  purple: '#bc8cff',     // Purple - Forks, special
  cyan: '#39c5cf'        // Cyan - Highlights
};

// Rank definitions (Anurag Hazra style)
const RANKS = {
  'S+': { level: 10000, title: 'MASS DESTRUCTION', color: '#FF6B6B' },
  'S': { level: 5000, title: 'MASS DESTRUCTION', color: '#FF6B6B' },
  'S-': { level: 2500, title: 'MASS DESTRUCTION', color: '#FF8C42' },
  'A++': { level: 1500, title: 'ELITE HACKER', color: '#FFD93D' },
  'A+': { level: 1000, title: 'ELITE HACKER', color: '#FFD93D' },
  'A': { level: 750, title: 'SENIOR DEV', color: '#6BCB77' },
  'A-': { level: 500, title: 'SENIOR DEV', color: '#6BCB77' },
  'B+': { level: 300, title: 'PRO CODER', color: '#4D96FF' },
  'B': { level: 200, title: 'PRO CODER', color: '#4D96FF' },
  'B-': { level: 100, title: 'ACTIVE DEV', color: '#9B72AA' },
  'C+': { level: 50, title: 'CONTRIBUTOR', color: '#A8A8A8' },
  'C': { level: 25, title: 'LEARNER', color: '#A8A8A8' },
  'C-': { level: 0, title: 'NEWBIE', color: '#888888' }
};

// GraphQL query for fetching user data
const USER_QUERY = `
query($login: String!) {
  user(login: $login) {
    login
    name
    createdAt
    avatarUrl
    followers { totalCount }
    following { totalCount }
    gists { totalCount }
    issues { totalCount }
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
    repositories(
      privacy: PUBLIC
      ownerAffiliations: OWNER
      isFork: false
      first: 100
      orderBy: { field: STARGAZERS, direction: DESC }
    ) {
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
              history { totalCount }
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
      variables: { login: username }
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

// Calculate streaks and activity data from contribution calendar
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
  
  // Get last 7 days for activity indicator
  const last7Days = days.slice(-7);
  
  return {
    currentStreak,
    longestStreak,
    mostActiveDay,
    last7Days,
    allDays: days
  };
}

// Calculate weekend warrior percentage
function calculateWeekendWarrior(days) {
  const weekendContribs = days
    .filter(d => d.weekday === 0 || d.weekday === 6)
    .reduce((sum, d) => sum + d.count, 0);
  
  const totalContribs = days.reduce((sum, d) => sum + d.count, 0);
  
  if (totalContribs === 0) return 0;
  
  const weekendPercent = Math.round((weekendContribs / totalContribs) * 100);
  return weekendPercent;
}

// Get weekend warrior badge level
function getWeekendBadgeLevel(percent) {
  if (percent >= 40) return { level: 'Gold', color: '#FFD700' };
  if (percent >= 25) return { level: 'Silver', color: '#C0C0C0' };
  if (percent >= 15) return { level: 'Bronze', color: '#CD7F32' };
  return { level: 'None', color: '#666666' };
}

// Assign persona based on stats
function assignPersona(stats) {
  const { commits, prs, reviews, stars, followers } = stats;
  
  if (reviews > commits * 0.3) return 'Code Guardian';
  if (stars > 100) return 'Star Collector';
  if (prs > 100) return 'PR Machine';
  if (prs > 50) return 'Merge Master';
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
  
  return {
    years,
    displayText: years > 0 ? `${years}+ years coding` : 'New to GitHub',
    estYear: created.getFullYear()
  };
}

// Seeded random generator for consistent particle positions
function seededRandom(seed) {
  let value = seed;
  return function() {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

// Generate particle positions
function generateParticles(username, count, width, height) {
  const seed = username.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const random = seededRandom(seed);
  const particles = [];
  
  for (let i = 0; i < count; i++) {
    particles.push({
      x: random() * width,
      y: random() * height,
      r: 1.5 + random() * 1.5,
      opacity: 0.1 + random() * 0.2
    });
  }
  
  return particles;
}

// SVG icons
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
  award: '<circle cx="8" cy="7" r="4"/><path d="M5 11l1 4 2-2 2 2 1-4"/>',
  issue: '<path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 11a1 1 0 110-2 1 1 0 010 2zm1-3H7V4h2v5z"/>'
};

// Constants
const MAX_REPO_NAME_LENGTH = 22;
const SVG_WIDTH = 900;
const SVG_HEIGHT = 500;

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
  
  // Calculate streaks and activity data
  const streakData = calculateStreaks(userData.contributionsCollection.contributionCalendar);
  const streaks = {
    currentStreak: streakData.currentStreak,
    longestStreak: streakData.longestStreak,
    mostActiveDay: streakData.mostActiveDay
  };
  
  // Calculate weekend warrior
  const weekendPercent = calculateWeekendWarrior(streakData.allDays);
  const weekendBadge = getWeekendBadgeLevel(weekendPercent);
  
  // Calculate contribution distribution
  const totalContributions = commits + prs + reviews + issues;
  const distribution = {
    commits: {
      count: commits,
      percent: totalContributions > 0 ? Math.round((commits / totalContributions) * 100) : 0,
      color: COLOR_PALETTE.success
    },
    prs: {
      count: prs,
      percent: totalContributions > 0 ? Math.round((prs / totalContributions) * 100) : 0,
      color: COLOR_PALETTE.primary
    },
    reviews: {
      count: reviews,
      percent: totalContributions > 0 ? Math.round((reviews / totalContributions) * 100) : 0,
      color: COLOR_PALETTE.warning
    },
    issues: {
      count: issues,
      percent: totalContributions > 0 ? Math.round((issues / totalContributions) * 100) : 0,
      color: COLOR_PALETTE.danger
    }
  };
  
  // Assign persona
  const persona = assignPersona({ commits, prs, reviews, stars, followers });
  
  // Calculate account age
  const accountAgeData = calculateAccountAge(userData.createdAt);
  const accountAge = accountAgeData.displayText;
  
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
  
  // Generate chaos rotation values (seeded by username for consistency)
  const chaosLevel = Math.min(Math.max(chaos, 0), 10);
  const seed = userData.login.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const chaosRandom = seededRandom(seed + 1000);
  const rotations = Array(12).fill(0).map(() => 
    (chaosRandom() - 0.5) * chaosLevel * 2
  );
  
  // Generate particles for background
  const particles = generateParticles(userData.login, 25, SVG_WIDTH, SVG_HEIGHT);
  
  // Calculate progress ring for rank
  const maxScore = RANKS['S+'].level;
  const progress = Math.min((score / maxScore) * 100, 100);
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  // Calculate weekend warrior ring
  const weekendCircumference = 2 * Math.PI * 35;
  const weekendDashoffset = weekendCircumference - (weekendPercent / 100) * weekendCircumference;
  
  // Generate SVG
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${SVG_WIDTH}" height="${SVG_HEIGHT}" xmlns="http://www.w3.org/2000/svg" role="img">
  <title>GitHub Stats for ${userData.login}</title>
  
  <defs>
    <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${t.bg[0]};stop-opacity:1"/>
      <stop offset="100%" style="stop-color:${t.bg[1]};stop-opacity:1"/>
    </linearGradient>
    
    <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${t.gradient1};stop-opacity:1"/>
      <stop offset="100%" style="stop-color:${t.gradient2};stop-opacity:1"/>
    </linearGradient>
    
    <linearGradient id="rank-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${rankInfo.color};stop-opacity:1"/>
      <stop offset="100%" style="stop-color:${rankInfo.color};stop-opacity:0.6"/>
    </linearGradient>
    
    <linearGradient id="weekend-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${weekendBadge.color};stop-opacity:1"/>
      <stop offset="100%" style="stop-color:${weekendBadge.color};stop-opacity:0.6"/>
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
    
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    
    <filter id="glow-strong">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    
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
    <symbol id="icon-issue" viewBox="0 0 16 16">
      ${ICONS.issue}
    </symbol>
  </defs>
  
  <!-- Background -->
  <rect width="${SVG_WIDTH}" height="${SVG_HEIGHT}" fill="url(#bg-gradient)"/>
  
  <!-- Floating particles -->
  ${particles.map(p => `<circle cx="${p.x}" cy="${p.y}" r="${p.r}" fill="${t.accent}" opacity="${p.opacity}"/>`).join('\n  ')}
  
  <!-- Rank watermark -->
  <text x="${SVG_WIDTH/2}" y="${SVG_HEIGHT/2}" font-size="180" font-weight="900" fill="${t.border}" opacity="0.03" text-anchor="middle" dominant-baseline="middle">${rankInfo.rank}</text>
  
  <!-- Main container -->
  <rect x="10" y="10" width="${SVG_WIDTH - 20}" height="${SVG_HEIGHT - 20}" rx="15" fill="${t.container}" fill-opacity="0.8" stroke="${t.border}" stroke-width="2" filter="url(#shadow)"/>
  
  <!-- Identity Card (Enhanced - Taller) -->
  <g transform="translate(30, 30) rotate(${rotations[0]}, 125, 60)">
    <rect width="250" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="250" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="30" font-size="14" font-weight="700" fill="${t.text}">👤 Identity</text>
    <text x="15" y="58" font-size="18" font-weight="800" fill="${t.accent}">${userData.name || userData.login}</text>
    <text x="15" y="78" font-size="12" fill="${t.textSec}">@${userData.login}</text>
    <text x="15" y="103" font-size="13" font-weight="600" fill="${t.yellow}">✨ ${persona}</text>
    <g transform="translate(15, 115)">
      <rect width="60" height="20" rx="10" fill="${rankInfo.color}" fill-opacity="0.2" stroke="${rankInfo.color}" stroke-width="1"/>
      <text x="30" y="14" font-size="11" font-weight="800" fill="${rankInfo.color}" text-anchor="middle" filter="url(#glow)">${rankInfo.rank}</text>
    </g>
  </g>
  
  <!-- Streaks Card with Activity Indicator -->
  <g transform="translate(300, 30) rotate(${rotations[1]}, 125, 60)">
    <rect width="250" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="250" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="30" font-size="14" font-weight="700" fill="${t.text}">🔥 Streaks & Activity</text>
    <text x="15" y="55" font-size="12" fill="${t.textSec}">Current: <tspan fill="${t.green}" font-weight="700">${streaks.currentStreak.toLocaleString()}</tspan> days</text>
    <text x="15" y="75" font-size="12" fill="${t.textSec}">Longest: <tspan fill="${t.accent}" font-weight="700">${streaks.longestStreak.toLocaleString()}</tspan> days</text>
    <text x="15" y="95" font-size="11" fill="${t.textSec}">Most active: <tspan fill="${t.yellow}">${streaks.mostActiveDay}</tspan></text>
    <!-- 7-day activity dots -->
    <text x="15" y="115" font-size="10" fill="${t.textSec}">Last 7 days:</text>
    ${streakData.last7Days.map((day, i) => `
      <circle cx="${75 + i * 20}" cy="110" r="5" fill="${day.count > 0 ? t.green : 'none'}" stroke="${day.count > 0 ? t.green : t.textSec}" stroke-width="1.5" opacity="${day.count > 0 ? 1 : 0.3}"/>
    `).join('')}
  </g>
  
  <!-- Weekend Warrior Badge -->
  <g transform="translate(570, 30) rotate(${rotations[2]}, 75, 70)">
    <rect width="150" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="150" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="75" y="28" font-size="12" font-weight="700" fill="${t.text}" text-anchor="middle">Weekend Warrior</text>
    <!-- Circular progress ring -->
    <circle cx="75" cy="85" r="35" fill="none" stroke="${t.border}" stroke-width="6" opacity="0.2"/>
    <circle cx="75" cy="85" r="35" fill="none" stroke="url(#weekend-gradient)" stroke-width="6" 
            stroke-dasharray="${weekendCircumference}" 
            stroke-dashoffset="${weekendDashoffset}"
            stroke-linecap="round"
            transform="rotate(-90 75 85)"
            filter="${weekendPercent >= 40 ? 'url(#glow)' : ''}"/>
    <text x="75" y="85" font-size="20" font-weight="900" fill="${weekendBadge.color}" text-anchor="middle" dominant-baseline="middle">${weekendPercent}%</text>
    <text x="75" y="130" font-size="9" fill="${t.textSec}" text-anchor="middle">${weekendBadge.level} Badge</text>
  </g>
  
  <!-- Core Stats Card with Sparkles -->
  <g transform="translate(740, 30) rotate(${rotations[3]}, 70, 60)">
    <rect width="140" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="140" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="70" y="28" font-size="12" font-weight="700" fill="${t.text}" text-anchor="middle">Core Stats</text>
    <g transform="translate(15, 45)">
      <use href="#icon-commit" width="11" height="11" fill="${COLOR_PALETTE.success}"/>
      <text x="18" y="9" font-size="10" fill="${t.textSec}">Commits</text>
      <text x="18" y="21" font-size="13" fill="${t.text}" font-weight="700" filter="${commits > 100 ? 'url(#glow)' : ''}">${commits.toLocaleString()}</text>
      ${commits > 100 ? `<circle cx="105" cy="18" r="2" fill="${COLOR_PALETTE.success}" opacity="0.6"/>` : ''}
    </g>
    <g transform="translate(15, 75)">
      <use href="#icon-pr" width="11" height="11" fill="${COLOR_PALETTE.primary}"/>
      <text x="18" y="9" font-size="10" fill="${t.textSec}">PRs</text>
      <text x="18" y="21" font-size="13" fill="${t.text}" font-weight="700" filter="${prs > 100 ? 'url(#glow)' : ''}">${prs.toLocaleString()}</text>
      ${prs > 100 ? `<circle cx="70" cy="18" r="2" fill="${COLOR_PALETTE.primary}" opacity="0.6"/>` : ''}
    </g>
    <g transform="translate(15, 105)">
      <use href="#icon-star" width="11" height="11" fill="${COLOR_PALETTE.warning}"/>
      <text x="18" y="9" font-size="10" fill="${t.textSec}">Stars</text>
      <text x="18" y="21" font-size="13" fill="${t.text}" font-weight="700" filter="${stars > 100 ? 'url(#glow)' : ''}">${stars.toLocaleString()}</text>
      ${stars > 100 ? `<circle cx="90" cy="18" r="2" fill="${COLOR_PALETTE.warning}" opacity="0.6"/>` : ''}
    </g>
  </g>
  
  <!-- Contribution Distribution Donut Chart -->
  <g transform="translate(30, 190) rotate(${rotations[4]}, 150, 80)">
    <rect width="300" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="300" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="28" font-size="14" font-weight="700" fill="${t.text}">📊 Contribution Distribution</text>
    
    <!-- Donut chart center -->
    <g transform="translate(80, 90)">
      <circle cx="0" cy="0" r="35" fill="${t.container}" opacity="0.8"/>
      <text x="0" y="-5" font-size="18" font-weight="800" fill="${t.accent}" text-anchor="middle">${totalContributions.toLocaleString()}</text>
      <text x="0" y="10" font-size="9" fill="${t.textSec}" text-anchor="middle">Total</text>
    </g>
    
    <!-- Legend -->
    <g transform="translate(170, 50)">
      <circle cx="0" cy="0" r="4" fill="${COLOR_PALETTE.success}"/>
      <text x="10" y="4" font-size="10" fill="${t.textSec}">Commits: <tspan fill="${t.text}" font-weight="600">${distribution.commits.percent}%</tspan></text>
    </g>
    <g transform="translate(170, 70)">
      <circle cx="0" cy="0" r="4" fill="${COLOR_PALETTE.primary}"/>
      <text x="10" y="4" font-size="10" fill="${t.textSec}">PRs: <tspan fill="${t.text}" font-weight="600">${distribution.prs.percent}%</tspan></text>
    </g>
    <g transform="translate(170, 90)">
      <circle cx="0" cy="0" r="4" fill="${COLOR_PALETTE.warning}"/>
      <text x="10" y="4" font-size="10" fill="${t.textSec}">Reviews: <tspan fill="${t.text}" font-weight="600">${distribution.reviews.percent}%</tspan></text>
    </g>
    <g transform="translate(170, 110)">
      <circle cx="0" cy="0" r="4" fill="${COLOR_PALETTE.danger}"/>
      <text x="10" y="4" font-size="10" fill="${t.textSec}">Issues: <tspan fill="${t.text}" font-weight="600">${distribution.issues.percent}%</tspan></text>
    </g>
  </g>
  
  <!-- Languages Card with Gradient Bars -->
  <g transform="translate(350, 190) rotate(${rotations[5]}, 125, 60)">
    <rect width="250" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="250" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="28" font-size="14" font-weight="700" fill="${t.text}">💻 Top Languages</text>
    ${topLanguages.slice(0, 4).map((lang, i) => {
      const totalRepos = userData.repositories.totalCount;
      const langPercent = totalRepos > 0 ? Math.round((lang[1].count / totalRepos) * 100) : 0;
      const barWidth = Math.max((langPercent / 100) * 180, 5);
      return `
      <g transform="translate(15, ${50 + i * 22})">
        <circle cx="4" cy="4" r="4" fill="${lang[1].color}"/>
        <text x="15" y="8" font-size="10" fill="${t.textSec}">${lang[0]}</text>
        <rect x="15" y="10" width="${barWidth}" height="6" rx="3" fill="${lang[1].color}" opacity="0.6"/>
        <text x="${20 + barWidth}" y="16" font-size="9" fill="${t.text}" font-weight="600">${langPercent}%</text>
      </g>`;
    }).join('')}
  </g>
  
  <!-- Top Repos (Horizontal Layout) -->
  <g transform="translate(620, 190) rotate(${rotations[6]}, 130, 60)">
    <rect width="260" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="260" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="28" font-size="14" font-weight="700" fill="${t.text}">🏆 Top Repos</text>
    ${topRepos.slice(0, 3).map((repo, i) => `
      <g transform="translate(15, ${48 + i * 30})">
        <use href="#icon-repo" width="11" height="11" fill="${t.accent}"/>
        <text x="18" y="9" font-size="10" fill="${t.text}" font-weight="600">${repo.name.length > 18 ? repo.name.substring(0, 18) + '...' : repo.name}</text>
        <g transform="translate(18, 12)">
          <use href="#icon-star" width="8" height="8" fill="${t.yellow}"/>
          <text x="10" y="7" font-size="9" fill="${t.textSec}">${repo.stargazerCount.toLocaleString()}</text>
          ${repo.primaryLanguage ? `<circle cx="45" cy="4" r="3" fill="${repo.primaryLanguage.color}"/>` : ''}
        </g>
      </g>
    `).join('')}
  </g>
  
  <!-- Footer Section -->
  <g transform="translate(30, 350) rotate(${rotations[7]}, 200, 40)">
    <rect width="400" height="120" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="400" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    
    <!-- Social Stats -->
    <g transform="translate(20, 35)">
      <text x="0" y="0" font-size="12" font-weight="700" fill="${t.text}">👥 Social Stats</text>
      <g transform="translate(0, 20)">
        <use href="#icon-users" width="12" height="12" fill="${t.accent}"/>
        <text x="18" y="10" font-size="11" fill="${t.textSec}">Followers: <tspan fill="${t.text}" font-weight="600">${followers.toLocaleString()}</tspan></text>
      </g>
      <g transform="translate(0, 40)">
        <use href="#icon-users" width="12" height="12" fill="${t.accent2}"/>
        <text x="18" y="10" font-size="11" fill="${t.textSec}">Following: <tspan fill="${t.text}" font-weight="600">${following.toLocaleString()}</tspan></text>
      </g>
      <g transform="translate(0, 60)">
        <use href="#icon-code" width="12" height="12" fill="${t.green}"/>
        <text x="18" y="10" font-size="11" fill="${t.textSec}">Repos: <tspan fill="${t.text}" font-weight="600">${userData.repositories.totalCount}</tspan></text>
      </g>
    </g>
    
    <!-- Account Age -->
    <g transform="translate(200, 35)">
      <text x="0" y="0" font-size="12" font-weight="700" fill="${t.text}">📅 Account Age</text>
      <g transform="translate(0, 25)">
        <use href="#icon-calendar" width="14" height="14" fill="${t.accent}"/>
        <text x="20" y="10" font-size="11" fill="${t.textSec}">Est. <tspan fill="${t.text}" font-weight="700">${accountAgeData.estYear}</tspan></text>
      </g>
      <text x="0" y="60" font-size="22" font-weight="900" fill="${t.accent}" filter="url(#glow)">${accountAgeData.years}+</text>
      <text x="0" y="76" font-size="10" fill="${t.textSec}">years coding</text>
    </g>
  </g>
  
  <!-- Enhanced Rank Score Ring -->
  <g transform="translate(450, 350) rotate(${rotations[8]}, 105, 60)">
    <rect width="210" height="120" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="210" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="105" y="28" font-size="12" font-weight="700" fill="${t.text}" text-anchor="middle">RANK SCORE</text>
    
    <!-- Progress ring -->
    <circle cx="105" cy="80" r="40" fill="none" stroke="${t.border}" stroke-width="7" opacity="0.2"/>
    <circle cx="105" cy="80" r="40" fill="none" stroke="url(#rank-gradient)" stroke-width="7" 
            stroke-dasharray="${circumference}" 
            stroke-dashoffset="${strokeDashoffset}"
            stroke-linecap="round"
            transform="rotate(-90 105 80)"
            filter="url(#glow)"/>
    
    <!-- Award icon and rank -->
    <use href="#icon-award" width="20" height="20" x="95" y="65" fill="${rankInfo.color}" filter="url(#glow)"/>
    <text x="105" y="100" font-size="11" font-weight="900" fill="${rankInfo.color}" text-anchor="middle">${rankInfo.rank}</text>
    <text x="105" y="112" font-size="8" fill="${t.textSec}" text-anchor="middle">${score.toLocaleString()} pts</text>
  </g>
  
  <!-- Title Badge -->
  <g transform="translate(680, 350) rotate(${rotations[9]}, 100, 60)">
    <rect width="200" height="120" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="200" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="100" y="28" font-size="12" font-weight="700" fill="${t.text}" text-anchor="middle">🏅 Title</text>
    <text x="100" y="75" font-size="14" font-weight="800" fill="${rankInfo.color}" text-anchor="middle" filter="url(#glow)">${rankInfo.title}</text>
    <text x="100" y="95" font-size="9" fill="${t.textSec}" text-anchor="middle">Rank: ${rankInfo.rank}</text>
  </g>
  
  <!-- Signature -->
  <text x="${SVG_WIDTH - 10}" y="${SVG_HEIGHT - 10}" font-size="9" fill="${t.textSec}" text-anchor="end" opacity="0.6">Chaotically Beautiful v3.0</text>
</svg>`;
}

// Error SVG generator
function generateErrorSVG(message, theme = 'default') {
  const t = THEMES[theme] || THEMES.default;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${SVG_WIDTH}" height="${SVG_HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${t.bg[0]};stop-opacity:1"/>
      <stop offset="100%" style="stop-color:${t.bg[1]};stop-opacity:1"/>
    </linearGradient>
  </defs>
  <rect width="${SVG_WIDTH}" height="${SVG_HEIGHT}" fill="url(#bg-gradient)"/>
  <rect x="10" y="10" width="${SVG_WIDTH - 20}" height="${SVG_HEIGHT - 20}" rx="15" fill="${t.card}" fill-opacity="0.8" stroke="${t.border}" stroke-width="2"/>
  <text x="${SVG_WIDTH/2}" y="${SVG_HEIGHT/2 - 20}" font-size="24" font-weight="700" fill="${t.text}" text-anchor="middle">⚠️ Error</text>
  <text x="${SVG_WIDTH/2}" y="${SVG_HEIGHT/2 + 20}" font-size="16" fill="${t.textSec}" text-anchor="middle">${message}</text>
</svg>`;
}

// Main handler
export default async function handler(req, res) {
  try {
    // Handle OPTIONS request for CORS
    if (req.method === 'OPTIONS') {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      return res.status(200).end();
    }
    
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
