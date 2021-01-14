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
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<Component {...pageProps} />

			<Footer />
		</div>
	);
}
