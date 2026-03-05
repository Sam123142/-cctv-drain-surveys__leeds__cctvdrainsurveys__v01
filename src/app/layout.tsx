import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhoneBar from '@/components/PhoneBar';
import Script from 'next/script';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: `${SITE_NAME} | Professional Drain Inspections`,
        template: `%s | ${SITE_NAME}`,
    },
    description:
        'Professional CCTV drain surveys serving Leeds and nearby areas. HD camera inspections with detailed reports for homeowners, buyers, and businesses.',
    openGraph: {
        type: 'website',
        locale: 'en_GB',
        siteName: SITE_NAME,
    },
    twitter: {
        card: 'summary',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: '/',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en-GB" className={inter.variable}>
            <head>
                <Script id="lead-tracking-init" strategy="afterInteractive">
                    {`var $wc_load=function(a){return JSON.parse(JSON.stringify(a))},$wc_leads=$wc_leads||{doc:{url:$wc_load(document.URL),ref:$wc_load(document.referrer),search:$wc_load(location.search),hash:$wc_load(location.hash)}};`}
                </Script>
                <Script
                    id="lead-tracking-script"
                    src="//s.ksrndkehqnwntyxlhgto.com/163488.js"
                    strategy="afterInteractive"
                />
            </head>
            <body>
                <a href="#main-content" className="sr-only" style={{ position: 'absolute' }}>
                    Skip to main content
                </a>
                <PhoneBar />
                <Header />
                <main id="main-content">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
