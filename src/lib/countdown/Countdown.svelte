<script lang="ts">
	import { onDestroy } from 'svelte';

	export let passedString = '// Timeout!';
	export let time: Date;
	export let intervalMs = 1000;

	let output: string;
	let intervalHandle = setInterval(updateOutput, intervalMs);
	let hasPassed = false;

	function updateOutput(): void {
		const deltaMs: number = time.getTime() - new Date().getTime();
		if (deltaMs < 0) {
			output = '0s        0m       0h     0d  ';
			hasPassed = true;
			clearInterval(intervalHandle);
			return;
		}
		const deltaS = Math.floor(deltaMs / 1000) + 's';
		const deltaM = Math.floor(deltaMs / 1000 / 60) + 'm';
		const deltaH = Math.floor(deltaMs / 1000 / 60 / 60) + 'h';
		const deltaD = Math.floor(deltaMs / 1000 / 60 / 60 / 24) + 'd';

		output = deltaS.padEnd(10) + deltaM.padEnd(9) + deltaH.padEnd(7) + deltaD;
	}

	onDestroy(() => clearInterval(intervalHandle));

	updateOutput();
</script>

SECONDS MINUTES HOURS DAYS
<span class="output">{output}</span>{#if hasPassed}<span class="passed">{passedString}</span>{/if}

<style>
	.output {
		color: var(--text-color);
	}
	.passed {
		color: var(--primary-color);
	}
</style>
