import { ICONS } from '../utils/icons.js';

export function renderStreaks(data, theme, rotation) {
  const { streaks, totalContributions } = data;
  const t = theme;
  
  const currentStreak = streaks.currentStreak ?? 0;
  const longestStreak = streaks.longestStreak ?? 0;
  const mostActiveDay = streaks.mostActiveDay ?? { date: '', count: 0 };
  
  const mostActiveDate = mostActiveDay.date ? new Date(mostActiveDay.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'N/A';
  
  return `
  <g transform="translate(310, 30) rotate(${rotation}, 125, 60)">
    <rect width="250" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="250" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="30" font-size="14" font-weight="700" fill="${t.text}">🔥 Streaks &amp; Activity</text>
    
    <g transform="translate(15, 50)">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${t.accent}" stroke-width="2">
        ${ICONS.flame}
      </svg>
      <text x="28" y="15" font-size="13" fill="${t.textSec}">Current:</text>
      <text x="170" y="15" font-size="14" font-weight="700" fill="${t.accent}" text-anchor="end">${currentStreak} days</text>
    </g>
    
    <g transform="translate(15, 75)">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${t.yellow}" stroke-width="2">
        ${ICONS.trophy}
      </svg>
      <text x="28" y="15" font-size="13" fill="${t.textSec}">Longest:</text>
      <text x="170" y="15" font-size="14" font-weight="700" fill="${t.yellow}" text-anchor="end">${longestStreak} days</text>
    </g>
    
    <g transform="translate(15, 100)">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${t.green}" stroke-width="2">
        ${ICONS.calendar}
      </svg>
      <text x="28" y="15" font-size="13" fill="${t.textSec}">Most Active:</text>
      <text x="170" y="15" font-size="14" font-weight="700" fill="${t.green}" text-anchor="end">${mostActiveDate}</text>
    </g>
    
    <text x="15" y="130" font-size="11" fill="${t.textSec}">Total: ${totalContributions.toLocaleString()} contributions</text>
  </g>`;
}
