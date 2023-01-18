import { useContext, useEffect, useRef, useState } from 'react'
import { Img, Project } from '../../../lib/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faAudioDescription } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import styles from './project.module.scss'
import { ProjectContext } from '../../../lib/contexts'
import { toolsIcons } from '../../../lib/imageIcons'

const ProjectOverlay = ({ updateProject, close, projectLength }: any) => {
    const bodyElement = document.querySelector("body")
    const project: Project = useContext(ProjectContext)


    const changeProject = (direction:number) => {
        updateProject(project.id + direction)
    }

    const bodyClose = () => {
        bodyElement ? bodyElement.style.overflow = 'auto' : null;
        close()
    }
    useEffect(() => {
        bodyElement ? bodyElement.style.overflow = 'hidden' : null;
    }, [bodyElement])

    /** Render Return */
    return (
        <div className={styles.overlayWrapper}>
            <div className={styles.overlay}>
                
                {/* Left side of the overlay with white background which show the description of the project */}
                <div>
                    <h2>{project.title}</h2>
                    <span className={styles.links}>
                        {project.source && <span><a href={project.source} target='_blank' rel="noreferrer">
                            <button>
                                Source Code
                            </button>
                        </a></span>}
                        {project.live && <span><a href={project.live} target='_blank' rel="noreferrer">
                            <button>
                                View Live
                            </button>
                        </a></span>}
                    </span>
                    <br />
                    <article>
                        {project.description.map((desc, index) => (
                            <div key={desc.substring(0,10)}>
                                <p>{desc}</p>
                                <br />
                            </div>
                        ))}
                    </article>

                    <div>
                        {project.tools.map((tool, ind) => (
                            <div key={tool.name} className={styles.tools}>
                                <div>
                                    <Image 
                                        alt={`${tool.name} logo`}
                                        fill={true}
                                        sizes='1x'
                                        style={{ objectFit: 'cover' }}
                                        src={toolsIcons[tool.icon]}
                                    />
                                </div>
                                <h4>{tool.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right side of the overlay to show project imagesand code if applicable */}
                <div>
                    {project.video && (
                        <div>
                            <iframe
                                loading='lazy'
                                src={project.video} 
                                title="YouTube video player"  
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen></iframe>
                        </div>
                    )}

                    {project.images.map((image) => (
                        <div key={image.details}>
                            <Image
                                alt='projectimages'
                                fill={true}
                                sizes='1x'
                                style={{ objectFit:'contain' }}
                                loading='lazy'
                                src={image.img}  
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.projControls}>
                {project.id > 0 && <button onClick={() => changeProject(-1)}>
                    <FontAwesomeIcon 
                        icon={faArrowLeft} 
                        size={"1x"} 
                        color={'white'} />
                    Previous
                </button>}
                {project.id < projectLength-1 && <button onClick={() => changeProject(1)}>
                    Project: Next
                    <FontAwesomeIcon 
                        icon={faArrowRight} 
                        size={"1x"} 
                        color={'white'} />
                </button>}
            </div>

            <button className={styles.closeBtn} onClick={bodyClose}  />
        </div>
    )
}

export default ProjectOverlay
