import validate from 'deep-email-validator'
import nodemailer from 'nodemailer'
import nodemailerSendgrid from 'nodemailer-sendgrid'
import { getAutomatedEmailHTML, getSentEmailHTML } from '../../src/lib/helpers'
import type { NextApiRequest, NextApiResponse } from 'next'

type Success = {
    success: boolean,
    code: number
}
type MailInfo = {
    name: string,
    email: string,
    organization: string,
    message: string
}

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || ''
const myEmail = process.env.MY_EMAIL
const myCCEmail = process.env.MY_CC_EMAIL
const myEmailPass = process.env.MY_EMAIL_PASS
const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: myEmail,
        clientId: clientID,
        clientSecret: clientSecret
        // pass: myEmailPass
    }
});

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
            from: myEmail,
            to: `${name} ${email}`,
            subject: 'Automatic reply: josuesep.com',
            html: getAutomatedEmailHTML(name)
        });

        // await sendMailToMe({ name, email, organization, message })
        return Promise.resolve()
    } catch (error:any) {
        console.log(error)
        return Promise.resolve()
    }
}

const checkEmailValidation = async (email: string) => {
    try {
        const emailCheck = await validate(email)
        console.log('EMAIL CHECKED****', emailCheck)
        return Promise.resolve()
    } catch (error:any) {
        console.log(error)
        throw new Error(error)
    }
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Success>
) {
    if (req.method !== 'POST') {
        res.status(404).json({ success: false, code: 404 })
        return
    }

    const { name, email, message, organization } = req.body
    try {
        await sendMail({name, email, organization, message })
        res.status(200).json({ success: true, code: 200 })
    } catch (error) {
        res.status(404).json({ success: false, code: 404 })
    }

}
