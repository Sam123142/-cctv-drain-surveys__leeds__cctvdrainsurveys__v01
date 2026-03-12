import Link from 'next/link';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/constants';

interface CTABannerProps {
    heading?: string;
    text?: string;
    showForm?: boolean;
}

export default function CTABanner({
    heading = 'Ready to Book Your Drain Survey?',
    text = 'Speak to our team today for a no-obligation quote. Serving Leeds and nearby areas.',
    showForm = true,
}: CTABannerProps) {
    return (
        <div className="cta-banner">
            <img src="/icons/service-truck.svg" alt="" className="icon icon--md mb-2" style={{ marginInline: 'auto' }} />
            <h2>{heading}</h2>
            <p>{text}</p>
            <div className="cta-banner__actions">
                <a href={`tel:${PHONE_TEL}`} className="btn btn--cta btn--lg">
                    Call {PHONE_DISPLAY}
                </a>
                {showForm && (
                    <Link href="/contact" className="btn btn--outline btn--lg" style={{ borderColor: '#fff', color: '#fff' }}>
                        Send an Enquiry
                    </Link>
                )}
            </div>
        </div>
    );
}
