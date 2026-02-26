import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'Cookies Policy',
    description: `Cookies policy for ${SITE_NAME}. How we use cookies on this website.`,
    alternates: { canonical: '/cookies' },
};

export default function CookiesPage() {
    return (
        <section className="section">
            <div className="container prose" style={{ maxWidth: '780px' }}>
                <h1>Cookies Policy</h1>
                <p className="text-muted" style={{ fontSize: '0.875rem' }}>
                    Last updated: 26 February 2026
                </p>

                <h2>What Are Cookies?</h2>
                <p>
                    Cookies are small text files placed on your device when you visit a website.
                    They are widely used to make websites work more efficiently and to provide
                    information to website operators.
                </p>

                <h2>How We Use Cookies</h2>
                <p>This website uses cookies for the following purposes:</p>

                <h3>Essential Cookies</h3>
                <p>
                    These cookies are necessary for the website to function properly. They enable
                    basic features like page navigation and access to secure areas. The website
                    cannot function properly without these cookies.
                </p>

                <h3>Analytics Cookies</h3>
                <p>
                    We may use analytics cookies (such as Google Analytics) to understand how
                    visitors interact with our website. These cookies collect information
                    anonymously and help us improve the site. You can opt out of analytics
                    cookies using your browser settings.
                </p>

                <h2>Managing Cookies</h2>
                <p>
                    Most web browsers allow you to control cookies through their settings. You
                    can set your browser to refuse cookies or to alert you when cookies are
                    being sent. Please note that disabling cookies may affect the functionality
                    of this website.
                </p>
                <p>
                    For more information about managing cookies, visit{' '}
                    <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">
                        aboutcookies.org
                    </a>.
                </p>

                <h2>Changes to This Policy</h2>
                <p>
                    We may update this cookies policy from time to time. Any changes will be
                    posted on this page with an updated revision date.
                </p>

                <h2>Contact</h2>
                <p>
                    If you have any questions about our use of cookies, please{' '}
                    <a href="/contact">contact us</a>.
                </p>
            </div>
        </section>
    );
}
