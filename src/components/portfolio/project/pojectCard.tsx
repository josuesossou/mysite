import { Project } from "../../../lib/types"
import { useEffect, useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { 
    reactIcon,
    angularIcon,
    nodejsIcon,
    javaIcon,
    javascriptIcon,
    flutterIcon,
    mongoIcon,
    pythonIcon
} from '../../../../public/icons'
import styles from './project.module.scss'
import Image, { StaticImageData } from "next/image"

type IconImages = {
    [key: string]: StaticImageData
}

const toolsIcons: IconImages  = {
    reactIcon: reactIcon,
    angularIcon: angularIcon,
    nodejsIcon: nodejsIcon,
    javaIcon: javaIcon,
    javascriptIcon: javascriptIcon,
    flutterIcon: flutterIcon,
    mongoIcon: mongoIcon,
    pythonIcon: pythonIcon
}



const ProjectCard = ({ data, openOverlay, projectIndex }: any) => {
    const proj: Project = data
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // const checkNavPos = () => {
        //     if (!ref || ! ref.current) return
        //     const pageH = window.innerHeight + window.scrollY
        //     const eleTop = ref.current.offsetTop + 150

        //     if (pageH < eleTop) return 
        //     ref.current.style.animationPlayState = 'running'
        // }

        // window.addEventListener('scroll', checkNavPos)
        // checkNavPos()
    }, [])

    return (
        <div className={styles.pCard} ref={ref}>
            {/* <div className={styles.icon}>
                {isShowCase && <FontAwesomeIcon icon={faStar} size={"1x"} color={'gold'} />}
            </div> */}

            <div className={styles.cardImage}>
                <Image 
                    loading="lazy"
                    layout="fill"
                    objectFit="contain"
                    src={proj.images[0].img}   
                />
            </div>
            
            <div className={styles.projDesc}>
                <h3>{proj.title}</h3>
                {/* <div style={{ marginBottom: '1.5em' }}> */}
                    {/* <b><small className={styles.small}>Description</small></b> */}
                <article>{proj.description}</article>
                {/* </div> */}

                <div>
                    {proj.tools.map((tool, ind) => (
                        <div key={ind} className={styles.tools}>
                            <div>
                                <Image 
                                    layout="fill"
                                    objectFit="cover"
                                    src={toolsIcons[tool.icon]}
                                />
                            </div>
                            <h4>{tool.name}</h4>
                        </div>
                    ))}
                </div>

                <button 
                    className={styles.btn}
                    onClick={() => openOverlay(projectIndex)}
                >   
                    Open
                </button>
            </div>
        </div>
    )
}

export default ProjectCard