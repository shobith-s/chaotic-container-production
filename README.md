# 🌪️ GitHub Entropy Stats

> A beautiful, self-hostable GitHub stats card with multiple themes

![Entropy Stats Preview](https://chaotic-container-production.vercel.app/api?username=shobith-s)

## ✨ Features

* **Clean 3x3 Grid Layout:** 9 stat cards displaying identity, streaks, weekend warrior, core stats, last 7 days, top languages, top repositories, social stats, and rank score
* **Statistical Ranking System:** Uses Anurag Hazra's github-readme-stats algorithm with exponential and log-normal CDFs for accurate percentile-based ranking
* **9 Beautiful Themes:** Choose from default, dracula, nord, tokyonight, synthwave, monokai, github_dark, catppuccin, and nature themes
* **Comprehensive Stats:** Commits, PRs, reviews, issues, streaks, languages, repositories, and more
* **High Performance:** Serverless (Vercel) + SVG generation (no Puppeteer/Headless browser needed)
* **Privacy First:** You host it. You use your own Token. No third-party tracking

---

## 🚀 Quick Start (Deploy Your Own)

You can deploy your own instance for free on Vercel. This ensures you use your own API rate limits.

### 1. Click the Deploy Button
This will clone this repository to your GitHub account and setup a project on Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/shobith-s/chaotic-container&env=GH_TOKEN)

*(Note: Replace `YOUR_USERNAME/YOUR_REPO_NAME` in the link above with your actual repo details after you push this code)*

### 2. Configure Environment Variables
During the deployment process, Vercel will ask for a `GH_TOKEN`.

#### How to get a GitHub Token:
1.  Go to **GitHub Settings** > **Developer settings** > **Personal access tokens** > **Tokens (classic)**.
2.  Click **Generate new token (classic)**.
3.  Name it "Entropy Stats".
4.  **Select Scopes:**
    * ✅ `read:user` (Required for profile stats)
    * ✅ `repo` (Required if you want to count private contributions, otherwise optional)
5.  Click **Generate token** and copy the string (starts with `ghp_...`).
6.  Paste this into the Vercel **GH_TOKEN** field.

### 3. Add to your Profile
Once deployed, Vercel will give you a domain (e.g., `https://my-chaos-stats.vercel.app`). Add this to your personal `README.md`:

```markdown
![My Chaos Stats](https://your-vercel-domain.vercel.app/api?username=YOUR_GITHUB_USERNAME)
```

## 📊 Parameters

| Parameter | Description | Default |
|-----------|-------------|---------|
| `username` | GitHub username (required) | - |
| `theme` | Theme name | `default` |
| `include_all_commits` | Count all-time commits (adjusts median to 1000) | `false` |
| `repos` | Custom repos to highlight (comma-separated) | - |

### Usage Examples

```markdown
# Basic usage
![GitHub Stats](https://your-domain.vercel.app/api?username=YOUR_USERNAME)

# With theme
![GitHub Stats](https://your-domain.vercel.app/api?username=YOUR_USERNAME&theme=dracula)

# With all-time commits
![GitHub Stats](https://your-domain.vercel.app/api?username=YOUR_USERNAME&include_all_commits=true)

# With custom repos highlighted
![GitHub Stats](https://your-domain.vercel.app/api?username=YOUR_USERNAME&repos=repo1,repo2,repo3)

# Full example
![GitHub Stats](https://your-domain.vercel.app/api?username=YOUR_USERNAME&theme=tokyonight&include_all_commits=true)
```

## 🎨 Themes

All 9 available themes:

### default
GitHub dark theme
```markdown
![Stats](https://your-domain.vercel.app/api?username=YOUR_USERNAME&theme=default)
```

### dracula
Dracula color scheme
```markdown
![Stats](https://your-domain.vercel.app/api?username=YOUR_USERNAME&theme=dracula)
```

### nord
Nord theme
```markdown
![Stats](https://your-domain.vercel.app/api?username=YOUR_USERNAME&theme=nord)
```

### tokyonight
Tokyo Night theme
```markdown
![Stats](https://your-domain.vercel.app/api?username=YOUR_USERNAME&theme=tokyonight)
```

### synthwave
Synthwave aesthetics
```markdown
![Stats](https://your-domain.vercel.app/api?username=YOUR_USERNAME&theme=synthwave)
```

### monokai
Monokai colors
```markdown
![Stats](https://your-domain.vercel.app/api?username=YOUR_USERNAME&theme=monokai)
```

### github_dark
GitHub official dark
```markdown
![Stats](https://your-domain.vercel.app/api?username=YOUR_USERNAME&theme=github_dark)
```

### catppuccin
Catppuccin theme
```markdown
![Stats](https://your-domain.vercel.app/api?username=YOUR_USERNAME&theme=catppuccin)
```

### nature
Nature theme with organic elements
```markdown
![Stats](https://your-domain.vercel.app/api?username=YOUR_USERNAME&theme=nature)
```

## 🏆 Rank System

The ranking system uses **Anurag Hazra's github-readme-stats algorithm** which employs statistical methods (exponential CDF and log-normal CDF) instead of simple point-based scoring.

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

## 📋 Card Layout

The SVG card displays a clean **3x3 grid layout** with 9 cards:

### Row 1
- **Identity** - Name, username, total contributions
- **Streaks & Activity** - Current streak, longest streak, most active day
- **Weekend Warrior** - Badge level, percentage

### Row 2
- **Core Stats** - Commits, PRs, reviews, issues with icons
- **Last 7 Days** - Donut chart with daily breakdown
- **Top Languages** - Progress bars with percentages

### Row 3
- **Top Repositories** - Top 3 repos
- **Social & Account** - Followers, repos, account age
- **Rank Score** - Circular progress with rank letter

## 📝 License

MIT License - See LICENSE file for details
