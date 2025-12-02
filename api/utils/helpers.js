export function seededRandom(seed) {
  let state = seed;
  return function() {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

export function generateParticles(username, count, width, height) {
  const seed = username.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const random = seededRandom(seed);
  
  const particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: random() * width,
      y: random() * height,
      size: 1 + random() * 2,
      opacity: 0.1 + random() * 0.3
    });
  }
  
  return particles;
}

export function assignPersona(stats) {
  const {
    commits = 0,
    prs = 0,
    reviews = 0,
    issues = 0,
    stars = 0
  } = stats;
  
  // Calculate ratios
  const reviewRatio = prs > 0 ? reviews / prs : 0;
  const prRatio = commits > 0 ? prs / commits : 0;
  
  // Assign persona based on activity patterns
  if (reviews > 100 && reviewRatio > 0.5) {
    return 'Code Guardian';
  } else if (prs > 500) {
    return 'PR Ninja';
  } else if (commits > 2000) {
    return 'Commit Machine';
  } else if (stars > 1000) {
    return 'Star Collector';
  } else if (issues > 200) {
    return 'Issue Hunter';
  } else if (prRatio > 0.3) {
    return 'Quality Contributor';
  } else if (commits > 500) {
    return 'Active Developer';
  } else if (commits > 100) {
    return 'Regular Contributor';
  } else if (commits > 10) {
    return 'Rising Star';
  } else {
    return 'New Explorer';
  }
}
