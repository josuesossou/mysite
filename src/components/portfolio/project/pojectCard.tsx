import { Project } from "../../../lib/types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import styles from './project.module.scss'
import Image from "next/image"

const ProjectCard = ({ data, isShowCase }: any) => {
    const proj: Project = data

    return (
        <div className={styles.div}>
            <div className={styles.icon}>
                {isShowCase &&<FontAwesomeIcon icon={faStar} size={"lg"} color={'gold'} />}
            </div>

            <div className={styles.img}>
                <Image 
                    layout="fill"
                    objectFit="fill"
                    src="https://josueportfolioimages.s3.amazonaws.com/cdTimeImages/cdt1.png"/>
            </div>
            
            <div className={styles.projDesc}>
                <h3 className={styles.h3}>{proj.title}</h3>
                <div style={{ marginBottom: '.5em' }}>
                    <b><small className={styles.small}>Description</small></b>
                    <article>{proj.description}</article>
                </div>
                <div>
                    <b><small className={styles.small}>Tools Used</small></b>
                    <div>
                        {proj.tools.map((tool, ind) => (
                            <div key={ind}>{tool}</div>
                        ))}
                    </div>
                </div>
                <button className={styles.btn}>View</button>
            </div>
        </div>
    )
}

export default ProjectCard