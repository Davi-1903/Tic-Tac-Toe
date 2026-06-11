import type { FooterProps } from '../interfaces/Props';

export default function Footer({ turn }: FooterProps) {
    return (
        <footer className='pt-4 text-xl'>
            instead of <strong>{turn}</strong>
        </footer>
    );
}
