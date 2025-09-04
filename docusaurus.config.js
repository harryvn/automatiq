import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "The Future Tests Itself!",
  tagline:
    "An open-source initiative designed to empower automation testers with a deep understanding of core principles and best practices.",
  favicon: "img/favicon.png",

  url: "https://harryvn.github.io",
  baseUrl: "/",

  organizationName: "harryvn",
  projectName: "automatiq-docs",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onDuplicateRoutes: "warn",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "support_us",
        content:
          'If you like this initiative, give it a ⭐ on <a target="_blank" rel="noopener noreferrer" href="https://github.com/harryvn/automatiq-docs">GitHub</a>!',
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: true,
      },
      navbar: {
        title: "AutoMatiQ",
        logo: {
          src: "img/logo.svg",
          className: "navbar-logo",
        },
        items: [
          {
            to: "projects",
            label: "Showcase",
            position: "left",
          },
          {
            type: "doc",
            docId: "welcome",
            position: "left",
            label: "Docs",
          },
          {
            to: "/blog",
            label: "Blogs",
            position: "left",
          },
          {
            href: "https://github.com/harryvn",
            className: "header-github-link",
            "aria-label": "GitHub",
            position: "right",
          },
          {
            href: "https://www.linkedin.com/in/harryvn/",
            className: "header-linkedin-link",
            "aria-label": "LinkedIn",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `© ${new Date().getFullYear()} AutoMatiQ. All rights reserved.`,
        links: [
          {
            title: "Learn",
            items: [
              {
                label: "Docs",
                to: "docs/welcome",
              },
              {
                label: "Showcase",
                to: "projects",
              },
            ],
          },
          {
            title: "Connect",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/harryvn",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/harryvn/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blogs",
                to: "blog",
              },
              {
                label: "Docker",
                to: "blog/docker",
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["java", "docker", "bash"],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      mermaid: {
        theme: { light: "default", dark: "dark" },
      },
      algolia: {
        appId: "YOUR_APP_ID",
        apiKey: "YOUR_SEARCH_API_KEY",
        indexName: "automatiq",
      },
    }),
  plugins: [],

  themes: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
  },
};

export default config;
