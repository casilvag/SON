import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, course, message } = await request.json()

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email to academy
    const academyMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Nouvelle demande de consultation - Académie SON",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f59e0b; text-align: center;">Nouvelle demande de consultation</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Informations du demandeur:</h3>
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Téléphone:</strong> ${phone || "Non fourni"}</p>
            <p><strong>Cours d'intérêt:</strong> ${course || "Non spécifié"}</p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #fef3c7; border-radius: 8px;">
            <p style="margin: 0; color: #92400e;">
              <strong>Académie SON</strong><br>
              125 25e rue<br>
              Téléphone: 4188020383
            </p>
          </div>
        </div>
      `,
    }

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Confirmation de votre demande de consultation - Académie SON",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f59e0b; text-align: center;">Merci pour votre demande de consultation!</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>Bonjour ${name},</p>
            <p>Nous avons bien reçu votre demande de consultation concernant nos cours de musique.</p>
            <p>Notre équipe vous contactera dans les plus brefs délais pour planifier votre consultation personnalisée.</p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Récapitulatif de votre demande:</h3>
            <p><strong>Cours d'intérêt:</strong> ${course || "Non spécifié"}</p>
            <p><strong>Votre message:</strong></p>
            <p style="font-style: italic; line-height: 1.6;">"${message}"</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #fef3c7; border-radius: 8px;">
            <p style="margin: 0; color: #92400e;">
              <strong>Académie SON</strong><br>
              125 25e rue<br>
              Téléphone: 4188020383<br>
              <em>Votre passion musicale, notre expertise!</em>
            </p>
          </div>
        </div>
      `,
    }

    // Send emails
    await transporter.sendMail(academyMailOptions)
    await transporter.sendMail(userMailOptions)

    return NextResponse.json({ message: "Consultation request sent successfully" })
  } catch (error) {
    console.error("Error sending consultation request:", error)
    return NextResponse.json({ error: "Failed to send consultation request" }, { status: 500 })
  }
}
