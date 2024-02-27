// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: ['docusaurus-plugin-fix-react'],

  themes: [
    ["@easyops-cn/docusaurus-search-local", {}],
  ],

  title: 'Matro UI Docs',
  tagline: '👁️ Highly optimized UI Components in one, tiny package for your React Applications.',
  favicon: 'img/icon.svg',

  // Set the production url of your site here
  url: 'https://matra-ui.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'matro-ui', // Usually your GitHub org/user name.
  projectName: 'matro-ui.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk', 'pl'],
  },



  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: true,
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/matro-ui/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/matro-ui/matro-ui/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          autoCollapseCategories: false,
        },
      },
      navbar: {
        logo: {
          alt: 'Matro UI',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg'
        },
        items: [
          { to: '/docs/intro', label: 'Quick Start', position: 'left' },
          { to: '/docs/compontents/view', label: 'Components', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },

          // { type: "docsVersionDropdown", position: 'right' },
          { type: "localeDropdown", position: 'right' },
          // { type: "version", position: 'right' },
          {
            type: 'html',
            position: 'right',
            value: `<a href="https://github.com/matro-ui/matro-ui/" target="_blank" class="gh_iconl"><span></span></a>`
          }
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
