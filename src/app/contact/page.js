"use client"

import emailJS from '@emailjs/browser'
import { useState } from 'react';

import { motion } from 'framer-motion';
import { upward } from '@/variants/upward';
import { transition1_s } from '@/transitions/transition1_s';
import { transition1_d } from '@/transitions/transition1_d';
import { item } from '@/variants/item';
import { transition1 } from '@/transitions/transition1';

import { MdOutlineMail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { ImWhatsapp } from "react-icons/im";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
    
      const [validEmail, setValidEmail] = useState(false);
      const [emptyValue, setEmptyValue] = useState(false);
    
      const { SERVICEID = '', TEMPLATEID = '', PUBLICKEY = '' } = process.env;
    
      const handleChange = (e) => {
        let newProp = form;
        setValidEmail(true);
        newProp[e.target.name] = e.target.value;
        setForm({ ...newProp });
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        let emptyValues = Object.values(form).some(obj => obj == "");
        setEmptyValue(emptyValues);
    
        let validEmail = form["email"].toLocaleLowerCase().match(/[a-z]+@[a-z]+\.com(\.br)*/)
        setValidEmail(validEmail);
    
        const templateParams = {
            from_name: form["name"], message: form["message"], subject: form["subject"], email: form["email"]
        }
    
        document.querySelectorAll('input').forEach(element => element.value = "")
        if (!emptyValues && validEmail) {
          emailJS.send("service_01x192s", "template_dyrghy7", templateParams, "TZPoFP8sOe4vVKffU")
          .then((res) => {
            alert("email enviado", res.status, res.text)
          })
        }
      }

    return (
        <main>
            <section className="flex flex-col gap-y-20 max-w-screen-xl mx-auto py-10">
                {/* GET IN TOUCH */}
                <div className="grid lg:grid-cols-2 gap-y-8 py-10 px-8 lg:px-0">
                    {/* FORM */}
                   <div className='flex flex-col gap-y-10'>
                        <div>
                            <div className='flex flex-row'>
                                <motion.h2 variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='h2 text-[--primary-color]'>Contact</motion.h2>
                                <h2 className='h2'>&nbsp;us</h2>
                            </div>
                            <h2 className='h2'>without obligation</h2>
                        </div>
                        
                        <motion.form variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_s} onSubmit={handleSubmit} className="w-80 lg:w-full lg:max-w-md flex flex-col items-center">
                            <motion.div variants={item} className="relative z-0 w-full mb-5 group">
                                <input type="text" onBlur={(e) => handleChange(e)} name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                            </motion.div>
                            <motion.div variants={item} className="relative z-0 w-full mb-5 group">
                                <input type="email" onBlur={(e) => handleChange(e)} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">E-mail</label>
                            </motion.div>
                            <motion.div variants={item} className="relative z-0 w-full mb-5 group">
                                <input type="text" onBlur={(e) => handleChange(e)} name="subject" id="subject" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                                <label htmlFor="subject" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
                            </motion.div>
                            <motion.div variants={item} className="grid md:gap-6 w-full">
                                <div className="relative z-0 w-full mb-5 group">
                                    <textarea type="message" onBlur={(e) => handleChange(e)} rows="8" name="message" id="message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required></textarea>
                                    <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
                                </div>
                            </motion.div>
                            <button type="submit" className="btn self-start">Send <IoIosSend className='mx-1' /></button>
                        </motion.form>
                    </div> 

                    {/* GET IN TOUCH */}
                   <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className="text-white flex flex-col gap-y-16 p-12 lg:p-20 bg-[#151515] rounded-lg">
                        <div className="flex flex-col justify-center gap-y-2">
                            <p className="p !text-white">Connect</p>
                            <div className='flex flex-row overflow-hidden'>
                                <h2 className="h2 text-white">Get in</h2>
                                <h2 className="h2 text-[#10a3fc]">&nbsp;touch</h2>
                            </div>
                            <p className="p !text-white">We’re here to assist you with any inquiries or support you may need.</p>
                        </div>
                        <div className="flex flex-col justify-center gap-y-3">
                            <a target="_blank" href="mailto:bresap@gmail.com" className="h4 flex flex-row items-center gap-x-2 opacity-90 hover:opacity-50 "><MdOutlineMail /> bresap.srv@gmail.com</a>  
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=32465580914" className="h4 flex flex-row items-center gap-x-2 opacity-90 hover:opacity-50"><ImWhatsapp />465 58 09 14</a>  
                            <a target="_blank" href="https://maps.app.goo.gl/QohHCBALJ6q53rNv9" title="address" className="h4 flex flex-row items-center gap-x-2 opacity-90 hover:opacity-50"><FiMapPin />Blvd Auguste Reyers 45, 1030 Schaerbeek</a>  
                        </div> 
                    </motion.div> 
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4788.452133819853!2d4.397266376428707!3d50.852330671671716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c350d8cc7413%3A0xecaa486f37d530f6!2sBlvd%20Auguste%20Reyers%2045%2C%201030%20Schaerbeek!5e1!3m2!1spt-BR!2sbe!4v1738928146890!5m2!1spt-BR!2sbe" width="1280" height="512" className="hidden lg:block border-0 rounded-lg" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4788.452133819853!2d4.397266376428707!3d50.852330671671716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c350d8cc7413%3A0xecaa486f37d530f6!2sBlvd%20Auguste%20Reyers%2045%2C%201030%20Schaerbeek!5e1!3m2!1spt-BR!2sbe!4v1738934654734!5m2!1spt-BR!2sbe" width="400" height="300" className="border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </main>
    )
}