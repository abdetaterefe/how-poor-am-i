<script lang="ts">
	import TransactionCard from '$lib/components/transaction-card.svelte';

	export let data;
</script>

<div class="flex justify-center px-6 py-24 sm:py-32 lg:px-8">
	<TransactionCard transactions={data.transactions} />
</div>
