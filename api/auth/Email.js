import axios from "axios";

export default async function sendEmailApi({ email }) {
  const data = {
    email,
    subject: "Daftar IIT COMPETITION",
    message:
      "<!DOCTYPE html><html><head><title>Verifikasi Email</title><style>body{font-family:Arial,sans-serif;line-height:1.6}.container{max-width:600px;margin:0 auto;padding:20px;border:1px solid #ccc;border-radius:5px}.logo{text-align:center;margin-bottom:20px}.logo img{max-width:150px}.content{padding:20px;background-color:#f9f9f9;border-radius:5px}.button{display:inline-block;background-color:#007bff;color:#fff;padding:10px 20px;text-decoration:none;border-radius:5px}.footer{text-align:center;margin-top:20px;color:#999}</style></head><body><div class='container'><div class='logo'><img src='https://example.com/logo.png' alt='Logo'></div><div class='content'><h2>Verifikasi Email</h2><p>Terima kasih telah mendaftar. Silakan klik tombol di bawah ini untuk verifikasi email Anda.</p><p>Jika Anda tidak mendaftar, Anda dapat mengabaikan pesan ini.</p><p><a class='button' href='https://example.com/verify?token=YOUR_VERIFICATION_TOKEN'>Verifikasi Email</a></p></div><div class='footer'>Email dikirim oleh Intermedia &copy; 2023</div></div></body></html>",
  };

  try {
    const response = await axios("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });

    if (response) {
      return response.data.message; // Berhasil mengirim email
    } else {
      return false;
    }
  } catch (error) {
    console.log("Error:", error.message);
  }
}
