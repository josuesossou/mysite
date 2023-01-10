// import sharedStyles from '../../styles/shared.module.scss'
import styles from './contact.module.scss'
import sharedStyles from '../../styles/shared.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'



const Contact = () => {
    const [isSubmit, setIsSubmit] = useState<boolean>(false)

    const submitContact = (e:any) => {
        e.preventDefault()
        const target = e.target
        const name = target.name.value
        const email = target.email.value
        const organization = target.org.value
        const message = target.message.value

        console.log(JSON.stringify({ name, email, organization, message }))

        fetch(`${location.protocol}//${location.host}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, organization, message })
        })
        .then(res => res.json())
        .then(() => {
            setIsSubmit(true)
        })
    }

    const close = () => {
        setIsSubmit(false)
    }

    return (
        <section id='contact' className={styles.contact}>
            <h2 className={sharedStyles.title}>Contact</h2>

            {isSubmit ? <div>
                <FontAwesomeIcon icon={faCheckCircle} size={'3x'} color='lightgreen' />
                <p>
                    Thank You For contacting me. I will review your message
                    and respond within 3 business days
                </p>
                <button onClick={close}>Close</button>
            </div> :
            <form onSubmit={submitContact}>
                <label>
                    Name
                    <input type='text' id='name' name='name' required />
                </label>
                <label>
                    Organization (optional)
                    <input type='text' id='org' name='organization' />
                </label>
                <label>
                    E-mail
                    <input type='email' required id='email' name='email' />
                </label>
                <label>
                    Message
                    <textarea required id='message' name='message'/>
                </label>
                <small>Powered by SendGrid</small>
                <input type='submit' value='Send' />
            </form>}
        </section>
    )
}

export default Contact