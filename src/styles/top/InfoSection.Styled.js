import tw from 'twin.macro';
import styled from 'styled-components';

export const InfoSectionContainer = styled.div`
	${tw`
        absolute
        top[150px]
        left-3
        lg:top[150px]
        lg:right-0
        lg:left-auto
        2xl:right-60
        2xl:top[240px]
        2xl:left-auto
    `}
`;

export const FloatingText = styled.h1`
	${tw`
        m-0
        font-black
        font-size[60px]
        font-family['Archivo Narrow']
        lg:font-size[125px]
        lg:line-height[90px]
        2xl:font-size[170px]
        2xl:line-height[125px]
        flex
        items-center
        text-white
    `}
`;

export const OutlinedTextSvg = styled.svg`
	font: bold 100px Century 'Archivo Narrow', Arial;
	${tw`
        width[550px]
        height[100px]
        lg:width[580px]
        lg:height[110px]
        2xl:width[550px]
        2xl:height[150px]
        flex
    `};
	overflow: overlay;
	text {
		max-height: 100%;
		flex: 1;
		fill: none;
		stroke: white;
		stroke-width: 2px;
		stroke-linejoin: round;
		z-index: 99;
		${tw`
      2xl:transform[translateY(113px)]
      lg:transform[translateY(97px)]
      transform[translateY(71px)]
    `};
		text-shadow: 0px 0px 0px rgba(255, 255, 255, 0.5);
	}
`;

export const DescriptionText = styled.p`
	${tw`
        text-xl
        lg:text-lg
        text-white
        text-opacity-80
        mt-10
        max-w-xs
        text-align[center]
        lg:max-w-lg
        2xl:max-w-xl
    `};
`;
