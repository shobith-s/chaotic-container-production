import { ICONS } from '../utils/icons.js';

export function renderLanguages(data, theme, rotation) {
  const { languages } = data;
  const t = theme;
  
  if (!languages || languages.length === 0) {
    return '';
  }
  
  const top5 = languages.slice(0, 5);
  
  let languageItems = '';
  top5.forEach((lang, i) => {
    const y = 50 + (i * 18);
    const barWidth = (lang.percentage / 100) * 150;
    
    languageItems += `
      <g transform="translate(15, ${y})">
        <rect width="150" height="12" rx="6" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1"/>
        <rect width="${barWidth}" height="12" rx="6" fill="${lang.color || t.accent}" fill-opacity="0.8"/>
        <text x="158" y="9" font-size="10" fill="${t.textSec}">${lang.name}</text>
        <text x="235" y="9" font-size="10" font-weight="600" fill="${t.text}" text-anchor="end">${lang.percentage.toFixed(1)}%</text>
      </g>`;
  });
  
  return `
  <g transform="translate(590, 200) rotate(${rotation}, 125, 60)">
    <rect width="250" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="250" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="30" font-size="14" font-weight="700" fill="${t.text}">
      <tspan>💻 Top Languages</tspan>
    </text>
    
    ${languageItems}
  </g>`;
}
