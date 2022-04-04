// React:
import React, { useEffect, useState } from 'react';

// Style:
import {
	MiddleContainer,
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
import Axios from 'axios';
import LoadingIcons from 'react-loading-icons';

function Middle() {
	const [search, setSearch] = useState('');
	const [date, setDate] = useState(new Date());
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isCountryExist, setIsCountryExist] = useState(false);
	const [isDateExists, setIsDateExist] = useState(false);
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

	const onCountryCange = (e) => {
		e.preventDefault();
		setSearch(e.target.value);
		setIsCountryExist(true);
	};

	const onDateChange = (e) => {
		e.preventDefault();
		setDate(e.target.value);
		setIsDateExist(true);
	};

	return (
		<MiddleContainer name='Explore'>
			<LandingSection>
				<ArrowButton direction={'up'} section={'Home'} whoAmI={'Explore'} />
				<LeftSector>
					<Inputs>
						<SelectInput
							onChange={onCountryCange}
							name='countries'
							id='countries'
						>
							{country_list.map((city, index) => (
								<OptionSelect key={index} value={city}>
									{city}
								</OptionSelect>
							))}
						</SelectInput>
						{
							<DateInput
								type='date'
								id='date'
								name='date'
								onChange={onDateChange}
							/>
						}
					</Inputs>
					{isCountryExist ? (
						<CarouselWraper>
							<ResponsiveCarousel images={images} />
						</CarouselWraper>
					) : (
						<CarouselWraper>
							<LoadingIcons.Circles className='m-auto' />
						</CarouselWraper>
					)}
					<Inputs>
						<ArrowButton
							direction={'down'}
							section={'ContactUs'}
							whoAmI={'Explore'}
						/>
					</Inputs>
				</LeftSector>
				<RightSector>
					<InnerPanel>
						{!isLoading && images.length === 0 && (
							<NotFound>No Images Found...</NotFound>
						)}
						{isCountryExist && isDateExists ? (
							<ImagedContainer>
								{images.slice(0, 12).map((image, index) => (
									<ImageCard
										key={index}
										image={image}
										name={search}
										date={date}
									/>
								))}
							</ImagedContainer>
						) : (
							<Loading>
								<LoadingIcons.Circles className='m-auto' />
							</Loading>
						)}
					</InnerPanel>
				</RightSector>
			</LandingSection>
		</MiddleContainer>
	);
}

export default Middle;
