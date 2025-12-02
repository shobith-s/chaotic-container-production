export function renderTitle(data, theme) {
  const { login } = data;
  const t = theme;
  
  return `
  <g transform="translate(450, 10)">
    <text x="0" y="0" font-size="16" font-weight="800" fill="${t.accent}" text-anchor="middle">
      <tspan>🌪️ GitHub Entropy Stats</tspan>
    </text>
    <text x="0" y="16" font-size="10" fill="${t.textSec}" text-anchor="middle">@${login}</text>
  </g>`;
}
