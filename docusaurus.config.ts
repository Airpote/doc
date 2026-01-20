import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
	title: 'Amichain doc',
	tagline: 'Amichain documentation',
	favicon: 'img/favicon.png',

	url: 'https://doc.amichain.com',
	baseUrl: '/',

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			{
				docs: {
					routeBasePath: '/',
					sidebarPath: './sidebars.ts',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		image: 'img/og_image.jpg',
		metadata: [
			{name: 'description', content: 'Amichain Documentation - Comprehensive guides for deploying L1s, using tools like Wallets Manager, multi-sender, and bridging. Build on Amichain.'},
			{property: 'og:description', content: 'Amichain Documentation - Comprehensive guides for deploying L1s, using tools like Wallets Manager, multi-sender, and bridging. Build on Amichain.'}
		],
		navbar: {
			title: 'Amichain Doc',
			logo: {
				alt: 'Amichain Logo',
				src: 'img/logo.png',
			},
			items: [
				{
					href: 'https://github.com/amichain',
					label: 'GitHub',
					position: 'right',
				},
				{
						href: 'https://amichain.org/',
					label: 'Website',
					position: 'right',
				},
				{
					href: 'https://app.ami.finance',
					label: 'App',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Community',
					items: [
						{
							label: 'GitHub',
							href: 'https://github.com/amichain',
						},
						{
							label: 'X',
							href: 'https://x.com/amichainORG',
						},
						{
							label: 'Telegram',
							href: 'https://t.me/amichain',
						},
						{
							label: 'Discord',
							href: 'https://discord.amichain.org/',
						},
					],
				},
			],
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		}
	} satisfies Preset.ThemeConfig,
};

export default config;
