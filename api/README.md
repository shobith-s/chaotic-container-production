# API Directory Structure

This directory contains the modular implementation of the GitHub Entropy Stats API.

## 📁 Directory Structure

```
api/
├── index.js              # Main serverless handler
├── config/               # Configuration files
│   ├── themes.js         # 9 theme definitions
│   ├── ranks.js          # Rank system (S to C)
│   └── colors.js         # UI color palette
├── utils/                # Utility functions
│   ├── github.js         # GitHub GraphQL API integration
│   ├── calculations.js   # Rank, streak, and stat calculations
│   ├── helpers.js        # Helper functions (random, particles, persona)
│   ├── languages.js      # Language color mapping
│   └── icons.js          # SVG icon paths
├── components/           # SVG component generators
│   ├── identity.js       # User identity card
│   ├── streaks.js        # Contribution streaks
│   ├── weekend.js        # Weekend warrior badge
│   ├── stats.js          # Core statistics
│   ├── distribution.js   # Last 7 days chart
│   ├── languages.js      # Top languages
│   ├── repos.js          # Top repositories
│   ├── social.js         # Social stats & account age
│   ├── rank.js           # Rank score ring
│   └── title.js          # Header title
└── generators/           # Main generators
    ├── svg.js            # Main SVG generator
    └── error.js          # Error SVG generator
```

## 🎨 Themes

The following 9 themes are available:
- `default` - GitHub dark theme
- `dracula` - Dracula color scheme
- `nord` - Nord theme
- `tokyonight` - Tokyo Night theme
- `synthwave` - Synthwave aesthetics
- `monokai` - Monokai colors
- `github_dark` - GitHub official dark
- `catppuccin` - Catppuccin theme
- `nature` - Nature theme with organic elements

## 🏆 Rank System

The ranking system uses **Anurag Hazra's github-readme-stats algorithm** which employs statistical methods (exponential CDF and log-normal CDF) for accurate percentile-based ranking.

### Rank Levels
- **S** - Top 1%
- **A+** - Top 12.5%
- **A** - Top 25%
- **A-** - Top 37.5%
- **B+** - Top 50%
- **B** - Top 62.5%
- **B-** - Top 75%
- **C+** - Top 87.5%
- **C** - Everyone else

### Ranking Formula

The rank is calculated using weighted percentiles based on:

- **Commits** (weight: 2, median: 250 or 1000 if `include_all_commits=true`)
- **Pull Requests** (weight: 3, median: 50)
- **Issues** (weight: 1, median: 25)
- **Reviews** (weight: 1, median: 2)
- **Stars** (weight: 4, median: 50)
- **Followers** (weight: 1, median: 10)

## 🔧 Usage

### Basic Usage

```
https://your-domain.vercel.app/api?username=GITHUB_USERNAME
```

### Parameters

- `username` (required): GitHub username
- `theme` (optional): Theme name (default: "default")
- `include_all_commits` (optional): Count all-time commits instead of current year only (default: false)
- `repos` (optional): Comma-separated list of repos to highlight

### Examples

```
# Default theme
/api?username=octocat

# With custom theme
/api?username=octocat&theme=dracula

# With all-time commits
/api?username=octocat&include_all_commits=true

# With custom repos
/api?username=octocat&repos=repo1,repo2,repo3

# Full example
/api?username=octocat&theme=tokyonight&include_all_commits=true
```

## 🛠️ Development

### Adding a New Theme

Edit `config/themes.js` and add your theme object:

```javascript
export const THEMES = {
  // ... existing themes
  mytheme: {
    bg: ['#color1', '#color2'],
    container: '#color',
    border: '#color',
    card: '#color',
    cardBorder: '#color',
    text: '#color',
    textSec: '#color',
    accent: '#color',
    accent2: '#color',
    green: '#color',
    yellow: '#color',
    gradient1: '#color',
    gradient2: '#color'
  }
};
```

### Adding a New Component

1. Create a new file in `components/` directory
2. Export a render function that takes `(data, theme, rotation)`
3. Import and use it in `generators/svg.js`

Example:

```javascript
// components/mycomponent.js
export function renderMyComponent(data, theme, rotation) {
  const t = theme;
  return `
    <g transform="translate(x, y) rotate(${rotation}, cx, cy)">
      <!-- Your SVG content here -->
    </g>
  `;
}
```

### Adding a New Rank

Edit `config/ranks.js`:

```javascript
export const RANKS = {
  // ... existing ranks
  'X': { level: 20000, title: 'God Tier', color: '#rainbow' }
};
```

### Adding a New Icon

Edit `utils/icons.js` and add your SVG path:

```javascript
export const ICONS = {
  // ... existing icons
  myicon: '<path d="...your SVG path data..."/>'
};
```

## 📊 Components

Each component is responsible for rendering a specific part of the stats card:

- **identity**: User's name, username, persona, and rank badge
- **streaks**: Current/longest streaks and most active day
- **weekend**: Weekend warrior badge (if earned)
- **stats**: Core stats (commits, PRs, reviews, issues)
- **distribution**: Last 7 days contribution donut chart
- **languages**: Top 5 programming languages
- **repos**: Top 3 repositories by stars
- **social**: Followers, repository count, account age
- **rank**: Rank score progress ring
- **title**: Page header with username

## 🔒 Security

All user inputs are validated and sanitized. The API uses:
- GraphQL for type-safe GitHub API queries
- Server-side rendering (no client-side JavaScript)
- Proper CORS headers
- Environment variable for token storage

## 📝 License

MIT License - See LICENSE file for details
