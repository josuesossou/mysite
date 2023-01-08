import styles from './project.module.scss'
import sharedStyles from '../../styles/shared.module.scss'
import ProjectCard from './pojectCard'
import ProjectOverlay from './projectOverlay'
import { Project } from '../../../lib/types'
import { useState } from 'react'
import { ProjectContext, projectContextDefaultValues } from '../../../lib/contexts'


const ProjectComp = ({ data }: any) => {
    const [projectContext, setProjectContext] = useState<Project>(projectContextDefaultValues)
    const [showOverlay, setOverlay] = useState(false)
    const projects: Project[] = data

    const updateProject = (projectId:number) => {
        const project = projects.find(project => project.id === projectId)
        if (!project) return
        setProjectContext(project)
    }

    const openOverlay = (projectId:number) => {
        updateProject(projectId)
        setOverlay(true)
    }

    return (
        <ProjectContext.Provider value={projectContext}>
            <section id="project">
                <h2 className={sharedStyles.title}>Projects</h2>

                <div className={styles.showcaseProj}>
                    {projects.map((proj, index) => proj.showcase && (
                        <ProjectCard 
                            key={index}
                            data={proj} 
                            openOverlay={openOverlay}
                        />
                    ))}
                </div>

                {showOverlay && <ProjectOverlay 
                    updateProject={updateProject}
                    close={() => setOverlay(false)} 
                />}
            </section>
        </ProjectContext.Provider>
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