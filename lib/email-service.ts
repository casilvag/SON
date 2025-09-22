// Cliente-side email service usando server action
import { sendRegistrationEmail } from "./email-server-action"

export const sendContactEmail = async (data: {
  nom: string
  email: string
  telephone: string
  message?: string
}) => {
  return await sendRegistrationEmail(data)
}

export const sendEmail = async (data: {
  nom: string
  email: string
  telephone: string
  message: string
}) => {
  return await sendContactEmail(data)
}
