import { Bungee } from 'next/font/google';
const bungee = Bungee({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin']
});

export default function MainNav() {
    return (
        <div className="c-mainNav">
            <p className={`c-mainNav__logo ${bungee.className}`}>
            🤪E<span>moti</span>T<span>alk</span>
            </p>
        </div>
    )
}