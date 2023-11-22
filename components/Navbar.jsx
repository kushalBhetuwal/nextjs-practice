import Link from "next/link";
import style from './navbar.module.css'
export default function Navbar(){
    return(
        <div>
            <nav className={style.nav}>
            <p>Next.js</p>
                <ul className={style.links}>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/about"><li>About</li></Link>
                    <Link href="/contact"><li>Contact</li></Link>
                </ul>
            </nav>
        </div>
    )
}
