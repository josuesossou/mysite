import sharedStyles from '../../styles/shared.module.scss'
import styles from './about.module.scss'

const About = ({ data } : any) => {
    const text: string = data

    return (
        <section id='about' className={styles.about}>
            <article>
                <p>My name is Josue Sossou</p>
                <br />
                {text}
            </article>
        </section>
    )
}

export default About