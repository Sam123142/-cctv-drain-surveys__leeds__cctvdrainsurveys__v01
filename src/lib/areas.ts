/* ── Area Data Source ─────────────────────────────────────────
   Single source of truth for all area pages.
   Each entry drives the dynamic /areas/[slug] route.
   ──────────────────────────────────────────────────────────── */

export interface AreaData {
  name: string;
  slug: string;
  /** 3-4 nearby area slugs for internal linking */
  nearby: string[];
  /** Meta description (unique per area) */
  metaDescription: string;
  /** Short intro paragraph mentioning the area */
  intro: string;
  /** "When people book" bullets – practical, generic reasons */
  bookingReasons: string[];
  /** FAQ items – area-specific wording but generic content */
  faqs: { question: string; answer: string }[];
}

/* ── Helper: generate slug from area name ──────────────────── */
function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

/* ── Area definitions ──────────────────────────────────────── */
export const AREA_DATA: AreaData[] = [
  {
    name: 'Headingley',
    slug: 'headingley',
    nearby: ['kirkstall', 'meanwood', 'hyde-park', 'bramley'],
    metaDescription:
      'Book a professional CCTV drain survey in Headingley, Leeds. HD camera inspections, clear reports, and honest recommendations. Get in touch for a quote.',
    intro:
      'We serve Headingley and surrounding parts of Leeds with professional CCTV drain surveys. Whether you own a terraced house near the high street or a larger property towards Beckett Park, we can arrange a survey at a time that works for you.',
    bookingReasons: [
      'Recurring blockages that keep coming back after clearing',
      'A pre-purchase drain survey before buying a property in Headingley',
      'Bad smells coming from drains inside or outside the property',
      'Slow-draining sinks, baths, or toilets',
      'Suspected damage to underground pipework',
      'Insurance or mortgage lender requiring a drainage report',
    ],
    faqs: [
      {
        question: 'How do I book a drain survey in Headingley?',
        answer:
          'Give us a call or fill in our short enquiry form. Let us know the property type and any symptoms you\'ve noticed, and we\'ll arrange a convenient time for the survey.',
      },
      {
        question: 'What does a CCTV drain survey in Headingley include?',
        answer:
          'Every survey includes a full HD camera inspection of the drainage system, a written condition report with annotated images, and clear recommendations if any issues are found.',
      },
      {
        question: 'How long does a drain survey take?',
        answer:
          'Most residential surveys take between 45 minutes and two hours, depending on the size of the property and the drainage system.',
      },
      {
        question: 'Are there common drainage issues in Headingley?',
        answer:
          'Like many parts of Leeds, properties in Headingley can experience root ingress, displaced joints in older clay pipes, and blockages from general use. A camera survey identifies the exact cause.',
      },
      {
        question: 'Do you provide a report I can share with my solicitor?',
        answer:
          'Yes. You receive a digital copy of the report that can be forwarded to your solicitor, mortgage lender, or insurance provider.',
      },
    ],
  },
  {
    name: 'Roundhay',
    slug: 'roundhay',
    nearby: ['oakwood', 'moortown', 'chapel-allerton', 'cross-gates'],
    metaDescription:
      'Professional CCTV drain surveys in Roundhay, Leeds. HD inspections with detailed reports. Call or enquire online for a no-obligation quote.',
    intro:
      'We serve Roundhay and the surrounding parts of Leeds with CCTV drain surveys. From properties near Roundhay Park to the wider LS8 area, we can carry out a thorough camera inspection of your drainage system.',
    bookingReasons: [
      'Recurring drainage blockages that won\'t clear permanently',
      'Pre-purchase surveys for properties in the Roundhay area',
      'Unpleasant smells from indoor or outdoor drains',
      'Slow drainage throughout the property',
      'Suspected root ingress or pipe damage',
      'A report needed for a mortgage lender or insurer',
    ],
    faqs: [
      {
        question: 'Can you carry out drain surveys in Roundhay?',
        answer:
          'Yes. We regularly carry out CCTV drain surveys for properties across the Roundhay area. Get in touch and we\'ll confirm availability.',
      },
      {
        question: 'What problems can a drain camera find in Roundhay properties?',
        answer:
          'Common findings include blockages, root ingress from mature trees, cracked or displaced pipes, and scale build-up in older drainage systems.',
      },
      {
        question: 'Is a drain survey disruptive?',
        answer:
          'Not at all. CCTV drain surveys are non-invasive — the camera is inserted through an existing access point such as a manhole or inspection chamber. No digging is required.',
      },
      {
        question: 'How quickly can I get a survey booked?',
        answer:
          'Availability varies, but we aim to arrange surveys promptly. Call us or send an enquiry and we\'ll let you know the earliest available slot.',
      },
      {
        question: 'What happens after the survey is complete?',
        answer:
          'You\'ll receive a written report with camera imagery, condition notes, and recommendations. If repairs are needed, the report gives you everything required to obtain accurate quotes.',
      },
    ],
  },
  {
    name: 'Horsforth',
    slug: 'horsforth',
    nearby: ['guiseley', 'kirkstall', 'headingley', 'bramley'],
    metaDescription:
      'CCTV drain surveys in Horsforth, Leeds. Professional HD camera inspections with clear reports. Contact us for availability and a quote.',
    intro:
      'We cover Horsforth and the nearby parts of Leeds for CCTV drain surveys. Whether your property is in the town centre, near the train station, or towards Rawdon, we can arrange a survey to suit you.',
    bookingReasons: [
      'Blockages that keep returning despite being cleared',
      'A pre-purchase survey before completing on a Horsforth property',
      'Foul smells coming from drains or manholes',
      'Slow drainage across multiple fixtures in the property',
      'Concern about tree root damage to underground pipes',
      'A drainage report required by a solicitor or lender',
    ],
    faqs: [
      {
        question: 'Do you cover Horsforth for drain surveys?',
        answer:
          'Yes. Horsforth is within our service area. Give us a call or fill in the enquiry form to arrange a survey.',
      },
      {
        question: 'What\'s included in a CCTV drain survey?',
        answer:
          'A full HD camera inspection, written condition report with images, identification of any defects, and recommendations for next steps.',
      },
      {
        question: 'Is a drain survey worth it before buying a house in Horsforth?',
        answer:
          'A standard building survey doesn\'t cover underground drainage. A CCTV survey can reveal hidden problems — such as cracked pipes or root ingress — that could be costly to fix after purchase.',
      },
      {
        question: 'Can you inspect older drainage systems?',
        answer:
          'Yes. Older properties with clay pipes often benefit most from a camera inspection, as these systems are more susceptible to root ingress and joint displacement.',
      },
    ],
  },
  {
    name: 'Moortown',
    slug: 'moortown',
    nearby: ['roundhay', 'chapel-allerton', 'meanwood', 'oakwood'],
    metaDescription:
      'Book a CCTV drain survey in Moortown, Leeds. HD camera inspections with detailed reports and honest advice. Get a no-obligation quote today.',
    intro:
      'We serve Moortown and surrounding parts of Leeds with professional CCTV drain surveys. If you\'re experiencing drainage problems or need a pre-purchase inspection, get in touch and we\'ll arrange a convenient time.',
    bookingReasons: [
      'Recurring blockages in kitchen or bathroom drains',
      'Pre-purchase drain inspections for Moortown properties',
      'Persistent bad smells from drains',
      'Slow drainage affecting the whole property',
      'Suspected damage to older pipework',
      'A drainage report for insurance or mortgage purposes',
    ],
    faqs: [
      {
        question: 'How do I arrange a drain survey in Moortown?',
        answer:
          'Call us or send a quick enquiry through our online form. We\'ll confirm availability and give you a clear price before any work takes place.',
      },
      {
        question: 'What does the drain survey report cover?',
        answer:
          'The report includes a written summary, annotated camera images, pipe condition notes, and recommendations for any repairs or further investigation needed.',
      },
      {
        question: 'How long does a drain survey take in a typical Moortown home?',
        answer:
          'Most residential surveys take between 45 minutes and two hours, depending on the size and complexity of the drainage system.',
      },
      {
        question: 'Will the survey cause any mess?',
        answer:
          'No. The camera is inserted through an existing access point — there\'s no digging or disruption involved.',
      },
    ],
  },
  {
    name: 'Chapel Allerton',
    slug: 'chapel-allerton',
    nearby: ['moortown', 'roundhay', 'meanwood', 'oakwood'],
    metaDescription:
      'Professional CCTV drain surveys in Chapel Allerton, Leeds. Clear HD reports and practical recommendations. Call or enquire for a quote.',
    intro:
      'We serve Chapel Allerton and nearby parts of Leeds with CCTV drain surveys. From Victorian terraces to more modern builds, we can inspect your drainage system and provide a clear, detailed report.',
    bookingReasons: [
      'Repeated blockages that clearing doesn\'t resolve',
      'Pre-purchase surveys for homes in Chapel Allerton',
      'Damp patches or bad smells near drains',
      'Toilets, sinks, or baths draining slowly',
      'Suspected tree root damage to pipes',
      'A report needed for a property transaction',
    ],
    faqs: [
      {
        question: 'Can you do a drain survey in Chapel Allerton?',
        answer:
          'Yes. Chapel Allerton is well within our service area. Contact us to check availability and get a quote.',
      },
      {
        question: 'What drainage problems are common in Chapel Allerton?',
        answer:
          'Older properties in the area may have clay pipe drainage prone to root ingress and joint displacement. General blockages and scale build-up are also common findings.',
      },
      {
        question: 'Do I need a drain survey before buying a property?',
        answer:
          'It\'s not compulsory, but it can save you from expensive surprises. A CCTV survey reveals drainage issues that a standard building survey won\'t cover.',
      },
      {
        question: 'What if repairs are needed after the survey?',
        answer:
          'The report details the issue and your options. You can use it to get targeted quotes from drainage repair contractors.',
      },
      {
        question: 'How much does a drain survey in Chapel Allerton cost?',
        answer:
          'Pricing depends on the property size and drainage complexity. We provide a clear price upfront — get in touch for a quote.',
      },
    ],
  },
  {
    name: 'Pudsey',
    slug: 'pudsey',
    nearby: ['bramley', 'armley', 'horsforth', 'morley'],
    metaDescription:
      'CCTV drain surveys in Pudsey, Leeds. Professional HD inspections with clear, detailed reports. Contact us for a no-obligation quote.',
    intro:
      'We cover Pudsey and the surrounding parts of Leeds for CCTV drain surveys. If you\'re dealing with drainage issues or need a survey for a property purchase, we can help.',
    bookingReasons: [
      'Drains blocking up repeatedly',
      'A pre-purchase survey before buying in Pudsey',
      'Bad smells from drains or manholes',
      'Slow-draining fixtures throughout the house',
      'Concern about underground pipe condition',
      'Drainage documentation required for a sale or purchase',
    ],
    faqs: [
      {
        question: 'Do you carry out drain surveys in Pudsey?',
        answer:
          'Yes. Pudsey is part of our regular service area. Get in touch to arrange a survey.',
      },
      {
        question: 'What can a drain camera identify?',
        answer:
          'The HD camera can identify blockages, cracks, root ingress, displaced joints, collapsed sections, and general pipe condition.',
      },
      {
        question: 'How soon will I get the report?',
        answer:
          'Reports are typically delivered within a few working days of the survey. Digital copies are provided for your records.',
      },
      {
        question: 'Is the survey non-invasive?',
        answer:
          'Yes. The camera is fed through an existing access point — no excavation or disruption is needed for the survey itself.',
      },
    ],
  },
  {
    name: 'Morley',
    slug: 'morley',
    nearby: ['rothwell', 'beeston', 'pudsey', 'garforth'],
    metaDescription:
      'Book a CCTV drain survey in Morley, Leeds. HD camera inspections with detailed written reports. Get in touch for a quote.',
    intro:
      'We serve Morley and the surrounding areas of Leeds with professional CCTV drain surveys. Whether you have a concern about your drains or need a survey for a property transaction, we\'re here to help.',
    bookingReasons: [
      'Persistent drainage blockages',
      'Pre-purchase drain inspections for Morley properties',
      'Unpleasant odours from internal or external drains',
      'Slow drainage affecting sinks, baths, or toilets',
      'Suspected structural damage to underground pipes',
      'A report for your solicitor or mortgage lender',
    ],
    faqs: [
      {
        question: 'How do I book a drain survey in Morley?',
        answer:
          'Call us or complete the online enquiry form. We\'ll confirm a time and provide a clear upfront price.',
      },
      {
        question: 'What common issues do drain surveys find?',
        answer:
          'Blockages, root ingress, cracked pipes, displaced joints, and scale build-up are among the most frequent findings across the Leeds area.',
      },
      {
        question: 'Can I use the report for a house sale?',
        answer:
          'Yes. The report is provided in a digital format that can be shared with solicitors, estate agents, or prospective buyers.',
      },
      {
        question: 'Is a drain survey disruptive to the property?',
        answer:
          'No. CCTV drain surveys are completely non-invasive. The camera enters via an existing access point and no digging is involved.',
      },
    ],
  },
  {
    name: 'Garforth',
    slug: 'garforth',
    nearby: ['cross-gates', 'rothwell', 'morley', 'roundhay'],
    metaDescription:
      'Professional CCTV drain surveys in Garforth, Leeds. Clear HD camera inspections, detailed reports, and practical advice. Enquire today.',
    intro:
      'We cover Garforth and nearby parts of east Leeds for CCTV drain surveys. If you need a drainage inspection for any reason, get in touch and we\'ll confirm availability.',
    bookingReasons: [
      'Recurring blockages that won\'t clear permanently',
      'A pre-purchase survey for a property in Garforth',
      'Drain smells in the house or garden',
      'Multiple fixtures draining slowly at the same time',
      'Concern about older pipe materials or construction',
      'Mortgage lender or insurer requesting a drainage report',
    ],
    faqs: [
      {
        question: 'Do you cover Garforth for drain surveys?',
        answer:
          'Yes. Garforth is within our service area. Contact us to arrange a convenient time for the survey.',
      },
      {
        question: 'What\'s included in the survey?',
        answer:
          'An HD camera inspection of your drainage system, a written report with images, and recommendations if any faults are discovered.',
      },
      {
        question: 'How much does a drain survey cost?',
        answer:
          'Pricing varies by property. We give you a clear price upfront once we understand the scope. Get in touch for a quote.',
      },
      {
        question: 'Can a drain survey help with ongoing damp issues?',
        answer:
          'If the damp is related to a drainage fault underground, a CCTV survey can help identify the source. For above-ground damp, a damp specialist may be more appropriate.',
      },
    ],
  },
  {
    name: 'Wetherby',
    slug: 'wetherby',
    nearby: ['garforth', 'otley', 'roundhay', 'cross-gates'],
    metaDescription:
      'CCTV drain surveys in Wetherby, near Leeds. Professional HD inspections and detailed reports. Call or enquire for a no-obligation quote.',
    intro:
      'We serve Wetherby and the surrounding area with professional CCTV drain surveys. If you\'re in or near Wetherby and need a drainage inspection, get in touch and we\'ll confirm we can help.',
    bookingReasons: [
      'Drains that keep blocking up',
      'A pre-purchase inspection before buying in Wetherby',
      'Odd smells around drains or the property',
      'Water draining slowly from sinks or toilets',
      'Pipes suspected of being cracked or damaged',
      'Providing a drainage report for legal or insurance purposes',
    ],
    faqs: [
      {
        question: 'Can you do drain surveys in Wetherby?',
        answer:
          'Yes. Wetherby is within our coverage area. Get in touch and we\'ll arrange a survey at a convenient time.',
      },
      {
        question: 'Is Wetherby far from your usual service area?',
        answer:
          'Wetherby is part of the wider Leeds area and falls within the areas we serve. There are no extra charges for distance.',
      },
      {
        question: 'What does the survey report look like?',
        answer:
          'You receive a written report with annotated images from the camera footage, condition notes for each section of pipe, and practical recommendations.',
      },
      {
        question: 'How long does a residential survey take?',
        answer:
          'Typically 45 minutes to two hours, depending on the property and drainage system layout.',
      },
    ],
  },
  {
    name: 'Otley',
    slug: 'otley',
    nearby: ['guiseley', 'horsforth', 'wetherby', 'yeadon'],
    metaDescription:
      'Book a CCTV drain survey in Otley, near Leeds. HD camera inspections with honest, clear reports. Enquire for a no-obligation quote.',
    intro:
      'We cover Otley and the surrounding parts of the Leeds area for CCTV drain surveys. Whether it\'s a terraced cottage or a larger detached property, we can inspect the drainage and provide a thorough report.',
    bookingReasons: [
      'Blockages that keep coming back',
      'A pre-purchase survey for an Otley property',
      'Bad smells around drains or the house',
      'Slow drainage affecting the property',
      'Suspected damage from tree roots or ground movement',
      'A report needed for legal or mortgage purposes',
    ],
    faqs: [
      {
        question: 'Do you serve Otley for drain surveys?',
        answer:
          'Yes. Otley is part of our service area. Call or send an enquiry to check availability.',
      },
      {
        question: 'Are older properties in Otley more likely to have drainage issues?',
        answer:
          'Older properties with clay pipe drainage can be more susceptible to root ingress and joint displacement, making a CCTV survey particularly valuable.',
      },
      {
        question: 'What happens if the camera finds a problem?',
        answer:
          'The report will detail the issue — its location, severity, and recommended next steps. You can then get quotes from drainage contractors with confidence.',
      },
      {
        question: 'Is the survey messy or disruptive?',
        answer:
          'No. The camera enters through an existing manhole or inspection chamber. There\'s no digging and minimal disruption.',
      },
    ],
  },
  {
    name: 'Rothwell',
    slug: 'rothwell',
    nearby: ['morley', 'garforth', 'beeston', 'cross-gates'],
    metaDescription:
      'CCTV drain surveys in Rothwell, Leeds. Professional HD camera inspections with clear reports and recommendations. Get a quote today.',
    intro:
      'We serve Rothwell and nearby parts of south Leeds with CCTV drain surveys. If your property has a drainage issue or you need a survey for a purchase, we can help.',
    bookingReasons: [
      'Drains that block repeatedly',
      'Pre-purchase drain inspections for Rothwell properties',
      'Foul smells from drains inside or outside',
      'Slow-draining fixtures across the property',
      'Suspected underground pipe damage',
      'A drainage report for insurance or legal purposes',
    ],
    faqs: [
      {
        question: 'Can you do a drain survey in Rothwell?',
        answer:
          'Yes. Rothwell is part of our regular service area. Get in touch for availability and a quote.',
      },
      {
        question: 'What does a drain survey cost in Rothwell?',
        answer:
          'We price based on the property and drainage system size. Contact us with your details and we\'ll provide a clear, upfront price.',
      },
      {
        question: 'How is the report delivered?',
        answer:
          'You receive a digital report — usually within a few working days — complete with camera images, condition notes, and recommendations.',
      },
      {
        question: 'Will the survey disturb my garden or driveway?',
        answer:
          'No. The camera uses existing access points, so there\'s no digging or surface disruption.',
      },
    ],
  },
  {
    name: 'Guiseley',
    slug: 'guiseley',
    nearby: ['otley', 'yeadon', 'horsforth', 'bramley'],
    metaDescription:
      'Professional CCTV drain surveys in Guiseley, near Leeds. HD camera inspections, detailed condition reports, and clear advice. Enquire now.',
    intro:
      'We cover Guiseley and the surrounding parts of the Leeds area for CCTV drain surveys. Get in touch if you need a drainage inspection — we\'ll confirm availability and provide a clear quote.',
    bookingReasons: [
      'Persistent or recurring drain blockages',
      'A pre-purchase survey for a Guiseley property',
      'Unpleasant smells from indoor or outdoor drains',
      'Slow drainage in sinks, toilets, or baths',
      'Concern about tree roots affecting pipework',
      'A drainage report needed for a property sale',
    ],
    faqs: [
      {
        question: 'Do you serve Guiseley?',
        answer:
          'Yes. Guiseley is within our coverage area. Contact us to arrange a survey.',
      },
      {
        question: 'What can a CCTV survey detect?',
        answer:
          'The camera can identify blockages, root ingress, cracks, displaced joints, collapsed sections, and general pipe condition issues.',
      },
      {
        question: 'Is the inspection non-invasive?',
        answer:
          'Yes. No digging is needed — the camera enters through an existing manhole or access chamber.',
      },
      {
        question: 'How soon will I receive the report?',
        answer:
          'Reports are typically provided within a few working days. A digital copy is sent for your records.',
      },
    ],
  },
  {
    name: 'Yeadon',
    slug: 'yeadon',
    nearby: ['guiseley', 'horsforth', 'otley', 'bramley'],
    metaDescription:
      'CCTV drain surveys in Yeadon, near Leeds. HD camera inspections, clear reports, and practical advice. Call or enquire for a quote.',
    intro:
      'We serve Yeadon and the nearby parts of the Leeds area with CCTV drain surveys. Whether you\'re dealing with a drainage problem or planning ahead with a pre-purchase survey, we can help.',
    bookingReasons: [
      'Blockages that won\'t stay cleared',
      'A pre-purchase inspection before buying in Yeadon',
      'Drain smells affecting the property',
      'Slow drainage across multiple outlets',
      'Older pipes suspected of deterioration',
      'Documentation needed for solicitors or mortgage applications',
    ],
    faqs: [
      {
        question: 'Can you carry out a drain survey in Yeadon?',
        answer:
          'Yes. Yeadon is part of our service area. Get in touch to arrange a survey.',
      },
      {
        question: 'What does the survey involve?',
        answer:
          'A specialist HD camera is fed through your drainage system via an existing access point. The footage is analysed and you receive a detailed written report.',
      },
      {
        question: 'Do I need to prepare anything before the survey?',
        answer:
          'Just ensure access points such as manholes or inspection chambers are accessible. We\'ll handle the rest.',
      },
      {
        question: 'What if no problems are found?',
        answer:
          'That\'s good news — and you\'ll have a report confirming the drains are in good condition. This can be useful for property records or peace of mind.',
      },
    ],
  },
  {
    name: 'Bramley',
    slug: 'bramley',
    nearby: ['kirkstall', 'armley', 'pudsey', 'headingley'],
    metaDescription:
      'Book a CCTV drain survey in Bramley, Leeds. Professional HD camera inspections with clear, detailed reports. Get in touch for a quote.',
    intro:
      'We serve Bramley and nearby parts of west Leeds with CCTV drain surveys. From terraced streets to more modern developments, we can inspect your drainage system and provide a clear report.',
    bookingReasons: [
      'Recurring drain blockages',
      'A pre-purchase survey for a property in Bramley',
      'Bad smells from drains',
      'Slow drainage across sinks, baths, or toilets',
      'Suspected damage or deterioration in underground pipes',
      'A drainage report required by a lender or solicitor',
    ],
    faqs: [
      {
        question: 'Do you cover Bramley for drain surveys?',
        answer:
          'Yes. Bramley is within our service area. Contact us to check availability.',
      },
      {
        question: 'How much does a drain survey in Bramley cost?',
        answer:
          'We quote based on the property and drainage layout. Get in touch with your details and we\'ll provide a clear price.',
      },
      {
        question: 'Can the survey help identify the cause of damp?',
        answer:
          'If damp is caused by a below-ground drainage fault, a CCTV survey can help locate the issue. For above-ground damp, a specialist surveyor may be more suitable.',
      },
      {
        question: 'Will I need to be home during the survey?',
        answer:
          'Someone needs to be available to provide access, but you don\'t need to supervise. If external access points are available, arrangements can sometimes be made.',
      },
    ],
  },
  {
    name: 'Kirkstall',
    slug: 'kirkstall',
    nearby: ['headingley', 'bramley', 'armley', 'horsforth'],
    metaDescription:
      'CCTV drain surveys in Kirkstall, Leeds. HD inspections, detailed reports, and clear recommendations. Enquire for a no-obligation quote.',
    intro:
      'We cover Kirkstall and the surrounding parts of west Leeds for CCTV drain surveys. Whether your property is near Kirkstall Abbey or along the main road, we can survey your drains and provide a thorough report.',
    bookingReasons: [
      'Drains that keep blocking up',
      'A pre-purchase survey for a Kirkstall property',
      'Persistent drain odours inside or outside',
      'Slow-draining water from multiple fixtures',
      'Suspected root ingress or structural pipe damage',
      'A report needed for a property transaction or insurer',
    ],
    faqs: [
      {
        question: 'Is Kirkstall within your service area?',
        answer:
          'Yes. We regularly carry out drain surveys in Kirkstall and the surrounding area.',
      },
      {
        question: 'What types of drainage problems do you commonly find?',
        answer:
          'Blockages, root ingress, cracked or displaced pipes, and build-up of grease or debris are among the most common findings.',
      },
      {
        question: 'How long does a typical survey take?',
        answer:
          'Most residential surveys are completed in 45 minutes to two hours, depending on the property and drainage layout.',
      },
      {
        question: 'Can I get a survey done quickly?',
        answer:
          'We aim to arrange surveys promptly. Call us for the earliest available slot.',
      },
    ],
  },
  {
    name: 'Beeston',
    slug: 'beeston',
    nearby: ['morley', 'armley', 'rothwell', 'pudsey'],
    metaDescription:
      'Professional CCTV drain surveys in Beeston, Leeds. HD camera inspections with detailed, clear reports. Contact us for a quote.',
    intro:
      'We serve Beeston and nearby parts of south Leeds with professional CCTV drain surveys. If you have a drainage concern or are buying a property in the area, get in touch for a quote.',
    bookingReasons: [
      'Recurring blockages in household drains',
      'A pre-purchase drain survey before buying in Beeston',
      'Foul smells near internal or external drains',
      'Water draining slowly throughout the property',
      'Concerns about the age or condition of pipework',
      'A drainage report for a solicitor, lender, or insurer',
    ],
    faqs: [
      {
        question: 'Can you carry out a drain survey in Beeston?',
        answer:
          'Yes. Beeston is part of our service area. Call or enquire online to arrange a survey.',
      },
      {
        question: 'What does a CCTV drain survey include?',
        answer:
          'A full HD camera inspection, written report with annotated images, condition assessment, and clear recommendations if faults are found.',
      },
      {
        question: 'Is the survey suitable for older properties?',
        answer:
          'Absolutely. Older homes with clay pipe systems often benefit most from a camera inspection, as they\'re more prone to common issues like root ingress.',
      },
      {
        question: 'How is the report provided?',
        answer:
          'A digital report is provided — typically within a few working days — for your records or to pass on to relevant parties.',
      },
    ],
  },
  {
    name: 'Armley',
    slug: 'armley',
    nearby: ['bramley', 'kirkstall', 'beeston', 'pudsey'],
    metaDescription:
      'CCTV drain surveys in Armley, Leeds. Professional HD inspections and clear condition reports. Get in touch for a no-obligation quote.',
    intro:
      'We cover Armley and surrounding parts of Leeds with CCTV drain surveys. Whether it\'s a terraced property or a larger commercial building, we can inspect the drainage and provide a clear, honest report.',
    bookingReasons: [
      'Persistent drain blockages',
      'Pre-purchase drain surveys for Armley properties',
      'Unpleasant smells from drains',
      'Slow drainage from sinks, toilets, or baths',
      'Suspected pipe damage or deterioration',
      'Documentation needed for a property sale or insurance claim',
    ],
    faqs: [
      {
        question: 'Do you do drain surveys in Armley?',
        answer:
          'Yes. Armley is within our regular service area. Get in touch to arrange a survey.',
      },
      {
        question: 'What problems are typically found in drain surveys?',
        answer:
          'Common findings include blockages, root ingress, cracked pipes, displaced joints, and internal scale or corrosion.',
      },
      {
        question: 'Is the survey non-invasive?',
        answer:
          'Yes. The camera enters through an existing access point — no digging or disruption to your property.',
      },
      {
        question: 'Can I use the report for an insurance claim?',
        answer:
          'Yes. The report provides detailed evidence that can be submitted to insurers as part of a claim.',
      },
    ],
  },
  {
    name: 'Meanwood',
    slug: 'meanwood',
    nearby: ['headingley', 'chapel-allerton', 'moortown', 'oakwood'],
    metaDescription:
      'Book a CCTV drain survey in Meanwood, Leeds. HD camera inspections with clear reports and practical recommendations. Enquire for a quote.',
    intro:
      'We serve Meanwood and the surrounding parts of north Leeds with CCTV drain surveys. If your drains are causing problems or you need a survey ahead of a property purchase, get in touch.',
    bookingReasons: [
      'Blockages recurring in kitchen or bathroom drains',
      'A pre-purchase survey for a Meanwood property',
      'Drain smells that won\'t go away',
      'Slow-draining water in the property',
      'Trees near drainage runs that may cause root ingress',
      'A drainage report needed for a transaction or claim',
    ],
    faqs: [
      {
        question: 'Can you survey drains in Meanwood?',
        answer:
          'Yes. Meanwood is part of our service area. Contact us for availability and a quote.',
      },
      {
        question: 'What are the common drainage problems in this area?',
        answer:
          'Meanwood has a mix of older and newer properties. Older clay drainage systems are especially prone to root ingress and joint displacement.',
      },
      {
        question: 'How do I get a quote?',
        answer:
          'Call us or fill in the enquiry form. Let us know the property type and reason for the survey, and we\'ll provide a clear price.',
      },
      {
        question: 'What happens if the survey finds a collapsed drain?',
        answer:
          'The report will document the location and extent of the collapse. You can then use this to get accurate repair quotes from drainage contractors.',
      },
    ],
  },
  {
    name: 'Oakwood',
    slug: 'oakwood',
    nearby: ['roundhay', 'chapel-allerton', 'moortown', 'meanwood'],
    metaDescription:
      'CCTV drain surveys in Oakwood, Leeds. Professional HD inspections with detailed reports. Contact us for availability and a no-obligation quote.',
    intro:
      'We cover Oakwood and the nearby areas of north-east Leeds for CCTV drain surveys. Get in touch if you need a drainage inspection — whether it\'s for ongoing issues or a property purchase.',
    bookingReasons: [
      'Recurring drain blockages that won\'t resolve',
      'A pre-purchase drain survey for an Oakwood property',
      'Persistent bad smells from drains',
      'Slow drainage from multiple fixtures',
      'Suspected damage from mature tree roots',
      'A report for a solicitor, lender, or insurance company',
    ],
    faqs: [
      {
        question: 'Do you serve Oakwood for drain surveys?',
        answer:
          'Yes. Oakwood is well within our service area. Call or enquire online to arrange a survey.',
      },
      {
        question: 'What does a CCTV drain survey involve?',
        answer:
          'An HD camera is fed through your drainage system to record the condition of the pipes. You then receive a written report with images and recommendations.',
      },
      {
        question: 'Can the survey detect root ingress?',
        answer:
          'Yes. Root ingress is one of the most common issues identified by CCTV drain surveys, particularly in areas with mature trees like Oakwood.',
      },
      {
        question: 'How quickly can a survey be arranged?',
        answer:
          'We aim to be responsive. Contact us and we\'ll let you know the earliest available time.',
      },
    ],
  },
  {
    name: 'Cross Gates',
    slug: 'cross-gates',
    nearby: ['garforth', 'roundhay', 'rothwell', 'oakwood'],
    metaDescription:
      'Professional CCTV drain surveys in Cross Gates, Leeds. HD inspections, clear reports, and honest advice. Get in touch for a quote.',
    intro:
      'We serve Cross Gates and surrounding parts of east Leeds with CCTV drain surveys. If you\'re experiencing drainage problems or need a pre-purchase inspection, get in touch and we\'ll help.',
    bookingReasons: [
      'Drains that block up repeatedly',
      'A pre-purchase survey for a Cross Gates property',
      'Bad smells from internal or external drains',
      'Slow drainage across the property',
      'Concerns about the condition of older pipework',
      'A report needed for a buyer, seller, or lender',
    ],
    faqs: [
      {
        question: 'Do you cover Cross Gates for drain surveys?',
        answer:
          'Yes. Cross Gates is part of our service area. Contact us for a quote and availability.',
      },
      {
        question: 'What problems can a drain survey identify?',
        answer:
          'The camera can detect blockages, root ingress, cracked or displaced pipes, collapsed sections, and build-up of scale or debris.',
      },
      {
        question: 'How is the report delivered?',
        answer:
          'You\'ll receive a digital report with annotated images, condition notes, and recommendations — usually within a few working days.',
      },
      {
        question: 'Is the survey disruptive?',
        answer:
          'Not at all. The camera enters through existing access points such as manholes. No digging is needed.',
      },
      {
        question: 'Can a drain survey help with a house purchase?',
        answer:
          'Yes. A pre-purchase drain survey reveals hidden issues that a standard building survey doesn\'t cover, giving you confidence before you exchange.',
      },
    ],
  },
];

/* ── Lookup helpers ────────────────────────────────────────── */

/** Get area data by slug – returns undefined if not found */
export function getAreaBySlug(slug: string): AreaData | undefined {
  return AREA_DATA.find((a) => a.slug === slug);
}

/** Get all slugs (for generateStaticParams) */
export function getAllAreaSlugs(): string[] {
  return AREA_DATA.map((a) => a.slug);
}

/** Get area name list (for backwards compat with AREAS constant) */
export function getAreaNames(): string[] {
  return AREA_DATA.map((a) => a.name);
}
