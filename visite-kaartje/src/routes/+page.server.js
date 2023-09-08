import { createClient } from "$lib/prismicio";

export async function load({ fetch, request }) {
  const client = createClient({ fetch, request });

  const document = await client.getByUID("homepage", "page", {
    fetchLinks: [
      "homepage.content",
      "homepage.title",
      "homepage.image",
      "homepage.slices",
    ],
  });

  return document.data;
}
