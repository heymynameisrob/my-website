import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request): Promise<Response> {
  const { sender, message } = await req.json();

  if (!sender || !message) {
    return Response.json({ error: "Form was invalid" }, { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "contact@heymynameisrob.com",
      to: ["robhough180@gmail.com"],
      subject: `Message from ${sender}`,
      react: EmailTemplate({ message: message }),
    });

    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
