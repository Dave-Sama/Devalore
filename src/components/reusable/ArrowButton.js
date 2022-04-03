import React from 'react';
import { Link } from 'react-scroll';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import {
	ViewMoreButtonUp,
	ViewMoreButtonDown,
	ViewMoreTopButtonDown,
	ViewMoreContactUsButtonUp,
	ViewMoreExploreButtonDown,
} from '../../styles/reusable/ArrowButton.Styled';

function ArrowButton({ whoAmI, direction, section }) {
	const chooseArrow = () => {
		switch (whoAmI) {
			case 'Home':
				return (
					<ViewMoreTopButtonDown>
						<Link to={section} smooth={'easeInOutQuad'} duration={1000}>
							<BsArrowDownCircle />
						</Link>
					</ViewMoreTopButtonDown>
				);
			case 'Explore':
				if (direction === 'up') {
					return (
						<ViewMoreButtonUp>
							<Link to={section} smooth={'easeInOutQuad'} duration={1000}>
								<BsArrowUpCircle />
							</Link>
						</ViewMoreButtonUp>
					);
				} else {
					return (
						<ViewMoreExploreButtonDown>
							<Link to={section} smooth={'easeInOutQuad'} duration={1000}>
								<BsArrowDownCircle />
							</Link>
						</ViewMoreExploreButtonDown>
					);
				}
			case 'ContactUs':
				return (
					<ViewMoreContactUsButtonUp>
						<Link to={section} smooth={'easeInOutQuad'} duration={1000}>
							<BsArrowUpCircle />
						</Link>
					</ViewMoreContactUsButtonUp>
				);
		}
	};
	return chooseArrow();
}

export default ArrowButton;
