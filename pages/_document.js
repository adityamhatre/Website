import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="./favicon.png"></link>
                    <meta name="theme-color" content="#fff" />
                </Head>
                <body>
                    <script dangerouslySetInnerHTML={{ __html: `
                        (function() {
                            var savedTheme = localStorage.getItem('theme');
                            var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                            var theme = savedTheme || systemTheme;
                            if (theme === 'dark') {
                                document.documentElement.classList.add('dark-theme');
                            } else {
                                document.documentElement.classList.remove('dark-theme');
                            }
                        })();
                    ` }} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
