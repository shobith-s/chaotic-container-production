import { THEMES } from '../config/themes.js';

export function generateErrorSVG(message, themeName = 'default') {
  const theme = THEMES[themeName] || THEMES.default;
  const t = theme;
  
  return `
<svg width="900" height="500" viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${t.bg[0]};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${t.bg[1]};stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="900" height="500" fill="url(#bg-gradient)"/>
  
  <g transform="translate(450, 250)">
    <rect x="-200" y="-80" width="400" height="160" rx="16" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="2"/>
    
    <text x="0" y="-30" font-size="48" text-anchor="middle" fill="${t.accent}">⚠️</text>
    <text x="0" y="10" font-size="16" font-weight="700" text-anchor="middle" fill="${t.text}">Error</text>
    <text x="0" y="40" font-size="13" text-anchor="middle" fill="${t.textSec}">${message}</text>
  </g>
</svg>`.trim();
}
