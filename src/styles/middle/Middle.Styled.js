// apis:
import tw from 'twin.macro';
import styled from 'styled-components';
import { Element } from 'react-scroll';

// background image:
import BackgroundImage from '../../images/bg2.jpg';
import styledComponents from 'styled-components';

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

export const ExploreSectionContainer = tw(Element)`
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

    
`;

export const Title = tw.h1`
    text-3xl
    xl:text-3xl
    2xl:text-5xl
    mt-6
    my-5
    lg:mt-0
    2xl:mt-6
    2xl:mb-6
    text-pink-200
    text-shadow[1px 1px 1px black]
    font-bold
    text-center
`;

export const TextArea = tw.textarea`
    m-auto
    w-11/12
    px-3
    py-1.5
    max-width[90%]
    max-height[60%]
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
`;

export const CheckBoxContainer = tw.div`flex flex-row`;
export const CheckBox = tw.input`
    lg:width[70%]
    width[40px]
    mt-1
    
    height[25px]
    rounded-xl
    lg:w-11/12
    bg-gray-200

    focus:bg-white
    focus:border-none

    focus:transition-all
`;
export const Select = tw.select`
    lg:width[70%]
    width[40px]
    m-auto
    h-10    
    text-center
    
    rounded-xl
    lg:w-11/12
    bg-gray-200

    focus:bg-white
    focus:border-none

    focus:transition-all
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

export const SectionInfo = styledComponents.div`
    -webkit-box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
		-34px 16px 43px -25px rgba(0, 0, 0, 0);
	box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
		-34px 16px 43px -25px rgba(0, 0, 0, 0);
	${tw`
    text-base
    2xl:text-lg
    text-gray-700
    text-center
   
    m-auto
    2xl:mt-2
    max-w-lg
    bg-red-300/70
    xl:max-w-3xl
    pl-4
    pr-4
    lg:pl-2
    lg:pr-2
    width[90%]
    height[60%]
    rounded-2xl
    shadow-sm
    flex
    flex-col
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500/60
        
    `}
`;

export const Input = tw.input`
    placeholder:text-center
    w-11/12
    lg:width[70%]
    h-10
    rounded-xl
    shadow-md
    lg:w-11/12
    bg-gray-200
    focus:bg-white
    focus:border-none
    self-center
    my-auto
    
    focus:transition-all
    text-center
`;

export const InputsWrapper = tw.div`
    bg-purple-400/20
    rounded-t-md
    flex
    flex-col
    self-center
    width[90%]
    height[50%]
    
    `;

export const ButtonWrapper = tw.div`
    rounded-b-md
    flex
    self-center
    bg-blue-400/20
    height[20%]
    width[90%]
`;
export const Button = tw.button`
    bg-red-500
    shadow-md
    
    m-auto
    width[30%]
    font-bold
    text-gray-200
    rounded-2xl
    height[50%]
`;
