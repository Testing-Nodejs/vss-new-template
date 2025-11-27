import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.formData();

    const firstName = body.get("cfFirstName");
    const lastName = body.get("cfLastName");
    const email = body.get("cfEmail");
    const phone = body.get("cfPhone");
    const city = body.get("cfCity");
    const position = body.get("cfPosition");
    const education = body.get("cfEducation");
    const message = body.get("cfMessage");
    const type = body.get("cftype");

    const resumeFile = body.get("cfResume");

    // Resume Attachment Handling
    let resumeAttachment = null;
    if (resumeFile && resumeFile.name) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      resumeAttachment = {
        filename: resumeFile.name,
        content: buffer,
      };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "testing.vss12@gmail.com",
        pass: "rkxnimrdxekbfntg",
      },
    });

    const html =
      type === "career"
        ? `
  <h2>New Career Enquiry</h2>

  <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; font-family: Arial;">
    <tr><td><strong>First Name</strong></td><td>${firstName}</td></tr>
    <tr><td><strong>Last Name</strong></td><td>${lastName}</td></tr>
    <tr><td><strong>Email</strong></td><td>${email}</td></tr>
    <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
    <tr><td><strong>City</strong></td><td>${city}</td></tr>
    <tr><td><strong>Position Applied</strong></td><td>${position}</td></tr>
    <tr><td><strong>Education</strong></td><td>${education}</td></tr>
    <tr><td><strong>Message</strong></td><td>${message}</td></tr>
  </table>

  <p style="margin-top: 20px;">Resume Attached.</p>
`
        : `
  <h2>New Contact Enquiry</h2>

  <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; font-family: Arial;">
    <tr><td><strong>First Name</strong></td><td>${firstName}</td></tr>
    <tr><td><strong>Email</strong></td><td>${email}</td></tr>
    <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
    <tr><td><strong>Enquiry Type</strong></td><td>${position}</td></tr>
    <tr><td><strong>Message</strong></td><td>${message}</td></tr>
  </table>
`;

    // Email Content
    await transporter.sendMail({
      from: "testing.vss12@gmail.com",
      to: "jafar.pasha@vssitcompany.in",
      subject: type === "career" ? "New Career Enquiry" : "New Contact Enquiry",
      html: html,
      attachments: resumeAttachment ? [resumeAttachment] : [],
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error sending mail:", error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}
