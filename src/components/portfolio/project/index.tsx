import styles from './project.module.scss'
import sharedStyles from '../../styles/shared.module.scss'
import { Projects } from '../../../lib/types'
import ProjectCard from './pojectCard'

const Project = ({ data }: any) => {
    const projects: Projects = data

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
                        <ProjectCard key={ind} data={proj} isShowCase />
                    ))}
                </div>

                <div id={styles.collapseProj}>
                    {projects.regular.map((proj, ind) => (
                       <ProjectCard key={ind} data={proj} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project