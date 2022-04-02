// React:
import React, { useEffect, useState } from 'react';

// Style:
import {
	BottomContainer,
	LandingSection,
	InnerPanel,
	RightSector,
	CarouselWraper,
	OptionSelect,
	SelectInput,
	Label,
	DateInput,
	Inputs,
	LeftSector,
	NotFound,
	Loading,
	ImagedContainer,
} from '../../styles/middle/Middle.Styled';

// Components:
import ResponsiveCarousel from './carousel/Carousel';
import ArrowButton from '../reusable/ArrowButton';
import ImageCard from '../bottom/card/ImageCard';

// Static:
import { country_list } from '../../countries';

// apis:
import _ from 'lodash';

function Middle() {
	const [search, setSearch] = useState('');
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isCountryExist, setIsCountryExist] = useState(false);
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

	const sumbitCountry = (e) => {
		e.preventDefault();
		setSearch(e.target.value);
		setIsCountryExist(true);
	};

	return (
		<BottomContainer name='Explore'>
			<LandingSection>
				<ArrowButton direction={'up'} section={'Explore'} />
				<LeftSector>
					<Inputs>
						<SelectInput
							onChange={sumbitCountry}
							name='countries'
							id='countries'
						>
							{country_list.map((city, index) => (
								<OptionSelect key={index} value={city}>
									{city}
								</OptionSelect>
							))}
						</SelectInput>
						<Label for='date'>Date:</Label>
						{!isCountryExist ? (
							<DateInput disabled type='date' id='date' name='date' />
						) : (
							<DateInput type='date' id='date' name='date' />
						)}
					</Inputs>
					<CarouselWraper>
						<ResponsiveCarousel images={images} />
					</CarouselWraper>
					{/* <Inputs>
						<ArrowButton direction={'down'} section={'ContactUs'} />
					</Inputs> */}
				</LeftSector>
				<RightSector>
					<InnerPanel>
						{!isLoading && images.length === 0 && (
							<NotFound>No Images Found...</NotFound>
						)}
						{isLoading ? (
							<Loading>Loading...</Loading>
						) : (
							<ImagedContainer>
								{images.map((image, index) => (
									<ImageCard key={index} image={image} />
								))}
							</ImagedContainer>
						)}
					</InnerPanel>
				</RightSector>
			</LandingSection>
		</BottomContainer>
	);
}

export default Middle;
