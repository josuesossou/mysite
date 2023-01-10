import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import nodemailerSendgrid from 'nodemailer-sendgrid'
import { getAutomatedEmailHTML, getSentEmailHTML } from '../../src/lib/helpers'

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
    try {
        return transport.sendMail({
            from: myCCEmail,
            to: `Josue Sossou ${myEmail}`,
            subject: `${name} with ${organization}`,
            html: getSentEmailHTML(message, email)
        });
    } catch (error) {
        console.log("ERRROOR #########",error)
        return Promise.reject('error')
    }
}

const sendMail = async ({ name, email, organization, message}:MailInfo) => {
    try {
        await transport.sendMail({
            from: myCCEmail,
            to: `${name} ${email}`,
            subject: 'Automatic reply: josuesep.com',
            html: getAutomatedEmailHTML(name)
        });

        await sendMailToMe({ name, email, organization, message })
        return Promise.resolve()
    } catch (error:any) {
        return Promise.reject('error')
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

    sendMail({name, email, organization, message })
    .catch(err => console.log(err))
    res.status(200).json({ success: true, code: 200 })
}
