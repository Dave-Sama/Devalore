import React from 'react';
import {
	NavItem,
	NavItems,
	NavContainer,
	menuStyles,
} from '../../../styles/top/Nav.Styled';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from '../../Responsive';
import { slide as Menu } from 'react-burger-menu';

function Nav() {
	const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

	const nItems = (
		<NavItems>
			<NavItem>
				<Link to='Home' smooth={'easeInOutQuad'} duration={1000}>
					Home
				</Link>
			</NavItem>
			<NavItem>
				<Link to='SignIn' smooth={'easeInOutQuad'} duration={1000}>
					Sign In
				</Link>
			</NavItem>
		</NavItems>
	);

	return (
		<NavContainer>
			{isMobile && (
				<Menu right styles={menuStyles}>
					{nItems}
				</Menu>
			)}
			{!isMobile && nItems}
		</NavContainer>
	);
}

export default Nav;
