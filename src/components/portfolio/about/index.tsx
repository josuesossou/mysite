import sharedStyles from '../../styles/shared.module.scss'
import styles from './about.module.scss'

const About = ({ data } : any) => {
    const text: string = data

    return (
        <section id='about' className={styles.about}>
                {/* <div className={sharedStyles.wrapTitle}>
                    <h2 className={sharedStyles.h2}>About</h2>
                    <div className={sharedStyles.underlineTop}></div>
                    <div className={sharedStyles.underlineBottom}></div>
                </div> */}

            <article>
                {text}
            </article>
        </section>
    )
}

export default About