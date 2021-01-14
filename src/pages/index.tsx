import { useState } from "react";
import styled from "styled-components";

import jsonData from "../components/out.json";

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
	height:150px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.336);
	display:flex;
	flex-direction:column;
	
	padding:20px;
	margin:20px;
	transition: all ease-in-out 0.2s;
	&:hover {
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.377);
	transform:scale(1.015);
	cursor: pointer;
	}
`;
const StyledImage = styled.img`
	width:40px;
`
// eslint-disable-next-line import/no-default-export
export default function Home(): JSX.Element {
	const [search, setSearch] = useState("");
	return (
		<main>
			<div>
				<h1>Developer Discords</h1>
				<input
					aria-label="Search Bar"
					value={search}
					type="text"
					onChange={(e) => {
						setSearch(e.target.value);
					}}
				/>
			</div>
			<StyledDiv>
				{jsonData.map((temp) => (
					<StyledComponent key={temp.name}>
						<h3>{temp.name}</h3>
						<p>{temp.description}</p>
						<StyledImage alt='discord' src="/discord.svg" />
					</StyledComponent>
				))}
			</StyledDiv>
		</main>
	);
}
