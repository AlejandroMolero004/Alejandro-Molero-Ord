import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component}: PageProps) {
    // do something with state here
    return (
        <>
            <a href="/">Todo</a>
            <br />
            <a href="/favourites">favourites</a>
            <Component />
        </>
      
    );
  }