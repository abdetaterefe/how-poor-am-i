<script lang="ts">
	import BalanceCard from './balance-card.svelte';
	import TransactionCard from './transaction-card.svelte';

	export let transactions: {
		isDebit: string;
		balance: string;
		tBalance: string;
		emailDate: string;
	}[];
</script>

<div class="sm:w-[75vw] p-4 border border-yellow-200 rounded-lg shadow">
	<div class="sm:grid grid-cols-3 gap-4">
		<!-- Balance -->
		<BalanceCard tBalance={transactions[0].tBalance} />
		<!-- Transactions -->
		<TransactionCard {transactions} />
	</div>
</div>
