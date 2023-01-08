import { Skill } from '../../../lib/types'
import sharedStyles from '../../styles/shared.module.scss'
import SkillCard from './skillCard'
import styles from './skills.module.scss'

const Skills = ({ data }: any) => {
    const skills: Skill[] = data

    return (
        <div id='skills' className={styles.skills}>
                {skills.map((skill, ind) => (
                    <SkillCard key={ind} data={skill} />
                ))}
        </div>
    )
}

export default Skills