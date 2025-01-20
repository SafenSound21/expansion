import { Resend } from "resend";
import { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(request: VercelRequest, res: VercelResponse) {
  try {
    if (request.method === "POST") {

      const formData = await request.body;
      const { name = 'No proporcionado', email, message, business = 'No proporcionado', phone = 'No proporcionado' } = formData;

      await resend.emails.send({
        from: "Expansion <info@expansion-digital.com>",
        to: "info@expansion-digital.com",
        subject: "Nuevo mensaje del formulario de contacto",
        text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}\nNegocio: ${business}\nTeléfono: ${phone}`,
      });
  
      res.status(200).json({ message: "Solicitud POST exitosa", headers: { "Content-Type": "application/json" } });
    } else {
      res.status(405).json({ message: "Método no permitido" });
    }
    

    // Envía el correo usando Resend
    
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, message: "Error al enviar el mensaje" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
