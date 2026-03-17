import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'SelectPrism',
    tagline: 'SelectPrism API Documentation',
    favicon: 'https://sp-bsl.pfsit.xyz/integration/apple-touch-icon.png',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: process.env.PRODUCTION_URL ?? 'http://localhost:3000',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'selectprism', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.

    onBrokenLinks: 'throw',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    plugins: [
        './plugins/webpack-plugin.js',
        [
            'docusaurus-plugin-openapi-docs',
            {
                id: 'openapi',
                docsPluginId: 'classic',
                config: {
                    api: {
                        specPath: 'openapi/api-spec.json',
                        outputDir: 'docs/api',
                        sidebarOptions: {
                            groupPathsBy: 'tag',
                        },
                    },
                },
            },
        ],
    ],

    themes: ['docusaurus-theme-openapi-docs'],

    presets: [
        [
            'classic',
            {
                docs: {
                    routeBasePath: '/docs/',
                    sidebarPath: './sidebars.ts',
                    docItemComponent: '@theme/ApiItem',
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        colorMode: {
            respectPrefersColorScheme: true,
        },
        algolia: {
            appId: process.env.APPLICATION_ID ?? 'test',
            apiKey: process.env.ALGOLIA_SEARCH_API_KEY ?? 'test',
            indexName: 'my-docs-local',
            contextualSearch: false,
            searchPagePath: 'search',
        },
        navbar: {
            title: 'SelectPrism',
            logo: {
                alt: 'SelectPrism Logo',
                src: 'https://sp-bsl.pfsit.xyz/integration/apple-touch-icon.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'apisidebar',
                    position: 'left',
                    label: 'API',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'webhookssidebar',
                    position: 'left',
                    label: 'Webhooks',
                },
            ],
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;

/**
 * docker run --rm --platform linux/amd64 \
-e APPLICATION_ID=4NFQAL2J5A \
-e API_KEY=0318d67eb026e6b44be1d7633fded5db \
-e "CONFIG=$(cat docsearch-config.json | jq -r tostring)" \
algolia/docsearch-scraper
 */
