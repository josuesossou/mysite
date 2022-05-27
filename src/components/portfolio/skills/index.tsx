import { Skill } from '../../../lib/types'
import sharedStyles from '../../styles/shared.module.scss'
import styles from './skills.module.scss'

const Skills = ({ data }: any) => {
    const skills: Skill[] = data

    return (
        <div id='skills' style={{ backgroundColor: '#031229' }}>
            <div className={sharedStyles.wrapper} id={styles.skills}>
                {skills.map((skill, ind) => (
                    <div key={ind} className={styles.div}>hello</div>
                ))}
            </div>
        </div>
    )
}

export default Skills