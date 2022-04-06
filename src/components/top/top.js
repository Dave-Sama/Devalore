import React from 'react';
import { TopContainer, LandingSection } from '../../styles/top/Top.Styled';
import InfoSection from './Info/InfoSection';
import Nav from './navbar/Nav';

function Top() {
	return (
		<TopContainer name={'Home'}>
			<LandingSection>
				<Nav />
				<InfoSection />
			</LandingSection>
		</TopContainer>
	);
}

export default Top;
