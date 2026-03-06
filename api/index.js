// ============================================================================
// SECTION 1: CONFIGURATION - THEMES
// ============================================================================
const THEMES = {
  nature: {
    bg: ['#1a1a1a', '#2d2d2d'],
    container: '#1a1a1a',
    border: 'rgba(100, 130, 100, 0.3)',
    card: 'rgba(20, 25, 20, 0.85)',
    cardBorder: 'rgba(100, 130, 100, 0.3)',
    text: '#e8f0e8',
    textSec: '#8a9a8a',
    accent: '#00ffcc',
    accent2: '#7fff7f',
    green: '#7fff7f',
    yellow: '#d29922',
    gradient1: '#ff79c6',
    gradient2: '#bc8cff',
    // Nature-specific colors
    stoneCrack: '#3a3a3a',
    rootBrown: '#3d2914',
    vineGreen: '#2d4a2d',
    mossGreen: '#1e3d1e',
    cardHighlight: 'rgba(0, 255, 200, 0.1)'
  },
  default: {
    bg: ['#0d1117', '#161b22'],
    container: '#0d1117',
    border: 'rgba(255, 255, 255, 0.06)',
    card: 'rgba(22, 27, 34, 0.6)',
    cardBorder: 'rgba(255, 255, 255, 0.08)',
    text: '#e6edf3',
    textSec: '#7d8590',
    accent: '#4a9eff',
    accent2: '#1f6feb',
    green: '#2ea043',
    yellow: '#bf8700',
    gradient1: '#4a9eff',
    gradient2: '#7c3aed'
  },
  dracula: {
    bg: ['#282a36', '#21222c'],
    container: '#282a36',
    border: 'rgba(98, 114, 164, 0.2)',
    card: 'rgba(68, 71, 90, 0.6)',
    cardBorder: 'rgba(98, 114, 164, 0.3)',
    text: '#f8f8f2',
    textSec: '#6272a4',
    accent: '#ff79c6',
    accent2: '#bd93f9',
    green: '#50fa7b',
    yellow: '#f1fa8c',
    gradient1: '#bd93f9',
    gradient2: '#ff79c6'
  },
  nord: {
    bg: ['#2e3440', '#3b4252'],
    container: '#2e3440',
    border: 'rgba(76, 86, 106, 0.3)',
    card: 'rgba(59, 66, 82, 0.6)',
    cardBorder: 'rgba(76, 86, 106, 0.4)',
    text: '#eceff4',
    textSec: '#d8dee9',
    accent: '#88c0d0',
    accent2: '#81a1c1',
    green: '#a3be8c',
    yellow: '#ebcb8b',
    gradient1: '#88c0d0',
    gradient2: '#81a1c1'
  },
  tokyonight: {
    bg: ['#1a1b26', '#16161e'],
    container: '#1a1b26',
    border: 'rgba(65, 72, 104, 0.3)',
    card: 'rgba(36, 40, 59, 0.6)',
    cardBorder: 'rgba(65, 72, 104, 0.4)',
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
    bg: ['#2b213a', '#241b2f'],
    container: '#2b213a',
    border: '#ff7edb',
    card: '#34294f',
    cardBorder: '#ff7edb',
    text: '#fede5d',
    textSec: '#fe4450',
    accent: '#f92aad',
    accent2: '#fe4450',
    green: '#72f1b8',
    yellow: '#fede5d',
    gradient1: '#ff79c6',
    gradient2: '#bc8cff'
  },
  monokai: {
    bg: ['#272822', '#1e1f1c'],
    container: '#272822',
    border: '#75715e',
    card: '#3e3d32',
    cardBorder: '#75715e',
    text: '#f8f8f2',
    textSec: '#75715e',
    accent: '#66d9ef',
    accent2: '#ae81ff',
    green: '#a6e22e',
    yellow: '#f4bf75',
    gradient1: '#ff79c6',
    gradient2: '#bc8cff'
  },
  github_dark: {
    bg: ['#0d1117', '#010409'],
    container: '#0d1117',
    border: 'rgba(255, 255, 255, 0.06)',
    card: 'rgba(22, 27, 34, 0.6)',
    cardBorder: 'rgba(255, 255, 255, 0.08)',
    text: '#e6edf3',
    textSec: '#7d8590',
    accent: '#2f81f7',
    accent2: '#58a6ff',
    green: '#2ea043',
    yellow: '#bf8700',
    gradient1: '#2f81f7',
    gradient2: '#7c3aed'
  },
  catppuccin: {
    bg: ['#1e1e2e', '#181825'],
    container: '#1e1e2e',
    border: 'rgba(108, 112, 134, 0.3)',
    card: 'rgba(49, 50, 68, 0.6)',
    cardBorder: 'rgba(108, 112, 134, 0.4)',
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

// ============================================================================
// SECTION 2: CONFIGURATION - COLORS & RANKS
// ============================================================================
const COLOR_PALETTE = {
  primary: '#58a6ff',
  success: '#3fb950',
  warning: '#d29922',
  danger: '#f85149',
  purple: '#bc8cff',
  cyan: '#39c5cf'
};

const RANKS = {
  'S': { title: 'Top 1%', color: '#ff6b6b' },
  'A+': { title: 'Top 12.5%', color: '#f06595' },
  'A': { title: 'Top 25%', color: '#cc5de8' },
  'A-': { title: 'Top 37.5%', color: '#845ef7' },
  'B+': { title: 'Top 50%', color: '#7950f2' },
  'B': { title: 'Top 62.5%', color: '#4c6ef5' },
  'B-': { title: 'Top 75%', color: '#4dabf7' },
  'C+': { title: 'Top 87.5%', color: '#3bc9db' },
  'C': { title: 'Everyone', color: '#22b8cf' }
};

// ============================================================================
// SECTION 3: SVG ICONS
// ============================================================================
const ICONS = {
  flame: '<path d="M12.83 7.17A4 4 0 0 1 14 10a4 4 0 0 1-8 0 4 4 0 0 1 1.17-2.83L10 4l2.83 3.17z"/>',
  trophy: '<path d="M6 9H3.5a2.5 2.5 0 1 1 0-5H6m6 5h2.5a2.5 2.5 0 1 0 0-5H12M6 9v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9M6 4h8v5H6z"/>',
  star: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
  pr: '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7M6 9v12"/>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  bolt: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  repo: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
  commit: '<circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/>',
  fork: '<circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9M12 12v3"/>',
  sun: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
  award: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
  issue: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
  // New minimal icons for headers
  activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  weekend: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  barChart: '<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',
  pieChart: '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  trendingUp: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>'
};

// ============================================================================
// SECTION 4: GRAPHQL QUERY
// ============================================================================
const USER_QUERY = `
  query($username: String!) {
    user(login: $username) {
      name
      login
      createdAt
      contributionsCollection {
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
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
      repositoriesContributedTo(first: 1, contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
        totalCount
      }
      pullRequests(first: 1) {
        totalCount
      }
      openIssues: issues(states: OPEN) {
        totalCount
      }
      closedIssues: issues(states: CLOSED) {
        totalCount
      }
      followers {
        totalCount
      }
      repositories(first: 100, ownerAffiliations: OWNER, orderBy: {field: STARGAZERS, direction: DESC}) {
        totalCount
        nodes {
          name
          stargazers {
            totalCount
          }
          forkCount
          primaryLanguage {
            name
            color
          }
        }
      }
    }
  }
`;

// ============================================================================
// SECTION 5: GITHUB API FUNCTIONS
// ============================================================================
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
    throw new Error(data.errors[0].message);
  }

  if (!data.data || !data.data.user) {
    throw new Error('User not found');
  }

  return data.data.user;
}

function getLanguageColor(language) {
  const colors = {
    'JavaScript': '#f1e05a',
    'TypeScript': '#3178c6',
    'Python': '#3572A5',
    'Java': '#b07219',
    'Go': '#00ADD8',
    'Rust': '#dea584',
    'C++': '#f34b7d',
    'C': '#555555',
    'C#': '#178600',
    'PHP': '#4F5D95',
    'Ruby': '#701516',
    'Swift': '#F05138',
    'Kotlin': '#A97BFF',
    'Dart': '#00B4AB',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Shell': '#89e051',
    'Jupyter Notebook': '#DA5B0B'
  };

  return colors[language] || '#858585';
}

// ============================================================================
// SECTION 6: CALCULATION FUNCTIONS
// ============================================================================

// Exponential CDF for rank calculation
function exponential_cdf(x) {
  return 1 - 2 ** -x;
}

// Log-normal CDF approximation for rank calculation
function log_normal_cdf(x) {
  return x / (1 + x);
}

// Calculate rank using Anurag Hazra's statistical algorithm
function calculateRank({ all_commits, commits, prs, issues, reviews, stars, followers }) {
  const COMMITS_MEDIAN = all_commits ? 1000 : 250;
  const COMMITS_WEIGHT = 2;
  const PRS_MEDIAN = 50;
  const PRS_WEIGHT = 3;
  const ISSUES_MEDIAN = 25;
  const ISSUES_WEIGHT = 1;
  const REVIEWS_MEDIAN = 2;
  const REVIEWS_WEIGHT = 1;
  const STARS_MEDIAN = 50;
  const STARS_WEIGHT = 4;
  const FOLLOWERS_MEDIAN = 10;
  const FOLLOWERS_WEIGHT = 1;

  const TOTAL_WEIGHT = COMMITS_WEIGHT + PRS_WEIGHT + ISSUES_WEIGHT + REVIEWS_WEIGHT + STARS_WEIGHT + FOLLOWERS_WEIGHT;

  const THRESHOLDS = [1, 12.5, 25, 37.5, 50, 62.5, 75, 87.5, 100];
  const LEVELS = ["S", "A+", "A", "A-", "B+", "B", "B-", "C+", "C"];

  const rank = 1 - (
    COMMITS_WEIGHT * exponential_cdf(commits / COMMITS_MEDIAN) +
    PRS_WEIGHT * exponential_cdf(prs / PRS_MEDIAN) +
    ISSUES_WEIGHT * exponential_cdf(issues / ISSUES_MEDIAN) +
    REVIEWS_WEIGHT * exponential_cdf(reviews / REVIEWS_MEDIAN) +
    STARS_WEIGHT * log_normal_cdf(stars / STARS_MEDIAN) +
    FOLLOWERS_WEIGHT * log_normal_cdf(followers / FOLLOWERS_MEDIAN)
  ) / TOTAL_WEIGHT;

  const level = LEVELS[THRESHOLDS.findIndex((t) => rank * 100 <= t)];
  const percentile = rank * 100;

  return {
    level,
    percentile,
    rank: level,  // For backward compatibility
    title: RANKS[level]?.title || 'Everyone',
    color: RANKS[level]?.color || '#22b8cf'
  };
}

function calculateStreaks(contributionCalendar) {
  const weeks = contributionCalendar?.weeks ?? [];
  const allDays = weeks.flatMap(week => week.contributionDays);

  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;
  let mostActiveDay = { date: '', count: 0 };

  // Calculate current streak (from today backwards)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = allDays.length - 1; i >= 0; i--) {
    const day = allDays[i];
    const dayDate = new Date(day.date);
    dayDate.setHours(0, 0, 0, 0);

    if (day.contributionCount > 0) {
      currentStreak++;
    } else {
      break;
    }
  }

  // Calculate longest streak and most active day
  for (const day of allDays) {
    if (day.contributionCount > 0) {
      tempStreak++;
      longestStreak = Math.max(longestStreak, tempStreak);

      if (day.contributionCount > mostActiveDay.count) {
        mostActiveDay = { date: day.date, count: day.contributionCount };
      }
    } else {
      tempStreak = 0;
    }
  }

  // Last 7 days
  const last7Days = allDays.slice(-7);

  return {
    currentStreak,
    longestStreak,
    mostActiveDay,
    last7Days,
    allDays
  };
}

function calculateWeekendWarrior(days) {
  const weekendDays = days.filter(d => d.weekday === 0 || d.weekday === 6);
  const weekendContributions = weekendDays.reduce((sum, d) => sum + d.contributionCount, 0);
  const totalContributions = days.reduce((sum, d) => sum + d.contributionCount, 0);

  if (totalContributions === 0) return 0;

  return Math.round((weekendContributions / totalContributions) * 100);
}

function getWeekendBadgeLevel(percent) {
  if (percent >= 40) {
    return { level: 'Gold', color: '#ffd700' };
  } else if (percent >= 30) {
    return { level: 'Silver', color: '#c0c0c0' };
  } else if (percent >= 20) {
    return { level: 'Bronze', color: '#cd7f32' };
  }
  return { level: 'None', color: '#666666' };
}

function calculateAccountAge(createdAt) {
  const created = new Date(createdAt);
  const now = new Date();
  const diffYears = (now - created) / (1000 * 60 * 60 * 24 * 365.25);
  const years = Math.floor(diffYears);
  const months = Math.floor((diffYears - years) * 12);

  let displayText = '';
  if (years > 0) {
    displayText = `${years}y ${months}m`;
  } else {
    displayText = `${months}m`;
  }

  return {
    years: diffYears,
    displayText,
    estYear: created.getFullYear()
  };
}

// ============================================================================
// SECTION 7: HELPER FUNCTIONS
// ============================================================================
function seededRandom(seed) {
  let state = seed;
  return function () {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

function generateParticles(username, count, width, height) {
  const seed = username.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const random = seededRandom(seed);

  const particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: random() * width,
      y: random() * height,
      size: 1 + random() * 2,
      opacity: 0.1 + random() * 0.3
    });
  }

  return particles;
}

function assignPersona(stats) {
  const {
    commits = 0,
    prs = 0,
    reviews = 0,
    issues = 0,
    stars = 0
  } = stats;

  // Calculate ratios
  const reviewRatio = prs > 0 ? reviews / prs : 0;
  const prRatio = commits > 0 ? prs / commits : 0;

  // Assign persona based on activity patterns
  if (reviews > 100 && reviewRatio > 0.5) {
    return 'Code Guardian';
  } else if (prs > 500) {
    return 'PR Ninja';
  } else if (commits > 2000) {
    return 'Commit Machine';
  } else if (stars > 1000) {
    return 'Star Collector';
  } else if (issues > 200) {
    return 'Issue Hunter';
  } else if (prRatio > 0.3) {
    return 'Quality Contributor';
  } else if (commits > 500) {
    return 'Active Developer';
  } else if (commits > 100) {
    return 'Regular Contributor';
  } else if (commits > 10) {
    return 'Rising Star';
  } else {
    return 'New Explorer';
  }
}

// ============================================================================
// SECTION 8: SVG RENDERERS — Strict Design System
// ============================================================================

// Design tokens — the ONLY colors permitted in SVG output
const DS = {
  canvas: '#0D1117',
  surface: '#161B22',
  border: '#21262D',
  text: '#E6EDF3',
  muted: '#8B949E',
  blue: '#58A6FF',
  green: '#3FB950',
  violet: '#A371F7',
  amber: '#D29922',
  red: '#F85149',
};

// Grid constants — Fix 9
const GRID = {
  cols: [16, 314, 612],
  rows: [16, 260],
  cardW: 282,
  cardH: 228,
  pad: 20,
};

// formatNum — Fix 5: called on EVERY displayed number
function formatNum(n) {
  if (n == null) return '0';
  n = Number(n);
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return String(n);
}

// Desaturate a hex color by 20% in HSL space — Fix 6
function desaturate(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) { h = s = 0; }
  else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }
  s = Math.max(0, s * 0.8); // reduce saturation by 20%
  // HSL to RGB
  function hue2rgb(p, q, t) { if (t < 0) t += 1; if (t > 1) t -= 1; if (t < 1 / 6) return p + (q - p) * 6 * t; if (t < 1 / 2) return q; if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6; return p; }
  let r2, g2, b2;
  if (s === 0) { r2 = g2 = b2 = l; }
  else { const q = l < 0.5 ? l * (1 + s) : l + s - l * s; const p = 2 * l - q; r2 = hue2rgb(p, q, h + 1 / 3); g2 = hue2rgb(p, q, h); b2 = hue2rgb(p, q, h - 1 / 3); }
  return '#' + [r2, g2, b2].map(v => Math.round(v * 255).toString(16).padStart(2, '0')).join('');
}

// Consistent 16px Lucide-style icon paths — Fix 4
const ICON = {
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  barChart: '<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',
  activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  repo: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
  star: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
  commit: '<circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/>',
  pr: '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7M6 9v12"/>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  issue: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  award: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
};

function icon(name, color) {
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${ICON[name]}</svg>`;
}

function renderCard(col, row) {
  const x = GRID.cols[col];
  const y = GRID.rows[row];
  return `<rect x="${x}" y="${y}" width="${GRID.cardW}" height="${GRID.cardH}" rx="10" fill="${DS.surface}" stroke="${DS.border}" stroke-width="1"/>`;
}

function renderSectionLabel(x, y, iconName, label) {
  return `<g transform="translate(${x}, ${y})">${icon(iconName, DS.muted)}<text x="22" y="12" font-size="11" font-weight="400" fill="${DS.muted}">${label}</text></g>`;
}

// --- Card renderers ---

function renderIdentityCard(data) {
  const { name, login, followers, totalRepos, totalStars } = data;
  const cx = GRID.cols[0];
  const cy = GRID.rows[0];
  const displayName = (name || login).length > 20 ? (name || login).substring(0, 18) + '…' : (name || login);

  return `
  <g>
    ${renderCard(0, 0)}
    <g transform="translate(${cx + GRID.pad}, ${cy + GRID.pad})">
      ${renderSectionLabel(0, 0, 'user', 'IDENTITY')}

      <text x="0" y="48" font-size="28" font-weight="600" fill="${DS.text}">${displayName}</text>
      <text x="0" y="68" font-size="13" font-weight="400" fill="${DS.muted}">@${login}</text>

      <line x1="0" y1="88" x2="242" y2="88" stroke="${DS.border}" stroke-width="1"/>

      <g transform="translate(0, 108)">
        <g>
          ${icon('users', DS.muted)}
          <text x="20" y="12" font-size="15" font-weight="500" fill="${DS.text}">${formatNum(followers)}</text>
          <text x="20" y="26" font-size="10" font-weight="400" fill="${DS.muted}">FOLLOWERS</text>
        </g>
        <g transform="translate(85, 0)">
          ${icon('repo', DS.muted)}
          <text x="20" y="12" font-size="15" font-weight="500" fill="${DS.text}">${formatNum(totalRepos)}</text>
          <text x="20" y="26" font-size="10" font-weight="400" fill="${DS.muted}">REPOS</text>
        </g>
        <g transform="translate(170, 0)">
          ${icon('star', DS.amber)}
          <text x="20" y="12" font-size="15" font-weight="500" fill="${DS.text}">${formatNum(totalStars)}</text>
          <text x="20" y="26" font-size="10" font-weight="400" fill="${DS.muted}">STARS</text>
        </g>
      </g>
    </g>
  </g>`;
}

function renderRankCard(data) {
  const { rankInfo } = data;
  const cx = GRID.cols[1];
  const cy = GRID.rows[0];
  const centerX = GRID.cardW / 2;
  const centerY = GRID.cardH / 2 + 8;

  const radius = 68;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.max(0, Math.min(100, 100 - rankInfo.percentile));
  const offset = circumference - (pct / 100) * circumference;

  return `
  <g>
    ${renderCard(1, 0)}
    <g transform="translate(${cx + GRID.pad}, ${cy + GRID.pad})">
      ${renderSectionLabel(0, 0, 'target', 'OVERALL RANK')}

      <g transform="translate(${centerX - GRID.pad}, ${centerY - GRID.pad})">
        <circle cx="0" cy="0" r="${radius}" fill="none" stroke="${DS.border}" stroke-width="6"/>
        <circle cx="0" cy="0" r="${radius}" fill="none" stroke="${DS.violet}" stroke-width="6"
                stroke-dasharray="${circumference}"
                stroke-dashoffset="${offset}"
                stroke-linecap="round"
                transform="rotate(-90)"/>
        <text x="0" y="-4" font-size="28" font-weight="600" fill="${DS.text}" text-anchor="middle" dominant-baseline="middle">${rankInfo.rank}</text>
        <text x="0" y="22" font-size="11" font-weight="400" fill="${DS.muted}" text-anchor="middle">${rankInfo.title}</text>
      </g>
    </g>
  </g>`;
}

function renderCoreStatsCard(data) {
  const { commits, prs, reviews, issues } = data;
  const cx = GRID.cols[2];
  const cy = GRID.rows[0];
  const innerW = GRID.cardW - 2 * GRID.pad;
  const halfW = (innerW - 10) / 2; // 10px gap between cells

  const stats = [
    { label: 'COMMITS', value: commits, color: DS.green, iconName: 'commit', col: 0, row: 0 },
    { label: 'PRS', value: prs, color: DS.blue, iconName: 'pr', col: 1, row: 0 },
    { label: 'REVIEWS', value: reviews, color: DS.muted, iconName: 'eye', col: 0, row: 1 },
    { label: 'ISSUES', value: issues, color: DS.red, iconName: 'issue', col: 1, row: 1 }
  ];

  let cells = '';
  stats.forEach(s => {
    const sx = s.col * (halfW + 10);
    const sy = 32 + s.row * 90;
    cells += `
      <g transform="translate(${sx}, ${sy})">
        <rect width="${halfW}" height="78" rx="10" fill="${DS.border}" fill-opacity="0.4"/>
        <g transform="translate(12, 16)">
          ${icon(s.iconName, s.color)}
          <text x="20" y="12" font-size="10" font-weight="400" fill="${DS.muted}">${s.label}</text>
        </g>
        <text x="12" y="58" font-size="28" font-weight="600" fill="${s.color}">${formatNum(s.value)}</text>
      </g>`;
  });

  return `
  <g>
    ${renderCard(2, 0)}
    <g transform="translate(${cx + GRID.pad}, ${cy + GRID.pad})">
      ${renderSectionLabel(0, 0, 'barChart', 'CORE STATS')}
      ${cells}
    </g>
  </g>`;
}

function renderStreaksCard(data) {
  const { streaks } = data;
  const cx = GRID.cols[0];
  const cy = GRID.rows[1];

  const current = streaks.currentStreak ?? 0;
  const longest = streaks.longestStreak ?? 0;
  const mostActive = streaks.mostActiveDay ?? { date: '', count: 0 };
  const activeDate = mostActive.date ? new Date(mostActive.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'N/A';

  return `
  <g>
    ${renderCard(0, 1)}
    <g transform="translate(${cx + GRID.pad}, ${cy + GRID.pad})">
      ${renderSectionLabel(0, 0, 'activity', 'ACTIVITY STREAKS')}

      <g transform="translate(0, 40)">
        <text x="0" y="0" font-size="10" font-weight="400" fill="${DS.muted}">CURRENT STREAK</text>
        <g transform="translate(0, 14)">
          ${icon('flame', DS.amber)}
          <text x="22" y="13" font-size="28" font-weight="600" fill="${DS.text}">${formatNum(current)}</text>
          <text x="${22 + String(formatNum(current)).length * 16}" y="13" font-size="13" font-weight="400" fill="${DS.muted}"> days</text>
        </g>
      </g>

      <g transform="translate(0, 108)">
        <text x="0" y="0" font-size="10" font-weight="400" fill="${DS.muted}">LONGEST STREAK</text>
        <g transform="translate(0, 14)">
          ${icon('award', DS.amber)}
          <text x="22" y="13" font-size="28" font-weight="600" fill="${DS.text}">${formatNum(longest)}</text>
          <text x="${22 + String(formatNum(longest)).length * 16}" y="13" font-size="13" font-weight="400" fill="${DS.muted}"> days</text>
        </g>
      </g>

      <g transform="translate(0, 172)">
        ${icon('calendar', DS.blue)}
        <text x="22" y="12" font-size="11" font-weight="400" fill="${DS.muted}">Most Active:</text>
        <text x="100" y="12" font-size="13" font-weight="400" fill="${DS.blue}">${activeDate}</text>
      </g>
    </g>
  </g>`;
}

function renderLanguagesCard(data) {
  const { languages } = data;
  const cx = GRID.cols[1];
  const cy = GRID.rows[1];
  const barTrackW = 242; // cardW - 2*pad

  if (!languages || languages.length === 0) {
    return `<g>${renderCard(1, 1)}
      <g transform="translate(${cx + GRID.pad}, ${cy + GRID.pad})">
        ${renderSectionLabel(0, 0, 'code', 'TOP LANGUAGES')}
        <text x="${GRID.cardW / 2 - GRID.pad}" y="${GRID.cardH / 2}" font-size="13" font-weight="400" fill="${DS.muted}" text-anchor="middle">No language data</text>
      </g>
    </g>`;
  }

  const top4 = languages.slice(0, 4);
  let items = '';
  top4.forEach((lang, i) => {
    const ly = 40 + (i * 44);
    const barW = Math.max(2, (lang.percentage / 100) * barTrackW);
    const displayName = lang.name.length > 14 ? lang.name.substring(0, 12) + '…' : lang.name;
    const barColor = desaturate(lang.color || DS.blue);

    items += `
      <g transform="translate(0, ${ly})">
        <text x="0" y="0" font-size="13" font-weight="400" fill="${DS.text}">${displayName}</text>
        <text x="242" y="0" font-size="13" font-weight="400" fill="${DS.muted}" text-anchor="end">${lang.percentage.toFixed(0)}%</text>
        <g transform="translate(0, 8)">
          <rect width="${barTrackW}" height="8" rx="4" fill="${DS.border}"/>
          <rect width="${barW}" height="8" rx="4" fill="${barColor}"/>
        </g>
      </g>`;
  });

  return `
  <g>
    ${renderCard(1, 1)}
    <g transform="translate(${cx + GRID.pad}, ${cy + GRID.pad})">
      ${renderSectionLabel(0, 0, 'code', 'TOP LANGUAGES')}
      ${items}
    </g>
  </g>`;
}

function renderReposCard(data) {
  const { repos } = data;
  const cx = GRID.cols[2];
  const cy = GRID.rows[1];

  if (!repos || repos.length === 0) {
    return `<g>${renderCard(2, 1)}
      <g transform="translate(${cx + GRID.pad}, ${cy + GRID.pad})">
        ${renderSectionLabel(0, 0, 'repo', 'TOP REPOSITORIES')}
        <text x="${GRID.cardW / 2 - GRID.pad}" y="${GRID.cardH / 2}" font-size="13" font-weight="400" fill="${DS.muted}" text-anchor="middle">No repositories</text>
      </g>
    </g>`;
  }

  const top3 = repos.slice(0, 3);
  let items = '';
  top3.forEach((repo, i) => {
    const ry = 38 + (i * 52); // Fix 8: 52px pitch
    const repoName = repo.name.length > 22 ? repo.name.substring(0, 20) + '…' : repo.name;
    const dotColor = repo.langColor || DS.muted;

    items += `
      <g transform="translate(0, ${ry})">
        <circle cx="3" cy="8" r="3" fill="${dotColor}"/>
        <text x="14" y="12" font-size="13" font-weight="400" fill="${DS.text}">${repoName}</text>
        <g transform="translate(222, 0)">
          ${icon('star', DS.amber)}
          <text x="18" y="12" font-size="13" font-weight="400" fill="${DS.amber}">${formatNum(repo.stars)}</text>
        </g>
        ${i < top3.length - 1 ? `<line x1="0" y1="32" x2="242" y2="32" stroke="${DS.border}" stroke-width="1"/>` : ''}
      </g>`;
  });

  return `
  <g>
    ${renderCard(2, 1)}
    <g transform="translate(${cx + GRID.pad}, ${cy + GRID.pad})">
      ${renderSectionLabel(0, 0, 'repo', 'TOP REPOSITORIES')}
      ${items}
    </g>
  </g>`;
}

// ============================================================================
// SECTION 9: MAIN SVG GENERATOR
// ============================================================================
function generateSVG(userData, themeName = 'default', chaos = 3, customRepos = null, includeAllCommits = false) {
  // NOTE: themes are preserved for future use but the SVG now uses the strict DS palette
  // Extract data
  const contributions = userData.contributionsCollection;
  const commits = contributions?.totalCommitContributions ?? 0;
  const prs = includeAllCommits ? (userData.pullRequests?.totalCount ?? 0) : (contributions?.totalPullRequestContributions ?? 0);
  const reviews = contributions?.totalPullRequestReviewContributions ?? 0;
  const issuesOpened = contributions?.totalIssueContributions ?? 0;
  const totalIssues = includeAllCommits ? ((userData.openIssues?.totalCount ?? 0) + (userData.closedIssues?.totalCount ?? 0)) : issuesOpened;
  const followers = userData.followers?.totalCount ?? 0;
  const totalRepos = userData.repositories?.totalCount ?? 0;

  // Calculate total stars
  const totalStars = userData.repositories?.nodes?.reduce((sum, r) => sum + (r.stargazers?.totalCount ?? 0), 0) ?? 0;

  // Calculate rank
  const rankInfo = calculateRank({
    all_commits: includeAllCommits,
    commits, prs, issues: totalIssues, reviews, stars: totalStars, followers
  });

  // Calculate streaks
  const streaks = calculateStreaks(contributions?.contributionCalendar);

  // Languages
  const languageMap = new Map();
  userData.repositories?.nodes?.forEach(repo => {
    if (repo.primaryLanguage) {
      const lang = repo.primaryLanguage.name;
      languageMap.set(lang, (languageMap.get(lang) || 0) + 1);
    }
  });

  const totalLangRepos = Array.from(languageMap.values()).reduce((sum, count) => sum + count, 0);
  const languages = Array.from(languageMap.entries())
    .map(([name, count]) => ({
      name, count,
      percentage: (count / totalLangRepos) * 100,
      color: getLanguageColor(name)
    }))
    .sort((a, b) => b.count - a.count);

  // Repos
  let repoNodes = userData.repositories?.nodes ?? [];
  if (customRepos && customRepos.length > 0) {
    repoNodes = repoNodes.filter(r => customRepos.includes(r.name));
  }

  const repos = repoNodes
    .map(r => ({
      name: r.name,
      stars: r.stargazers?.totalCount ?? 0,
      forks: r.forkCount ?? 0,
      langColor: r.primaryLanguage?.color || DS.muted
    }))
    .sort((a, b) => b.stars - a.stars);

  // Build data object
  const data = {
    name: userData.name,
    login: userData.login,
    rankInfo, streaks, commits, prs, reviews,
    issues: totalIssues, languages, repos,
    followers, totalRepos, totalStars
  };

  // Assemble SVG — no filters, no gradients, no defs needed
  return `
<svg width="900" height="500" viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg" font-family="'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif">
  <rect width="900" height="500" fill="${DS.canvas}"/>
  ${renderIdentityCard(data)}
  ${renderRankCard(data)}
  ${renderCoreStatsCard(data)}
  ${renderStreaksCard(data)}
  ${renderLanguagesCard(data)}
  ${renderReposCard(data)}
</svg>`.trim();
}

function generateErrorSVG(message, themeName = 'default') {
  return `
<svg width="900" height="500" viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg" font-family="'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif">
  <rect width="900" height="500" fill="${DS.canvas}"/>
  <g transform="translate(450, 250)">
    <rect x="-200" y="-80" width="400" height="160" rx="10" fill="${DS.surface}" stroke="${DS.border}" stroke-width="1"/>
    ${icon('issue', DS.red).replace('width="16" height="16"', 'width="32" height="32" x="-16" y="-50"')}
    <text x="0" y="10" font-size="15" font-weight="500" text-anchor="middle" fill="${DS.text}">Error</text>
    <text x="0" y="36" font-size="13" font-weight="400" text-anchor="middle" fill="${DS.muted}">${message}</text>
  </g>
</svg>`.trim();
}

// ============================================================================
// SECTION 12: MAIN HANDLER
// ============================================================================
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Parse query params
  const url = new URL(req.url, `http://${req.headers.host}`);
  const username = url.searchParams.get('username');
  const theme = url.searchParams.get('theme') || 'default';
  const chaos = parseInt(url.searchParams.get('chaos') || '3', 10);
  const reposParam = url.searchParams.get('repos');
  const customRepos = reposParam ? reposParam.split(',').map(r => r.trim()) : null;
  const includeAllCommits = url.searchParams.get('include_all_commits') === 'true';

  // Validate
  if (!username) {
    res.setHeader('Content-Type', 'image/svg+xml');
    return res.status(400).send(generateErrorSVG('Username parameter is required', theme));
  }

  const token = process.env.GH_TOKEN;
  if (!token) {
    res.setHeader('Content-Type', 'image/svg+xml');
    return res.status(500).send(generateErrorSVG('GH_TOKEN not configured', theme));
  }

  try {
    const userData = await fetchGitHubData(username, token);
    const svg = generateSVG(userData, theme, chaos, customRepos, includeAllCommits);

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=14400, s-maxage=14400');
    return res.status(200).send(svg);
  } catch (error) {
    res.setHeader('Content-Type', 'image/svg+xml');
    return res.status(404).send(generateErrorSVG(error.message || 'User not found', theme));
  }
}
