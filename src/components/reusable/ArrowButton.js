import React from 'react';
import { Link } from 'react-scroll';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import {
	ViewMoreButtonUp,
	ViewMoreButtonDown,
	ViewMoreTopButtonDown,
} from '../../styles/reusable/ArrowButton.Styled';

function ArrowButton({ whoAmI, direction, section }) {
	const chooseArrow = () => {
		if (!whoAmI) {
			if (direction === 'down') {
				return (
					<ViewMoreButtonDown>
						<Link to={section} smooth={'easeInOutQuad'} duration={1000}>
							<BsArrowDownCircle />
						</Link>
					</ViewMoreButtonDown>
				);
			} else {
				return (
					<ViewMoreButtonUp>
						<Link to={section} smooth={'easeInOutQuad'} duration={1000}>
							<BsArrowUpCircle />
						</Link>
					</ViewMoreButtonUp>
				);
			}
		} else {
			return (
				<ViewMoreTopButtonDown>
					<Link to={section} smooth={'easeInOutQuad'} duration={1000}>
						<BsArrowDownCircle />
					</Link>
				</ViewMoreTopButtonDown>
			);
		}
	};
	return chooseArrow();
}

export default ArrowButton;
