import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    // var transport = nodemailer.createTransport({
    //   host: "sandbox.smtp.mailtrap.io",
    //   port: 2525,
    //   auth: {
    //     user: process.env.MAILTRAP_USERID,
    //     pass: process.env.MAILTRAP_PASS
    //   },
    // });

    var transport = nodemailer.createTransport({
      service : "gmail",
      secure : true,
      port : 465,
      auth : {
        user : "tawab05@gmail.com",
        pas : "jnhwlalnourpeyme"
      }
  })


    const mailOptions = {
      from: "umair@gmail.com",
      to: email,
      subject: emailType === "VERIFY" ? "Verify Your Email" : "Reset Password",
      html:
        emailType === "VERIFY"
          ? `<p> Click 
      <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a>
                to Verify your email               
      </p> or Copy and Paste the Link below <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}`
          : ` <p> Click the link to Reset Your Password  </p>  <a href="${process.env.DOMAIN}/reset?id=${userId}" > ${process.env.DOMAIN}/reset?id=${userId} </a>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
