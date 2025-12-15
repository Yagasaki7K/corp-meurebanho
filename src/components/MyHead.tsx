import { descriptionApp, nameApp } from "@/utils/appInfo";
import Head from "next/head";

const MyHead = ({ title }: { title?: string }) => {
     return (
          <>
               <Head>
                    <title>{title ? `${title} - ${nameApp}` : `${nameApp}`}</title>
                    <link rel="icon" type="image/png" href="/logo.png" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content={descriptionApp} />
               </Head>
          </>
     );
};

export default MyHead;
