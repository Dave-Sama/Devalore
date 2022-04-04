import tw from 'twin.macro';
import styled from 'styled-components';

export const ViewMoreTopButtonDown = styled.button`
	${tw`
    absolute
    bottom-4
    left-1/2
    -translate-x-1/2
    text-white
    text-4xl
    transition-colors
    duration-200
    hover:text-green-400
`};
`;

export const ViewMoreContactUsButtonUp = styled.button`
	${tw`
    absolute
    left-1/2
    mt-4
    -translate-x-1/2
    text-white
    text-4xl
    transition-colors
    duration-200
    hover:text-green-400
`};
`;

export const ViewMoreExploreButtonDown = styled.button`
	${tw`
    absolute
    left-2
    mt-10
    -translate-x-1/2
    text-white
    text-4xl
    transition-colors
    duration-200
    hover:text-green-400
`};
`;
export const ViewMoreButtonDown = styled.button`
	${tw`
    absolute
    bottom-4
    left-2
    mb-2
    -translate-x-1/2
    text-white
    text-4xl
    transition-colors
    duration-200
    hover:text-green-400
`};
`;
export const ViewMoreButtonUp = styled.button`
	${tw`
    absolute
    left-2
    mt-10
    -translate-x-1/2
    text-white
    text-4xl
    transition-colors
    duration-200
    hover:text-green-400
`};
`;
