import { fetchGitHubData } from './utils/github.js';
import { generateSVG } from './generators/svg.js';
import { generateErrorSVG } from './generators/error.js';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Parse query params
  const url = new URL(req.url, `http://${req.headers.host}`);
  const username = url.searchParams.get('username');
  const theme = url.searchParams.get('theme') || 'default';
  const chaos = parseInt(url.searchParams.get('chaos') || '3', 10);
  const reposParam = url.searchParams.get('repos');
  const customRepos = reposParam ? reposParam.split(',').map(r => r.trim()) : null;

  // Validate
  if (!username) {
    res.setHeader('Content-Type', 'image/svg+xml');
    return res.status(400).send(generateErrorSVG('Username parameter is required', theme));
  }

  const token = process.env.GH_TOKEN;
  if (!token) {
    res.setHeader('Content-Type', 'image/svg+xml');
    return res.status(500).send(generateErrorSVG('GH_TOKEN not configured', theme));
  }

  try {
    const userData = await fetchGitHubData(username, token);
    const svg = generateSVG(userData, theme, chaos, customRepos);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=14400, s-maxage=14400');
    return res.status(200).send(svg);
  } catch (error) {
    res.setHeader('Content-Type', 'image/svg+xml');
    return res.status(404).send(generateErrorSVG(error.message || 'User not found', theme));
  }
}