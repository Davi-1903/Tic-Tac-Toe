import type { FooterProps } from '../interfaces/Props';

export default function Footer({ turn, situation }: FooterProps) {
    return (
        <footer className='pt-4 text-xl'>
            {situation === 'PLAYING' ? (
                <span>
                    instead of <strong>{turn}</strong>
                </span>
            ) : (
                <span>{situation}</span>
            )}
        </footer>
    );
}
