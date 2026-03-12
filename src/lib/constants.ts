/* ── Site-wide constants ──────────────────────────────────── */
import { AREA_DATA } from './areas';


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

export const AREAS = AREA_DATA.map(a => a.name);
