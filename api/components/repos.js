import { ICONS } from '../utils/icons.js';
import { COLOR_PALETTE } from '../config/colors.js';

export function renderRepos(data, theme, rotation) {
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
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${t.accent}" stroke-width="2">
          ${ICONS.repo}
        </svg>
        <text x="22" y="12" font-size="12" font-weight="600" fill="${t.text}">${repo.name}</text>
        
        <g transform="translate(0, 16)">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="${COLOR_PALETTE.warning}" stroke-width="2">
            ${ICONS.star}
          </svg>
          <text x="16" y="9" font-size="10" fill="${t.textSec}">${repo.stars.toLocaleString()}</text>
          
          <svg x="65" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="${COLOR_PALETTE.purple}" stroke-width="2">
            ${ICONS.fork}
          </svg>
          <text x="81" y="9" font-size="10" fill="${t.textSec}">${repo.forks.toLocaleString()}</text>
        </g>
      </g>`;
  });
  
  return `
  <g transform="translate(30, 370) rotate(${rotation}, 125, 60)">
    <rect width="250" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="250" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="30" font-size="14" font-weight="700" fill="${t.text}">⭐ Top Repositories</text>
    
    ${repoItems}
  </g>`;
}
