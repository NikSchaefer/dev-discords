import "@styles/global.css";
import { pageview } from "@lib/gtag";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { NextSeo } from "next-seo";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: unknown) => {
			pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NextSeo
				title="Developer Discords"
				defaultTitle="Developer Discords"
				titleTemplate="%s • Nik Schaefer"
				description="An online collection of developer related discord servers — because programmers need more places to argue about tabs vs. spaces."
				canonical="https://discords.nikschaefer.com"
				openGraph={{
					url: "https://dev-discords.nikschaefer.com",
					title: "Dev Discords | Nik Schaefer",
					description:
						"An online collection of developer related discord servers — because programmers need more places to argue about tabs vs. spaces.",
					images: [],
					site_name: "Developer Discords | Nik Schaefer",
				}}
			/>

			<Component {...pageProps} />
		</>
	);
}
