<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>{data.title}</h1>
<img src="{data.img.url}">

<pre>
{JSON.stringify(data,null,2	)}
</pre>