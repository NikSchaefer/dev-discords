import styled from "styled-components";

const accent = "rgba(0, 217, 255, 0.616)";
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
	height: 60%;
	border: ${accent} 3px solid;
	border-radius: 10px;
	position:relative;
	padding: 20px;
	margin: 20px;
	transition: all ease-in-out 0.3s;
	& h3 {
		margin-bottom: 0;
	}
	&:hover {
		cursor: pointer;
		background-color: white;
		border-color: rgb(0, 255, 221);
	}
`;
const StyledImage = styled.img`
	width: 40px;
	margin-left: auto;
	top:10px;
	right:20px;
	position: absolute;
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
const StyledGithub = styled.div`
	position: absolute;
	left: 10px;
	top: 10px;
	width: 30px;
`;
export {
	StyledGithub,
	StyledDiv,
	StyledComponent,
	StyledLink,
	StyledIconDiv,
	StyledInfoDiv,
	StyledH,
	StyledImage,
	StyledInput,
	StyledCredit,
};
