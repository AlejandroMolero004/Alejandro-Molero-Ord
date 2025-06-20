// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $character_id_ from "./routes/character/[id].tsx";
import * as $favourites from "./routes/favourites.tsx";
import * as $index from "./routes/index.tsx";
import * as $Character from "./islands/Character.tsx";
import * as $Characters from "./islands/Characters.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/character/[id].tsx": $character_id_,
    "./routes/favourites.tsx": $favourites,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Character.tsx": $Character,
    "./islands/Characters.tsx": $Characters,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
