<script>
	import '../app.css';

	import Header from '$lib/components/Header.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="text-slate-800">
	<Header navigation={data.navigation} settings={data.settings} />
	<main><slot /></main>
</div>
