import logoImg from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import MainHeaderBackground from './main-header-background'
import classes from './main-header.module.css'

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="A plate with food" priority />
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link  href="/meals">Browse meals</Link>
                        </li>
                        <li>
                            <Link href="/community">Foodie Community</Link>
                        </li>
                    </ul>
                </nav>
                
            </header>
        </>
    )
}