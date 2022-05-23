import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getAboutString } from '../../../lib/portfolioHelpers'
import sharedStyles from '../../styles/shared.module.scss'
import styles from './about.module.scss'


const About = ({ aboutText } : InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div id='about'>
            <div className={sharedStyles.wrapper} id={styles.about}>
                <div className={sharedStyles.wrapTitle}>
                    <h2 className={sharedStyles.h2}>About</h2>
                    <div className={sharedStyles.underlineTop}></div>
                    <div className={sharedStyles.underlineBottom}></div>
                </div>

                <article style={{ textAlign: 'center', width: '60%' }}>
                    {aboutText}
                </article>
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps =async () => {
    let text: string = 'hello'
    console.log('helloooo')
    getAboutString()
    return {
        props: {
            aboutText: text
        }
    }
}

export default About