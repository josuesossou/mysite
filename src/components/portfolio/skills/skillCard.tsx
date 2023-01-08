import styles from './skills.module.scss'
import Image from "next/image"
import { toolsIcons } from "../../../lib/imageIcons"
import { Skill } from "../../../lib/types"

const SkillCard = ({ data }: any) => {
    const skill: Skill = data

    return (
        <div className={styles.sCard} >
            
            <div className={styles.cardImage}>
                <Image 
                    loading="lazy"
                    layout="fill"
                    objectFit="contain"
                    src={toolsIcons[skill.icon]}   
                />
            </div>
            <h3>{skill.name}</h3>
            
        </div>
    )
}

export default SkillCard