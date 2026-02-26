'use client';

import { useState, type FormEvent } from 'react';

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // TODO: wire up to FORM_ENDPOINT (see .env.example)
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <div className="form-success" role="status">
                <p style={{ marginBottom: 0 }}>
                    <strong>Thank you for your enquiry.</strong><br />
                    We&rsquo;ll be in touch shortly to discuss your CCTV drain survey requirements.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input type="text" id="contact-name" name="name" required autoComplete="name" />
            </div>

            <div className="form-group">
                <label htmlFor="contact-phone">Phone Number</label>
                <input type="tel" id="contact-phone" name="phone" required autoComplete="tel" />
            </div>

            <div className="form-group">
                <label htmlFor="contact-postcode">Postcode</label>
                <input type="text" id="contact-postcode" name="postcode" autoComplete="postal-code"
                    placeholder="e.g. LS1 1AA" />
            </div>

            <div className="form-group">
                <label htmlFor="contact-message">How Can We Help?</label>
                <textarea id="contact-message" name="message" rows={4}
                    placeholder="Tell us briefly about your drainage issue or survey needs." />
            </div>

            <button type="submit" className="btn btn--cta btn--lg btn--block">
                Send Enquiry
            </button>
        </form>
    );
}
