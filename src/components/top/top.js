import React from 'react';
import { TopContainer, LandingSection } from '../../styles/top/Top.Styled';
import InfoSection from './Info/InfoSection';
import Nav from './navbar/Nav';
import ArrowButton from '../reusable/ArrowButton';

function Top() {
	return (
		<TopContainer name={'Home'}>
			<LandingSection>
				<Nav />
				<InfoSection />
				<ArrowButton whoAmI={"Home"} direction={'down'} section={'Explore'} />
			</LandingSection>
		</TopContainer>
	);
}

export default Top;
