import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }: AppProps) {
     return (
          <>
               <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="theme-color" content="#1B9849" />
                    <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
               </Head>
               <Component {...pageProps} />
               <Toaster position={"top-right"} richColors={true} />
          </>
     );
}
