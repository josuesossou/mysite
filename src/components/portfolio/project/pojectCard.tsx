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

const ProjectCard = ({ data, isShowCase, openOverlay }: any) => {
    const proj: Project = data
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const checkNavPos = () => {
            if (!ref || ! ref.current) return
            const pageH = window.innerHeight + window.scrollY
            const eleTop = ref.current.offsetTop + 150

            if (pageH < eleTop) return 
            console.log('yes')
            ref.current.style.animationPlayState = 'running'
        }

        window.addEventListener('scroll', checkNavPos)
        checkNavPos()
    }, [])

    return (
        <div className={styles.div} ref={ref}>
            <div className={styles.icon}>
                {isShowCase && <FontAwesomeIcon icon={faStar} size={"2x"} color={'gold'} />}
            </div>

            <div className={styles.img}>
                <Image 
                    layout="fill"
                    objectFit="fill"
                    src={proj.images[0].img}   
                />
            </div>
            
            <div className={styles.projDesc}>
                <h3 className={styles.h3}>{proj.title}</h3>
                <div style={{ marginBottom: '1.5em' }}>
                    <b><small className={styles.small}>Description</small></b>
                    <article>{proj.description}</article>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {proj.tools.map((tool, ind) => (
                        <div key={ind} className={styles.tools}>
                            <div className={styles.iconImg}>
                                <Image 
                                    layout="fill"
                                    objectFit="cover"
                                    src={toolsIcons[tool.icon]}
                                />
                            </div>

                            {tool.name}

                            
                        </div>
                    ))}
                </div>
                <h2>{proj.id}</h2>
                <button 
                    className={styles.btn}
                    onClick={() => openOverlay(proj.id)}
                >   
                    Open
                </button>
            </div>
        </div>
    )
}

export default ProjectCard