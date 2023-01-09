import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import nodemailerSendgrid from 'nodemailer-sendgrid'

type Success = {
    success: boolean,
    code: number
}
type MailInfo = {
    name:string,
    email:string,
    organization: string,
    message: string
}

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || ''
const myEmail = process.env.MY_EMAIL
const myCCEmail = process.env.MY_CC_EMAIL


const transport = nodemailer.createTransport(
    nodemailerSendgrid({
        apiKey: SENDGRID_API_KEY
    })
);

const sendMailToMe = async ({name, email, organization, message}:MailInfo) => {
    return transport.sendMail({
        from: email,
        to: myEmail,
        cc: myCCEmail,
        subject: `${name} with ${organization}`,
        html: message
    });
}

const sendMail = async ({ name, email, organization, message}:MailInfo) => {
    try {
        await transport.sendMail({
            from: myEmail,
            to: email,
            subject: 'Josue Sossou Portfolio -- Automated',
            html: `<p>Hello, you have sent an email to Josue; 
                    he will review it and respond back to you 
                    within 3 business days</p>`
        });

        // await sendMailToMe({name, email, organization, message})
    } catch (error) {
        console.log('ERROR ##################', error)
        const overrideMessage = message + '\n USER EMAIL: ILLEGITIMATE \n'
        // await sendMailToMe({ name, email, organization, message: overrideMessage })
    }
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Success>
) {
    if (req.method !== 'POST') {
        res.status(404).json({ success: false, code: 404 })
        return
    }

    const { name, email, message, organization } = req.body
    console.log({ name, email, message, organization })
    console.log(SENDGRID_API_KEY, myCCEmail, myEmail)

    sendMail({name, email, organization, message })
    .then(() => {
        res.status(200).json({ success: true, code: 200 })
    })
    .catch(() => {
        res.status(400).json({ success: false, code: 400 })
    })
}
