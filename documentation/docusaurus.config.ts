import 'dotenv/config';
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'FlexNative',
  tagline: 'FlexNative is a component library that enables developers to build universal design systems. It is built on top of React Native, allowing you to develop apps for Android, iOS, and the Web.',
  favicon: 'img/logo.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://redonalla.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/flexnative/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RedonAlla', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/RedonAlla/flexnative',
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            return `https://github.com/RedonAlla/flexnative/edit/main/documentation/docs/${docPath}`;
          },
          sidebarCollapsible: true,
          sidebarCollapsed: true,
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        blog: false,
        // blog: {
        //   routeBasePath: '/changelog',
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   blogTitle: 'Changelog',
        //   blogDescription: 'Changelog history',
        //   postsPerPage: 'ALL',
        //   blogSidebarTitle: 'Changelog',
        //   blogSidebarCount: 'ALL',
        // //   // Please change this to your repo.
        // //   // Remove this to remove the "edit this page" links.
        // //   editUrl:
        // //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: [
            './src/css/icons.css',
            './src/css/animate.css',
            './src/css/custom.scss',
            './src/css/demo-components.scss'
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    metadata: [{name: 'algolia-site-verification', content: '01EB78D3F3F1D817'}],
	  docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'FlexNative',
      logo: {
        alt: 'FlexNative Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'componentsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        // {to: '/changelog', label: 'Changelog', position: 'left'},
        {
          href: 'https://flexnative.netlify.app/',
          label: 'Demo App',
          position: 'left',
        },
        {
          href: 'https://github.com/RedonAlla/flexnative',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Theme',
              to: '/docs/theme',
            },
            // {
            //   label: 'Components',
            //   to: '/docs/components',
            // },
            // {
            //   label: 'Utilities',
            //   to: '/docs/utilities',
            // },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'Demo',
          items: [
            // {
            //   label: 'Changelog',
            //   to: '/changelog',
            // },
            {
              label: 'Demo Web App',
              href: 'https://flexnative.netlify.app/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Redon Alla, Inc. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: [
        'bash',
        'shell-session'
      ],
      theme: prismThemes.nightOwlLight,
      darkTheme: prismThemes.nightOwl,
    },
    themes: [
      '@docusaurus/theme-live-codeblock',
    ],
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
    algolia: {
      // The application ID provided by Algolia
      appId: process.env.ALGOLIA_APP_ID as string,

      // Public API key: it is safe to commit it
      apiKey: process.env.ALGOLIA_API_KEY as string,

      indexName: 'FlexNative',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: false,

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      // Optional: whether you want to use the new Ask AI feature (undefined by default)
      //askAi: 'YOUR_ALGOLIA_ASK_AI_ASSISTANT_ID',

      //... other Algolia params
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    'docusaurus-plugin-sass',
    '@docusaurus/theme-live-codeblock',
    './plugins/react-native-webpack.js',
    './plugins/transpile-jsx-webpack.js',
    require('./plugins/gorhom-react-native.js'),
  ],
};

export default config;
