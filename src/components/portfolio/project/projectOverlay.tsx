import { useRef, useState } from 'react'
import { Img } from '../../../lib/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import styles from './project.module.scss'

const ProjectOverlay = ({ close, list }: any) => {
    const [showProject, setShowProject] = useState(false)
    const [projIndex, setProjIndex] = useState<number>(0)
    const sliderRef = useRef<HTMLDivElement>(null)
    const carouselImage: Img[] = list

    const showProjectSlider = () => setShowProject(!showProject)

    const moveSlider = (left:boolean) => {
        if (!sliderRef.current) return

        const current = sliderRef.current
        const sliderProperty = '--sliderIndex'
        const sliderIndex = parseInt(getComputedStyle(current).getPropertyValue(sliderProperty))
        let newIndex:number = sliderIndex

        if (left && sliderIndex > -1) {
            newIndex = sliderIndex-1
        }
        if (!left && sliderIndex < carouselImage.length - 2) {
            newIndex = sliderIndex + 1
        }

        current.style.transform = `translateX(${-1 * newIndex * (100/3)}%)`
        current.style.setProperty(sliderProperty, `${newIndex}`)

        setProjIndex(newIndex)
    }

    return (
        <div id={styles.overlay}>
            <div className={styles.closeBtn} onClick={close} />
            <div id={styles.imagesDetails}>

            </div>
            <div id={styles.images}>
                <div 
                    id={styles.carouselContainer}
                    className={
                        !showProject? 
                        styles.carouselInactive : 
                        styles.carouselActive
                    }
                >
                    <div className={styles.backgroudStyle} />
                    <button
                        className={`${styles.arrows} ${styles.arrowLeft}`}
                        onClick={() => moveSlider(true)}
                    >
                        <div className={styles.arrowText}>&#8249;</div>
                    </button>
                    <div className={styles.sliderContainer}>
                        <div id={styles.slider} ref={sliderRef}>
                            {carouselImage.map((imgs, i) => (
                                <div key={i} className={styles.content}>
                                    <div 
                                        className={
                                            i === projIndex+1 ?
                                            styles.highlight :
                                            ''
                                        }
                                    >
                                        <Image
                                            layout="fill"
                                            objectFit="cover"
                                            src={imgs.img}  
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        className={`${styles.arrows} ${styles.arrowRight}`}
                        onClick={() => moveSlider(false)}
                    >
                        <div className={styles.arrowText}>&#8250;</div>
                    </button>
                </div>

                <div 
                    id={styles.carouselBtn}
                    className={!showProject ? 
                        styles.showCarouselBtn : styles.hideCarouselBtn}
                    onClick={showProjectSlider}
                >
                    <div>
                        <FontAwesomeIcon icon={faArrowDown} size={"1x"} color={'white'} />
                    </div>
                    <small>Projects</small>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectOverlay