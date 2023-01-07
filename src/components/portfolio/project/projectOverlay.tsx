import { useEffect, useRef, useState } from 'react'
import { Img, Project } from '../../../lib/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import styles from './project.module.scss'

const ProjectOverlay = ({ list, current, close }: any) => {
    const [showProject, setShowProject] = useState(false)
    const [projIndex, setProjIndex] = useState<number>(current)
    const body = document.querySelector("body")
    const projects: Project[] = list
    const bodyClose = () => {
        body ? body.style.overflow = 'auto' : null;
        close()
    }

    const changeProject = (direction:number) => {
        if (projIndex === 0 && direction === -1) return
        if (projIndex === projects.length-1 && direction === 1) return
        setProjIndex(projIndex + (1 * direction))
    }

    useEffect(() => {
        body ? body.style.overflow = 'hidden' : null;
    }, [])

    /** Render Return */
    return (
        <div className={styles.overlay}>
            <button className={styles.closeBtn} onClick={bodyClose}  />

            {/* Left side of the overlay with white background which show the description of 
            the project */}
            <div>
                <h2>Current: {projIndex+1}</h2>
                <h2>ProjId: {projects[projIndex+1].id}</h2>
                <div className={styles.projControls}>
                    <button onClick={() => changeProject(-1)}>
                        <FontAwesomeIcon 
                            icon={faArrowLeft} 
                            size={"1x"} 
                            color={'white'} />
                        Previous
                    </button>
                    <button onClick={() => changeProject(1)}>
                        Project: Next
                        <FontAwesomeIcon 
                            icon={faArrowRight} 
                            size={"1x"} 
                            color={'white'} />
                    </button>
                </div>
            </div>

            {/* Right side of the overlay to show project images
             and code if applicable */}
            <div>

                {true && (
                    <div>
                        <iframe 
                            // width="560" 
                            // height="315" 
                            loading='lazy'
                            src="https://www.youtube.com/embed/Qt52J0p82ZQ" 
                            title="YouTube video player" 
                            
                            // frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen></iframe>
                    </div>
                )}

                {true && [1,2,3,4,5,].map(() => (
                    <div>
                        <Image
                            layout="fill"
                            objectFit="contain"
                            loading='lazy'
                            width={600}
                            height={600}
                            src={'https://josueportfolioimages.s3.amazonaws.com/cdTimeImages/cdt1.png'}  
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectOverlay






// {/***** Start for the small carousel slider for the whole slider,
// shows from the bottom of the overlay which shows or hide ******/}

// {/*****  Small carousel end here *****/}

// {/* Button to show and hide small carousel slider */}
// {/* <div 
//     id={styles.carouselBtn}
//     className={!showProject ? 
//         styles.showCarouselBtn : styles.hideCarouselBtn}
//     onClick={showProjectSlider}
// >
//     <div>
//         <FontAwesomeIcon icon={faArrowDown} size={"1x"} color={'#031229'} />
//     </div>
//     <small>Projects</small>
// </div> */}
// {/* button that show and hide small carousel end here */}
  // /** Start of slideshow animation Functions */
    // const slideAwayAnimation = () => {
    //     playingBookFlipAnim = false
        
    //     for (let i=0; i < currImgNodes.length; i++) {
    //         const ele = currImgNodes[i]
    //         ele.classList.add(styles.slideAwayAnime)
    //         ele.setAttribute('style', `animation-delay: ${(currImgNodes.length*2) - (i * 2)}s`)
    //         ele.classList.remove(styles.bookFlipAnime)
    //     }

    //     clearTimeout(animationSubs)
    //     bookFlipAnimationTrigger()
    // }

    // const bookFlipAnimation = () => {
    //     playingBookFlipAnim = true
    //     for (let i=0; i < currImgNodes.length; i++) {
    //         const ele = currImgNodes[i]
    //         ele.classList.add(styles.bookFlipAnime)  
    //         ele.setAttribute('style', `animation-delay: ${(i)/2}s`)
    //         ele.classList.remove(styles.slideAwayAnime)
    //     }
    //     clearTimeout(animationSubs)
    //     slideAwayAnimationTrigger()
    // }

    // /**  Animation trigger for the slideshow **/
    // const bookFlipAnimationTrigger = () => {
    //     animationSubs = setTimeout(bookFlipAnimation, ((imagesLength*2000)+1000))
    // }

    // const slideAwayAnimationTrigger = () => {
    //     animationSubs = setTimeout(slideAwayAnimation, imagesLength*600)
    // }
    // /** End of Animation triggers **/

    // /*** stop animation and user control for top slideshow starts here */
    // const pauseAnimation = () => {
    //     let computedTop
    //     clearTimeout(animationSubs)
    //     for (let i=0; i < currImgNodes.length; i++) {
    //         const ele = currImgNodes[i]
                
    //         ele.getAnimations().every((val) => {
    //             if (playingBookFlipAnim === true) {
    //                 val.playbackRate = 10
    //                 val.play()
    //             } else {
    //                 val.pause()
    //             }
    //         })

    //         if (playingBookFlipAnim !== true) {
    //             if (i+1 < currImgNodes.length) {
    //                 computedTop = window.getComputedStyle(currImgNodes[i+1]).top
    //                 if (slideshowPauseIndex === -1 && computedTop !== '0px' ) {// second-check checks if the element is in the view
    //                     setPauseIndex(i)
    //                 }
    //             }
    //         } else {
    //             console.log('imagesLength', imagesLength)
    //             setPauseIndex(imagesLength-1)
    //         }
    //     }

    //     if (slideshowPauseIndex === -1) {

    //     }

    //     // will remove later
    //     if (playingBookFlipAnim === true) {
    //         playingBookFlipAnim = false
    //     }

    // }

    // const moveForward = () => {
    //     const currImgNodes = document.querySelectorAll(`.${styles.currentImg}`)
    //     // console.log(currImgNodes.length, slideshowPauseIndex)
    //     const node = currImgNodes[6]
    //     node.classList.remove(styles.slideAwayAnime)
    //     node.classList.add(styles.slideAwayAnime)
    //     node.getAnimations().every(val => val.play())

    //     // node.animate([{top: '100px'}], 1).play()
    //     // node.classList.add(styles.slideAwayAnime)

    //     // currImgNodes[]
    //     // currImgNodes[slideshowPauseIndex].getAnimations().every(val => val.play())
    // }
    // const moveBackward = () => {

    // }


    /** useEffect here **********/
    // useEffect(() => {
        // currImgNodes = document.querySelectorAll(`.${styles.currentImg}`)
        // imagesLength = currImgNodes.length
        // const slideshowOverlayEle = document.getElementById(styles.slideShowOverlay)
        // slideshowOverlayEle?.addEventListener('mouseenter', pauseAnimation)
        // bookFlipAnimation()
    // }, [])
    /** UseEffect End here */

    /** Move slider for small slider at the bottom starts here */
    // const moveSlider = (left:boolean) => { /// for small slider at the bottom of overlay
    //     if (!sliderRef.current) return

    //     const current = sliderRef.current
    //     const sliderProperty = '--sliderIndex'
    //     const sliderIndex = parseInt(getComputedStyle(current).getPropertyValue(sliderProperty))
    //     let newIndex:number = sliderIndex

    //     if (left && sliderIndex > -1) {
    //         newIndex = sliderIndex-1
    //     }
    //     if (!left && sliderIndex < projects.length - 2) {
    //         newIndex = sliderIndex + 1
    //     }

    //     current.style.transform = `translateX(${-1 * newIndex * (100/3)}%)`
    //     current.style.setProperty(sliderProperty, `${newIndex}`)

    //     setProjIndex(newIndex)
    // }
    /** End for the slider at the bottom */
// <div 
//                     id={styles.carouselContainer}
//                     className={
//                         !showProject?
//                         styles.carouselInactive : 
//                         styles.carouselActive
//                     }
//                 >
//                     {/* The white background */}
//                     <div className={styles.backgroudStyle} />
//                     {/* Left arrow which moves the slider left */}
//                     {/* <button
//                         className={`${styles.arrows} ${styles.arrowLeft}`}
//                         onClick={() => moveSlider(true)}
//                     >
//                         <div className={styles.arrowText}>&#8249;</div>
//                     </button> */}

//                     {/* Slider for the project list, at the bottom */}
//                     <div className={styles.sliderContainer}>
//                         <div id={styles.slider} ref={sliderRef}>
//                             {projects.map((proj) => (
//                                 <div key={proj.id} className={styles.content}>
//                                     <div 
//                                         className={
//                                             proj.id === projIndex+1 ?
//                                             styles.highlight :
//                                             ''
//                                         }
//                                     >
//                                         <Image
//                                             layout="fill"
//                                             objectFit="cover"
//                                             src={proj.images[0].img}  
//                                         />
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     {/* Right arrow which moves the slider right */}
//                     {/* <button
//                         className={`${styles.arrows} ${styles.arrowRight}`}
//                         onClick={() => moveSlider(false)}
//                     >
//                         <div className={styles.arrowText}>&#8260;</div>
//                     </button> */}
//                 </div>