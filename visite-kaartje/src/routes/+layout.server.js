import { error } from "@sveltejs/kit";

import createClient from "$lib/prismicio.";

export async function load({ fetch, request }) {
  const client = createClient({ fetch, request });
  const menu = await client.getSingle("menu");

  if (menu) {
    return { menu };
  }

  error(404, "Not found");
}
