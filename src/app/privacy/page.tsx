import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: `Privacy policy for ${SITE_NAME}. How we collect, use, and protect your personal data.`,
    alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
    return (
        <section className="section">
            <div className="container prose" style={{ maxWidth: '780px' }}>
                <h1>Privacy Policy</h1>
                <p className="text-muted" style={{ fontSize: '0.875rem' }}>
                    Last updated: 26 February 2026
                </p>

                <h2>Who We Are</h2>
                <p>
                    This website is operated by {SITE_NAME}. When we refer to &ldquo;we&rdquo;,
                    &ldquo;us&rdquo;, or &ldquo;our&rdquo; in this policy, we mean the operator
                    of this website ({SITE_URL}).
                </p>

                <h2>What Data We Collect</h2>
                <p>When you use our website or contact us, we may collect the following information:</p>
                <ul>
                    <li>Your name</li>
                    <li>Phone number</li>
                    <li>Email address (if provided)</li>
                    <li>Postcode</li>
                    <li>Details of your enquiry</li>
                </ul>
                <p>
                    We also collect standard web analytics data such as pages visited, browser type,
                    and referring URL. This data is anonymised and used to improve the website.
                </p>

                <h2>How We Use Your Data</h2>
                <p>We use the information you provide to:</p>
                <ul>
                    <li>Respond to your enquiry or quote request</li>
                    <li>Arrange a drain survey appointment</li>
                    <li>Improve our website and services</li>
                </ul>
                <p>
                    We will not sell, rent, or share your personal information with third parties
                    for marketing purposes.
                </p>

                <h2>Legal Basis for Processing</h2>
                <p>
                    We process your data based on legitimate interest (responding to your enquiry)
                    and, where applicable, your consent.
                </p>

                <h2>Data Retention</h2>
                <p>
                    We retain your personal data only for as long as necessary to fulfil the purposes
                    for which it was collected, or as required by law.
                </p>

                <h2>Your Rights</h2>
                <p>Under UK data protection law, you have the right to:</p>
                <ul>
                    <li>Request access to the personal data we hold about you</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Withdraw consent at any time</li>
                </ul>

                <h2>Cookies</h2>
                <p>
                    For information about how we use cookies, please see our{' '}
                    <a href="/cookies">Cookies Policy</a>.
                </p>

                <h2>Contact</h2>
                <p>
                    If you have any questions about this privacy policy or wish to exercise your
                    rights, please <a href="/contact">contact us</a>.
                </p>
            </div>
        </section>
    );
}
