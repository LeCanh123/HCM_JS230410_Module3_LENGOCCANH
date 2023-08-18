import nodemailer from 'nodemailer';
export default {
    sendMail: async (mailOptions) => {
        try {

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.MS_USER,
                    pass: process.env.MS_PW
                }
            });
            
           let abc= await transporter.sendMail({
                from: 'canhtest01233210@gmail.com',
                ...mailOptions
            });
console.log(abc);
            return true
        }catch (err) {
            return false
        }
    }
}

// {
//     to: "mieuteacher@gmail.com",
//     subject: "Thử nghiệm send mail with node js aaaa",
//     html: template
// }