import styles from './project.module.scss'
import Image from "next/image"
import { toolsIcons } from "../../../lib/imageIcons"
import { Project } from "../../../lib/types"

const ProjectCard = ({ data, openOverlay }: any) => {
    const project: Project = data

    return (
        <div className={styles.pCard} >
            <div className={styles.cardImage}>
                <Image 
                    alt='Project image'
                    loading="lazy"
                    fill={true}
                    sizes='1x'
                    style={{ objectFit: "contain"}}
                    src={project.images[0].img}   
                />
            </div>
            
            <div className={styles.projDesc}>
                <h3>{project.title}</h3>
                <br></br>
                <article>{project.description[0].substring(0, 300)}</article>

                <div>
                    {project.tools.map((tool, ind) => (
                        <div key={ind} className={styles.tools}>
                            <div>
                                <Image 
                                    alt={`${tool.name} logo`}
                                    fill={true}
                                    sizes='1x'
                                    style={{ objectFit: "cover"}}
                                    src={toolsIcons[tool.icon]}
                                />
                            </div>
                            <h4>{tool.name}</h4>
                        </div>
                    ))}
                </div>

                <button 
                    className={styles.btn}
                    onClick={() => openOverlay(project.id)}
                >   
                    Open
                </button>
            </div>
        </div>
    )
}

export default ProjectCard