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
import Logo from '../logo/Logo';

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
				<Link to='Explore' smooth={'easeInOutQuad'} duration={1000}>
					Explore
				</Link>
			</NavItem>
			<NavItem>
				<Link to='ContactUs' smooth={'easeInOutQuad'} duration={1000}>
					Contact Us
				</Link>
			</NavItem>
		</NavItems>
	);

	return (
		<NavContainer>
			<Logo />
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
