import { useEffect, useRef, useState } from 'react'
import { Img, Project } from '../../../lib/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import styles from './project.module.scss'

const ProjectOverlay = ({ list, current, close }: any) => {
    const [showProject, setShowProject] = useState(false)
    const [projIndex, setProjIndex] = useState<number>(current-1)
    const sliderRef = useRef<HTMLDivElement>(null)
    const projects: Project[] = list
    let els: number

    let animationSubs: NodeJS.Timeout | undefined

    const showProjectSlider = () => setShowProject(!showProject)

    /** Start of slideshow animation triggeres */
    const slideAwayAnimation = () => {
        console.log('slideaway')
        const eles = document.querySelectorAll(`.${styles.currentImg}`)
        for (let i=0; i < eles.length; i++) {
            const ele = eles[i]
            ele.classList.add(styles.slideAwayAnime)
            ele.setAttribute('style', `animation-delay: ${(eles.length*3) - (i * 3)}s`)
            ele.classList.remove(styles.backFlipAnime)
        }
        clearTimeout(animationSubs)
        bookFlipAnimationTrigger()
    }

    const bookFlipAnimation = () => {
        console.log('bookFlip')
        const eles = document.querySelectorAll(`.${styles.currentImg}`)
        for (let i=0; i < eles.length; i++) {
            const ele = eles[i]
            ele.classList.add(styles.backFlipAnime)  
            ele.setAttribute('style', `animation-delay: ${(i)/2}s`)
            ele.classList.remove(styles.slideAwayAnime)
        }
        clearTimeout(animationSubs)
        slideAwayAnimationTrigger()
    }

    // Animation trigger for the slideshow
    const bookFlipAnimationTrigger = () => {
        console.log('ELS Length',els)
        animationSubs = setTimeout(bookFlipAnimation, ((els*3000)+5000))

    }

    const slideAwayAnimationTrigger = () => {
        animationSubs = setTimeout(slideAwayAnimation, els*1000)
    }

    /// pause the animation on hover and reverse or move forward when forward and redo buttons are clicked
    /** Start of slideshow animation triggeres */
    // useEffect here **********
    useEffect(() => {
        els = document.querySelectorAll(`.${styles.currentImg}`).length
        bookFlipAnimation()
    }, [])



    const moveSlider = (left:boolean) => { /// for small slider at the bottom of overlay
        if (!sliderRef.current) return

        const current = sliderRef.current
        const sliderProperty = '--sliderIndex'
        const sliderIndex = parseInt(getComputedStyle(current).getPropertyValue(sliderProperty))
        let newIndex:number = sliderIndex

        if (left && sliderIndex > -1) {
            newIndex = sliderIndex-1
        }
        if (!left && sliderIndex < projects.length - 2) {
            newIndex = sliderIndex + 1
        }

        current.style.transform = `translateX(${-1 * newIndex * (100/3)}%)`
        current.style.setProperty(sliderProperty, `${newIndex}`)

        setProjIndex(newIndex)
    }

    return (
        <div id={styles.overlay}>
            <div className={styles.closeBtn} onClick={close} />

            {/* Left side of the overlay with white background which show the description of 
            the project */}
            <div id={styles.imagesDetails}>
                <h2>Current: {projIndex+1}</h2>
                <h2>ProjId: {projects[projIndex+1].id}</h2>
            </div>


            {/* Right side of the overlay to show project images
             and code if applicable */}
            <div id={styles.projImages}>
                {/****** Project images slideshow Start ******/}
                <div id={styles.imageSlideShow}>
                    {[0, 1, 2, 3,4,5,6].map((data) => (
                        <div className={styles.currentImg}>
                            <Image
                                layout="fill"
                                objectFit="cover"
                                src={'https://josueportfolioimages.s3.amazonaws.com/cdTimeImages/cdt1.png'}  
                            />
                            <h1 style={{ zIndex: 10, position: 'absolute' }}>{data}</h1>
                        </div>
                    ))}
                    {/* <div className={styles.currentImg}></div>
                    <div className={styles.currentImg}></div> */}

                </div>

                {/***** Start for the small carousel slider for the whole slider,
                shows from the bottom of the overlay which shows or hide ******/}
                <div 
                    id={styles.carouselContainer}
                    className={
                        !showProject?
                        styles.carouselInactive : 
                        styles.carouselActive
                    }
                >
                    {/* The white background */}
                    <div className={styles.backgroudStyle} />
                    {/* Left arrow which moves the slider left */}
                    <button
                        className={`${styles.arrows} ${styles.arrowLeft}`}
                        onClick={() => moveSlider(true)}
                    >
                        <div className={styles.arrowText}>&#8249;</div>
                    </button>

                    {/* Slider for the project list, at the bottom */}
                    <div className={styles.sliderContainer}>
                        <div id={styles.slider} ref={sliderRef}>
                            {projects.map((proj) => (
                                <div key={proj.id} className={styles.content}>
                                    <div 
                                        className={
                                            proj.id === projIndex+1 ?
                                            styles.highlight :
                                            ''
                                        }
                                    >
                                        <Image
                                            layout="fill"
                                            objectFit="cover"
                                            src={proj.images[0].img}  
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Right arrow which moves the slider right */}
                    <button
                        className={`${styles.arrows} ${styles.arrowRight}`}
                        onClick={() => moveSlider(false)}
                    >
                        <div className={styles.arrowText}>&#8250;</div>
                    </button>
                </div>
                {/*****  Small carousel end here *****/}
                
                {/* Button to show and hide small carousel slider */}
                <div 
                    id={styles.carouselBtn}
                    className={!showProject ? 
                        styles.showCarouselBtn : styles.hideCarouselBtn}
                    onClick={showProjectSlider}
                >
                    <div>
                        <FontAwesomeIcon icon={faArrowDown} size={"1x"} color={'#031229'} />
                    </div>
                    <small>Projects</small>
                </div>
                {/* button that show and hide small carousel end here */}
            </div>
        </div>
    )
}

export default ProjectOverlay