<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<div class="container">
	<main>
		<slot />
	</main>

	<footer class="muted">
		<p>
			This <a
				target="_blank"
				referrerpolicy="no-referrer"
				href="https://en.wikipedia.org/wiki/Wargame_(hacking)">CTF</a
			>
			event is hosted by Iver's Information and Cyber Security (ICS) department.
		</p>
		<p>
			"Seamless Snow Background Loop" by Kaweh Bassiri - <a
				target="_blank"
				referrerpolicy="no-referrer"
				href="https://youtube.com/watch?v=CiXWHUpoD44">youtube.com</a
			><br />
			"Syne Mono" font by The Syne Project Authors -
			<a
				target="_blank"
				referrerpolicy="no-referrer"
				href="https://gitlab.com/bonjour-monde/fonderie/syne-typeface/-/blob/15ae4cb0e07c24d0ff26865a8a86fd918c41e618/OFL.txt"
				>gitlab.com</a
			><br />
			"Fira Code" font by The Fira Code Project Authors -
			<a
				target="_blank"
				referrerpolicy="no-referrer"
				href="https://github.com/tonsky/FiraCode/blob/5811062ef62d3700a863950f0b341f76151e0c50/LICENSE"
				>github.com</a
			>
		</p>
	</footer>
</div>

<div class="snow">
	<video autoplay muted loop>
		<source src="/videos/Seamless+Snow+Background+Loop-CiXWHUpoD44.mp4" />
	</video>
</div>

<style>
	.container {
		margin: 0 auto;
		max-width: 60rem;
	}

	main {
		margin: 0 1rem 1rem 1rem;
	}

	footer {
		text-align: center;
	}

	.muted {
		color: var(--muted-color);
	}

	.snow {
		position: fixed;
		top: 0;
		z-index: -100;
		background-color: #160030;
		background: linear-gradient(65deg, #160030 0%, #2c1141 100%);
	}
	.snow video {
		min-width: 100vw;
		min-height: 100vh;
		mix-blend-mode: screen;
	}
</style>
