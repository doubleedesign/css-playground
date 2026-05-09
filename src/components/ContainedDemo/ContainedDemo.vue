<script setup lang="ts">
/* eslint-disable max-len */
import { LayoutContainerSize, ThemeColor } from '../../types';
import { onUnmounted, watchEffect } from 'vue';

export type ContainedDemoProps = {
	size: LayoutContainerSize;
	backgroundColor: ThemeColor;
	variant: 'basic' | 'nested'
};

withDefaults(defineProps<ContainedDemoProps>(), {
	size: LayoutContainerSize.CONTAINED,
	backgroundColor: ThemeColor.PRIMARY,
	variant: 'basic'
});

let styleEl: HTMLStyleElement | null = null;
watchEffect(() => {
	if (!styleEl) {
		styleEl = document.createElement('style');
		document.getElementById('storybook-root')?.appendChild(styleEl);
	}

	//Inject the relevant CSS directly into #storybook-root so that it shows in the HTML addon panel
	styleEl.textContent = `
	:root {
		--width-wide: 1440px;
		--width-contained: 1140px;
		--width-narrow: 940px;
		--width-narrower: 768px;
		--width-small: 600px;
	}

	[data-size] {
		width: 100%;
		container-name: layout-section;
		container-type: inline-size;
		padding-inline: calc((100cqw - var(--container-max-width)) / 2);
		box-sizing: border-box;

		> * {
			width: 100%;
		}
	}

	[data-size="full"] {
		--container-max-width: 100%;
		border-inline: var(--spacing-md) solid transparent;
	}

	[data-size="wide"] {
		--container-max-width: var(--width-wide);
	}

	[data-size="contained"] {
		--container-max-width: var(--width-contained);
	}

	[data-size="narrow"] {
		--container-max-width: var(--width-narrow);
	}

	[data-size="narrower"] {
		--container-max-width: var(--width-narrower);
	}

	[data-size="small"] {
		--container-max-width: var(--width-small);
	}

	@container layout-section (min-width: var(--width-narrow)) {
		.container-query-test {
			padding: var(--spacing-md);
			background-color: var(--color-info);
		}
	}
	`;

});

onUnmounted(() => {
	styleEl?.remove();
	styleEl = null;
});
</script>

<template>
	<section v-if="variant === 'basic'" :data-size="size" :data-background="backgroundColor">
		<div>
			<h1>Look ma, no container div!</h1>
			<p>Elements with the <strong>data-size</strong> attribute set a CSS variable, <strong>--container-max-width</strong>, which is then used with the <strong>calc()</strong> function to pad each side to limit the content's width accordingly while keeping the background colour extended to the full width.</p>
			<p>Using padding instead of something like a grid layout ensures container queries work as expected without needing all direct children to be a container (which could cause layout problems for them), and that any other CSS properties on the direct children (such as different max-widths) are maintained.</p>
			<hr/>
			<p>You hung up on the pizza place? I don't hang up on your friends! They're different from my other friends, they don't start sentences with "you know who just died shoveling snow?" Gum would be perfection. </p>
			<p>That is brand new information! Be sleepy! And grumpy! <em>Stop naming dwarves!</em> I understand why Superman is here, but why is there a porcupine at the Easter Bunny's funeral? That is brand new information! </p>
		</div>
		<div class="columns" data-background="white">
			<div class="columns__column">
				<p><strong>This is a content section with its own background colour and padding.</strong></p>
				<p>What was I thinking at dinner? "Do you want soup or salad?" Both! Always order both! I'm sorry, it was a one-time thing. I was very drunk, and it was someone else's subconscious.</p>
			</div>
			<div class="columns__column">
				<h3>Container query test</h3>
				<p class="container-query-test">This paragraph should have a different background colour when the container is at the "narrow" size or larger. (You may need to hit the "reload story" button after changing the width to see the difference.)</p>
				<p>It's a moo point. It’s like a cow's opinion; it doesn't matter. It's moo. What if he calls his own cell phone to find out who found it and I answer and we start talking and we fall in love? I mean, wouldn't that be a great story? Kind of like a fairy tale for the digital age. I'm Chandler. I make jokes when I’m uncomfortable. Hey, that’s jo-incidence with a C! We said aloof, not a doof! They're different from my other friends, they don't start sentences with "you know who just died shoveling snow?" </p>
			</div>
		</div>
		<div>
			<h2>The cushions are the essence of the chair!</h2>
			<p>The content of this element is narrow.</p>
		</div>
	</section>

	<main v-if="variant === 'nested'" data-size="wide" data-background="dark">
		<p>This top level element has a size of "wide". That means its contents are limited to that size, while the background of this section extends to the width of its container.</p>
		<div :data-size="size" data-background="primary">
			<p>This nested element has a size of "{{ size }}".</p>
			<div class="columns" data-background="white">
				<div class="columns__column">
					<p><strong>This is a content section with its own background colour and padding.</strong></p>
					<p>What was I thinking at dinner? "Do you want soup or salad?" Both! Always order both! I'm sorry, it was a one-time thing. I was very drunk, and it was someone else's subconscious.</p>
				</div>
				<div class="columns__column">
					<h3>Container query test</h3>
					<p class="container-query-test">This paragraph should have a different background colour when the container is at the "narrow" size or larger. (You may need to hit the "reload story" button after changing the width to see the difference.)</p>
					<p>It's a moo point. It’s like a cow's opinion; it doesn't matter. It's moo. What if he calls his own cell phone to find out who found it and I answer and we start talking and we fall in love? I mean, wouldn't that be a great story? Kind of like a fairy tale for the digital age. I'm Chandler. I make jokes when I’m uncomfortable. Hey, that’s jo-incidence with a C! We said aloof, not a doof! They're different from my other friends, they don't start sentences with "you know who just died shoveling snow?" </p>
				</div>
			</div>
		</div>
	</main>
</template>

<style scoped lang="css">
	div {
		padding-block: var(--spacing-lg);
		box-sizing: border-box;
	}

	.columns {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--spacing-lg);
		padding: var(--spacing-md);

		.columns__column {
			padding: 0;
		}
	}
</style>