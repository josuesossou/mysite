import Logo from '../logo'
import styles from  './main.module.scss'
import sharedStyles from '../../styles/shared.module.scss'

const Main = () => {
    return (
        <div className={styles.header} id="home">
            <div className={sharedStyles.wrapper} id={styles.home}>
                <Logo />
                <div>
                    <h1>Software Engineer | Developer</h1>
                </div>
                <div id={styles.buttonGroup}>
                    <button>Resume</button>
                    <button>Github</button>
                </div>
            </div>
        </div>
    )
}

export default Main