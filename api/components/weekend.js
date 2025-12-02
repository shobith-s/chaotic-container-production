import { ICONS } from '../utils/icons.js';

export function renderWeekend(data, theme, rotation) {
  const { weekendPercent, weekendBadge } = data;
  const t = theme;
  
  if (weekendBadge.level === 'None') {
    return '';
  }
  
  return `
  <g transform="translate(590, 30) rotate(${rotation}, 125, 60)">
    <rect width="250" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="250" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="30" font-size="14" font-weight="700" fill="${t.text}">🏆 Weekend Warrior</text>
    
    <g transform="translate(90, 50)">
      <circle cx="0" cy="0" r="35" fill="${weekendBadge.color}" fill-opacity="0.2" stroke="${weekendBadge.color}" stroke-width="2"/>
      <svg x="-12" y="-12" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${weekendBadge.color}" stroke-width="2">
        ${ICONS.award}
      </svg>
    </g>
    
    <text x="125" y="95" font-size="18" font-weight="800" fill="${weekendBadge.color}" text-anchor="middle">${weekendPercent}%</text>
    <text x="125" y="112" font-size="12" fill="${t.textSec}" text-anchor="middle">${weekendBadge.level} Badge</text>
    <text x="125" y="130" font-size="10" fill="${t.textSec}" text-anchor="middle">Weekend Contributions</text>
  </g>`;
}
