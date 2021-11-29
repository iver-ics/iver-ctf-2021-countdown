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

<footer>
</footer>

<style>
	.container {
		margin: 0 auto;
		max-width: 50rem;
	}
	main {
		margin: 1rem;
	}
</style>
