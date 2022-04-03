import tw from 'twin.macro';
import styled from 'styled-components';
import { Element } from 'react-scroll';

// images
import BackgroundImage from '../../images/bg3.jpg';

export const BottomCon = styled.div`
	${tw(Element)`
        w-full
        h-screen
        flex
        flex-col
        relative
        pt-1
        pb-1
        xl:pt-2
        xl:pb-2
        items-center
    `}
`;

export const LandingSection = styled.div`
	${tw`
        w-full
        h-screen
        flex
        flex-col
    `}; 
	}
	background-image: url(${BackgroundImage}),
	linear-gradient(to left, #005b9c, #b1d1b148);
	background-size: cover;
	background-position: bottom 10% left;
	background-blend-mode: overlay;
`;

export const SectionInfo = tw.p`
    text-base
    2xl:text-lg
    text-gray-700
    text-center
    self-center
    mt-2
    2xl:mt-2
    max-w-lg
    xl:max-w-3xl
    pl-4
    pr-4
    lg:pl-2
    lg:pr-2
`;
