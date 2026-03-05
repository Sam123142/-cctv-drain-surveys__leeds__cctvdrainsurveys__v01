/* ── Site-wide constants ──────────────────────────────────── */

// TODO: Replace with real values before launch – see .env.example
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://cctvdrainsurveysleeds.co.uk';

export const PHONE_DISPLAY = '01137342411';

export const PHONE_TEL = PHONE_DISPLAY.replace(/\s/g, '');

export const SITE_NAME = 'CCTV Drain Surveys Leeds';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/cctv-drain-surveys-leeds', label: 'Our Service' },
  { href: '/areas-we-cover', label: 'Areas We Cover' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const FOOTER_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/cookies', label: 'Cookies Policy' },
] as const;

export const AREAS = [
  'Headingley',
  'Roundhay',
  'Horsforth',
  'Moortown',
  'Chapel Allerton',
  'Pudsey',
  'Morley',
  'Garforth',
  'Wetherby',
  'Otley',
  'Rothwell',
  'Guiseley',
  'Yeadon',
  'Bramley',
  'Kirkstall',
  'Beeston',
  'Armley',
  'Meanwood',
  'Oakwood',
  'Cross Gates',
] as const;
