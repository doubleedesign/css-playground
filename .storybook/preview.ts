import type { Preview } from '@storybook/vue3-vite';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			canvas: {
				// Remove the "show code" button
				// https://storybook.js.org/docs/api/doc-blocks/doc-block-canvas#sourcestate
				sourceState: 'none'
			}
		},
	},
};

export default preview;