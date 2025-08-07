import List from './pages/List.js';
import Leaderboard from 'data/CrimxinGD.json';
import Roulette from './pages/Roulette.js';

export default [
    { path: '/', component: List },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/roulette', component: Roulette },
];
