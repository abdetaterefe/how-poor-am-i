<script lang="ts">
	import MainCard from '$lib/components/main-card.svelte';

	export let data;
</script>

<div class="sm:flex justify-center px-4 py-14 sm:py-32 lg:px-8">
	<MainCard transactions={data.transactions} />
</div>
