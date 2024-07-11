import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import useAlert from '../hooks/useAlert';

// Contact Form
const ContactForm = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const { alert, showAlert, hideAlert } = useAlert()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,

            {
                from_name: form.name,
                to_name: 'Shareen',
                from_email: form.email,
                to_email: 'ariaresehn@gmail.com',
                message: form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,

        ).then(() => {
            setIsLoading(false);
            setForm({ name: '', email: '', message: '' });
            showAlert({ show: true, text: 'message sent', type: 'success' })
        }).catch((error) => {
            setIsLoading(false);
            console.log('email sending error:', error);
            showAlert({ show: true, text: 'message failed to send', type: 'error' })
        });
    };

    return (
        <section>
            <div className="heading-container">
                <h1 className='jacquard-24-charted-regular sm:text-6xl text-pink-100'>Get in Touch</h1>
            </div>



            <div className='contact-container flex flex-row'>
                <form className='contact-form w-full mr-5' onSubmit={handleSubmit}>
                    <label htmlFor='name' className='source-code-pro sm:text-xl'>
                        Name
                    </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        className='input'
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor='email' className='source-code-pro sm:text-xl'>
                        Email
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        className='input'
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor='message' className='source-code-pro sm:text-xl'>
                        Message
                    </label>
                    <textarea
                        id='message'
                        name='message'
                        rows='5'
                        className='textarea'
                        value={form.message}
                        onChange={handleChange}
                        required
                    />

                    <button
                        type='submit'
                        className='glow-button pink text-center justify-center'
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>

            </div>
        </section>
    );
};

export default ContactForm;
