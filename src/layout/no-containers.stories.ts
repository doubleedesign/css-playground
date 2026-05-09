import type { Meta, StoryObj } from '@storybook/vue3-vite';
import ContainedDemo, { ContainedDemoProps } from '../components/ContainedDemo/ContainedDemo.vue';
import { LayoutContainerSize, ThemeColor } from '../types';
import '../global.css';

const meta: Meta<ContainedDemoProps> = {
	title: 'Layout/Containerless',
	component: ContainedDemo,
	args: {
		size: LayoutContainerSize.NARROW,
		backgroundColor: ThemeColor.PRIMARY
	},
	argTypes: {
		size: {
			control: { type: 'select' },
			options: Object.values(LayoutContainerSize),
			table: {
				type: { summary: 'LayoutContainerSize' },
				defaultValue: { summary: LayoutContainerSize.CONTAINED }
			}
		},
		backgroundColor: {
			control: { type: 'select' },
			options: Object.values(ThemeColor),
			table: {
				type: { summary: 'ThemeColor' },
				defaultValue: { summary: ThemeColor.PRIMARY }
			}
		}
	},
	parameters: {
		controls: {
			exclude: ['variant']
		}
	}
};
export default meta;

type Story = StoryObj<ContainedDemoProps>;

export const Basic: Story = {
};

export const Nested: Story = {
	args: {
		variant: 'nested',
		size: LayoutContainerSize.NARROW
	},
	argTypes: {
		...meta.argTypes,
		size: {
			control: { type: 'select' },
			options: [LayoutContainerSize.NARROW, LayoutContainerSize.NARROWER, LayoutContainerSize.SMALL],
			table: {
				type: { summary: 'LayoutContainerSize' },
				defaultValue: { summary: LayoutContainerSize.CONTAINED }
			}
		},
	},
	parameters: {
		controls: {
			exclude: ['backgroundColor', 'variant']
		}
	},
};