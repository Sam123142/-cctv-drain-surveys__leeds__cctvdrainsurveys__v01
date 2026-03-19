import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CTABanner from '@/components/CTABanner';
import { AREA_DATA } from '@/lib/areas';

export const metadata: Metadata = {
    title: 'Areas We Cover – CCTV Drain Surveys in Leeds & Surrounding Areas',
    description:
        'We carry out CCTV drain surveys across Leeds and nearby areas including Headingley, Roundhay, Horsforth, Pudsey, Morley, and more. Get in touch for a quote.',
    alternates: { canonical: '/areas-we-cover' },
};

export default function AreasPage() {
    return (
        <>
            {/* ── Header ────────────────────────────────────── */}
            <section className="hero hero--has-image" style={{ paddingBlock: '3.5rem' }}>
                <Image
                    src="/images/drain-blockage-investigation.png"
                    alt="Leeds city view for drainage services"
                    fill
                    priority
                    className="hero__bg"
                    sizes="100vw"
                />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1>Areas We Cover</h1>
                    <p>
                        CCTV drain surveys serving Leeds city centre and the surrounding areas.
                    </p>
                </div>
            </section>

            {/* ── Area List ─────────────────────────────────── */}
            <section className="section">
                <div className="container">
                    <h2 className="mb-2">Drain Surveys Across Leeds</h2>
                    <p className="mb-3">
                        We cover Leeds and the wider West Yorkshire area. Whether your property is
                        in the city centre or one of the surrounding suburbs, we can arrange a
                        CCTV drain survey at a time that works for you.
                    </p>

                    <div className="grid-4">
                        {AREA_DATA.map((area) => (
                            <Link
                                key={area.slug}
                                href={`/areas/${area.slug}`}
                                className="card card--area-link text-center"
                                style={{ padding: '1rem', textDecoration: 'none', color: 'inherit', display: 'block' }}
                            >
                                <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{area.name}</h3>
                                <p className="text-muted" style={{ fontSize: '0.85rem', marginBottom: 0 }}>
                                    CCTV drain surveys
                                </p>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-4">
                        <h3>Not Listed Here?</h3>
                        <p>
                            This is not an exhaustive list. If your property is in or near Leeds,
                            there&rsquo;s a good chance we can help.{' '}
                            <Link href="/contact">Get in touch</Link> and we&rsquo;ll let you know.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Links ─────────────────────────────────────── */}
            <section className="section section--alt">
                <div className="container grid-2">
                    <div className="card">
                        <h3>About Our Service</h3>
                        <p>
                            Find out what&rsquo;s included, how the survey works, and what your report
                            will cover.
                        </p>
                        <Link href="/cctv-drain-surveys-leeds" className="btn btn--primary">
                            View Service Details
                        </Link>
                    </div>
                    <div className="card">
                        <h3>Get a Quote</h3>
                        <p>
                            Call us or fill in the short enquiry form for a no‑obligation quote on
                            your drain survey.
                        </p>
                        <Link href="/contact" className="btn btn--cta">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── CTA ───────────────────────────────────────── */}
            <section className="section">
                <div className="container">
                    <CTABanner
                        heading="Need a Drain Survey in Your Area?"
                        text="Serving Leeds and nearby areas. Call or send an enquiry for a quote."
                    />
                </div>
            </section>
        </>
    );
}
