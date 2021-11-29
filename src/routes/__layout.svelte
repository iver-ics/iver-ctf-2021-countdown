<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<div class="container">
	<main>
		<slot />
	</main>
</div>

<div class="snow">
	<video autoplay muted loop>
		<source src="/videos/Seamless+Snow+Background+Loop-CiXWHUpoD44.mp4"/>
	</video>
</div>

<style>
	.container {
		margin: 0 auto;
		max-width: 50rem;
	}

	main {
		margin: 0 1rem 1rem 1rem;
	}

	.snow {
		position: fixed;
		top: 0;
		z-index: -100;
		background-color: #160030;
		background: linear-gradient(
			65deg,
			#160030 0%,
			#2c1141 100%
		);
	}
	.snow video {
		min-width: 100vw;
		min-height: 100vh;
		mix-blend-mode: screen;
	}
</style>
