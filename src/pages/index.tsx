import Icon from "@components/icons";
import jsonData from "@components/out.json";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { devData } from "types";

const accent = "rgba(0, 255, 255, 0.616)";
const StyledDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 95%;
	max-width: 1200px;
	margin: auto;
`;
const StyledComponent = styled.div`
	width: 300px;
	text-align: left;
	height: 180px;
	display: flex;
	border: ${accent} 3px solid;
	border-radius: 10px;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px;
	margin: 20px;
	transition: all ease-in-out 0.3s;
	& h3 {
		margin-bottom: 0;
	}
	&:hover {
		cursor: pointer;
		background-color: white;
		border-color: rgb(0, 197, 197);
	}
`;
const StyledImage = styled.img`
	width: 40px;
	margin-left: auto;
	&:hover {
		cursor: pointer;
	}
`;
const StyledInput = styled.input`
	padding: 10px;
	outline: 0;
	font-size: 22px;
	max-width: 600px;
	width: 90%;
	border-radius: 10px;
	border: ${accent} 2px solid;
	background-color: #fafafa;
	&:hover {
		background-color: white;
	}
`;
const StyledInfoDiv = styled.div`
	margin-top: 100px;
`;
const StyledH = styled.h1`
	text-transform: uppercase;
	font-size: 40px;
	font-weight: 700;
	color: #141414;
`;
const StyledCredit = styled.h2`
	font-weight: 400;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	color: gray;
	font-size: 20px;
	margin-bottom: 50px;
`;
const StyledLink = styled.a`
	border-bottom: solid 4px ${accent};
	padding-bottom: 5px;
	transition: all ease-in-out 0.3s;
	&:hover {
		border-bottom: solid 4px rgb(0, 255, 221);
		cursor: pointer;
	}
`;
const StyledIconDiv = styled.div`
	margin: 30px 0;
`;
// eslint-disable-next-line import/no-default-export
export default function Home(): JSX.Element {
	const [search, setSearch] = useState("");
	const [searchArr, setSearchArr] = useState(jsonData);

	function filter(search: string): boolean
	{
		if (search.length === 0 || search === "" || search === " ")
		{
			setSearchArr(jsonData)
			return false;
		}
		const out: devData[] = [];
		for (const x of jsonData) {
			if (x.name.startsWith(search)) {
				out.push(x);
			}
		}
		setSearchArr(out);
		return true;
	}

	return (
		<main>
			<StyledInfoDiv>
				<StyledH>Developer Discords</StyledH>
				<StyledCredit>
					Star on{" "}
					<Link href="https://github.com/NikSchaefer">
						<StyledLink>Github</StyledLink>
					</Link>{" "}
					⋅ Made by{" "}
					<Link href="https://nikschaefer.tech/">
						<StyledLink>NikSchaefer</StyledLink>
					</Link>
				</StyledCredit>
				<StyledIconDiv>
					<Icon name="Arrow" />
				</StyledIconDiv>
				<StyledInput
					aria-label="Search Bar"
					value={search}
					type="text"
					placeholder={`Search ${jsonData.length} Discord Servers`}
					onChange={(e) => {
						setSearch(e.target.value);
						filter(search);
					}}
				/>
			</StyledInfoDiv>
			<StyledDiv>
				{searchArr.map((temp) => (
					<Link href={temp.link} key={temp.name}>
						<StyledComponent className="servers">
							<h3>
								<Icon name="Check" /> {temp.name}
							</h3>
							<p>{temp.description}</p>
							<StyledImage alt="discord" src="/discord.svg" />
						</StyledComponent>
					</Link>
				))}
			</StyledDiv>
		</main>
	);
}
