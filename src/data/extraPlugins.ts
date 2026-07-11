export interface ExtraPlugin {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  description: string;
  host: string;
  format: string;
  accent: string;
  accentRgb: string;
  accentAlt: string;
  background: string;
  surface: string;
  icon: string;
  heroImage: string;
  boxImage: string;
  priceLabel: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  primaryCtaExternal?: boolean;
  installMenu: string;
  highlights: string[];
  metrics: Array<{
    label: string;
    value: string;
  }>;
  workflow: Array<{
    title: string;
    description: string;
  }>;
}

export const extraPlugins: ExtraPlugin[] = [
  {
    slug: 'smooth-it',
    name: 'Smooth It',
    eyebrow: 'Premiere Pro Plugin',
    headline: 'One curve. Every keyframe, smoothed.',
    description:
      'Dial in custom easing, save reusable presets, and bake polished motion curves directly onto Premiere Pro keyframes.',
    host: 'Premiere Pro',
    format: 'UXP panel',
    accent: '#3485ff',
    accentRgb: '52, 133, 255',
    accentAlt: '#f8faff',
    background: '#080b12',
    surface: '#141821',
    icon: '/plugins/smooth-it/icon.png',
    heroImage: '/plugins/smooth-it/hero.png',
    boxImage: '/plugins/smooth-it/box.png',
    priceLabel: 'Free',
    primaryCtaLabel: 'View on Adobe Exchange',
    primaryCtaHref: 'https://exchange.adobe.com/apps/cc/fc1418c4/smooth-it',
    primaryCtaExternal: true,
    installMenu: 'Window -> UXP Plugins -> Smooth It',
    highlights: [
      'Graph-based easing control for keyframed properties',
      'Reusable preset buttons for common curve shapes',
      'Applies curves directly inside Premiere Pro',
      'UXP panel built for a compact editing workspace'
    ],
    metrics: [
      { label: 'Price', value: 'Free' },
      { label: 'Panel', value: 'UXP' }
    ],
    workflow: [
      {
        title: 'Select your keyed property',
        description: 'Target position, scale, or another supported keyframed property in the active edit.'
      },
      {
        title: 'Shape the motion curve',
        description: 'Drag handles on the curve graph or start from a named preset like S-Curve or Ease Out.'
      },
      {
        title: 'Bake the easing',
        description: 'Apply the curve and Smooth It writes the eased motion back onto the selected keyframes.'
      }
    ]
  },
  {
    slug: 'silence-cutter',
    name: 'Silence Cutter',
    eyebrow: 'Premiere Pro Plugin',
    headline: 'Cut the dead air before it cuts your day.',
    description:
      'Detect pauses in dialogue, tune silence thresholds, and remove or disable quiet sections with local audio analysis.',
    host: 'Premiere Pro',
    format: 'CEP panel',
    accent: '#00a4ef',
    accentRgb: '0, 164, 239',
    accentAlt: '#00ff88',
    background: '#091018',
    surface: '#151b22',
    icon: '/plugins/silence-cutter/icon.jpg',
    heroImage: '/plugins/silence-cutter/hero.png',
    boxImage: '/plugins/silence-cutter/box.png',
    priceLabel: '$14.99',
    primaryCtaLabel: 'View on Adobe Exchange',
    primaryCtaHref: 'https://exchange.adobe.com/apps/cc/204943/silence-cutter',
    primaryCtaExternal: true,
    installMenu: 'Window -> Extensions -> Silence Cutter',
    highlights: [
      'Detects silent sections with local audio analysis',
      'Delete mode removes quiet timeline sections',
      'Disable mode keeps clips in place but muted from the edit',
      'Adjustable threshold, padding, and minimum segment settings'
    ],
    metrics: [
      { label: 'Price', value: '$14.99' },
      { label: 'Modes', value: 'Delete / Disable' },
      { label: 'Processing', value: 'Local' }
    ],
    workflow: [
      {
        title: 'Choose a sequence',
        description: 'Open the panel with a timeline ready and let Silence Cutter analyze the sequence audio.'
      },
      {
        title: 'Set the threshold',
        description: 'Adjust silence level, minimum silence, minimum keep duration, and padding around speech.'
      },
      {
        title: 'Remove or disable',
        description: 'Cut silence out of the timeline or disable those clips while preserving the edit structure.'
      }
    ]
  },
  {
    slug: 'select-disabled-clips',
    name: 'Select Disabled Clips',
    eyebrow: 'Premiere Pro Plugin',
    headline: 'Clean your timeline in one click.',
    description:
      'Scan the active sequence and select disabled or enabled timeline items across video, audio, or both tracks.',
    host: 'Premiere Pro',
    format: 'UXP panel',
    accent: '#5aa3ff',
    accentRgb: '90, 163, 255',
    accentAlt: '#14b8a6',
    background: '#0a0c12',
    surface: '#171922',
    icon: '/plugins/select-disabled-clips/icon.png',
    heroImage: '/plugins/select-disabled-clips/hero.png',
    boxImage: '/plugins/select-disabled-clips/box.png',
    priceLabel: 'Free',
    primaryCtaLabel: 'View on Adobe Exchange',
    primaryCtaHref: 'https://exchange.adobe.com/apps/cc/925eceb4/select-disabled-clips',
    primaryCtaExternal: true,
    installMenu: 'Window -> UXP Plugins -> Select Disabled Clips',
    highlights: [
      'Select disabled clips across the active sequence',
      'Switch to enabled clips for the inverse selection',
      'Limit the scan to video, audio, or both track types',
      'Refresh sequence counts directly from the panel'
    ],
    metrics: [
      { label: 'Price', value: 'Free' },
      { label: 'Panel', value: 'UXP' }
    ],
    workflow: [
      {
        title: 'Refresh the sequence',
        description: 'Open the panel and let it scan the active timeline for readable clip states.'
      },
      {
        title: 'Pick the clip state',
        description: 'Choose disabled clips for cleanup or enabled clips when you need the opposite selection.'
      },
      {
        title: 'Select by track type',
        description: 'Limit the pass to video, audio, or both, then select the matching clips instantly.'
      }
    ]
  }
];

export const getExtraPluginBySlug = (slug?: string): ExtraPlugin | undefined =>
  extraPlugins.find(plugin => plugin.slug === slug);
