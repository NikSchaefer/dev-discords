import styled, { keyframes } from "styled-components";

const accent = "var(--accent)";
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
	height: 150px;
	border: ${accent} 3px solid;
	border-radius: 10px;
	position: relative;
	padding: 20px;
	margin: 20px;
	transition: all ease-in-out 0.3s;
	& h3 {
		margin-bottom: 0;
	}
	&:hover {
		cursor: pointer;
		border-color: rgb(0, 217, 255);
	}
`;
const StyledImage = styled.img`
	width: 40px;
	margin-left: auto;
	top: 20px;
	right: 20px;
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
	background-color: transparent;
	color: inherit;
`;
const StyledInfoDiv = styled.div`
	padding-top: 100px;
`;
const StyledH = styled.h1`
	text-transform: uppercase;
	font-size: 40px;
	font-weight: 700;
	color: var(--title);
`;
const StyledCredit = styled.h2`
	font-weight: 400;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	color: gray;
	font-size: 18px;
	width: 90%;
	margin: auto;
	line-height: 40px;
	padding-bottom: 50px;
`;
const StyledLink = styled.a`
	border-bottom: solid 5px ${accent};
	padding-bottom: 5px;
	transition: all ease-in-out 0.3s;
	&:hover {
		border-bottom: solid 5px rgb(0, 255, 221);
		cursor: pointer;
	}
`;
const Animation = keyframes`
0%, 100%{
    transform: translateY(-25%);
    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);
    animation-timing-function: cubic-bezier(0.8,0,1,1);
  }
  50%{
    transform: none;
    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);
    animation-timing-function: cubic-bezier(0,0,0.2,1);
  }`;
const StyledIconDiv = styled.div`
	margin: 30px 0;
	animation: 1s ${Animation} infinite;
`;
const StyledGithub = styled.div`
	position: absolute;
	left: 10px;
	top: 10px;
	width: 30px;
`;
const StyledDarkmode = styled.button`
	position: absolute;
	right: 20px;
	top: 10px;
	width: 40px;
	background-color: transparent;
	border: none;

	svg {
		padding: 10px;
		border-radius: 8px;
		:hover {
			background-color: var(--hover);
		}
	}
	:hover {
		cursor: pointer;
	}
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
	StyledDarkmode,
};
