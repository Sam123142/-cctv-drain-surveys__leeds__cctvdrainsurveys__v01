import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/constants';
import { AREA_DATA } from '@/lib/areas';

export const metadata: Metadata = {
    title: 'CCTV Drain Surveys Leeds | Professional Drain Inspections',
    description:
        'Need a CCTV drain survey in Leeds? Professional HD camera inspections with clear reports. Serving Leeds and nearby areas. Call today for a quote.',
    alternates: { canonical: '/' },
};

export default function HomePage() {
    return (
        <>
            {/* ── Hero ──────────────────────────────────────── */}
            <section className="hero">
                <div className="container">
                    <h1>CCTV Drain Surveys in Leeds</h1>
                    <p>
                        Find out exactly what&rsquo;s going on underground. We provide professional
                        HD camera inspections of your drainage system — with a clear report you
                        can act on.
                    </p>
                    <div className="hero__actions">
                        <a href={`tel:${PHONE_TEL}`} className="btn btn--cta btn--lg">
                            Call {PHONE_DISPLAY}
                        </a>
                        <Link href="/contact" className="btn btn--outline btn--lg" style={{ borderColor: '#fff', color: '#fff' }}>
                            Request a Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── What We Do ────────────────────────────────── */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center mb-3">What Is a CCTV Drain Survey?</h2>
                    <div className="grid-2">
                        <div>
                            <p>
                                A CCTV drain survey uses a small, high-definition camera to inspect the inside of your
                                drains and pipes. The camera is fed through the drainage system to record footage
                                of its condition, pinpointing any blockages, damage, root ingress, or structural problems.
                            </p>
                            <p>
                                The survey results in a detailed report with imagery that shows exactly where
                                any issues are, their severity, and what action (if any) is recommended.
                            </p>
                        </div>
                        <div>
                            <h3 className="mb-1">Common Reasons for a Survey</h3>
                            <ul className="check-list">
                                <li>Buying a property and want to check the drains</li>
                                <li>Recurring blockages, slow drainage, or bad smells</li>
                                <li>Planning a renovation or extension near existing drains</li>
                                <li>Landlord or letting agent compliance checks</li>
                                <li>Insurance or mortgage requirements</li>
                                <li>Investigating the source of damp or subsidence</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <Link href="/cctv-drain-surveys-leeds" className="btn btn--primary btn--lg">
                            Full Service Details
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── How It Works ──────────────────────────────── */}
            <section className="section section--alt">
                <div className="container">
                    <h2 className="text-center mb-3">How It Works</h2>
                    <div className="steps">
                        <div className="step card">
                            <div className="step__number">1</div>
                            <h3>Get in Touch</h3>
                            <p>
                                Call us or fill in the short form with your details and a brief description
                                of the issue (or that you need a pre-purchase survey).
                            </p>
                        </div>
                        <div className="step card">
                            <div className="step__number">2</div>
                            <h3>We Carry Out the Survey</h3>
                            <p>
                                A drainage engineer visits the property, feeds the HD camera through
                                the system, and records footage of the pipe condition.
                            </p>
                        </div>
                        <div className="step card">
                            <div className="step__number">3</div>
                            <h3>Receive Your Report</h3>
                            <p>
                                You get a written report with annotated images, a summary of findings,
                                and recommendations for any next steps.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Areas Served ──────────────────────────────── */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center mb-2">Serving Leeds and Nearby Areas</h2>
                    <p className="text-center text-muted mb-3">
                        We cover Leeds city centre and the surrounding areas, including:
                    </p>
                    <div className="area-tags" style={{ justifyContent: 'center' }}>
                        {AREA_DATA.map((area) => (
                            <Link key={area.slug} href={`/areas/${area.slug}`} className="area-tag">
                                {area.name}
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-3">
                        <Link href="/areas-we-cover" className="btn btn--outline">
                            View All Areas
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── CTA ───────────────────────────────────────── */}
            <section className="section section--alt">
                <div className="container">
                    <CTABanner />
                </div>
            </section>
        </>
    );
}
