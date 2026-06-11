import type { Situation } from '../interfaces/Types';

export function checkState(game: string[]): Situation {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const line of lines) {
        const [a, b, c] = line;
        if (game[a] === game[b] && game[b] === game[c] && game[a] !== '' && game[b] !== '' && game[c] !== '') {
            return game[a] === 'X' ? 'X WIN' : 'O WIN';
        }
    }
    return game.every(square => square !== '') ? 'GAME OVER' : 'PLAYING';
}
