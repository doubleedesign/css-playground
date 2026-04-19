<script setup lang="ts">
import { ThemeColor } from '../../types';
import { computed, useAttrs, watchEffect, onUnmounted } from 'vue';

defineOptions({ inheritAttrs: false });

const attrs = useAttrs();
const colors = computed(() => {
	return Object.entries(attrs).reduce((acc, [key, value]) => {
		acc[key] = value;

		return acc;
	}, {} as Record<ThemeColor, string>);
});

let styleEl: HTMLStyleElement | null = null;

watchEffect(() => {
	if (!styleEl) {
		styleEl = document.createElement('style');
		document.getElementById('storybook-root')?.appendChild(styleEl);
	}

	styleEl.textContent = `:root {\n${
		Object.entries(colors.value) // ✅
			.reduce((acc, [color, value]) => {
				acc += `--color-${color}: ${value};\n`;

				return acc;
			}, '')
	}\n}`;
});

onUnmounted(() => {
	styleEl?.remove();
	styleEl = null;
});
</script>

<template>
	<div class="palette-demo">
		<div v-for="color in Object.values(ThemeColor)" :key="color" :data-background="color">
			{{ color }}
		</div>
	</div>
</template>

<style lang="css">
.palette-demo {
	display: grid;
	grid-template-columns: repeat(12, 1fr);

	[data-background] {
		grid-column: span 3;
		padding: 1rem;
		box-sizing: border-box;
		border: 0.25rem solid white;
		display: flex;
		align-items: center;
		justify-content: center;
		order: 10;
	}

	[data-background="primary"],
	[data-background="secondary"] {
		grid-column: span 5;
		line-height: 3;
	}

	[data-background="primary"] {
		order: 1;
	}

	[data-background="accent"] {
		grid-column: span 2;
		line-height: 3;
		order: 2;
	}

	[data-background="secondary"] {
		order: 3;
	}

	[data-background="light"],
	[data-background="dark"] {
		grid-column: span 6;
		line-height: 3;
	}
}
</style>