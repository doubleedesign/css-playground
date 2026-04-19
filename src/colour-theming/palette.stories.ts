import type { Meta, StoryObj } from '@storybook/vue3-vite';
import PaletteDemo from '../components/PaletteDemo/PaletteDemo.vue';
import { defaultTheme } from './default-theme';
import { ThemeColor } from './types';
import './global.css';

const meta: Meta<typeof defaultTheme> = {
	title: 'Colour Theming/Basic Palette',
	component: PaletteDemo,
	args: defaultTheme,
	argTypes: {
		...Object.keys(defaultTheme).reduce((acc, color) => {
			acc[color] = {
				type: { name: 'ThemeColor' },
				control: 'color',
				table: {
					defaultValue: { summary: defaultTheme[color as ThemeColor] },
				},
			};

			return acc;
		}, {} as Record<ThemeColor, any>),
	},

};
export default meta;

type Story = StoryObj<typeof defaultTheme>;

export const Default: Story = {
	name: 'Basic Palette',
};