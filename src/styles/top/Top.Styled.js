import tw from 'twin.macro';
import styled from 'styled-components';
import { Element } from 'react-scroll';

// images
import BackgroundImage from '../../images/bg.jpg';

export const TopContainer = tw(Element)`
    w-full
    flex
    flex-col
    h-screen
    relative
`;

export const LandingSection = styled.div`
	${tw`
        w-full
        h-screen
        flex
        flex-col
    `};
	background-image: url(${BackgroundImage}),
		linear-gradient(to left, #005b9c, #b1d1b148);
	background-size: cover;
	background-position: bottom 10% left;
	background-blend-mode: overlay;
`;
