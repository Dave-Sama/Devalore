import React from 'react';
import {
	InfoSectionContainer,
	FloatingText,
	OutlinedTextSvg,
	DescriptionText,
} from '../../../styles/top/InfoSection.Styled';

function InfoSection() {
	return (
		<InfoSectionContainer>
			<FloatingText>
				<OutlinedTextSvg viewBox='0 0 530 100'>
					<text>EXPLORE</text>
				</OutlinedTextSvg>
			</FloatingText>
			<FloatingText>
				<OutlinedTextSvg viewBox='0 0 530 100'>
					<text>THE</text>
				</OutlinedTextSvg>
			</FloatingText>
			<FloatingText>
				<OutlinedTextSvg viewBox='0 0 530 100'>
					<text>WORLD</text>
				</OutlinedTextSvg>
			</FloatingText>
			<DescriptionText>
				Let's explore the most beautiful countries in the world, Come and travel
				with us, make your dream come true.
			</DescriptionText>
		</InfoSectionContainer>
	);
}

export default InfoSection;
