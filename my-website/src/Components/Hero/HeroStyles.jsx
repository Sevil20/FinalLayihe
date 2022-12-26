import styled from 'styled-components'
import { Button } from '../../GlobalStyles'


export const HeroSection = styled.section`
height:100vh;
background-image:url('./assets/datapic1.webp');
background-position:center;
background-repeat:no-repeat;
background-size:cover;
box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;
export const HeroVideo = styled.video`
`;
export const HeroText = styled.p`
margin-bottom: 35px;
	font-size: clamp(25px, 1.5vw, 45px);
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: #fff;
`;
export const  ButtonWrapper = styled.div`
width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 16px;
`;
export const HeroButton = styled(Button)`
color: white;

	&:before {
		background: #fff;
		height: 500%;
	}

	&:hover:before {
		height: 0%;
	}

	&:hover {
		color: white;
	}
`;
