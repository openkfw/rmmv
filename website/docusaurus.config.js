// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const {themes} = require('prism-react-renderer');

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RMMV Guidebook',
  tagline: 'Remote Management, Monitoring, & Verification (RMMV) Guidebook',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://openkfw.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/rmmv/',

  // GitHub pages deployment config
  organizationName: 'openkfw',
  projectName: 'rmmv',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/openkfw/rmmv/tree/main/website/',
        },
        blog: false, // Disable blog completely
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/Koffer_3_Responsive_1080x608.png',
      navbar: {
        title: 'RMMV Guidebook',
        logo: {
          alt: 'KfW RMMV Logo',
          src: 'img/Koffer_3_Responsive_1080x608.png',
          height: 32,
        },
        items: [
          {
            href: 'https://github.com/openkfw/rmmv',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'RMMV Guidebook',
                to: '/docs/table-of-contents',
              },
              {
                label: 'Introduction',
                to: '/docs/introduction',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Disclaimer',
                to: '/docs/disclaimer',
              },
              {
                label: 'License (CC0)',
                href: 'https://github.com/yourusername/rmmv-guidebook/blob/main/LICENSE',
              },
            ],
          },
        ],
        copyright: undefined, // This removes the default copyright
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;
