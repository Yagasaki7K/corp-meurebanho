import { ServerStyleSheet } from "styled-components";
import Document, { type DocumentContext, type DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
     // Fast refresh with NextJS doesn't broken the CSS
     static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
          const sheet = new ServerStyleSheet();
          const originalRenderPage = ctx.renderPage;

          try {
               ctx.renderPage = () =>
                    originalRenderPage({
                         enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
                    });

               const initialProps = await Document.getInitialProps(ctx);
               return {
                    ...initialProps,
                    styles: (
                         <>
                              {initialProps.styles}
                              {sheet.getStyleElement()}
                         </>
                    ),
               };
          } finally {
               sheet.seal();
          }
     }
     // Finish Here

     render() {
          return (
               <Html lang="pt-br">
                    <Head>
                         <meta
                              name="keywords"
                              content="gado, boi, gestao, estoque, deposito, leilao, vaca, boi, embriao, aspiracao, animal, bezerro, aplicativo de gado, aplicativo de boi, gestao animal"
                         />

                         <meta name="author" content="Anderson 'Yagasaki' Marlon" />
                         <meta name="robots" content="index, follow" />
                         <link rel="shortcut icon" href="/logo.png" type="image/png" />
                         <meta property="og:locale" content="pt_BR" />
                    </Head>

                    <body>
                         <Main />
                         <NextScript />
                    </body>
               </Html>
          );
     }
}
