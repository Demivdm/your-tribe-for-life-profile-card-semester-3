<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<h1>{data.title}</h1>
<img src={data.img.url} />
<h2>{data.over}</h2>
<p>{data.introduction}</p>

<pre>
{JSON.stringify(data, null, 2)}
</pre>
