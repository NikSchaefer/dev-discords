import { IconCheck, IconArrow, IconGithub } from "@components/icons";
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
    if (a.name < b.name) { return -1 }
    if (a.name > b.name)
    {
        return 1
    }
    return 0
})
// eslint-disable-next-line import/no-default-export
export default function Home(): JSX.Element {
	const [search, setSearch] = useState("");
	const [searchArr, setSearchArr] = useState(sortedData);

	function filter(search: string): boolean {
		if (search.length === 0 || search === "" || search === " ") {
			setSearchArr(sortedData);
			return false;
		}
		const out: devData[] = [];
		for (const x of sortedData) {
			if (
				x.name.toLowerCase().startsWith(search.toLowerCase()) ||
				x.name.toLowerCase().includes(search.toLowerCase())
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
				<a href="https://github.com/NikSchaefer/dev-discords">
					<IconGithub />
				</a>
			</StyledGithub>
			<StyledInfoDiv>
				<StyledH>Developer Discords</StyledH>
				<StyledCredit>
					Data from{" "}
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
							<h3>
								<IconCheck /> {temp.name}
							</h3>
							<p>{temp.description}</p>
							<StyledImage alt="discord" src="/discord.svg" />
						</StyledComponent>
					</a>
				))}
			</StyledDiv>
		</main>
	);
}
