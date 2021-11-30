<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Countdown from '$lib/countdown/Countdown.svelte';

	const timeStart = new Date('2021-12-13');
	const timeEnd = new Date('2021-12-18');
</script>

<svelte:head>
	<title>Iver's Christmas CTF 2021</title>
</svelte:head>

<section>
	<pre
		class="x-large">
<span class="prompt">$</span> <code><span class="cmd">./countdown.sh <span class="arg"><span class="str">"<span class="var">$DATE_START</span>"</span></span> <span class="arg"><span class="str">"<span class="var">$DATE_END</span>"</span></span></span></code>
<samp class="output"><Countdown time={timeStart} passedString="// Let's go! 🎉"/></samp>

<samp class="output"><Countdown time={timeEnd} passedString="// It's over!"/></samp>
</pre>
</section>

<section>
	<pre
		class="larger">
<span class="prompt">$</span> <code><span class="cmd">ls</span> <span class="arg">categories</span></code>
<samp class="output">crypto	  osint  reversing
forensic  pwn	 web</samp>

<span class="prompt">$</span> <code><span class="cmd">cat</span> <span class="arg">location.md</span></code>
<samp class="output">- Reg: <a href="https://2021.santahack.xyz" referrerpolicy="noreferrer">&lt;https://2021.santahack.xyz&gt;</a>
- Comms: TEAMS #2021 - Santa Hack

&gt; *Reg opens later, stay tuned!*</samp>

<span class="prompt">$</span> <code><span class="cmd">cat</span> <span class="arg">difficulty.txt</span></code>
<samp class="output">Difficulty: [EASY => MEDIUM]</samp>

<span class="prompt">$</span> <code><span class="cmd">cat</span> <span class="arg">rules.yaml</span></code>
<samp class="output">teamSize:
  min: 1
  max: null
email: >-
  ^.*(@iver\.(com|se|no|pl)|@aztek\.no|@nogui\.se|@citynetworks\.eu)$</samp>

<span class="prompt">$</span> <code><span class="cmd">date</span> <span class="arg">-I</span> <span class="arg">-d <span class="str">"<span class="var">$DATE_START</span>"</span></span></code>
<samp class="output">2021-12-13</samp>

<span class="prompt">$</span> <code><span class="cmd">date</span> <span class="arg">-I</span> <span class="arg">-d <span class="str">"<span class="var">$DATE_END</span>"</span></span></code>
<samp class="output">2021-12-17</samp>
</pre>
</section>

<style>
	.larger {
		font-size: larger;
	}
	.x-large {
		font-size: x-large;
	}
	.prompt {
		color: #da2c43;
	}
	.cmd {
		color: #17b169;
	}
	.arg {
		color: #dda0dd;
	}
	.str {
		color: #568203;
	}
	.var {
		color: #9b41e0;
	}
	.output {
		color: #d8bfd8;
	}
</style>
