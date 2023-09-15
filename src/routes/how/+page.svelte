<svelte:head>
  <title>HaPI | How</title>
  <meta name="description" content="How Poor Am I.">
  <meta property="og:title" content="Hapi">
  <meta property="og:description" content="How Poor Am I.">
</svelte:head>

<div class="sm:flex justify-center px-4 py-4 sm:py-12">
	<div class="sm:w-[80vw] md:w-[60vw]">
		<h1 class="text-2xl sm:text-5xl text-yellow-100">HOW DOES THIS WEBISTE WORK?</h1>
		<p class="mt-10 text-lg sm:text-xl text-yellow-500">
			First, there is a Google app script trigger that runs every hour and checks my email address
			for new Abyssinia bank emails.
		</p>
		<p class="mt-4 text-lg sm:text-xl text-yellow-500">
			However, there are times when Abyssinia Bank does not send emails.
		</p>
		<p class="mt-4 text-lg sm:text-xl text-yellow-500">
			But if there are any, the script extracts useful information such as whether the account has been
			debited or not, the total balance, and the date.
		</p>
		<p class="mt-4 text-lg sm:text-xl text-yellow-500">
			The script then saves the information on a spreadsheet (Google sheet), and the website
			retrieves the data from the spreadsheet.
		</p>
	</div>
</div>
