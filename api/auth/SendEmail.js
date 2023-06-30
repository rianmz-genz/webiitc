import nodemailer from "nodemailer";
async function sendEmail() {
  try {
    // Konfigurasi SMTP transporter
    var transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "87315cddbdcfee",
        pass: "0e5654ae4738f7",
      },
    });

    // Konfigurasi email yang akan dikirim
    let mailOptions = {
      from: "mandiribri6@gmail.com", // Ganti dengan alamat email Anda
      to: "adrianji1945@gmail.com", // Ganti dengan alamat email penerima
      subject: "Email Verifikasi",
      html: '<h1>Hai Teman!</h1><p>silahkan verifikasi email Kamu, <a href="http://localhost:3000/dashboard/user">klik disini</a></p>',
    };

    // Kirim email
    let info = await transporter.sendMail(mailOptions);
    console.log("Email terkirim: ", info.messageId);
  } catch (error) {
    console.error("Terjadi kesalahan saat mengirim email: ", error);
  }
}
export default sendEmail;
