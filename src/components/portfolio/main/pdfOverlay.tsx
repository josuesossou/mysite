import styles from  './main.module.scss'
import { useEffect } from 'react'

const PdfOverlay = ({ showResume }: any) => {
    let bodyElement:HTMLBodyElement|null = null
    let homeElement:HTMLElement|null = null

    const closeResume = () => {
        bodyElement? bodyElement.style.overflow = 'scroll' : null
        homeElement ? homeElement.style.zIndex = '1' : null
        showResume(false)
    }

    useEffect(() => {
        bodyElement = document.querySelector("body")
        homeElement = document.getElementById("home")
        bodyElement ? bodyElement.style.overflow = 'hidden' : null;
        homeElement ? homeElement.style.zIndex = '120' : null
    }, [bodyElement])

    return (
        <div className={styles.pdfOverlay}>
            <div className={styles.overlay}>
                <embed src='https://josueportfolioimages.s3.amazonaws.com/JS_Resume.pdf#view=Fit&navpanes=0' width='100%' height='100%' />
                <button className={styles.closeBtn} onClick={closeResume} />
            </div>
        </div>
    )
}

export default PdfOverlay