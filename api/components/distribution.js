export function renderDistribution(data, theme, rotation) {
  const { last7Days } = data;
  const t = theme;
  
  if (!last7Days || last7Days.length === 0) {
    return '';
  }
  
  const total = last7Days.reduce((sum, d) => sum + (d.contributionCount ?? 0), 0);
  
  if (total === 0) {
    return '';
  }
  
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const colors = ['#f85149', '#fb8500', '#ffb703', '#8ecae6', '#219ebc', '#023047', '#bc6c25'];
  
  let currentAngle = -90;
  const radius = 45;
  const centerX = 125;
  const centerY = 70;
  
  let segments = '';
  let legend = '';
  let legendY = 45;
  
  last7Days.forEach((day, i) => {
    const count = day.contributionCount ?? 0;
    const percentage = (count / total) * 100;
    const angle = (percentage / 100) * 360;
    
    if (count > 0) {
      const startAngle = currentAngle * (Math.PI / 180);
      const endAngle = (currentAngle + angle) * (Math.PI / 180);
      
      const x1 = centerX + radius * Math.cos(startAngle);
      const y1 = centerY + radius * Math.sin(startAngle);
      const x2 = centerX + radius * Math.cos(endAngle);
      const y2 = centerY + radius * Math.sin(endAngle);
      
      const largeArc = angle > 180 ? 1 : 0;
      
      segments += `
        <path d="M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z" 
              fill="${colors[day.weekday % colors.length]}" 
              fill-opacity="0.8" 
              stroke="${t.cardBorder}" 
              stroke-width="1"/>`;
      
      const dayName = days[day.weekday];
      legend += `
        <g transform="translate(160, ${legendY})">
          <circle cx="0" cy="0" r="4" fill="${colors[day.weekday % colors.length]}"/>
          <text x="10" y="4" font-size="10" fill="${t.textSec}">${dayName}: ${count}</text>
        </g>`;
      
      legendY += 15;
      currentAngle += angle;
    }
  });
  
  return `
  <g transform="translate(310, 200) rotate(${rotation}, 125, 60)">
    <rect width="250" height="140" rx="12" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5" filter="url(#shadow)"/>
    <rect width="250" height="3" rx="1.5" fill="url(#accent-gradient)"/>
    <text x="15" y="30" font-size="14" font-weight="700" fill="${t.text}">📈 Last 7 Days</text>
    
    <g transform="translate(10, 25)">
      ${segments}
      <circle cx="${centerX}" cy="${centerY}" r="25" fill="${t.card}"/>
      <text x="${centerX}" y="${centerY}" font-size="14" font-weight="700" fill="${t.accent}" text-anchor="middle" dominant-baseline="middle">${total}</text>
    </g>
    
    ${legend}
  </g>`;
}
