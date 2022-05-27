import sharedStyles from '../../styles/shared.module.scss'
import styles from './about.module.scss'

const About = ({ aboutText } : any) => {
    const text: string = aboutText

    return (
        <div id='about'>
            <div className={sharedStyles.wrapper} id={styles.about}>
                <div className={sharedStyles.wrapTitle}>
                    <h2 className={sharedStyles.h2}>About</h2>
                    <div className={sharedStyles.underlineTop}></div>
                    <div className={sharedStyles.underlineBottom}></div>
                </div>

                <article style={{ textAlign: 'center', width: '60%' }}>
                    {text}
                </article>
            </div>
        </div>
    )
}

export default About