import{n as e}from"./chunk-BneVvdWh.js";import{a as t,b as n,c as r,f as i,g as a,l as o,o as s,p as c,r as l,s as u,t as d}from"./vue.esm-bundler-Cw_kkcAw.js";import{i as f,n as p,r as m,t as h}from"./global-BoPpif2T.js";var g,_,v,y,b=e((()=>{d(),f(),g=[`data-size`,`data-background`],_={key:1,"data-size":`wide`,"data-background":`dark`},v=[`data-size`],y=o({__name:`ContainedDemo`,props:{size:{default:p.CONTAINED},backgroundColor:{default:m.PRIMARY},variant:{default:`basic`}},setup(e){let o=null;return a(()=>{o||(o=document.createElement(`style`),document.getElementById(`storybook-root`)?.appendChild(o)),o.textContent=`
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
	`}),i(()=>{o?.remove(),o=null}),(i,a)=>(c(),u(l,null,[e.variant===`basic`?(c(),u(`section`,{key:0,"data-size":e.size,"data-background":e.backgroundColor},[...a[0]||=[r(`<div data-v-b88c4737><h1 data-v-b88c4737>Look ma, no container div!</h1><p data-v-b88c4737>Elements with the <strong data-v-b88c4737>data-size</strong> attribute set a CSS variable, <strong data-v-b88c4737>--container-max-width</strong>, which is then used with the <strong data-v-b88c4737>calc()</strong> function to pad each side to limit the content&#39;s width accordingly while keeping the background colour extended to the full width.</p><p data-v-b88c4737>Using padding instead of something like a grid layout ensures container queries work as expected without needing all direct children to be a container (which could cause layout problems for them), and that any other CSS properties on the direct children (such as different max-widths) are maintained.</p><hr data-v-b88c4737><p data-v-b88c4737>You hung up on the pizza place? I don&#39;t hang up on your friends! They&#39;re different from my other friends, they don&#39;t start sentences with &quot;you know who just died shoveling snow?&quot; Gum would be perfection. </p><p data-v-b88c4737>That is brand new information! Be sleepy! And grumpy! <em data-v-b88c4737>Stop naming dwarves!</em> I understand why Superman is here, but why is there a porcupine at the Easter Bunny&#39;s funeral? That is brand new information! </p></div><div class="columns" data-background="white" data-v-b88c4737><div class="columns__column" data-v-b88c4737><p data-v-b88c4737><strong data-v-b88c4737>This is a content section with its own background colour and padding.</strong></p><p data-v-b88c4737>What was I thinking at dinner? &quot;Do you want soup or salad?&quot; Both! Always order both! I&#39;m sorry, it was a one-time thing. I was very drunk, and it was someone else&#39;s subconscious.</p></div><div class="columns__column" data-v-b88c4737><h3 data-v-b88c4737>Container query test</h3><p class="container-query-test" data-v-b88c4737>This paragraph should have a different background colour when the container is at the &quot;narrow&quot; size or larger. (You may need to hit the &quot;reload story&quot; button after changing the width to see the difference.)</p><p data-v-b88c4737>It&#39;s a moo point. It’s like a cow&#39;s opinion; it doesn&#39;t matter. It&#39;s moo. What if he calls his own cell phone to find out who found it and I answer and we start talking and we fall in love? I mean, wouldn&#39;t that be a great story? Kind of like a fairy tale for the digital age. I&#39;m Chandler. I make jokes when I’m uncomfortable. Hey, that’s jo-incidence with a C! We said aloof, not a doof! They&#39;re different from my other friends, they don&#39;t start sentences with &quot;you know who just died shoveling snow?&quot; </p></div></div><div data-v-b88c4737><h2 data-v-b88c4737>The cushions are the essence of the chair!</h2><p data-v-b88c4737>The content of this element is narrow.</p></div>`,3)]],8,g)):s(``,!0),e.variant===`nested`?(c(),u(`main`,_,[a[2]||=t(`p`,null,`This top level element has a size of "wide". That means its contents are limited to that size, while the background of this section extends to the width of its container.`,-1),t(`div`,{"data-size":e.size,"data-background":`primary`},[t(`p`,null,`This nested element has a size of "`+n(e.size)+`".`,1),a[1]||=t(`div`,{class:`columns`,"data-background":`white`},[t(`div`,{class:`columns__column`},[t(`p`,null,[t(`strong`,null,`This is a content section with its own background colour and padding.`)]),t(`p`,null,`What was I thinking at dinner? "Do you want soup or salad?" Both! Always order both! I'm sorry, it was a one-time thing. I was very drunk, and it was someone else's subconscious.`)]),t(`div`,{class:`columns__column`},[t(`h3`,null,`Container query test`),t(`p`,{class:`container-query-test`},`This paragraph should have a different background colour when the container is at the "narrow" size or larger. (You may need to hit the "reload story" button after changing the width to see the difference.)`),t(`p`,null,`It's a moo point. It’s like a cow's opinion; it doesn't matter. It's moo. What if he calls his own cell phone to find out who found it and I answer and we start talking and we fall in love? I mean, wouldn't that be a great story? Kind of like a fairy tale for the digital age. I'm Chandler. I make jokes when I’m uncomfortable. Hey, that’s jo-incidence with a C! We said aloof, not a doof! They're different from my other friends, they don't start sentences with "you know who just died shoveling snow?" `)])],-1)],8,v)])):s(``,!0)],64))}})})),x=e((()=>{})),S,C=e((()=>{S=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n}})),w,T=e((()=>{b(),b(),x(),C(),w=S(y,[[`__scopeId`,`data-v-b88c4737`]]),y.__docgenInfo=Object.assign({displayName:y.name??y.__name},{exportName:`default`,displayName:`ContainedDemo`,description:``,tags:{},props:[{name:`size`,required:!0,type:{name:`LayoutContainerSize`},defaultValue:{func:!1,value:`LayoutContainerSize.CONTAINED`}},{name:`backgroundColor`,required:!0,type:{name:`ThemeColor`},defaultValue:{func:!1,value:`ThemeColor.PRIMARY`}},{name:`variant`,required:!0,type:{name:`union`,elements:[{name:`"basic"`},{name:`"nested"`}]},defaultValue:{func:!1,value:`'basic'`}}],sourceFiles:[`/home/runner/work/css-playground/css-playground/src/components/ContainedDemo/ContainedDemo.vue`]})})),E,D,O,k;e((()=>{T(),f(),h(),E={title:`Layout/Containerless`,component:w,args:{size:p.NARROW,backgroundColor:m.PRIMARY},argTypes:{size:{control:{type:`select`},options:Object.values(p),table:{type:{summary:`LayoutContainerSize`},defaultValue:{summary:p.CONTAINED}}},backgroundColor:{control:{type:`select`},options:Object.values(m),table:{type:{summary:`ThemeColor`},defaultValue:{summary:m.PRIMARY}}}},parameters:{controls:{exclude:[`variant`]}}},D={},O={args:{variant:`nested`,size:p.NARROW},argTypes:{...E.argTypes,size:{control:{type:`select`},options:[p.NARROW,p.NARROWER,p.SMALL],table:{type:{summary:`LayoutContainerSize`},defaultValue:{summary:p.CONTAINED}}}},parameters:{controls:{exclude:[`backgroundColor`,`variant`]}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'nested',
    size: LayoutContainerSize.NARROW
  },
  argTypes: {
    ...meta.argTypes,
    size: {
      control: {
        type: 'select'
      },
      options: [LayoutContainerSize.NARROW, LayoutContainerSize.NARROWER, LayoutContainerSize.SMALL],
      table: {
        type: {
          summary: 'LayoutContainerSize'
        },
        defaultValue: {
          summary: LayoutContainerSize.CONTAINED
        }
      }
    }
  },
  parameters: {
    controls: {
      exclude: ['backgroundColor', 'variant']
    }
  }
}`,...O.parameters?.docs?.source}}},k=[`Basic`,`Nested`]}))();export{D as Basic,O as Nested,k as __namedExportsOrder,E as default};