import Logo from '../logo'
import styles from  './main.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Main = () => {
    return (
        <header className={styles.header} id="home">
            <Logo />
            <h1>Software Engineer | Developer</h1>
            <h2>
                Hi, Welcome to my portfolio
            </h2>

            <a>
                <button>Resume</button>
            </a>
            <a href='#contact' aria-flowto='#skills'>
                <button>Contact</button>
            </a>
            <div>
                <a href='https://www.linkedin.com/in/josue-sossou' target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size={"2x"} color={'white'} />
                </a>
                <a href='https://github.com/josuesossou' target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size={"2x"} color={'white'} />
                </a>
            </div>
        </header>
    )
}

export default Main