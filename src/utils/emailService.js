import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS
    }
})

export const sendPasswordResetEmail = async (email, resetUrl) => {
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Restablecer contraseña',
        html: 
        `
            <p>Haga click en el link para restear su password <a href="${resetUrl}">Restablecer</a>
            </p>
        `
    })
}