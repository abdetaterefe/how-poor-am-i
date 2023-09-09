<script lang="ts">
	export let transactions: {
		isDebit: string;
		balance: string;
		tBalance: string;
		emailDate: string;
	}[];
</script>

<div class="w-[75vw] p-4 border border-yellow-200 rounded-lg shadow">
	<div class="grid grid-cols-3 gap-4">
		<div class="col-span-2">
			<div class="mb-4 bg-yellow-50 rounded-lg p-4">
				<h1>I have</h1>
				<h1 class="text-5xl font-bold text-yellow-600">{transactions[0].tBalance}</h1>
			</div>
			<div class="bg-yellow-50 rounded-lg p-4">
				<p class="text-base text-yellow-900">
					Welcome to the "How Poor Am I?" website. The "How Poor Am I?" website is the most honest
					website on the internet. It just tells you how broke I am, straight up.
				</p>
			</div>
		</div>
		<!-- Transactions -->
		<div class="rounded-lg bg-yellow-50 p-4 flex items-center justify-center">
			<div>
				<span class="mb-5 text-yellow-500 text-xl font-bold">Latest Transactions</span>
				<ul class="ml-4">
					{#each transactions as transaction}
						<li class="text-gray-900 font-medium flex justify-between">
							<p>{transaction.balance}</p>
							{#if transaction.isDebit === 'TRUE'}
								<div
									class="bg-red-500 h-4 w-10 text-white rounded-lg flex items-center justify-center"
								>
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
	</div>
</div>
