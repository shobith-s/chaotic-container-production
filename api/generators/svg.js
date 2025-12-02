import { THEMES } from '../config/themes.js';
import { calculateRank, calculateStreaks, calculateWeekendWarrior, getWeekendBadgeLevel, calculateAccountAge } from '../utils/calculations.js';
import { generateParticles, assignPersona } from '../utils/helpers.js';
import { getLanguageColor } from '../utils/languages.js';
import { renderIdentity } from '../components/identity.js';
import { renderStreaks } from '../components/streaks.js';
import { renderWeekend } from '../components/weekend.js';
import { renderStats } from '../components/stats.js';
import { renderDistribution } from '../components/distribution.js';
import { renderLanguages } from '../components/languages.js';
import { renderRepos } from '../components/repos.js';
import { renderSocial } from '../components/social.js';
import { renderRank } from '../components/rank.js';
import { renderTitle } from '../components/title.js';

export function generateSVG(userData, themeName = 'default', chaos = 3, customRepos = null) {
  const theme = THEMES[themeName] || THEMES.default;
  const t = theme;
  
  // Extract data
  const contributions = userData.contributionsCollection;
  const commits = contributions?.totalCommitContributions ?? 0;
  const prs = contributions?.totalPullRequestContributions ?? 0;
  const reviews = contributions?.totalPullRequestReviewContributions ?? 0;
  const issuesOpened = contributions?.totalIssueContributions ?? 0;
  const totalIssues = (userData.openIssues?.totalCount ?? 0) + (userData.closedIssues?.totalCount ?? 0);
  const followers = userData.followers?.totalCount ?? 0;
  const totalRepos = userData.repositories?.totalCount ?? 0;
  const totalContributions = contributions?.contributionCalendar?.totalContributions ?? 0;
  
  // Calculate score (weighted)
  const score = Math.floor(
    commits * 1 +
    prs * 5 +
    reviews * 10 +
    totalIssues * 2 +
    followers * 0.5
  );
  
  const rankInfo = calculateRank(score);
  
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
    stars: userData.repositories?.nodes?.reduce((sum, r) => sum + (r.stargazers?.totalCount ?? 0), 0) ?? 0
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
  
  // Build final SVG
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
