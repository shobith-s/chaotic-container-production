export function renderRank(data, theme, rotation) {
  const { rankInfo } = data;
  const t = theme;
  
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const maxScore = 10000;
  const percentage = Math.min((rankInfo.score / maxScore) * 100, 100);
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  return `
  <g transform="translate(590, 370) rotate(${rotation}, 125, 60)">
    <rect width="250" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="250" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="30" font-size="14" font-weight="700" fill="${t.text}">🎯 Rank Score</text>
    
    <g transform="translate(55, 80)">
      <circle cx="0" cy="0" r="${radius}" fill="none" stroke="${t.cardBorder}" stroke-width="8"/>
      <circle cx="0" cy="0" r="${radius}" fill="none" stroke="${rankInfo.color}" stroke-width="8" 
              stroke-dasharray="${circumference}" 
              stroke-dashoffset="${strokeDashoffset}"
              stroke-linecap="round"
              transform="rotate(-90)"/>
      <text x="0" y="-5" font-size="20" font-weight="800" fill="${rankInfo.color}" text-anchor="middle">${rankInfo.rank}</text>
      <text x="0" y="15" font-size="12" fill="${t.textSec}" text-anchor="middle">${rankInfo.score.toLocaleString()}</text>
    </g>
    
    <text x="125" y="75" font-size="11" font-weight="600" fill="${t.text}">${rankInfo.title}</text>
    <text x="125" y="95" font-size="10" fill="${t.textSec}">Next: ${getNextRank(rankInfo.rank)}</text>
    <text x="125" y="110" font-size="9" fill="${t.textSec}">Score to next rank:</text>
    <text x="125" y="125" font-size="11" font-weight="700" fill="${t.accent}">${getNextRankScore(rankInfo.rank, rankInfo.score).toLocaleString()}</text>
  </g>`;
}

function getNextRank(currentRank) {
  const ranks = ['C-', 'C', 'C+', 'B-', 'B', 'B+', 'A-', 'A', 'A+', 'A++', 'S-', 'S', 'S+'];
  const currentIndex = ranks.indexOf(currentRank);
  if (currentIndex === -1 || currentIndex === ranks.length - 1) {
    return 'MAX';
  }
  return ranks[currentIndex + 1];
}

function getNextRankScore(currentRank, currentScore) {
  const levels = {
    'C-': 25, 'C': 50, 'C+': 100, 'B-': 200, 'B': 300, 'B+': 500,
    'A-': 750, 'A': 1000, 'A+': 1500, 'A++': 2500, 'S-': 5000, 'S': 10000, 'S+': 10000
  };
  
  const nextRank = getNextRank(currentRank);
  if (nextRank === 'MAX') return 0;
  
  return levels[nextRank] - currentScore;
}
