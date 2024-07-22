import React, {useState} from "react";
import emailjs from '@emailjs/browser';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { wait } from "@testing-library/user-event/dist/utils";

export default function ContactMe(){
    
    const successPopup = () => toast.success("Email sent successfuly", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
    });
    const errorPopup = () => toast.error("An error has occured!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
    });
    const suggestion = () => toast.info("Use social media links! Located at the bottom",{
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
    });

    const [name, setName] = useState();
    const [lname, setLName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //Your emailjs serviceID, templateId and public key
        const serviceId = 'service_07bcq7n';
        const templateId = 'template_spbi5ff';
        const publicKey = 'Ou2_RCV_HFFSPeXaD';

        //create a new object that contains dynamic template params
        const templateParams = {
            from_name: name,
            from_lname: lname,
            from_number: phone,
            from_email: email,
            to_name : 'Benas Vildžius',
            message: message,
        }

        //send the email using emailjs
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                successPopup();
                setName('');
                setLName('');
                setPhone('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.log("Something went wrong!",(error))
                errorPopup();
                suggestion();
            })

    }

    return <section id="Contact" className="contact--section">
        <div>
            <p className="sub--title">Get in Touch</p>
            <h2>Contact Me</h2>
        </div>
            <form  onSubmit={handleSubmit} className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="contact--input text-md" name="first-name" id="first-name" required/>
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input value={lname} onChange={(e) => setLName(e.target.value)}type="text" className="contact--input text-md" name="last-name" id="last-name" required/>
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="contact--input text-md" name="email" id="email" required/>
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone Number</span>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" className="contact--input text-md" name="phone-number" id="phone-number" required/>
                    </label>
                </div>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md">Message</span>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)}  className="contact--input text-md" id="message" rows="8" placeholder="Type your message..."/>
                </label>
                <div>
                    <button className="btn btn-primary contact--form-btn">Submit</button>
                </div>
                <ToastContainer limit={1}/>
            </form>

    </section>
}