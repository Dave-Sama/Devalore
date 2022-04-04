// React:
import React, { useEffect } from 'react';

// Styles:
import {
	ExploreSectionWrapper,
	Item,
	Description,
} from '../../../styles/middle/Carousel.Styled';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ResponsiveCarousel({ images }) {
	return (
		<ExploreSectionWrapper>
			<Carousel dynamicHeight={false}>
				{images.slice(0, 7).map((image, index) => (
					<Item key={index}>
						<img src={image.webformatURL} />
						<Description>{image.user}</Description>
					</Item>
				))}
			</Carousel>
		</ExploreSectionWrapper>
	);
}

export default ResponsiveCarousel;
