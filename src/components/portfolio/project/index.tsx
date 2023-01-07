import styles from './project.module.scss'
import sharedStyles from '../../styles/shared.module.scss'
import ProjectCard from './pojectCard'
import ProjectOverlay from './projectOverlay'
import {Project, Img } from '../../../lib/types'
import { useEffect, useState } from 'react'

const ProjectComp = ({ data }: any) => {
    const [collapseData, setCollapseData] = useState<Project[]>([])
    const [index, setIndex] = useState<number>(2)
    const [showOverlay, setOverlay] = useState(false)
    const [projectIndex, setProjectIndex]  = useState<number>(0)
    const projects: Project[] = data

    // const showMore = () => {
    //     let projlist:Project[] = []

    //     for (let i = index; i < index+3; i++) {
    //         if (i >= projects.length) break
    //         projlist.push(projects[i])
    //     }

    //     setCollapseData([...collapseData, ...projlist])
    //     setIndex(index+3)
    // }

    const openOverlay = (index:number) => {
        setProjectIndex(index)
        setOverlay(true)
    }

    useEffect(() => {
        // showMore()
    }, [])

    return (
        <section id="project">
            <h2 className={sharedStyles.title}>Projects</h2>

            <div className={styles.showcaseProj}>
                {projects.map((proj, index) => proj.showcase && (
                    <ProjectCard 
                        key={index}
                        projectIndex={index} 
                        data={proj} 
                        isShowCase
                        openOverlay={openOverlay}
                    />
                ))}
            </div>

            {showOverlay && <ProjectOverlay 
                current={projectIndex}
                close={() => setOverlay(false)} 
                projects={projects.sort((pa, pb) => pa.id - pb.id)}
            />}
        </section>
    )
}

export default ProjectComp

// {/* <div id={styles.collapseProj}>
//     {collapseData.map((proj, ind) => !proj.showcase && (
//        <ProjectCard 
//             key={ind}
//             data={proj} 
//             openOverlay={onViewClicked}
//         />
//     ))}
// </div> */}

// {/* <button 
//     id={styles.viewMore}
//     onClick={() => showMore()}>View More</button> */}