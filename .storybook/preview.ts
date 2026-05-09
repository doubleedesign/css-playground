import type { Preview } from '@storybook/vue3-vite';
import { themes } from 'storybook/theming';
import { doubleeTheme } from '@doubleedesign/doublee-site-style';
import './preview.css';

const mergedTheme = {
	...themes.light,
	...doubleeTheme
};

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			theme: mergedTheme,
			canvas: {
				// Remove the "show code" button
				// https://storybook.js.org/docs/api/doc-blocks/doc-block-canvas#sourcestate
				sourceState: 'none'
			}
		},
	},
	decorators: [() => ({ template: '<div data-typography-mode="docs"><story/></div>' })],
};

export default preview;