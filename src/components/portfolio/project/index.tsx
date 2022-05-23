import styles from './project.module.scss'
import sharedStyles from '../../styles/shared.module.scss'

const Project = () => {
    return (
        <div id="project">
            <div className={sharedStyles.wrapper} id={styles.wProject}>
                <div className={sharedStyles.wrapTitle}>
                    <h2 className={sharedStyles.h2}>Projects</h2>
                    <div className={sharedStyles.underlineTop}></div>
                    <div className={sharedStyles.underlineBottom}></div>
                </div>

                <div id={styles.showcaseProj}>
                    <div className={styles.div}>hello</div>
                    <div className={styles.div}>hello</div>
                </div>

                <div id={styles.collapseProj}>
                    <div className={styles.div}>hello</div>
                    <div className={styles.div}>hello</div>
                    <div className={styles.div}>hello</div>
                    <div className={styles.div}>hello</div>
                    <div className={styles.div}>hello</div>
                    <div className={styles.div}>hello</div>
                </div>
                {/* <button>View More</button> */}
            </div>
        </div>
    )
}

export default Project