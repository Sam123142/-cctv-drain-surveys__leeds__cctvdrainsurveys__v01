import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About – CCTV Drain Surveys Leeds',
    description:
        'Learn how our CCTV drain survey service works, how enquiries are handled, and our commitment to clear reporting. Serving Leeds and nearby areas.',
    alternates: { canonical: '/about' },
};

export default function AboutPage() {
    return (
        <>
            <section className="hero" style={{ paddingBlock: '2.5rem' }}>
                <div className="container">
                    <h1>About Our Service</h1>
                    <p>
                        Straightforward CCTV drain surveys, serving Leeds and nearby areas.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '780px' }}>
                    <h2>How It Works</h2>
                    <p>
                        We provide professional CCTV drain survey services covering Leeds
                        and the surrounding areas. When you get in touch — by phone or
                        through our enquiry form — we take your details and arrange a
                        convenient time for the survey to be carried out.
                    </p>
                    <p>
                        A qualified drainage engineer visits the property with specialist
                        HD camera equipment. The camera is fed through the drainage system
                        to record footage of the pipes, joints, and any obstructions or
                        damage present.
                    </p>

                    <h2 className="mt-4">What You Receive</h2>
                    <p>
                        After the survey, you receive a written report that includes:
                    </p>
                    <ul className="check-list mb-3">
                        <li>Annotated images from the camera footage</li>
                        <li>A summary of the condition of each section of drainage</li>
                        <li>Identification of any defects, their location, and severity</li>
                        <li>Recommendations for next steps (if any work is needed)</li>
                    </ul>
                    <p>
                        The report is designed to be clear and useful — whether you need
                        it for your own peace of mind, for a property purchase, or to
                        share with a solicitor, mortgage lender, or insurance provider.
                    </p>

                    <h2 className="mt-4">Our Approach</h2>
                    <p>
                        We keep things straightforward. No jargon-heavy sales pitches, no
                        pressure. You tell us what you need, we give you a clear price,
                        and we carry out the survey to a professional standard.
                    </p>
                    <p>
                        If the survey reveals an issue, we explain what it means in plain
                        English and outline the options available. We provide the
                        information — you make the decisions.
                    </p>

                    <h2 className="mt-4">Serving Leeds and Nearby Areas</h2>
                    <p>
                        We cover Leeds city centre and the wider area, including suburbs and
                        surrounding towns. If you&rsquo;re not sure whether we cover
                        your location, just ask — we&rsquo;re happy to check.
                    </p>

                    <div className="mt-4" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <Link href="/cctv-drain-surveys-leeds" className="btn btn--primary">
                            View Full Service Details
                        </Link>
                        <Link href="/contact" className="btn btn--cta">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
