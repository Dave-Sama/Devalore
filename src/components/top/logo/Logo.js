import React from 'react';
import { GiPineapple } from 'react-icons/gi';
import { LogoContainer, IconContainer } from '../../../styles/top/Logo.Styled';
function Logo() {
	return (
		<>
			<IconContainer>
				<GiPineapple />
			</IconContainer>
			<LogoContainer>Travels</LogoContainer>{' '}
		</>
	);
}

export default Logo;
