import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";


export const sendEmail = async (userEmail, subject, displayName,  message, link, linkText) => {
    try {
        await addDoc(collection(db, 'emails'), {
          to: userEmail,
          message: {
            subject: subject,
            html: `
            <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
                        <title>${subject}</title>
                    </head>

                    <body style="margin: 0 auto; padding: 60px 35px; font-family: Work-sans, sans-serif; background: #ffffff; width: 600px;">

                        <div style="max-width: 450px; margin: 0 auto; background: #ffffff;
                         border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">

                            <img src="https://firebasestorage.googleapis.com/v0/b/labwox-afa7e.appspot.com/o/Logo.png?alt=media&token=b4bfd78d-e0e8-46fe-8c62-0caeb1fd12e1" alt="Logo" style="max-width: 120px; height: auto;">

                            <div style="text-align: left; background-color: #212529; font-size: 40px">
                                <h2 style="background-image: url('https://firebasestorage.googleapis.com/v0/b/labwox-afa7e.appspot.com/o/profileBg.png?alt=media&token=b6007395-08b3-4b82-b166-d8e019dd4ee8'); padding: 20px; font-size: 24px; color: #ffffff;
                                ">Powering <span style="font-style: italic; color: #FE423D;
                                ">Research</span><br> Capabilities in Africa</h2>
                            </div>
                            

                            <div style="text-align: left; font-size: 16px; font-weight: 500; color: #767778; padding: 20px;
                            ">
                                <h2 style="color: #121A26; font-size: 24px; font-weight: 700; margin: 20px 0px; 
                                ">${subject}</h2>
                                <p>Hey, ${displayName}</p>
                                <p style="padding: 16px 0px">${message}</p>
                            
                                <a href="${link}" target="_blank" style="display: block; padding: 10px 30px; background-color: #FE423D; color: #ffffff; text-decoration: none; border-radius: 5px; text-align: center; padding: 10px 16px; width: fit-content;
                                ">${linkText}</a>

                                <p style="padding: 20px 0px;
                                ">Regards, <br> Soji from Labwox</p>
                            </div>

                            <div 
                                style="background-image: url('https://firebasestorage.googleapis.com/v0/b/labwox-afa7e.appspot.com/o/email-template-questions.png?alt=media&token=a6a82775-1bfa-4730-a848-49ec5604c766'); width: 100%; text-align: center; padding: 20px; background-color: #EDEDED;   
                                ">
                                <p>Have Questions?</p>
                                <a href="https://labwox.com.ng/#/contact" style="text-decoration: underline; color: #FE423D; padding: 10px 0px;
                                ">We’re here, ready to talk</a>
                            </div>

                            <div style="margin: 20px 0px; text-align: left; color: #212529; font-size: 16px; 
                            ">
                                <p>&copy; 2023 Labwox Limited, All rights reserved.</p>
                                <p><b>Phone number:</b> (+234)8090870364</p>
                                <p><b>Registered office:</b> 2B Awori Close, Akora Villas off Adeniyi Jones, Ikeja, Lagos</p>
                            </div>
                        </div>

                    </body>
                </html>

            `
          }
       
        });
    } catch (error) {
        console.log(error.message)
    }
}