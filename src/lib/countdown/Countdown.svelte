<script lang="ts">
    import { onDestroy } from "svelte";

    export let time: Date;
    export let intervalMs: number = 1000;

    let output: string;
    let intervalHandle = setInterval(updateOutput, intervalMs);

    function updateOutput(): void {
        const deltaMs = time.getTime() - new Date().getTime();
        const deltaS = Math.floor(deltaMs/1000) + "s";
        const deltaM = Math.floor(deltaMs/1000/60) + "m";
        const deltaH = Math.floor(deltaMs/1000/60/60) + "h";
        const deltaD = Math.floor(deltaMs/1000/60/60/24) + "d";

        output = deltaS.padEnd(10) + deltaM.padEnd(9) + deltaH.padEnd(7) + deltaD;
    }

    onDestroy(() => clearInterval(intervalHandle));

    updateOutput();
</script>

SECONDS   MINUTES  HOURS  DAYS
{output}
