<script lang="ts">
	import MainCard from '$lib/components/main-card.svelte';

	export let data;
</script>

<svelte:head>
  <title>HaPI | Home</title>
  <meta name="description" content="How Poor Am I.">
  <meta property="og:title" content="Hapi">
  <meta property="og:description" content="How Poor Am I.">
</svelte:head>

<div class="sm:flex justify-center px-4 py-14 sm:py-32 lg:px-8">
	<MainCard transactions={data.transactions} />
</div>
