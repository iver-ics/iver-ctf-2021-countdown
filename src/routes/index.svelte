<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Countdown from "$lib/countdown/Countdown.svelte";

	const timeStart = new Date('2021-12-13');
	const timeEnd = new Date('2021-12-18');
</script>

<svelte:head>
	<title>Iver's Christmas CTF 2021</title>
</svelte:head>

<section>
<pre>
<span class="prompt">$</span> <code><span class="cmd">./countdown.sh <span class="arg"><span class="str">"<span class="var">$DATE_START</span>"</span></span> <span class="arg"><span class="str">"<span class="var">$DATE_END</span>"</span></span></span></code>
<samp class="output"><Countdown time={timeStart} passedString="// Let's go! 🎉"/></samp>

<samp class="output"><Countdown time={timeEnd} passedString="// It's over!"/></samp>
</pre>
</section>

<section>
<pre>
<span class="prompt">$</span> <code><span class="cmd">ls</span> <span class="arg">categories</span></code>
<samp class="output">crypto	  osint  reversing
forensic  pwn	 web</samp>

<span class="prompt">$</span> <code><span class="cmd">cat</span> <span class="arg">location.txt</span></code>
<samp class="output"><a href="https://2021.santahack.xyz" referrerpolicy="noreferrer">https://2021.santahack.xyz</a></samp>

<span class="prompt">$</span> <code><span class="cmd">cat</span> <span class="arg">communication.txt</span></code>
<samp class="output">TEAMS #2021 - Santa Hack</samp>

<span class="prompt">$</span> <code><span class="cmd">cat</span> <span class="arg">registration-email.regex</span></code>
<samp class="output">^.*@iver\.(com|se|no|pl)$</samp>

<span class="prompt">$</span> <code><span class="cmd">date</span> <span class="arg">-I</span> <span class="arg">-d <span class="str">"<span class="var">$DATE_START</span>"</span></span></code>
<samp class="output">2021-12-13</samp>

<span class="prompt">$</span> <code><span class="cmd">date</span> <span class="arg">-I</span> <span class="arg">-d <span class="str">"<span class="var">$DATE_END</span>"</span></span></code>
<samp class="output">2021-12-17</samp>
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
		color: #17B169;
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
