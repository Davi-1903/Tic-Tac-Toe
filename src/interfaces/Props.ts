import type { Situation, Turn } from './Types';

export interface SquareProps {
    id: string;
    value: string;
    handleMark: (id: string) => void;
}

export interface FooterProps {
    turn: Turn;
    situation: Situation;
}
