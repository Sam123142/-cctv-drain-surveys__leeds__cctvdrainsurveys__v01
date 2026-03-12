import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTABanner from '@/components/CTABanner';
import { PHONE_DISPLAY, PHONE_TEL, SITE_URL, SITE_NAME } from '@/lib/constants';
import { AREA_DATA, getAreaBySlug, getAllAreaSlugs } from '@/lib/areas';

/* ── Static params – pre-render every area at build time ──── */
export function generateStaticParams() {
    return getAllAreaSlugs().map((slug) => ({ slug }));
}

/* ── Metadata ─────────────────────────────────────────────── */
type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const area = getAreaBySlug(slug);
    if (!area) return {};

    return {
        title: `CCTV Drain Surveys in ${area.name}`,
        description: area.metaDescription,
        alternates: { canonical: `/areas/${area.slug}` },
        openGraph: {
            title: `CCTV Drain Surveys in ${area.name} | ${SITE_NAME}`,
            description: area.metaDescription,
            url: `${SITE_URL}/areas/${area.slug}`,
            type: 'website',
        },
    };
}

/* ── Page component ───────────────────────────────────────── */
export default async function AreaPage({ params }: PageProps) {
    const { slug } = await params;
    const area = getAreaBySlug(slug);
    if (!area) notFound();

    /* Resolve nearby areas to full objects (filter out any that don't exist) */
    const nearbyAreas = area.nearby
        .map((s) => AREA_DATA.find((a) => a.slug === s))
        .filter(Boolean) as typeof AREA_DATA;

    return (
        <>
            {/* ── Hero ──────────────────────────────────────── */}
            <section className="hero">
                <div className="container">
                    <nav aria-label="Breadcrumb" style={{ marginBottom: '1rem', fontSize: '0.9rem', opacity: 0.85 }}>
                        <Link href="/" style={{ color: '#fff' }}>Home</Link>
                        {' › '}
                        <Link href="/areas-we-cover" style={{ color: '#fff' }}>Areas We Cover</Link>
                        {' › '}
                        <span>{area.name}</span>
                    </nav>
                    <h1>CCTV Drain Surveys in {area.name}</h1>
                    <p>{area.intro}</p>
                    <div className="hero__actions">
                        <a href={`tel:${PHONE_TEL}`} className="btn btn--cta btn--lg">
                            Call {PHONE_DISPLAY}
                        </a>
                        <Link
                            href="/contact"
                            className="btn btn--outline btn--lg"
                            style={{ borderColor: '#fff', color: '#fff' }}
                        >
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── When people book ─────────────────────────── */}
            <section className="section">
                <div className="container">
                    <h2>When People in {area.name} Usually Book This Service</h2>
                    <p className="mb-2">
                        Most people get in touch when they notice something isn&rsquo;t right
                        with their drains, or when they need a report for a property transaction.
                        Common reasons include:
                    </p>
                    <ul className="check-list">
                        {area.bookingReasons.map((reason, i) => (
                            <li key={i}>{reason}</li>
                        ))}
                    </ul>
                    <p className="mt-3 text-muted" style={{ fontSize: '0.9rem' }}>
                        If you&rsquo;re in {area.name} or nearby, get in touch and we&rsquo;ll
                        confirm availability.
                    </p>
                </div>
            </section>

            {/* ── What's included ──────────────────────────── */}
            <section className="section section--alt">
                <div className="container">
                    <h2>What&rsquo;s Included in Every Survey</h2>
                    <p className="mb-2">
                        Every CCTV drain survey we carry out includes the same comprehensive
                        service, whether the property is in {area.name} or elsewhere in Leeds:
                    </p>
                    <div className="grid-2 mt-2">
                        <ul className="check-list">
                            <li>High-definition camera inspection of the full drainage run</li>
                            <li>Written condition report with annotated images</li>
                            <li>Identification of blockages, cracks, root ingress, and displaced joints</li>
                            <li>Pipe material, diameter, and depth information (where accessible)</li>
                        </ul>
                        <ul className="check-list">
                            <li>Location and severity grading of any defects found</li>
                            <li>Recommendations for repair, relining, or further investigation</li>
                            <li>Digital copy of the report for your records, solicitor, or mortgage lender</li>
                            <li>On-site walkthrough of findings when available</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── How it works ─────────────────────────────── */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center mb-3">How It Works</h2>
                    <div className="steps">
                        <div className="step card">
                            <div className="step__number">1</div>
                            <h3>Get in Touch</h3>
                            <p>
                                Call us or send a quick enquiry. Let us know the property type, any
                                symptoms you&rsquo;ve noticed, and whether the survey is for a
                                purchase, maintenance, or insurance matter.
                            </p>
                        </div>
                        <div className="step card">
                            <div className="step__number">2</div>
                            <h3>On-Site Inspection</h3>
                            <p>
                                We access the drainage system via an inspection chamber or suitable
                                entry point. The HD camera is fed through the pipes, recording the
                                condition of each section.
                            </p>
                        </div>
                        <div className="step card">
                            <div className="step__number">3</div>
                            <h3>Report &amp; Recommendations</h3>
                            <p>
                                You receive a clear, written report with imagery and a summary of
                                what was found. If repairs are needed, the report outlines your
                                options.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Who this is for ──────────────────────────── */}
            <section className="section section--alt">
                <div className="container">
                    <h2>Who This Service Is For</h2>
                    <div className="grid-2 mt-2">
                        <div className="card">
                            <h3>Home Buyers</h3>
                            <p>
                                If you&rsquo;re buying a property in {area.name}, a pre-purchase
                                drain survey can reveal hidden drainage issues before you exchange.
                                Problems such as cracked pipes or root ingress won&rsquo;t show up
                                in a standard building survey.
                            </p>
                        </div>
                        <div className="card">
                            <h3>Homeowners</h3>
                            <p>
                                Recurring blockages, slow-draining sinks, or bad smells often
                                point to a deeper issue. A camera survey pinpoints the cause so
                                you can fix the right problem — not just treat the symptoms.
                            </p>
                        </div>
                        <div className="card">
                            <h3>Landlords &amp; Letting Agents</h3>
                            <p>
                                Proactive drainage checks help avoid emergency callouts and tenant
                                complaints. A survey report also provides documentation for
                                compliance and maintenance records.
                            </p>
                        </div>
                        <div className="card">
                            <h3>Businesses &amp; Commercial Properties</h3>
                            <p>
                                Commercial kitchens, car parks, and larger premises often have more
                                complex drainage. A CCTV survey identifies build-up, structural
                                wear, or grease trap issues before they cause disruption.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Mid-page CTA ─────────────────────────────── */}
            <section className="section">
                <div className="container">
                    <CTABanner
                        heading={`Need a Drain Survey in ${area.name}?`}
                        text={`Serving ${area.name} and nearby parts of Leeds. Call or send an enquiry for a no-obligation quote.`}
                    />
                </div>
            </section>

            {/* ── FAQs ─────────────────────────────────────── */}
            <section className="section section--alt">
                <div className="container">
                    <h2 className="text-center mb-3">Frequently Asked Questions</h2>
                    <div className="faq-list">
                        {area.faqs.map((faq, i) => (
                            <details key={i} className="faq-item">
                                <summary>{faq.question}</summary>
                                <div className="faq-item__body">
                                    <p>{faq.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Nearby areas ─────────────────────────────── */}
            {nearbyAreas.length > 0 && (
                <section className="section">
                    <div className="container">
                        <h2>Nearby Areas We Also Cover</h2>
                        <p className="mb-2">
                            We also carry out CCTV drain surveys in these areas near {area.name}:
                        </p>
                        <div className="area-tags">
                            {nearbyAreas.map((nearby) => (
                                <Link
                                    key={nearby.slug}
                                    href={`/areas/${nearby.slug}`}
                                    className="area-tag"
                                >
                                    {nearby.name}
                                </Link>
                            ))}
                        </div>
                        <div className="mt-3">
                            <Link href="/areas-we-cover" className="btn btn--outline">
                                View All Areas We Cover
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* ── Final CTA ───────────────────────────────── */}
            <section className="section section--alt">
                <div className="container">
                    <CTABanner
                        heading="Ready to Book Your Drain Survey?"
                        text={`Serving ${area.name} and the wider Leeds area. Call for a quote or send a quick enquiry.`}
                    />
                    <div className="text-center mt-3">
                        <Link href="/cctv-drain-surveys-leeds" className="btn btn--primary">
                            View Full Service Details
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
