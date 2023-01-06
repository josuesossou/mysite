import Logo from '../logo'
import styles from  './main.module.scss'
import sharedStyles from '../../styles/shared.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faGit } from '@fortawesome/free-brands-svg-icons'

const Main = () => {
    return (
        <header className={styles.header} id="home">
            {/* <div className={sharedStyles.wrapper} id={styles.home}> */}
                <Logo />
                {/* <div> */}
                <h1>Software Engineer | Developer</h1>
                <h2>
                    Hi, Welcome to my portfolio
                </h2>
                {/* </div> */}

                {/* <div className={styles.buttonGroup}> */}
                <a>
                    <button 
                        aria-modal={true} 
                        // aria-control='resumePopup'  
                    >Resume</button>
                </a>
                <a href='#skills' aria-flowto='#skills'>
                    <button>Contact</button>
                </a>
                {/* </div> */}
                <div>
                    <a href='https://www.linkedin.com/in/josue-sossou' target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} size={"2x"} color={'white'} />
                    </a>
                    <a href='https://github.com/josuesossou' target='_blank'>
                        <FontAwesomeIcon icon={faGithub} size={"2x"} color={'white'} />
                    </a>
                </div>
            {/* </div> */}
        </header>
    )
}

export default Main