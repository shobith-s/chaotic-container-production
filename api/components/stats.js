import { ICONS } from '../utils/icons.js';
import { COLOR_PALETTE } from '../config/colors.js';

export function renderStats(data, theme, rotation) {
  const { commits, prs, reviews, issues } = data;
  const t = theme;
  
  return `
  <g transform="translate(30, 200) rotate(${rotation}, 125, 60)">
    <rect width="250" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="250" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="30" font-size="14" font-weight="700" fill="${t.text}">📊 Core Stats</text>
    
    <g transform="translate(15, 50)">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${COLOR_PALETTE.success}" stroke-width="2">
        ${ICONS.commit}
      </svg>
      <text x="25" y="13" font-size="12" fill="${t.textSec}">Commits:</text>
      <text x="160" y="13" font-size="13" font-weight="700" fill="${COLOR_PALETTE.success}" text-anchor="end">${commits.toLocaleString()}</text>
    </g>
    
    <g transform="translate(15, 73)">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${COLOR_PALETTE.primary}" stroke-width="2">
        ${ICONS.pr}
      </svg>
      <text x="25" y="13" font-size="12" fill="${t.textSec}">Pull Requests:</text>
      <text x="160" y="13" font-size="13" font-weight="700" fill="${COLOR_PALETTE.primary}" text-anchor="end">${prs.toLocaleString()}</text>
    </g>
    
    <g transform="translate(15, 96)">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${COLOR_PALETTE.warning}" stroke-width="2">
        ${ICONS.eye}
      </svg>
      <text x="25" y="13" font-size="12" fill="${t.textSec}">Reviews:</text>
      <text x="160" y="13" font-size="13" font-weight="700" fill="${COLOR_PALETTE.warning}" text-anchor="end">${reviews.toLocaleString()}</text>
    </g>
    
    <g transform="translate(15, 119)">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${COLOR_PALETTE.danger}" stroke-width="2">
        ${ICONS.issue}
      </svg>
      <text x="25" y="13" font-size="12" fill="${t.textSec}">Issues:</text>
      <text x="160" y="13" font-size="13" font-weight="700" fill="${COLOR_PALETTE.danger}" text-anchor="end">${issues.toLocaleString()}</text>
    </g>
  </g>`;
}
