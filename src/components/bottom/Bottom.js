// react:
import React, { useEffect, useState } from 'react';

// Components:
import Search from '../middle/search/Search';
import ResponsiveCarousel from '../middle/carousel/Carousel';
import ArrowButton from '../reusable/ArrowButton';
import { country_list } from '../../countries';

// apis:
import _ from 'lodash';

// styles:
import {
	MiddleContainer,
	LandingSection,
	SectionInfo,
} from '../../styles/bottom/Bottom.Styled';

function Bottom() {
	const [search, setSearch] = useState('');
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isUp, setIsUp] = useState(false);

	useEffect(() => {
		country_list.includes(_.capitalize(search)) &&
			fetch(
				`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${search}&image_type=photo&pretty=true
      `
			)
				.then((res) => res.json())
				.then((data) => {
					setImages(data.hits);
					setIsLoading(false);
					setIsUp(true);
				})
				.catch((err) => console.log(err));
	}, [search]);

	const onSubmit = (e) => {
		e.preventDefault();
		setSearch(e.target.value);
	};

	return (
		<MiddleContainer name='ContactUs'>
			<LandingSection>
				<ArrowButton direction={'up'} section={'Home'} />
				<ArrowButton direction={'down'} section={'ContactUs'} />

				<Search setSearch={onSubmit} />
				<SectionInfo>
					View our tour package and find out more about the places we will visit
					together on this journey to the most beautifull countires of the
					world.
				</SectionInfo>
				{!isLoading && images.length === 0 && (
					<h1 className='text-4xl text-center mx-auto mt-32'>
						No Images Found...
					</h1>
				)}
				{isLoading && isUp ? (
					<h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1>
				) : (
					<ResponsiveCarousel images={images} />
				)}
			</LandingSection>
		</MiddleContainer>
	);
}

export default Bottom;
