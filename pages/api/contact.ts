import nodemailer from 'nodemailer'
import { google } from 'googleapis'
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

const myEmail = process.env.MY_EMAIL
const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const refresh_token = process.env.REFRESH_TOKEN

const OAuth2 = google.auth.OAuth2

const oauth2Client = new OAuth2(
    clientID,
    clientSecret,
)
oauth2Client.setCredentials({
    refresh_token
})

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: "OAuth2",
        user: myEmail,
        clientId: clientID,
        clientSecret: clientSecret,
        refreshToken: refresh_token,
    },
    tls: {
        rejectUnauthorized: false
    }
});

const sendMailToMe = async ({name, email, organization, message}:MailInfo) => {
    try {
        return transport.sendMail({
            from: myEmail,
            to: `Josue Sossou ${myEmail}`,
            subject: `${name} with ${organization}`,
            html: getSentEmailHTML(message, email)
        });
    } catch (error) {
        console.log("ERRROOR #########",error)
        return Promise.reject('error')
    }
}

const sendMail = async ({ name, email, organization, message }: MailInfo) => {
    try {
        await transport.sendMail({
            from: myEmail,
            to: `${name} ${email}`,
            subject: 'Automatic reply: josuesep.com',
            html: getAutomatedEmailHTML(name)
        });

        await sendMailToMe({ name, email, organization, message })
        return Promise.resolve()
    } catch (error:any) {
        console.log(error)
        return Promise.reject()
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


// const checkEmailValidation = async (email: string) => {
//     try {
//         const emailCheck = await validate(email)
//         console.log('EMAIL CHECKED****', emailCheck)
//         return Promise.resolve()
//     } catch (error:any) {
//         console.log(error)
//         throw new Error(error)
//     }
// }
    // 
