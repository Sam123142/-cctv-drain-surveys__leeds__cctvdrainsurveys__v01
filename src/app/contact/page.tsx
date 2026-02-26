import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'Contact Us – CCTV Drain Surveys Leeds',
    description:
        'Get in touch for a CCTV drain survey quote in Leeds. Call us directly or send a quick enquiry using our contact form.',
    alternates: { canonical: '/contact' },
};

export default function ContactPage() {
    return (
        <>
            <section className="hero" style={{ paddingBlock: '2.5rem' }}>
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>
                        Call us directly or fill in the form below for a no-obligation quote.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-2">
                        <div>
                            <h2>Get in Touch</h2>
                            <p>
                                The quickest way to reach us is by phone. We&rsquo;re happy to answer
                                questions, talk through your situation, and provide a quote over the phone.
                            </p>

                            <div className="card mt-3" style={{ textAlign: 'center' }}>
                                <h3 style={{ marginBottom: '0.5rem' }}>Call Us</h3>
                                <a
                                    href={`tel:${PHONE_TEL}`}
                                    className="btn btn--cta btn--lg btn--block"
                                >
                                    {PHONE_DISPLAY}
                                </a>
                            </div>

                            <div className="mt-4">
                                <h3>What to Tell Us</h3>
                                <ul className="check-list">
                                    <li>The type of property (house, flat, commercial)</li>
                                    <li>Your postcode or area in Leeds</li>
                                    <li>The reason for the survey (purchase, blockage, maintenance)</li>
                                    <li>Any symptoms you&rsquo;ve noticed (slow drains, smells, damp)</li>
                                </ul>
                            </div>

                            <p className="mt-3 text-muted" style={{ fontSize: '0.875rem' }}>
                                Serving Leeds and nearby areas.
                            </p>
                        </div>

                        <div>
                            <h2>Send an Enquiry</h2>
                            <p className="mb-2">
                                Fill in the form and we&rsquo;ll get back to you — usually within
                                a few hours during working days.
                            </p>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
