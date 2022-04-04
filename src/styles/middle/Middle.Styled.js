// apis:
import tw from 'twin.macro';
import styled from 'styled-components';
import { Element } from 'react-scroll';

// background image:
import BackgroundImage from '../../images/bg2.jpg';

export const MiddleContainer = styled.div`
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
		linear-gradient(to bottom, #005b9c, #b1d1b148);
	background-size: cover;
	background-position: bottom 10% left;
	background-blend-mode: overlay;
	background-attachment: fixed;
`;

export const LeftSector = styled.div`
	${tw`
        height[900px]
        flex
        ml-12
        flex-col
        width[800px]
    `}
`;
export const Inputs = styled.div`
	${tw`
        h-20
        w-11/12
        flex
        align-items[flex-start]
        ml-12
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
        h-12
        mt-10
        width[285px]
        mx-5
        self-center
        text-center

    `};
`;

export const Label = styled.label`
	${tw`
        h-12
        w-11
        mt-12
        text-white
        font-size[26px]
        font-family[Verdana, Geneva, Tahoma, sans-serif]
        self-center
        
    `}
`;

export const SelectInput = styled.select`
	${tw`
    rounded-2xl
    h-12
    mt-10
    w-11/12
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
	-webkit-box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, -34px 16px 43px -25px rgba(0,0,0,0); 
    box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, -34px 16px 43px -25px rgba(0,0,0,0);
		red 0 -18px 40px, -34px 16px 43px -25px rgba(0, 0, 0, 0);
	${tw`
        ${'' /* height[680px] */}
        h-screen
        flex
        mt-10
        ml-6
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500/80
        rounded-2xl
        
        drop-shadow-2xl
    `}
`;
export const RightSector = styled.div`
	${tw`
        h-full
        w-full
    `};
`;

export const InnerPanel = styled.div`
	::-webkit-scrollbar {
		display: none;
	}
	-webkit-box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
		-34px 16px 43px -25px rgba(0, 0, 0, 0);
	box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
		-34px 16px 43px -25px rgba(0, 0, 0, 0);
	${tw`
        right-2/4
        height[92%]
        width[92%]
        m-9
        overflow-auto
        rounded-2xl
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500/60
        
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
 
    flex
    h-screen

`;

export const ImagedContainer = tw.div`
    grid 
    grid-cols-3
    gap-4 
    m-4
  
`;
