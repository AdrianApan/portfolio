import styled from "styled-components"

const WelcomeText = styled.p`
	margin: 60px 0 20px 0;
	padding: 0 20px;
	font-size: 48px;
	text-align: center;
	line-height: 78px;
	@media screen and (max-width: 768px){
		margin: 40px 0 20px 0;
		padding: 0;
		font-size: 24px;
    	line-height: 40px;
	}
`

export {WelcomeText}