import { IconArrow, IconGithub } from "@components/icons";
import {
	StyledComponent,
	StyledDiv,
	StyledH,
	StyledIconDiv,
	StyledImage,
	StyledInfoDiv,
	StyledInput,
	StyledLink,
	StyledCredit,
	StyledGithub,
} from "@styles/index.theme";
import { useState } from "react";
import { devData } from "types";

import jsonData from "../data.json";

const sortedData = jsonData.sort((a, b) => {
	if (a.name < b.name) {
		return -1;
	}
	if (a.name > b.name) {
		return 1;
	}
	return 0;
});
// eslint-disable-next-line import/no-default-export
export default function Home(): JSX.Element {
	const [search, setSearch] = useState("");
	const [searchArr, setSearchArr] = useState(sortedData);

	function filter(search: string): boolean {
		const keyword = search.toLowerCase().trim();
		if (keyword === "") {
			setSearchArr(sortedData);
			return false;
		}

		const out: devData[] = [];
		for (const x of sortedData) {
			if (
				x.description.toLowerCase().includes(keyword) ||
				x.name.toLowerCase().includes(keyword)
			) {
				out.push(x);
			}
		}
		setSearchArr(out);
		return true;
	}

	return (
		<main>
			<StyledGithub>
				<a
					aria-label="Github of Website"
					href="https://github.com/NikSchaefer/dev-discords"
				>
					<IconGithub />
				</a>
			</StyledGithub>
			<StyledInfoDiv>
				<StyledH>Developer Discords</StyledH>
				<StyledCredit>
					Original Data from{" "}
					<StyledLink href="https://github.com/ljosberinn/awesome-dev-discord">
						Gerrit Alex
					</StyledLink>{" "}
					⋅ Made by{" "}
					<StyledLink href="https://nikschaefer.tech/">
						NikSchaefer
					</StyledLink>
				</StyledCredit>
				<StyledIconDiv>
					<IconArrow />
				</StyledIconDiv>
				<StyledInput
					aria-label="Search Bar"
					value={search}
					type="text"
					placeholder={`Search ${jsonData.length} Discord Servers`}
					onChange={(e) => {
						setSearch(e.target.value);
						filter(e.target.value);
					}}
				/>
			</StyledInfoDiv>
			<StyledDiv>
				{searchArr.map((temp) => (
					<a href={temp.link} key={temp.name}>
						<StyledComponent className="servers">
							<StyledImage alt="discord" src="/discord.svg" />
							<h3>
								{temp.name}
							</h3>
							<p>{temp.description}</p>
						</StyledComponent>
					</a>
				))}
			</StyledDiv>
			<StyledCredit>⭐ on <StyledLink href="https://github.com/NikSchaefer/dev-discords">Github</StyledLink> ⋅ Made with ❤️</StyledCredit>
		</main>
	);
}
