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
    border: '#30363d',
    card: '#161b22',
    cardBorder: '#30363d',
    text: '#e6edf3',
    textSec: '#8b949e',
    accent: '#58a6ff',
    accent2: '#1f6feb',
    green: '#3fb950',
    yellow: '#d29922',
    gradient1: '#ff79c6',
    gradient2: '#bc8cff'
  },
  dracula: {
    bg: ['#282a36', '#21222c'],
    container: '#282a36',
    border: '#6272a4',
    card: '#44475a',
    cardBorder: '#6272a4',
    text: '#f8f8f2',
    textSec: '#6272a4',
    accent: '#ff79c6',
    accent2: '#bd93f9',
    green: '#50fa7b',
    yellow: '#f1fa8c',
    gradient1: '#ff79c6',
    gradient2: '#bc8cff'
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
    gradient1: '#ff79c6',
    gradient2: '#bc8cff'
  },
  tokyonight: {
    bg: ['#1a1b26', '#16161e'],
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
    gradient1: '#ff79c6',
    gradient2: '#bc8cff'
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
    border: '#30363d',
    card: '#161b22',
    cardBorder: '#30363d',
    text: '#e6edf3',
    textSec: '#8b949e',
    accent: '#2f81f7',
    accent2: '#58a6ff',
    green: '#3fb950',
    yellow: '#d29922',
    gradient1: '#2f81f7',
    gradient2: '#bc8cff'
  },
  catppuccin: {
    bg: ['#1e1e2e', '#181825'],
    container: '#1e1e2e',
    border: '#6c7086',
    card: '#313244',
    cardBorder: '#6c7086',
    text: '#cdd6f4',
    textSec: '#a6adc8',
    accent: '#89b4fa',
    accent2: '#cba6f7',
    green: '#a6e3a1',
    yellow: '#f9e2af',
    gradient1: '#ff79c6',
    gradient2: '#bc8cff'
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
  issue: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'
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
  return function() {
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
// SECTION 8: SVG COMPONENT RENDERERS
// ============================================================================
function renderTitle(data, theme) {
  const { login } = data;
  const t = theme;
  
  return `
  <g transform="translate(450, 10)">
    <text x="0" y="0" font-size="16" font-weight="800" fill="${t.accent}" text-anchor="middle">
      <tspan>🌪️ GitHub Entropy Stats</tspan>
    </text>
    <text x="0" y="16" font-size="10" fill="${t.textSec}" text-anchor="middle">@${login}</text>
  </g>`;
}

function renderIdentity(data, theme, rotation) {
  const { name, login, totalContributions } = data;
  const t = theme;
  
  return `
  <g transform="translate(30, 30) rotate(0, 125, 60)">
    <rect width="250" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="250" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="30" font-size="14" font-weight="600" fill="${t.textSec}">Identity</text>
    <text x="15" y="60" font-size="20" font-weight="700" fill="${t.accent}">${name || login}</text>
    <text x="15" y="80" font-size="12" fill="${t.textSec}">@${login}</text>
    <text x="15" y="110" font-size="12" fill="${t.textSec}">Total: ${totalContributions.toLocaleString()} contributions</text>
  </g>`;
}

function renderStreaks(data, theme, rotation) {
  const { streaks, totalContributions } = data;
  const t = theme;
  
  const currentStreak = streaks.currentStreak ?? 0;
  const longestStreak = streaks.longestStreak ?? 0;
  const mostActiveDay = streaks.mostActiveDay ?? { date: '', count: 0 };
  
  const mostActiveDate = mostActiveDay.date ? new Date(mostActiveDay.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'N/A';
  const mostActiveDisplay = mostActiveDay.date ? `${mostActiveDate} (${mostActiveDay.count})` : 'N/A';
  
  return `
  <g transform="translate(310, 30) rotate(0, 125, 60)">
    <rect width="250" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="250" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="30" font-size="14" font-weight="700" fill="${t.text}">🔥 Streaks &amp; Activity</text>
    
    <g transform="translate(15, 50)">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff8c42" stroke="#ff8c42" stroke-width="2">
        ${ICONS.flame}
      </svg>
      <text x="28" y="15" font-size="13" fill="${t.textSec}">Current:</text>
      <text x="170" y="15" font-size="14" font-weight="700" fill="#ff8c42" text-anchor="end">${currentStreak} days</text>
    </g>
    
    <g transform="translate(15, 75)">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="${t.yellow}" stroke="${t.yellow}" stroke-width="2">
        ${ICONS.trophy}
      </svg>
      <text x="28" y="15" font-size="13" fill="${t.textSec}">Longest:</text>
      <text x="170" y="15" font-size="14" font-weight="700" fill="${t.yellow}" text-anchor="end">${longestStreak} days</text>
    </g>
    
    <g transform="translate(15, 100)">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="${t.green}" stroke="${t.green}" stroke-width="2">
        ${ICONS.calendar}
      </svg>
      <text x="28" y="15" font-size="13" fill="${t.textSec}">Most Active:</text>
      <text x="170" y="15" font-size="14" font-weight="700" fill="${t.green}" text-anchor="end">${mostActiveDisplay}</text>
    </g>
    
    <text x="15" y="130" font-size="11" fill="${t.textSec}">Total: ${totalContributions.toLocaleString()} contributions</text>
  </g>`;
}

function renderWeekend(data, theme, rotation) {
  const { weekendPercent, weekendBadge } = data;
  const t = theme;
  
  if (weekendBadge.level === 'None') {
    return '';
  }
  
  return `
  <g transform="translate(590, 30) rotate(0, 125, 60)">
    <rect width="250" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="250" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="30" font-size="14" font-weight="700" fill="${t.text}">🏆 Weekend Warrior</text>
    
    <g transform="translate(15, 70)">
      <text x="0" y="0" font-size="16" font-weight="700" fill="${t.text}">${weekendBadge.level} Badge</text>
      <text x="0" y="22" font-size="18" font-weight="800" fill="${weekendBadge.color}">${weekendPercent}%</text>
    </g>
    
    <g transform="translate(190, 70)">
      <circle cx="0" cy="0" r="30" fill="${weekendBadge.color}" fill-opacity="0.2" stroke="${weekendBadge.color}" stroke-width="2"/>
      <svg x="-12" y="-12" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${weekendBadge.color}" stroke-width="2">
        ${ICONS.award}
      </svg>
    </g>
  </g>`;
}

function renderStats(data, theme, rotation) {
  const { commits, prs, reviews, issues } = data;
  const t = theme;
  
  return `
  <g transform="translate(30, 200) rotate(0, 125, 60)">
    <rect width="250" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="250" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="30" font-size="14" font-weight="700" fill="${t.text}">📊 Core Stats</text>
    
    <g transform="translate(15, 50)">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="${COLOR_PALETTE.success}" stroke="${COLOR_PALETTE.success}" stroke-width="2">
        ${ICONS.commit}
      </svg>
      <text x="25" y="13" font-size="12" fill="${t.textSec}">Commits:</text>
      <text x="160" y="13" font-size="13" font-weight="700" fill="${COLOR_PALETTE.success}" text-anchor="end">${commits.toLocaleString()}</text>
    </g>
    
    <g transform="translate(15, 73)">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="${COLOR_PALETTE.primary}" stroke="${COLOR_PALETTE.primary}" stroke-width="2">
        ${ICONS.pr}
      </svg>
      <text x="25" y="13" font-size="12" fill="${t.textSec}">Pull Requests:</text>
      <text x="160" y="13" font-size="13" font-weight="700" fill="${COLOR_PALETTE.primary}" text-anchor="end">${prs.toLocaleString()}</text>
    </g>
    
    <g transform="translate(15, 96)">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="${COLOR_PALETTE.warning}" stroke="${COLOR_PALETTE.warning}" stroke-width="2">
        ${ICONS.eye}
      </svg>
      <text x="25" y="13" font-size="12" fill="${t.textSec}">Reviews:</text>
      <text x="160" y="13" font-size="13" font-weight="700" fill="${COLOR_PALETTE.warning}" text-anchor="end">${reviews.toLocaleString()}</text>
    </g>
    
    <g transform="translate(15, 119)">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="${COLOR_PALETTE.danger}" stroke="${COLOR_PALETTE.danger}" stroke-width="2">
        ${ICONS.issue}
      </svg>
      <text x="25" y="13" font-size="12" fill="${t.textSec}">Issues:</text>
      <text x="160" y="13" font-size="13" font-weight="700" fill="${COLOR_PALETTE.danger}" text-anchor="end">${issues.toLocaleString()}</text>
    </g>
  </g>`;
}

function renderDistribution(data, theme, rotation) {
  const { last7Days } = data;
  const t = theme;
  
  if (!last7Days || last7Days.length === 0) {
    return '';
  }
  
  const total = last7Days.reduce((sum, d) => sum + (d.contributionCount ?? 0), 0);
  
  if (total === 0) {
    return '';
  }
  
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const colors = ['#f85149', '#fb8500', '#ffb703', '#8ecae6', '#219ebc', '#023047', '#bc6c25'];
  
  let currentAngle = -90;
  const radius = 45;
  const centerX = 125;
  const centerY = 70;
  
  let segments = '';
  let legend = '';
  let legendY = 45;
  
  last7Days.forEach((day, i) => {
    const count = day.contributionCount ?? 0;
    const percentage = (count / total) * 100;
    const angle = (percentage / 100) * 360;
    
    if (count > 0) {
      const startAngle = currentAngle * (Math.PI / 180);
      const endAngle = (currentAngle + angle) * (Math.PI / 180);
      
      const x1 = centerX + radius * Math.cos(startAngle);
      const y1 = centerY + radius * Math.sin(startAngle);
      const x2 = centerX + radius * Math.cos(endAngle);
      const y2 = centerY + radius * Math.sin(endAngle);
      
      const largeArc = angle > 180 ? 1 : 0;
      
      segments += `
        <path d="M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z" 
              fill="${colors[day.weekday % colors.length]}" 
              fill-opacity="0.8" 
              stroke="${t.cardBorder}" 
              stroke-width="1"/>`;
      
      const dayName = days[day.weekday];
      legend += `
        <g transform="translate(160, ${legendY})">
          <circle cx="0" cy="0" r="4" fill="${colors[day.weekday % colors.length]}"/>
          <text x="10" y="4" font-size="10" fill="${t.textSec}">${dayName}: ${count}</text>
        </g>`;
      
      legendY += 15;
      currentAngle += angle;
    }
  });
  
  return `
  <g transform="translate(310, 200) rotate(0, 125, 60)">
    <rect width="250" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="250" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="30" font-size="14" font-weight="700" fill="${t.text}">📈 Last 7 Days</text>
    
    <g transform="translate(10, 25)">
      ${segments}
      <circle cx="${centerX}" cy="${centerY}" r="25" fill="${t.card}"/>
      <text x="${centerX}" y="${centerY}" font-size="14" font-weight="700" fill="${t.accent}" text-anchor="middle" dominant-baseline="middle">${total}</text>
    </g>
    
    ${legend}
  </g>`;
}

function renderLanguages(data, theme, rotation) {
  const { languages } = data;
  const t = theme;
  
  if (!languages || languages.length === 0) {
    return '';
  }
  
  const top5 = languages.slice(0, 5);
  
  let languageItems = '';
  const maxLangNameLength = 15;
  
  top5.forEach((lang, i) => {
    const y = 50 + (i * 18);
    const barWidth = (lang.percentage / 100) * 150;
    const displayName = lang.name.length > maxLangNameLength 
      ? lang.name.substring(0, maxLangNameLength - 3) + '...' 
      : lang.name;
    
    languageItems += `
      <g transform="translate(15, ${y})">
        <rect width="150" height="12" rx="6" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1"/>
        <rect width="${barWidth}" height="12" rx="6" fill="${lang.color || t.accent}" fill-opacity="0.8"/>
        <text x="158" y="9" font-size="10" fill="${t.textSec}">${displayName}</text>
        <text x="235" y="9" font-size="10" font-weight="600" fill="${t.text}" text-anchor="end">${lang.percentage.toFixed(1)}%</text>
      </g>`;
  });
  
  return `
  <g transform="translate(590, 200) rotate(0, 125, 60)">
    <rect width="250" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="250" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="30" font-size="14" font-weight="700" fill="${t.text}">
      <tspan>💻 Top Languages</tspan>
    </text>
    
    ${languageItems}
  </g>`;
}

function renderRepos(data, theme, rotation) {
  const { repos } = data;
  const t = theme;
  
  if (!repos || repos.length === 0) {
    return '';
  }
  
  const top3 = repos.slice(0, 3);
  
  let repoItems = '';
  top3.forEach((repo, i) => {
    const y = 50 + (i * 28);
    
    repoItems += `
      <g transform="translate(15, ${y})">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="${t.accent}" stroke="none">
          ${ICONS.repo}
        </svg>
        <text x="22" y="12" font-size="12" font-weight="600" fill="${t.text}">${repo.name}</text>
      </g>`;
  });
  
  return `
  <g transform="translate(30, 370) rotate(0, 125, 60)">
    <rect width="250" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="250" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="30" font-size="14" font-weight="700" fill="${t.text}">⭐ Top Repositories</text>
    
    ${repoItems}
  </g>`;
}

function renderSocial(data, theme, rotation) {
  const { followers, totalRepos, accountAge } = data;
  const t = theme;
  
  return `
  <g transform="translate(310, 370) rotate(0, 125, 60)">
    <rect width="250" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="250" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="30" font-size="14" font-weight="700" fill="${t.text}">👥 Social &amp; Account</text>
    
    <g transform="translate(15, 55)">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="${COLOR_PALETTE.purple}" stroke="${COLOR_PALETTE.purple}" stroke-width="2">
        ${ICONS.users}
      </svg>
      <text x="25" y="13" font-size="12" fill="${t.textSec}">Followers:</text>
      <text x="160" y="13" font-size="13" font-weight="700" fill="${COLOR_PALETTE.purple}" text-anchor="end">${followers.toLocaleString()}</text>
    </g>
    
    <g transform="translate(15, 80)">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="${COLOR_PALETTE.cyan}" stroke="none">
        ${ICONS.repo}
      </svg>
      <text x="25" y="13" font-size="12" fill="${t.textSec}">Repositories:</text>
      <text x="160" y="13" font-size="13" font-weight="700" fill="${COLOR_PALETTE.cyan}" text-anchor="end">${totalRepos.toLocaleString()}</text>
    </g>
    
    <g transform="translate(15, 105)">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="${t.accent}" stroke="${t.accent}" stroke-width="2">
        ${ICONS.calendar}
      </svg>
      <text x="25" y="13" font-size="12" fill="${t.textSec}">Account Age:</text>
      <text x="160" y="13" font-size="13" font-weight="700" fill="${t.accent}" text-anchor="end">${accountAge.displayText}</text>
    </g>
    
    <text x="15" y="130" font-size="10" fill="${t.textSec}">Est. ${accountAge.estYear}</text>
  </g>`;
}

function renderRank(data, theme, rotation) {
  const { rankInfo } = data;
  const t = theme;
  
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  // Progress ring shows 100 - percentile (so S rank with percentile ~1 shows nearly full circle at ~99%)
  const progressPercentage = 100 - rankInfo.percentile;
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;
  
  return `
  <g transform="translate(590, 370) rotate(0, 125, 60)">
    <rect width="250" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="250" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="30" font-size="14" font-weight="700" fill="${t.text}">🎯 Rank Score</text>
    
    <g transform="translate(125, 85)">
      <circle cx="0" cy="0" r="${radius}" fill="none" stroke="${t.cardBorder}" stroke-width="8"/>
      <circle cx="0" cy="0" r="${radius}" fill="none" stroke="${rankInfo.color}" stroke-width="8" 
              stroke-dasharray="${circumference}" 
              stroke-dashoffset="${strokeDashoffset}"
              stroke-linecap="round"
              transform="rotate(-90)"/>
      <text x="0" y="0" font-size="28" font-weight="800" fill="${rankInfo.color}" text-anchor="middle" dominant-baseline="middle">${rankInfo.rank}</text>
    </g>
  </g>`;
}

// ============================================================================
// SECTION 9: NATURE THEME RENDERERS
// ============================================================================
function renderNatureBackground(theme, chaos) {
  const t = theme;
  
  return `
  <!-- Background with stone texture -->
  <defs>
    <linearGradient id="stone-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${t.bg[0]};stop-opacity:1" />
      <stop offset="50%" style="stop-color:#252525;stop-opacity:1" />
      <stop offset="100%" style="stop-color:${t.bg[1]};stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="900" height="500" fill="url(#stone-bg)"/>
  
  <!-- Stone crack texture -->
  <g opacity="0.15">
    <path d="M0,100 Q200,120 400,90 T900,110" stroke="${t.stoneCrack}" fill="none" stroke-width="1"/>
    <path d="M0,250 Q150,240 300,255 T900,240" stroke="${t.stoneCrack}" fill="none" stroke-width="1"/>
    <path d="M0,380 Q250,390 500,375 T900,385" stroke="${t.stoneCrack}" fill="none" stroke-width="1"/>
    <path d="M100,0 Q120,200 90,400" stroke="${t.stoneCrack}" fill="none" stroke-width="1"/>
    <path d="M450,0 Q440,150 455,300 T450,500" stroke="${t.stoneCrack}" fill="none" stroke-width="1"/>
    <path d="M700,0 Q680,200 710,400" stroke="${t.stoneCrack}" fill="none" stroke-width="1"/>
  </g>`;
}

function renderNatureElements(theme, chaos, username) {
  const t = theme;
  const mossDensity = Math.max(5, chaos * 3);
  
  // Generate deterministic moss positions based on username
  // This ensures the same username always produces the same moss pattern across renders
  const seed = username.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const random = seededRandom(seed);
  
  let mossParticles = '';
  
  // Moss clusters at root intersections
  const mossPositions = [
    { x: 285, y: 210, count: mossDensity },
    { x: 565, y: 210, count: mossDensity },
    { x: 180, y: 350, count: Math.floor(mossDensity * 0.7) },
    { x: 380, y: 350, count: Math.floor(mossDensity * 0.7) },
    { x: 650, y: 350, count: Math.floor(mossDensity * 0.7) }
  ];
  
  mossPositions.forEach(pos => {
    for (let i = 0; i < pos.count; i++) {
      const offsetX = (random() - 0.5) * 20;
      const offsetY = (random() - 0.5) * 20;
      const size = 1 + random() * 1.5;
      const color = random() > 0.5 ? t.accent : t.green;
      const opacity = 0.5 + random() * 0.4;
      
      mossParticles += `
      <circle cx="${pos.x + offsetX}" cy="${pos.y + offsetY}" r="${size}" fill="${color}" opacity="${opacity}" filter="url(#bio-glow)"/>`;
    }
  });
  
  return `
  <g id="nature-elements">
    <!-- Main root system between card rows -->
    <path d="M0,210 C100,205 150,215 200,210 S300,200 350,210 C400,220 450,200 500,210 S600,220 650,210 C700,200 750,215 800,210 L900,210" 
          stroke="${t.rootBrown}" stroke-width="4" fill="none" opacity="0.6"/>
    
    <path d="M0,215 C120,218 180,212 250,215 S350,220 420,215 C500,210 550,220 620,215 S750,210 850,218 L900,218" 
          stroke="${t.rootBrown}" stroke-width="3" fill="none" opacity="0.4"/>
    
    <!-- Horizontal roots between bottom row cards -->
    <path d="M0,350 C80,348 140,352 200,350 S300,345 350,350 C400,355 450,345 500,350 S600,355 650,350 C720,347 780,353 850,350 L900,350" 
          stroke="${t.rootBrown}" stroke-width="3.5" fill="none" opacity="0.5"/>
    
    <!-- Vertical vines between cards (left gap) -->
    <path d="M285,40 Q280,80 285,120 T285,190" 
          stroke="${t.vineGreen}" stroke-width="2.5" fill="none" opacity="0.5"/>
    
    <path d="M288,60 Q295,90 290,130 T287,180" 
          stroke="${t.vineGreen}" stroke-width="2" fill="none" opacity="0.4"/>
    
    <!-- Vertical vines between cards (right gap) -->
    <path d="M565,40 Q560,80 565,120 T565,190" 
          stroke="${t.vineGreen}" stroke-width="2.5" fill="none" opacity="0.5"/>
    
    <path d="M568,60 Q575,90 570,130 T567,180" 
          stroke="${t.vineGreen}" stroke-width="2" fill="none" opacity="0.4"/>
    
    <!-- Small fern leaves in corners -->
    <g transform="translate(15, 465)" opacity="0.5">
      <path d="M0,0 Q5,-8 4,-18 Q8,-14 10,-24 Q6,-16 8,-28" fill="${t.mossGreen}"/>
      <path d="M8,0 Q13,-9 12,-20 Q16,-15 18,-26" fill="${t.mossGreen}"/>
    </g>
    
    <g transform="translate(870, 465)" opacity="0.5">
      <path d="M0,0 Q-5,-8 -4,-18 Q-8,-14 -10,-24 Q-6,-16 -8,-28" fill="${t.mossGreen}"/>
      <path d="M-8,0 Q-13,-9 -12,-20 Q-16,-15 -18,-26" fill="${t.mossGreen}"/>
    </g>
    
    <!-- Bioluminescent moss particles -->
    <g id="moss-particles">
      ${mossParticles}
    </g>
  </g>`;
}

function renderNatureFilters(theme) {
  const t = theme;
  
  return `
  <!-- Bioluminescent glow filter -->
  <filter id="bio-glow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur stdDeviation="3" result="glow"/>
    <feMerge>
      <feMergeNode in="glow"/>
      <feMergeNode in="glow"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
  
  <!-- Card shadow filter -->
  <filter id="card-shadow" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000" flood-opacity="0.5"/>
  </filter>
  
  <!-- Data number glow -->
  <filter id="data-glow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur stdDeviation="1" result="glow"/>
    <feMerge>
      <feMergeNode in="glow"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
  
  <!-- Language progress bar gradient -->
  <linearGradient id="lang-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" style="stop-color:${t.accent};stop-opacity:1" />
    <stop offset="100%" style="stop-color:${t.green};stop-opacity:1" />
  </linearGradient>`;
}

function renderNatureGlassCard(x, y, width, height, theme) {
  const t = theme;
  
  return `
  <g transform="translate(${x}, ${y})" filter="url(#card-shadow)">
    <rect width="${width}" height="${height}" rx="12" 
          fill="${t.card}" 
          stroke="${t.cardBorder}" 
          stroke-width="1"/>
  </g>`;
}

function renderNatureIdentityCard(data, theme) {
  const { name, login, rankInfo } = data;
  const t = theme;
  
  return `
  ${renderNatureGlassCard(30, 40, 240, 150, theme)}
  <g transform="translate(30, 40)">
    <text x="20" y="30" font-size="13" font-weight="600" fill="${t.textSec}">Identity</text>
    <text x="20" y="65" font-size="22" font-weight="700" fill="${t.text}">${name || login}</text>
    <text x="20" y="85" font-size="11" fill="${t.textSec}">@${login}</text>
    
    <!-- Rank badge with glow -->
    <g transform="translate(20, 105)">
      <rect width="80" height="28" rx="14" fill="${rankInfo.color}" fill-opacity="0.15" stroke="${rankInfo.color}" stroke-width="1.5"/>
      <text x="40" y="19" font-size="16" font-weight="800" fill="${rankInfo.color}" text-anchor="middle" filter="url(#data-glow)">${rankInfo.rank}</text>
    </g>
  </g>`;
}

function renderNatureStatRow(label, value, y, color, fontSize = 20) {
  return `
    <g transform="translate(20, ${y})">
      <text x="0" y="0" font-size="11" fill="${color.label}">${label}</text>
      <text x="200" y="0" font-size="${fontSize}" font-weight="700" fill="${color.value}" text-anchor="end" filter="url(#data-glow)">${value}</text>
    </g>`;
}

function renderNatureContributionsCard(data, theme) {
  const { commits, prs, reviews, streaks } = data;
  const t = theme;
  const currentStreak = streaks.currentStreak ?? 0;
  
  return `
  ${renderNatureGlassCard(290, 40, 280, 150, theme)}
  <g transform="translate(290, 40)">
    <text x="20" y="30" font-size="13" font-weight="600" fill="${t.textSec}">Contributions</text>
    
    ${renderNatureStatRow('Commits', commits.toLocaleString(), 50, { label: t.textSec, value: t.accent })}
    ${renderNatureStatRow('Pull Requests', prs.toLocaleString(), 75, { label: t.textSec, value: t.accent })}
    ${renderNatureStatRow('Reviews', reviews.toLocaleString(), 100, { label: t.textSec, value: t.accent })}
    
    <g transform="translate(20, 125)">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${t.green}" stroke-width="2">
        ${ICONS.flame}
      </svg>
      <text x="22" y="12" font-size="11" fill="${t.textSec}">Streak:</text>
      <text x="200" y="12" font-size="16" font-weight="700" fill="${t.green}" text-anchor="end" filter="url(#data-glow)">${currentStreak} days</text>
    </g>
  </g>`;
}

function renderNatureLanguagesCard(data, theme) {
  const { languages } = data;
  const t = theme;
  
  if (!languages || languages.length === 0) {
    return '';
  }
  
  const top4 = languages.slice(0, 4);
  
  let languageBars = '';
  top4.forEach((lang, i) => {
    const y = 50 + (i * 25);
    const barWidth = (lang.percentage / 100) * 180;
    
    languageBars += `
    <g transform="translate(20, ${y})">
      <rect width="180" height="10" rx="5" fill="${t.border}" opacity="0.3"/>
      <rect width="${barWidth}" height="10" rx="5" fill="url(#lang-gradient)"/>
      <text x="0" y="-4" font-size="11" font-weight="400" fill="${t.textSec}">${lang.name}</text>
      <text x="180" y="8" font-size="11" font-weight="700" fill="${t.accent}" text-anchor="end">${lang.percentage.toFixed(1)}%</text>
    </g>`;
  });
  
  return `
  ${renderNatureGlassCard(30, 220, 240, 150, theme)}
  <g transform="translate(30, 220)">
    <text x="20" y="30" font-size="13" font-weight="600" fill="${t.textSec}">Languages</text>
    ${languageBars}
  </g>`;
}

function renderNatureReposCard(data, theme) {
  const { repos } = data;
  const t = theme;
  
  if (!repos || repos.length === 0) {
    return '';
  }
  
  const top3 = repos.slice(0, 3);
  const MAX_REPO_NAME_LENGTH = 28;
  
  let repoItems = '';
  top3.forEach((repo, i) => {
    const y = 50 + (i * 35);
    const repoName = repo.name.length > MAX_REPO_NAME_LENGTH 
      ? repo.name.substring(0, MAX_REPO_NAME_LENGTH) + '...' 
      : repo.name;
    
    repoItems += `
    <g transform="translate(20, ${y})">
      <text x="0" y="0" font-size="11" font-weight="600" fill="${t.text}">${repoName}</text>
      
      <g transform="translate(0, 15)">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="${t.accent}" stroke="none">
          ${ICONS.star}
        </svg>
        <text x="18" y="9" font-size="16" font-weight="700" fill="${t.accent}" filter="url(#data-glow)">${repo.stars.toLocaleString()}</text>
      </g>
    </g>`;
  });
  
  return `
  ${renderNatureGlassCard(290, 220, 280, 150, theme)}
  <g transform="translate(290, 220)">
    <text x="20" y="30" font-size="13" font-weight="600" fill="${t.textSec}">Top Repositories</text>
    ${repoItems}
  </g>`;
}

// ============================================================================
// SECTION 10: MAIN SVG GENERATOR
// ============================================================================
function generateSVG(userData, themeName = 'default', chaos = 3, customRepos = null, includeAllCommits = false) {
  const theme = THEMES[themeName] || THEMES.default;
  const t = theme;
  
  // Extract data
  const contributions = userData.contributionsCollection;
  const commits = contributions?.totalCommitContributions ?? 0;
  const prs = includeAllCommits ? (userData.pullRequests?.totalCount ?? 0) : (contributions?.totalPullRequestContributions ?? 0);
  const reviews = contributions?.totalPullRequestReviewContributions ?? 0;
  const issuesOpened = contributions?.totalIssueContributions ?? 0;
  const totalIssues = includeAllCommits ? ((userData.openIssues?.totalCount ?? 0) + (userData.closedIssues?.totalCount ?? 0)) : issuesOpened;
  const followers = userData.followers?.totalCount ?? 0;
  const totalRepos = userData.repositories?.totalCount ?? 0;
  const totalContributions = contributions?.contributionCalendar?.totalContributions ?? 0;
  
  // Calculate total stars across all repositories
  const totalStars = userData.repositories?.nodes?.reduce((sum, r) => sum + (r.stargazers?.totalCount ?? 0), 0) ?? 0;
  
  // Calculate rank using the new algorithm
  const rankInfo = calculateRank({
    all_commits: includeAllCommits,
    commits: commits,
    prs: prs,
    issues: totalIssues,
    reviews: reviews,
    stars: totalStars,
    followers: followers
  });
  
  // Calculate streaks
  const streaks = calculateStreaks(contributions?.contributionCalendar);
  
  // Weekend warrior
  const weekendPercent = calculateWeekendWarrior(streaks.allDays);
  const weekendBadge = getWeekendBadgeLevel(weekendPercent);
  
  // Account age
  const accountAge = calculateAccountAge(userData.createdAt);
  
  // Persona
  const persona = assignPersona({
    commits,
    prs,
    reviews,
    issues: totalIssues,
    stars: totalStars
  });
  
  // Languages
  const languageMap = new Map();
  userData.repositories?.nodes?.forEach(repo => {
    if (repo.primaryLanguage) {
      const lang = repo.primaryLanguage.name;
      const count = languageMap.get(lang) || 0;
      languageMap.set(lang, count + 1);
    }
  });
  
  const totalLangRepos = Array.from(languageMap.values()).reduce((sum, count) => sum + count, 0);
  const languages = Array.from(languageMap.entries())
    .map(([name, count]) => ({
      name,
      count,
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
      forks: r.forkCount ?? 0
    }))
    .sort((a, b) => b.stars - a.stars);
  
  // Generate particles for chaos effect
  const particles = generateParticles(userData.login, chaos * 10, 900, 500);
  
  // Random rotations for chaos (limited)
  const chaosRotation = Math.min(chaos, 5);
  const rotations = Array.from({ length: 10 }, () => (Math.random() - 0.5) * chaosRotation);
  
  // Build data object
  const data = {
    name: userData.name,
    login: userData.login,
    persona,
    rankInfo,
    streaks,
    totalContributions,
    commits,
    prs,
    reviews,
    issues: totalIssues,
    weekendPercent,
    weekendBadge,
    last7Days: streaks.last7Days,
    languages,
    repos,
    followers,
    totalRepos,
    accountAge
  };
  
  // Generate SVG defs
  const defs = `
  <defs>
    <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${t.bg[0]};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${t.bg[1]};stop-opacity:1" />
    </linearGradient>
    
    <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${t.gradient1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${t.gradient2};stop-opacity:1" />
    </linearGradient>
    
    <filter id="shadow">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-opacity="0.3"/>
    </filter>
    
    <filter id="glow">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>`;
  
  // Generate particles
  const particlesSVG = particles.map(p => 
    `<circle cx="${p.x}" cy="${p.y}" r="${p.size}" fill="${t.accent}" opacity="${p.opacity}"/>`
  ).join('\n    ');
  
  // Generate components
  const components = `
    ${renderTitle(data, theme)}
    ${renderIdentity(data, theme, rotations[0])}
    ${renderStreaks(data, theme, rotations[1])}
    ${renderWeekend(data, theme, rotations[2])}
    ${renderStats(data, theme, rotations[3])}
    ${renderDistribution(data, theme, rotations[4])}
    ${renderLanguages(data, theme, rotations[5])}
    ${renderRepos(data, theme, rotations[6])}
    ${renderSocial(data, theme, rotations[7])}
    ${renderRank(data, theme, rotations[8])}
  `;
  
  // Check if using nature theme
  if (themeName === 'nature') {
    // Nature theme SVG
    const natureDefs = `
    <defs>
      ${renderNatureFilters(theme)}
    </defs>`;
    
    const natureComponents = `
      ${renderNatureIdentityCard(data, theme)}
      ${renderNatureContributionsCard(data, theme)}
      ${renderNatureLanguagesCard(data, theme)}
      ${renderNatureReposCard(data, theme)}
    `;
    
    return `
<svg width="900" height="500" viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg">
  ${natureDefs}
  
  ${renderNatureBackground(theme, chaos)}
  
  ${renderNatureElements(theme, chaos, userData.login)}
  
  <style>
    text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
    }
  </style>
  
  ${natureComponents}
</svg>`.trim();
  }
  
  // Build final SVG (original themes)
  return `
<svg width="900" height="500" viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg">
  ${defs}
  
  <rect width="900" height="500" fill="url(#bg-gradient)"/>
  
  <g opacity="0.5">
    ${particlesSVG}
  </g>
  
  <style>
    text {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
    }
  </style>
  
  ${components}
</svg>`.trim();
}

// ============================================================================
// SECTION 11: ERROR SVG GENERATOR
// ============================================================================
function generateErrorSVG(message, themeName = 'default') {
  const theme = THEMES[themeName] || THEMES.default;
  const t = theme;
  
  return `
<svg width="900" height="500" viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${t.bg[0]};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${t.bg[1]};stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="900" height="500" fill="url(#bg-gradient)"/>
  
  <g transform="translate(450, 250)">
    <rect x="-200" y="-80" width="400" height="160" rx="16" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="2"/>
    
    <text x="0" y="-30" font-size="48" text-anchor="middle" fill="${t.accent}">⚠️</text>
    <text x="0" y="10" font-size="16" font-weight="700" text-anchor="middle" fill="${t.text}">Error</text>
    <text x="0" y="40" font-size="13" text-anchor="middle" fill="${t.textSec}">${message}</text>
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
