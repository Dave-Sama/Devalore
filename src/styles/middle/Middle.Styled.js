// apis:
import tw from 'twin.macro';
import styled from 'styled-components';
import { Element } from 'react-scroll';

// background image:
import BackgroundImage from '../../images/bg3.jpg';

export const BottomContainer = styled.div`
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
        flex-row
    `};
	background-image: url(${BackgroundImage}),
		linear-gradient(to left, #005b9c, #b1d1b148);
	background-size: cover;
	background-position: bottom 10% left;
	background-blend-mode: overlay;
`;

export const LeftSector = styled.div`
	${tw`
        h-full
        flex
        flex-col
        w-2/4
        bg-red-400
    `}
`;
export const Inputs = styled.div`
	${tw`
        h-20
        w-11/12
        flex
        align-items[flex-end]
        ml-16
        bg-blue-400
    `}
`;

export const DateInput = styled.input`
	::placeholder {
    color: grey;
    text-align: center;
    };
    &:focus {
        transition: 0.5s all ease-out;
        background-color: white;
        border-none
    }

	${tw`
        rounded-2xl
        h-10
        w-5/12
        mx-5
        self-center
        text-center

    `};
`;

export const Label = styled.label`
	${tw`
        h-10
        mt-4
        self-center
        
    `}
`;

export const SelectInput = styled.select`
	${tw`
    rounded-2xl
    h-10
    w-5/12
    mx-5
    self-center
`};
`;

export const OptionSelect = styled.option`
	${tw`
        self-center
        text-center
        text-gray-400
    `}
`;
export const CarouselWraper = styled.div`
	${tw`
        h-full
        w-full
        bg-purple-400
    `}
`;
export const RightSector = styled.div`
	${tw`
        h-full
        w-2/4
        bg-green-400
    `}
`;

export const InnerPanel = styled.div`
	${tw`
        right-2/4
        h-5/6
        m-14
        rounded-l-lg
        overflow-y-scroll
        bg-red-400
    `}
`;

export const NotFound = tw.h1`
    text-4xl 
    text-center 
    mx-auto 
    mt-32
`;
export const Loading = tw.h1`
    text-6xl 
    text-center 
    mx-auto 
    mt-32
`;

export const ImagedContainer = tw.div`
    grid 
    grid-cols-2 
    gap-4 
    m-4
`;
