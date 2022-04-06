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
					<text>JOIN</text>
				</OutlinedTextSvg>
			</FloatingText>
			<FloatingText>
				<OutlinedTextSvg viewBox='0 0 530 100'>
					<text>THE</text>
				</OutlinedTextSvg>
			</FloatingText>
			<FloatingText>
				<OutlinedTextSvg viewBox='0 0 530 100'>
					<text>GREATEST</text>
				</OutlinedTextSvg>
			</FloatingText>
			<DescriptionText>
				We're a team of a passionate people that strive to be the best, will you join us?
			</DescriptionText>
		</InfoSectionContainer>
	);
}

export default InfoSection;
