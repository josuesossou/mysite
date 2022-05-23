import styles from './nav.module.scss'
import Link from 'next/link'
import { useEffect } from 'react'

const NavLinks = () => {
    useEffect(() => {
        let footerEle = document.getElementById('footer')
        let navEle = document.getElementById('nav')

        const checkNavPos = () => {
            if (!navEle || !footerEle) return
            const pageH = window.innerHeight + window.scrollY
            const eleTop = footerEle.offsetTop -25

            if (pageH >= eleTop) {
                navEle.style.bottom = pageH - eleTop + 15 + 'px'
            } else {
                navEle.style.bottom = '1em'
            }
        }

        window.addEventListener('scroll', checkNavPos)
    }, [])

    return (
        <nav className={styles.nav} id='nav'>
            <Link href="/#home"><a className={styles.a}>Home</a></Link>
            <Link href="/#project"><a className={styles.a}>Projects</a></Link>
            <Link href="/#skills"><a className={styles.a}>Skills</a></Link>
            <Link href="/#about"><a className={styles.a}>About</a></Link>
        </nav>
    )
}

export default NavLinks