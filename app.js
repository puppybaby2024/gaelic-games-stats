document.addEventListener('DOMContentLoaded', () => {
    fetchScores('gaa-scores', '/games');
    fetchScores('rte-scores', '/player_stats');
});

async function fetchScores(elementId, endpoint) {
    const response = await fetch(endpoint);
    const scores = await response.json();
    const list = document.getElementById(elementId);

    scores.forEach(score => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>Team 1: ${score.team1}</span>
            <span>Score 1: ${score.score1}</span>
            <span>Team 2: ${score.team2}</span>
            <span>Score 2: ${score.score2}</span>
        `;
        list.appendChild(listItem);
    });
}
