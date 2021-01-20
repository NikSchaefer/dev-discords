import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
// eslint-disable-next-line import/no-default-export
export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
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
	render() {
		return (
			<Html>
				<Head>
					<title>Developer Discords</title>
					<meta
						name="description"
						content="Curated Collection of Developer related Discord Servers"
					/>

					<meta itemProp="name" content="Developer Discords" />
					<meta
						itemProp="description"
						content="Curated Collection of Developer related Discord Servers"
					/>
					<meta
						itemProp="image"
						content="dev-discords.now.sh/icon.png"
					/>

					<meta
						property="og:url"
						content="https://dev-discords.now.sh"
					/>
					<meta property="og:type" content="website" />
					<meta property="og:title" content="Developer Discords" />
					<meta
						property="og:description"
						content="Curated Collection of Developer related Discord Servers"
					/>
					<meta
						property="og:image"
						content="dev-discords.now.sh/icon.png"
					/>

					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content="Developer Discords" />
					<meta
						name="twitter:description"
						content="Curated Collection of Developer related Discord Servers"
					/>
					<meta
						name="twitter:image"
						content="dev-discords.now.sh/icon.png"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
