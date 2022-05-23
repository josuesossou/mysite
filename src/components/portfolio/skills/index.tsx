import sharedStyles from '../../styles/shared.module.scss'
import styles from './skills.module.scss'

const Skills = () => {
    return (
        <div id='skills' style={{ backgroundColor: '#031229' }}>
            <div className={sharedStyles.wrapper} id={styles.skills}>
                <div className={styles.div}>hello</div>
                <div className={styles.div}>hello</div>
                <div className={styles.div}>hello</div>
                <div className={styles.div}>hello</div>
                <div className={styles.div}>hello</div>
                <div className={styles.div}>hello</div>
                <div className={styles.div}>hello</div>
                <div className={styles.div}>hello</div>
            </div>
        </div>
    )
}

export default Skills