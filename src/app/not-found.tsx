import Link from 'next/link';

export default function NotFound() {
    return (
        <section className="section text-center" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
            <div className="container">
                <h1 style={{ fontSize: '4rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>404</h1>
                <h2 style={{ marginBottom: '1rem' }}>Page Not Found</h2>
                <p className="text-muted mb-3">
                    Sorry, the page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/" className="btn btn--primary">
                        Back to Home
                    </Link>
                    <Link href="/contact" className="btn btn--outline">
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
