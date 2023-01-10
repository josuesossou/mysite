export const getAutomatedEmailHTML = (name:string) => `
    <p>Hi ${name},</p>
    <article>
        your e-mail was sent successfully. 
        I will review it and respond back to you 
        within 3 business days.
        <br />
        <br />
        Thank you
    </article>
`

export const getSentEmailHTML = (message:string, email:string) => `
    <p>User ${email} sent from my portfolio contact form</p>
    <article>${message}</article>
`