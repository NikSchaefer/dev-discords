import "@styles/global.css";
import Footer from "@components/footer";
import Header from "@components/header";
import type { AppProps } from "next/app";
import Head from "next/head";

// eslint-disable-next-line import/no-default-export
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<div>
			<Head>
				<title>Developer Discords</title>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
				<meta name="msapplication-TileColor" content="#da532c"/>
				<meta name="theme-color" content="#ffffff" />
			</Head>

			<Header />

			<Component {...pageProps} />

			<Footer />
		</div>
	);
}
