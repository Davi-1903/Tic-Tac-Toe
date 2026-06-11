import { useState } from 'react';
import Header from './components/Header';
import Square from './components/Square';
import Footer from './components/Footer';
import type { Turn } from './interfaces/Types';

export default function TicTacToe() {
    const [game, setGame] = useState(['', '', '', '', '', '', '', '', '']);
    const [turn, setTurn] = useState<Turn>('X');

    function changeTurn(): void {
        setTurn(prev => (prev === 'X' ? 'O' : 'X'));
    }

    function handleMark(id: string): void {
        setGame(prev => prev.map((item, idx) => (idx === +id ? turn : item)));
        changeTurn();
    }

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
            <Footer turn={turn} />
        </div>
    );
}
