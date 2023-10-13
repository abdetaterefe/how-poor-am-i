<script lang="ts">
	export let transactions: {
		isDebit: string;
		balance: string;
		tBalance: string;
		emailDate: string;
	}[];
</script>

<div class="mt-4 sm:mt-0 rounded-lg bg-yellow-50 p-4 flex items-center justify-center">
	<div>
		<span class="mb-5 text-yellow-500 text-xl font-bold">Latest Transactions</span>
		<ul class="ml-4">
			{#each transactions as transaction}
				<li class="text-gray-900 font-medium flex justify-between">
					<p class="text-yellow-900 text-sm sm:text-base font-semibold">
						transaction.balance
					</p>
					{#if transaction.isDebit === 'TRUE'}
						<div class="bg-red-500 h-4 w-10 text-white rounded-lg flex items-center justify-center">
							-
						</div>
					{/if}
					{#if transaction.isDebit === 'FALSE'}
						<div
							class="bg-green-500 h-4 w-10 text-white rounded-lg flex items-center justify-center"
						>
							+
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</div>
