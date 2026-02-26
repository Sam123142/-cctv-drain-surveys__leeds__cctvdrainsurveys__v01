import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import ContactForm from '@/components/ContactForm';
import { PHONE_DISPLAY, PHONE_TEL, AREAS, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'CCTV Drain Surveys Leeds – HD Inspections & Reports',
    description:
        'Book a professional CCTV drain survey in Leeds. HD camera inspections, detailed reports, and clear recommendations. Covering Leeds and surrounding areas.',
    alternates: { canonical: '/cctv-drain-surveys-leeds' },
    openGraph: {
        title: 'CCTV Drain Surveys Leeds – HD Inspections & Reports',
        description:
            'Professional CCTV drain surveys serving Leeds. HD inspections with detailed written reports.',
        url: `${SITE_URL}/cctv-drain-surveys-leeds`,
        type: 'website',
    },
};

/* ── JSON-LD: Service Schema ──────────────────────────────── */
const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'CCTV Drain Survey',
    description:
        'Professional CCTV drain survey using HD cameras to inspect drainage systems, identify faults, and produce detailed condition reports.',
    areaServed: {
        '@type': 'City',
        name: 'Leeds',
    },
    serviceType: 'CCTV Drain Inspection',
    provider: {
        '@type': 'Organization',
        name: 'CCTV Drain Surveys Leeds',
        url: SITE_URL,
    },
};

export default function ServicePage() {
    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            {/* ── Hero ──────────────────────────────────────── */}
            <section className="hero">
                <div className="container">
                    <h1>CCTV Drain Surveys in Leeds</h1>
                    <p>
                        Detailed HD camera inspections of your drainage system. We identify
                        blockages, damage, and structural issues — and give you a clear report
                        with recommendations.
                    </p>
                    <div className="hero__actions">
                        <a href={`tel:${PHONE_TEL}`} className="btn btn--cta btn--lg">
                            Call {PHONE_DISPLAY}
                        </a>
                        <Link href="/contact" className="btn btn--outline btn--lg" style={{ borderColor: '#fff', color: '#fff' }}>
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── What You Get ──────────────────────────────── */}
            <section className="section">
                <div className="container">
                    <h2>What You Get with Our CCTV Drain Survey</h2>
                    <p>Every survey includes the following as standard:</p>
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

            {/* ── How It Works ──────────────────────────────── */}
            <section className="section section--alt">
                <div className="container">
                    <h2 className="text-center mb-3">How the Survey Works</h2>
                    <div className="steps">
                        <div className="step card">
                            <div className="step__number">1</div>
                            <h3>Book Your Survey</h3>
                            <p>
                                Give us a call or send an enquiry through the form. Let us know
                                the property type, any symptoms you&rsquo;ve noticed, and whether it&rsquo;s
                                for a purchase, maintenance, or insurance matter.
                            </p>
                        </div>
                        <div className="step card">
                            <div className="step__number">2</div>
                            <h3>On-Site Inspection</h3>
                            <p>
                                We access the drainage system via an inspection chamber or other
                                suitable entry point. The HD camera is fed through the pipes,
                                recording the condition of each section.
                            </p>
                        </div>
                        <div className="step card">
                            <div className="step__number">3</div>
                            <h3>Report &amp; Recommendations</h3>
                            <p>
                                You receive a clear, written report with imagery and a summary of
                                what was found. If repairs are needed, the report outlines your options.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Who It's For ──────────────────────────────── */}
            <section className="section">
                <div className="container">
                    <h2>Who Needs a CCTV Drain Survey?</h2>
                    <div className="grid-2 mt-2">
                        <div className="card">
                            <h3>Home Buyers</h3>
                            <p>
                                If you&rsquo;re buying a property in Leeds, a pre-purchase drain survey
                                can reveal hidden problems before you exchange. Issues such as cracked
                                pipes or root ingress might not show up in a standard building survey.
                            </p>
                        </div>
                        <div className="card">
                            <h3>Homeowners</h3>
                            <p>
                                Recurring blockages, slow-draining sinks, or unpleasant smells often
                                point to a deeper issue. A camera survey pinpoints the cause so you
                                can fix the right problem — not just treat the symptoms.
                            </p>
                        </div>
                        <div className="card">
                            <h3>Landlords &amp; Letting Agents</h3>
                            <p>
                                Proactive drainage checks help avoid emergency callouts and tenant
                                complaints. A survey report also provides documentation for compliance
                                and maintenance records.
                            </p>
                        </div>
                        <div className="card">
                            <h3>Businesses &amp; Commercial Properties</h3>
                            <p>
                                Commercial kitchens, car parks, and larger premises often have more
                                complex drainage systems. A CCTV survey identifies fatberg build-up,
                                grease traps issues, or structural wear before they cause disruption.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Common Problems ───────────────────────────── */}
            <section className="section section--alt">
                <div className="container">
                    <h2>Problems We Commonly Find</h2>
                    <p className="mb-3">
                        These are some of the most frequent drainage issues uncovered by camera surveys
                        in Leeds properties:
                    </p>
                    <div className="grid-3">
                        <div className="card">
                            <h3>Blockages</h3>
                            <p>
                                Fat, grease, wet wipes, and general debris are the most common culprits.
                                The camera shows exactly where the blockage sits and how severe it is.
                            </p>
                        </div>
                        <div className="card">
                            <h3>Root Ingress</h3>
                            <p>
                                Tree and shrub roots can force their way into pipe joints, causing
                                obstructions and eventually cracking the pipe. Particularly common
                                in older clay drainage.
                            </p>
                        </div>
                        <div className="card">
                            <h3>Cracked or Broken Pipes</h3>
                            <p>
                                Ground movement, heavy vehicles, or age can crack pipes. The camera
                                footage records the type and location of the break for accurate quoting.
                            </p>
                        </div>
                        <div className="card">
                            <h3>Displaced Joints</h3>
                            <p>
                                Where pipes have separated at the joints, allowing soil and water to
                                leak in or out. This often leads to sinkholes or localised subsidence.
                            </p>
                        </div>
                        <div className="card">
                            <h3>Collapsed Drains</h3>
                            <p>
                                In severe cases, the pipe has collapsed entirely. A survey confirms
                                the location and extent, so the excavation can be planned accurately.
                            </p>
                        </div>
                        <div className="card">
                            <h3>Scale &amp; Corrosion</h3>
                            <p>
                                Iron and steel pipes can corrode internally, reducing flow capacity.
                                Limescale build-up is also common in hard water areas around Leeds.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Results & Next Steps ──────────────────────── */}
            <section className="section">
                <div className="container">
                    <h2>What Happens After the Survey?</h2>
                    <p>
                        Once the survey is complete, you&rsquo;ll receive your report — usually within
                        a few working days. The report includes colour-coded severity ratings so you
                        can quickly see what&rsquo;s urgent and what&rsquo;s minor.
                    </p>
                    <h3 className="mt-3 mb-1">Typical Outcomes</h3>
                    <ul className="check-list">
                        <li>
                            <strong>No significant issues:</strong> The drains are in acceptable condition.
                            No further action needed — you&rsquo;ve got peace of mind.
                        </li>
                        <li>
                            <strong>Minor defects:</strong> Small cracks or early‐stage root ingress
                            that can usually be addressed with a targeted repair or lining.
                        </li>
                        <li>
                            <strong>Moderate issues:</strong> Displaced joints or partial blockages that
                            warrant attention. Options typically include patch repair, relining, or localised
                            excavation.
                        </li>
                        <li>
                            <strong>Serious damage:</strong> Collapsed sections or severe structural failure.
                            The report will detail the location and extent so drainage contractors can quote
                            accurately for repair.
                        </li>
                    </ul>
                    <p className="mt-2 text-muted" style={{ fontSize: '0.9rem' }}>
                        We provide the report and recommendations. Repair work (if needed) is a
                        separate matter — the report gives you everything you need to get accurate
                        quotes from drainage contractors.
                    </p>
                </div>
            </section>

            {/* ── Mid-page CTA ──────────────────────────────── */}
            <section className="section section--alt">
                <div className="container">
                    <CTABanner
                        heading="Have a Question About Your Drains?"
                        text="Call for friendly, no-obligation advice or send us a quick enquiry."
                    />
                </div>
            </section>

            {/* ── Pricing Guidance ──────────────────────────── */}
            <section className="section">
                <div className="container">
                    <h2>Pricing Guidance</h2>
                    <p>
                        The cost of a CCTV drain survey depends on a few factors: the length and
                        complexity of the drainage run, the number of access points, and the level
                        of reporting you need.
                    </p>
                    <p>
                        We quote upfront based on the information you provide — there are no hidden
                        fees. When you get in touch, let us know the property type and what the survey
                        is for (purchase, maintenance, insurance, etc.) and we&rsquo;ll give you a
                        clear price before any work takes place.
                    </p>
                    <div className="text-center mt-3">
                        <a href={`tel:${PHONE_TEL}`} className="btn btn--cta btn--lg">
                            Call for a Quote
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Areas Served ──────────────────────────────── */}
            <section className="section section--alt">
                <div className="container">
                    <h2 className="text-center mb-2">Areas We Cover in Leeds</h2>
                    <p className="text-center text-muted mb-3">
                        We carry out drain surveys across Leeds and the surrounding areas, including:
                    </p>
                    <div className="area-tags" style={{ justifyContent: 'center' }}>
                        {AREAS.map((area) => (
                            <Link key={area} href="/areas-we-cover" className="area-tag">
                                {area}
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-3">
                        <Link href="/areas-we-cover" className="btn btn--outline">
                            Full Area List
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── FAQs ──────────────────────────────────────── */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center mb-3">Frequently Asked Questions</h2>
                    <div className="faq-list">
                        <details className="faq-item">
                            <summary>How long does a CCTV drain survey take?</summary>
                            <div className="faq-item__body">
                                <p>
                                    Most residential surveys take between 45 minutes and two hours, depending on
                                    the size of the property and the length of the drainage run. Larger or more
                                    complex systems may take longer.
                                </p>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>Do I need to be at the property during the survey?</summary>
                            <div className="faq-item__body">
                                <p>
                                    Someone needs to be available to provide access, but you don&rsquo;t
                                    need to supervise. If the access points are external and arrangements can
                                    be made, it may not always be necessary.
                                </p>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>What does a drain survey report include?</summary>
                            <div className="faq-item__body">
                                <p>
                                    A written summary of findings, annotated images from the camera footage,
                                    pipe material and condition notes, and recommendations for any required
                                    repairs or further investigation.
                                </p>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>Is a pre-purchase drain survey worth it?</summary>
                            <div className="faq-item__body">
                                <p>
                                    Standard building surveys don&rsquo;t inspect below-ground drainage. A
                                    CCTV survey gives you visibility of any issues that could be expensive to fix
                                    after purchase — collapsed pipes, root damage, or shared drainage complications.
                                </p>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>How much does a drain survey cost in Leeds?</summary>
                            <div className="faq-item__body">
                                <p>
                                    Pricing varies based on the drainage system size, access, and reporting
                                    requirements. We provide a clear price upfront once we know the details.
                                    Get in touch for a quote.
                                </p>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>Can you survey drains in older Leeds properties?</summary>
                            <div className="faq-item__body">
                                <p>
                                    Yes. Older properties — particularly those with clay pipes — often benefit
                                    most from a CCTV inspection. These systems are more prone to root ingress
                                    and joint displacement.
                                </p>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>Will the survey cause any mess or disruption?</summary>
                            <div className="faq-item__body">
                                <p>
                                    CCTV drain surveys are non-invasive. The camera is inserted through an
                                    existing access point (such as a manhole or inspection chamber), so there&rsquo;s
                                    no digging involved unless a separate issue is found.
                                </p>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>Can a CCTV survey find where a leak is coming from?</summary>
                            <div className="faq-item__body">
                                <p>
                                    The camera can identify cracks, fractures, and displaced joints where
                                    leakage is likely occurring. For above-ground leaks, a different type of
                                    investigation may be needed.
                                </p>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>Do you survey commercial properties as well?</summary>
                            <div className="faq-item__body">
                                <p>
                                    Yes. We carry out CCTV drain surveys for commercial premises, including
                                    restaurants, offices, industrial units, and multi-unit residential blocks
                                    across the Leeds area.
                                </p>
                            </div>
                        </details>

                        <details className="faq-item">
                            <summary>What if the survey finds something serious?</summary>
                            <div className="faq-item__body">
                                <p>
                                    The report will detail the problem — its location, severity, and recommended
                                    next steps. You can use the report to get targeted quotes from drainage
                                    repair contractors.
                                </p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* ── Contact / Final CTA ───────────────────────── */}
            <section className="section section--alt" id="enquiry">
                <div className="container">
                    <div className="grid-2">
                        <div>
                            <h2>Book Your Survey or Ask a Question</h2>
                            <p>
                                Fill in the short form and we&rsquo;ll get back to you — usually within
                                a few hours during working days. Or call us directly for an immediate response.
                            </p>
                            <div className="mt-3">
                                <a href={`tel:${PHONE_TEL}`} className="btn btn--cta btn--lg">
                                    Call {PHONE_DISPLAY}
                                </a>
                            </div>
                            <p className="mt-3 text-muted" style={{ fontSize: '0.875rem' }}>
                                Serving Leeds and nearby areas.
                            </p>
                        </div>
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
