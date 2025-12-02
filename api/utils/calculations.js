import { RANKS } from '../config/ranks.js';

export function calculateRank(score) {
  const ranks = Object.entries(RANKS).sort((a, b) => b[1].level - a[1].level);
  
  for (const [rank, data] of ranks) {
    if (score >= data.level) {
      return {
        rank,
        title: data.title,
        color: data.color,
        level: data.level,
        score
      };
    }
  }
  
  return {
    rank: 'C-',
    title: RANKS['C-'].title,
    color: RANKS['C-'].color,
    level: 0,
    score
  };
}

export function calculateStreaks(contributionCalendar) {
  const weeks = contributionCalendar?.weeks ?? [];
  const allDays = weeks.flatMap(week => week.contributionDays);
  
  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;
  let mostActiveDay = { date: '', count: 0 };
  
  // Calculate current streak (from today backwards)
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  for (let i = allDays.length - 1; i >= 0; i--) {
    const day = allDays[i];
    const dayDate = new Date(day.date);
    dayDate.setHours(0, 0, 0, 0);
    
    if (day.contributionCount > 0) {
      currentStreak++;
    } else {
      // Stop at first day without contributions
      break;
    }
  }
  
  // Calculate longest streak and most active day
  for (const day of allDays) {
    if (day.contributionCount > 0) {
      tempStreak++;
      longestStreak = Math.max(longestStreak, tempStreak);
      
      if (day.contributionCount > mostActiveDay.count) {
        mostActiveDay = { date: day.date, count: day.contributionCount };
      }
    } else {
      tempStreak = 0;
    }
  }
  
  // Last 7 days
  const last7Days = allDays.slice(-7);
  
  return {
    currentStreak,
    longestStreak,
    mostActiveDay,
    last7Days,
    allDays
  };
}

export function calculateWeekendWarrior(days) {
  const weekendDays = days.filter(d => d.weekday === 0 || d.weekday === 6);
  const weekendContributions = weekendDays.reduce((sum, d) => sum + d.contributionCount, 0);
  const totalContributions = days.reduce((sum, d) => sum + d.contributionCount, 0);
  
  if (totalContributions === 0) return 0;
  
  return Math.round((weekendContributions / totalContributions) * 100);
}

export function getWeekendBadgeLevel(percent) {
  if (percent >= 40) {
    return { level: 'Gold', color: '#ffd700' };
  } else if (percent >= 30) {
    return { level: 'Silver', color: '#c0c0c0' };
  } else if (percent >= 20) {
    return { level: 'Bronze', color: '#cd7f32' };
  }
  return { level: 'None', color: '#666666' };
}

export function calculateAccountAge(createdAt) {
  const created = new Date(createdAt);
  const now = new Date();
  const diffYears = (now - created) / (1000 * 60 * 60 * 24 * 365.25);
  const years = Math.floor(diffYears);
  const months = Math.floor((diffYears - years) * 12);
  
  let displayText = '';
  if (years > 0) {
    displayText = `${years}y ${months}m`;
  } else {
    displayText = `${months}m`;
  }
  
  return {
    years: diffYears,
    displayText,
    estYear: created.getFullYear()
  };
}
