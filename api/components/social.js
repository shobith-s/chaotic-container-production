import { ICONS } from '../utils/icons.js';
import { COLOR_PALETTE } from '../config/colors.js';

export function renderSocial(data, theme, rotation) {
  const { followers, totalRepos, accountAge } = data;
  const t = theme;
  
  return `
  <g transform="translate(310, 370) rotate(${rotation}, 125, 60)">
    <rect width="250" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="250" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="30" font-size="14" font-weight="700" fill="${t.text}">👥 Social &amp; Account</text>
    
    <g transform="translate(15, 55)">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${COLOR_PALETTE.purple}" stroke-width="2">
        ${ICONS.users}
      </svg>
      <text x="25" y="13" font-size="12" fill="${t.textSec}">Followers:</text>
      <text x="160" y="13" font-size="13" font-weight="700" fill="${COLOR_PALETTE.purple}" text-anchor="end">${followers.toLocaleString()}</text>
    </g>
    
    <g transform="translate(15, 80)">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${COLOR_PALETTE.cyan}" stroke-width="2">
        ${ICONS.repo}
      </svg>
      <text x="25" y="13" font-size="12" fill="${t.textSec}">Repositories:</text>
      <text x="160" y="13" font-size="13" font-weight="700" fill="${COLOR_PALETTE.cyan}" text-anchor="end">${totalRepos.toLocaleString()}</text>
    </g>
    
    <g transform="translate(15, 105)">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${t.accent}" stroke-width="2">
        ${ICONS.calendar}
      </svg>
      <text x="25" y="13" font-size="12" fill="${t.textSec}">Account Age:</text>
      <text x="160" y="13" font-size="13" font-weight="700" fill="${t.accent}" text-anchor="end">${accountAge.displayText}</text>
    </g>
    
    <text x="15" y="130" font-size="10" fill="${t.textSec}">Est. ${accountAge.estYear}</text>
  </g>`;
}
