import { useEffect } from "react";
// eslint-disable-next-line import/no-default-export
export default function FourOhFour(): JSX.Element {
	useEffect(() => {
		window.location.href = "/"; // redirect
	});
	return <h1>Redirecting...</h1>
}
