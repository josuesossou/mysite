import styles from './nav.module.scss'
import Link from 'next/link'
// import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faProjectDiagram, faCode, faUser, faContactCard, faBars } from '@fortawesome/free-solid-svg-icons'
// import { faUser } from '@fortawesome/free-regular-svg-icons'


// const footerObserve: IntersectionObserverCallback = (entries) => {
//     entries.forEach(entry => {
//         const navEle = document.getElementById('navLarge')

//         if (!navEle) return

//         const footerHeight = entry.target.scrollHeight
//         if (entry.isIntersecting) {
//             console.log(footerHeight * 0.0625)
//             navEle.style.bottom = (footerHeight * 0.0625) + 1 + 'em' || '0px'
//         } else {
//             navEle.style.bottom = '1em'
//         }
//     })
// }

const NavLinks = () => {

    const menuControl = () => {
        const navSmall = document.querySelector(`.${styles.navSmall}`)
        if (navSmall) navSmall.classList.toggle(styles.navSmallActive) 
    }

    return (
        <nav id='nav'>
            <ul className={`${styles.navLarge} ${styles.nav}`} id='navLarge'>
                <li><Link href="/#home">Home</Link></li>
                <li><Link href="/#about">About</Link></li>
                <li><Link href="/#project">Projects</Link></li>
                <li><Link href="/#skills">Skills</Link></li>
                <li><Link href="/#contact">Contact</Link></li>
            </ul>
            <ul className={`${styles.navSmall} ${styles.nav}`}>
                <li>
                    <button onClick={menuControl} >
                        <FontAwesomeIcon icon={faBars} size={"1x"}  />
                    </button>
                </li>
                <li>
                    <Link href="/#home">
                        <FontAwesomeIcon icon={faHome} size={"1x"} color={'white'} />
                    </Link>
                </li>
                <li>
                    <Link href="/#about">
                        <FontAwesomeIcon icon={faUser} size={"1x"} color={'white'} />
                    </Link>
                </li>
                <li>
                    <Link href="/#project">
                        <FontAwesomeIcon icon={faProjectDiagram} size={"1x"} color={'white'} />
                    </Link>
                </li>

                <li>
                    <Link href="/#skills">
                        <FontAwesomeIcon icon={faCode} size={"1x"} color={'white'} />
                    </Link>
                </li>

                <li>
                    <Link href="/#skills">
                        <FontAwesomeIcon icon={faContactCard} size={"1x"} color={'white'} />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavLinks


// const checkNavPos = () => {
//     if (!navEle || !footerEle) return
//     const pageH = window.innerHeight + window.scrollY
//     const eleTop = footerEle.offsetTop -25

//     if (pageH >= eleTop) {
//         navEle.style.bottom = pageH - eleTop + 15 + 'px'
//     } else {
//         navEle.style.bottom = '1em'
//     }
// }

// window.addEventListener('scroll', checkNavPos)
    // useEffect(() => {
    //     let footerEle = document.getElementById('footer')
    //     if (!footerEle) return

    //     const observer = new IntersectionObserver(
    //         footerObserve, {
    //             threshold: 0.3
    //         }
    //     )
    //     observer.observe(footerEle)
    // }, [])