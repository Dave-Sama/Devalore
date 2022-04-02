import tw from 'twin.macro';
import styled from 'styled-components';

export const ExploreSectionWrapper = tw.div`
w-full
h-full
flex
flex-col
justify-center
items-center
mt-3
xl:mt-6
2xl:mt-10
max-w-sm
xl:max-w-2xl
2xl:max-w-4xl
`;

export const Item = styled.div`
	img {
		${tw`
        flex
        flex-col
        self-center
            w-11/12
            h-96
        `}
	}
	${tw`
        ml-10
        self-center
        max-w-full
        max-h-full
   `}
`;

export const Description = tw.p`
    text-gray-300
    text-center
    bg-black
    bottom-10
    left-1/2
    pl-4
    pr-4
    pt-2
    pb-2
    rounded-2xl
    opacity-80
    transform[translateX(-50%)]
    absolute
`;
