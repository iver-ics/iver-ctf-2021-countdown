<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Countdown from "$lib/countdown/Countdown.svelte";

	const timeStart = new Date('2021-12-13');
	const timeEnd = new Date('2021-12-18');
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
<pre>
<span class="prompt">$</span> <span class="cmd">date</span> <span class="arg">-I</span> <span class="arg">-d <span class="str">"<span class="var">$DATE_START</span>"</span></span>
<span class="output">2021-12-13</span>

<span class="prompt">$</span> <span class="cmd">date</span> <span class="arg">-I</span> <span class="arg">-d <span class="str">"<span class="var">$DATE_END</span>"</span></span>
<span class="output">2021-12-17</span>

<span class="prompt">$</span> <span class="cmd">./countdown.sh <span class="arg"><span class="str">"<span class="var">$DATE_START</span>"</span></span> <span class="arg"><span class="str">"<span class="var">$DATE_END</span>"</span></span></span>
<span class="output"><Countdown time={timeStart}/></span>

<span class="output"><Countdown time={timeEnd}/></span>
</pre>
</section>

<style>
	pre {
		font-size: x-large;
	}
	.prompt {
		color: #DA2C43;
	}
	.cmd {
		color: #DDA0DD;
	}
	.arg {
		color: #DDA0DD;
	}
	.str {
		color: #568203;
	}
	.var {
		color: #9b41e0;
	}
	.output {
		color: #D8BFD8
	}
</style>
