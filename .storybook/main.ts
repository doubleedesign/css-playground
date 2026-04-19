import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
	'stories': [
		'../src/**/*.mdx',
		'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
	],
	'addons': [
		'@storybook/addon-docs',
		'@storybook/addon-a11y',
		'@whitespace/storybook-addon-html'
	],
	'framework': '@storybook/vue3-vite',
	staticDirs: ['../sb-assets']
};
export default config;