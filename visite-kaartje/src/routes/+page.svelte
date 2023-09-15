<script>
  /** @type {import('./$types').PageData} */
  export let data;
  console.log(data);
</script>

<h1>{data.title}</h1>
<img src={data.img.url} alt="profile head" />
<h2>{data.over}</h2>
<!-- omdat deze data in een array staat heeft het blokhaken nodig en moet het beginnen bij 0, daarna kijk je wat je specifiek uit het array moet ophalen in dit geval de text -->
<p>{data.introduction[0].text}</p>
<!-- 
<pre>
{JSON.stringify(data, null, 2)}
</pre> -->
