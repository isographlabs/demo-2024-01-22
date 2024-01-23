import MainApp from "@/components/MainApp";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Isograph GitHub Demo</title>
        <meta name="description" content="Isograph GitHub Demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SessionProvider>
          <MainApp />
        </SessionProvider>
      </main>
    </>
  );
}
