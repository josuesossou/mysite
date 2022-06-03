import styles from './project.module.scss'
import sharedStyles from '../../styles/shared.module.scss'
import ProjectCard from './pojectCard'
import ProjectOverlay from './projectOverlay'
import { Projects, Project, Img } from '../../../lib/types'
import { useEffect, useState } from 'react'

const ProjectComp = ({ data }: any) => {
    const [collapseData, setCollapseData] = useState<Project[]>([])
    const [index, setIndex] = useState<number>(0)
    const [showOverlay, setOverlay] = useState(false)
    const [imgList, setList]  = useState<Img[]>([])
    const projects: Projects = data

    const showMore = () => {
        let projlist:Project[] = []

        for (let i = index; i < index+3; i++) {
            if (i >= projects.regular.length) break
            projlist.push(projects.regular[i])
        }

        setCollapseData([...collapseData, ...projlist])
        setIndex(index+3)
    }

    const addImgToList = () => {
        let list:Img[] = []
        for (let proj of projects.showcase) {
            list.push(proj.images[0])
        }
        for (let proj of projects.regular) {
            list.push(proj.images[0])
        }

        setList(list)
    }

    useEffect(() => {
        showMore()
        addImgToList()
    }, [])

    return (
        <div id="project">
            <div className={sharedStyles.wrapper} id={styles.wProject}>
                <div className={sharedStyles.wrapTitle}>
                    <h2 className={sharedStyles.h2}>Projects</h2>
                    <div className={sharedStyles.underlineTop}></div>
                    <div className={sharedStyles.underlineBottom}></div>
                </div>

                <div id={styles.showcaseProj}>
                    {projects.showcase.map((proj, ind) => (
                        <ProjectCard 
                            key={ind} 
                            data={proj} 
                            isShowCase 
                            openOverlay={() => setOverlay(true)}
                        />
                    ))}
                </div>

                <div id={styles.collapseProj}>
                    {collapseData.map((proj, ind) => (
                       <ProjectCard 
                            key={ind}
                            data={proj} 
                            openOverlay={() => setOverlay(true)}
                        />
                    ))}
                </div>

                <button 
                    id={styles.viewMore}
                    onClick={() => showMore()}>View More</button>
            </div>
            {showOverlay && <ProjectOverlay 
                close={() => setOverlay(false)} 
                list={imgList}
            />}
        </div>
    )
}

export default ProjectComp