# API Directory Structure

This directory contains the modular implementation of the GitHub Entropy Stats API.

## 📁 Directory Structure

```
api/
├── index.js              # Main serverless handler
├── config/               # Configuration files
│   ├── themes.js         # 8 theme definitions
│   ├── ranks.js          # Rank system (C- to S+)
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

The following themes are available:
- `default` - GitHub dark theme
- `dracula` - Dracula color scheme
- `nord` - Nord theme
- `tokyonight` - Tokyo Night theme
- `synthwave` - Synthwave aesthetics
- `monokai` - Monokai colors
- `github_dark` - GitHub official dark
- `catppuccin` - Catppuccin theme

## 🏆 Rank System

Ranks are calculated based on a weighted score:
- Commits: 1 point each
- Pull Requests: 5 points each
- Reviews: 10 points each
- Issues: 2 points each
- Followers: 0.5 points each

### Rank Tiers
- **S+** (10000+): Legendary Contributor
- **S** (5000+): Elite Developer
- **S-** (2500+): Master Coder
- **A++** (1500+): Senior Expert
- **A+** (1000+): Expert Developer
- **A** (750+): Advanced Developer
- **A-** (500+): Skilled Developer
- **B+** (300+): Intermediate Developer
- **B** (200+): Regular Contributor
- **B-** (100+): Active Developer
- **C+** (50+): Growing Developer
- **C** (25+): New Contributor
- **C-** (0+): Beginner

## 🔧 Usage

### Basic Usage

```
https://your-domain.vercel.app/api?username=GITHUB_USERNAME
```

### Parameters

- `username` (required): GitHub username
- `theme` (optional): Theme name (default: "default")
- `chaos` (optional): Chaos level 0-5 (default: 3)
- `repos` (optional): Comma-separated list of repos to highlight

### Examples

```
# Default theme
/api?username=octocat

# With custom theme
/api?username=octocat&theme=dracula

# With chaos level
/api?username=octocat&chaos=5

# With custom repos
/api?username=octocat&repos=repo1,repo2,repo3
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
