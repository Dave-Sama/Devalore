import React from 'react';
import ArrowButton from '../reusable/ArrowButton';
import {
	BottomCon,
	LandingSection,
	SectionInfo,
} from '../../styles/bottom/Bottom.Styled';

function BottomContainer() {
	return (
		<BottomCon name='ContactUs'>
			<LandingSection>
				<ArrowButton
					direction={'up'}
					section={'Explore'}
					whoAmI={'ContactUs'}
				/>
				<SectionInfo>
					View our tour package and find out more about the places we will visit
					together on this journey to the most beautifull countires of the
					world.
				</SectionInfo>
			</LandingSection>
		</BottomCon>
	);
}

export default BottomContainer;
