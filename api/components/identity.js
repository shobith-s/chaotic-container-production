export function renderIdentity(data, theme, rotation) {
  const { name, login, persona, rankInfo } = data;
  const t = theme;
  
  return `
  <g transform="translate(30, 30) rotate(${rotation}, 125, 60)">
    <rect width="250" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="250" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="30" font-size="14" font-weight="700" fill="${t.text}">👤 Identity</text>
    <text x="15" y="58" font-size="18" font-weight="800" fill="${t.accent}">${name || login}</text>
    <text x="15" y="78" font-size="12" fill="${t.textSec}">@${login}</text>
    <text x="15" y="103" font-size="13" font-weight="600" fill="${t.yellow}">✨ ${persona}</text>
    <g transform="translate(15, 115)">
      <rect width="60" height="20" rx="10" fill="${rankInfo.color}" fill-opacity="0.2" stroke="${rankInfo.color}" stroke-width="1"/>
      <text x="30" y="14" font-size="11" font-weight="800" fill="${rankInfo.color}" text-anchor="middle" filter="url(#glow)">${rankInfo.rank}</text>
    </g>
  </g>`;
}
