import Link from "next/link";
import { useEffect } from "react";
// eslint-disable-next-line import/no-default-export
export default function FourOhFour(): JSX.Element {
	useEffect(() => {
		window.location.href = "/";
	});
	return (
		<>
			<h1>404 Page not Found</h1>
			<Link href="/">
				<a>Go back home</a>
			</Link>
		</>
	);
}
