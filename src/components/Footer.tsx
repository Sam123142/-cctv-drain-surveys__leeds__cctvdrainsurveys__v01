import Link from 'next/link';
import { FOOTER_LINKS, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, SITE_NAME } from '@/lib/constants';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container site-footer__inner">
                <div>
                    <h3>{SITE_NAME}</h3>
                    <p>
                        Professional CCTV drain surveys serving Leeds and nearby areas.
                        Get a clear picture of your drainage system with a detailed HD report.
                    </p>
                    <p style={{ marginTop: '0.75rem' }}>
                        <a href={`tel:${PHONE_TEL}`} style={{ color: '#fff', fontWeight: 600 }}>
                            {PHONE_DISPLAY}
                        </a>
                    </p>
                </div>

                <div>
                    <h3>Quick Links</h3>
                    <ul className="site-footer__links">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3>Information</h3>
                    <ul className="site-footer__links">
                        {FOOTER_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="container site-footer__bottom">
                <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
            </div>
        </footer>
    );
}
