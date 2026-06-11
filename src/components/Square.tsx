import type { SquareProps } from '../interfaces/Props';

export default function Square({ id, value, handleMark }: SquareProps) {
    function mark(id: string): void {
        if (value === '') handleMark(id);
    }

    return (
        <button
            id={id}
            className='grid aspect-square cursor-pointer place-items-center rounded-2xl bg-gray-200 text-6xl font-bold'
            onClick={() => mark(id)}
            role='button'
        >
            {value}
        </button>
    );
}
