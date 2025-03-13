// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://linklyposintegrations.github.io/posfaq/', // Add your GitHub Pages URL here
	base: '/posfaq/', // Add this line to specify the base path for GitHub Pages
	integrations: [
		starlight({
			title: 'POS FAQ',
			sidebar: [
				{
					label: 'FAQs',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', slug: 'guides/gettingstarted' },
						{ label: 'API Overview', slug: 'guides/apigeneral' },
						{ label: 'OnPrem TCPIP/ActiveX', slug: 'guides/onprem' },
						{ label: 'Cloud', slug: 'guides/cloud' },
						{ label: 'MPOS', slug: 'guides/mpos' },
						{ label: 'Integration support', slug: 'guides/integrationsupport' },
						{ label: 'Accreditation support', slug: 'guides/accreditationsupport' },
					],
				},
				{
					label: 'Quick Actions',
					items: [{ label: 'Links & Downloads', slug: 'guides/downloads' },]
				},
			],
		}),
	],
});