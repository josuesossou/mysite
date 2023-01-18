import styles from  './main.module.scss'
import { useEffect } from 'react'

const PdfOverlay = ({ showResume }: any) => {
    let bodyElement:HTMLBodyElement|null = null

    const closeResume = () => {
        bodyElement? bodyElement.style.overflow = 'scroll' : null
        showResume(false)
    }

    useEffect(() => {
        bodyElement = document.querySelector("body")
        bodyElement ? bodyElement.style.overflow = 'hidden' : null;
    }, [bodyElement])

    return (
        <div className={styles.pdfOverlay}>
            <embed src='https://josueportfolioimages.s3.amazonaws.com/JSResume.pdf#view=Fit&navpanes=0' width='100%' height='100%' />
            <button className={styles.closeBtn} onClick={closeResume} />
        </div>
    )
}

export default PdfOverlay