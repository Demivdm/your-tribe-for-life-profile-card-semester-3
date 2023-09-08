<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>{data.page.data.example_title}</h1>
<slot/>
<style>
h2{
    background-color: #fcba03;
}

</style>
