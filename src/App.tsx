import { useEffect, useState } from 'react';
import JSConfetti from 'js-confetti';
import Header from './components/Header';
import Square from './components/Square';
import Footer from './components/Footer';
import { checkState } from './utils/game';
import type { Turn } from './interfaces/Types';

export default function TicTacToe() {
    const [game, setGame] = useState(['', '', '', '', '', '', '', '', '']);
    const [turn, setTurn] = useState<Turn>('X');
    const jsConfetti = new JSConfetti();
    const situation = checkState(game);

    function changeTurn(): void {
        setTurn(prev => (prev === 'X' ? 'O' : 'X'));
    }

    function handleMark(id: string): void {
        if (situation !== 'PLAYING') return;

        setGame(prev => prev.map((item, idx) => (idx === +id ? turn : item)));
        changeTurn();
    }

    useEffect(() => {
        if (situation === 'X WIN' || situation === 'O WIN')
            jsConfetti.addConfetti({
                emojis: ['Ana Clara'],
                confettiNumber: 10,
            });
    }, [situation]);

    return (
        <div className='wrapper'>
            <Header />
            <main className='grid aspect-square w-full max-w-xl grid-cols-3 gap-4 p-4'>
                {game.map((item, idx) => (
                    <Square
                        key={String(idx)}
                        id={String(idx)}
                        value={item}
                        handleMark={handleMark}
                    />
                ))}
            </main>
            <Footer
                turn={turn}
                situation={situation}
            />
        </div>
    );
}
