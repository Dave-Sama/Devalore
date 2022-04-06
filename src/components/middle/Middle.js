// React:
import React, { useState } from 'react';

// Style:
import {
	SectionInfo,
	Title,
	ExploreSectionContainer,
	Input,
	InputsWrapper,
	Button,
	ButtonWrapper,
	LandingSection,
	TextArea,
	CheckBox,
	CheckBoxContainer,
	Select,
} from '../../styles/middle/Middle.Styled';

// Redux:
import { useDispatch, useSelector } from 'react-redux';
import {
	setName,
	setAge,
	setPetName,
	setPetType,
	setTextarea,
	setCheckBox,
} from '../../redux/SignUp';

// Apis:
import Swal from 'sweetalert2';

function Middle() {
	const [step, setStep] = useState('1');
	const [firstStep, setFirstStep] = useState(true);
	const [secondStep, setSecondStep] = useState(false);
	const [thirdStep, setThirdStep] = useState(false);
	// get from redux + dispatch func:
	const { name, age, petName, petType, textareaInfo, checkBox } = useSelector(
		(state) => state.image
	);
	const dispatch = useDispatch();

	const finish = () => {
		Swal.fire({
			icon: 'success',
			title: 'Thank you!',
		});
	};
	const errorMsg = (errwith) => {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text:
				errwith !== 'Fill Inputs'
					? `Wrong input in ${errwith}`
					: ' Incorrect data ',
		});

		switch (errwith) {
			case 'User Name':
				dispatch(setName(''));
				break;
			case 'Pet Name':
				dispatch(setPetName(''));
			case 'Pet Type':
				dispatch(setPetType(''));

			default:
				break;
		}
	};

	const checkNumbersInString = (num) => {
		// Regex:
		let hasNumber = /\d/;
		return hasNumber.test(num);
	};

	const StepInputs = (step) => {
		switch (step) {
			case '1':
				return (
					<>
						<InputsWrapper>
							<Input
								value={name}
								onChange={(e) => onNameChange(e.target.value)}
								placeholder=' Enter Name'
							/>
							<Input
								value={age}
								min='0'
								max='100'
								placeholder='Enter Age'
								type='number'
								onChange={(e) => dispatch(setAge(e.target.value))}
							/>
						</InputsWrapper>
						<ButtonWrapper>
							<Button onClick={onSubmitFirst}>Submit</Button>
						</ButtonWrapper>
					</>
				);
			case '2':
				return (
					<>
						<InputsWrapper>
							<Input
								value={petName}
								onChange={(e) => onPetNameChange(e.target.value)}
								placeholder=' Enter Pet Name'
							/>
							<Select
								name='cars'
								id='cars'
								value={petType}
								onChange={(e) => onPetTypeChange(e.target.value)}
							>
								<option value='dog'>Dog</option>
								<option value='cat'>Cat</option>
								<option value='horse'>Horse</option>
								<option value='other'>Other</option>
							</Select>
						</InputsWrapper>
						<ButtonWrapper>
							<Button onClick={onSubmitSecond}>Submit</Button>
							<Button onClick={(e) => setStep('1')}>Previous</Button>
						</ButtonWrapper>
					</>
				);
			case '3':
				return (
					<>
						<InputsWrapper>
							<TextArea
								value={textareaInfo}
								rows='10'
								placeholder='Your message'
								onChange={(e) => dispatch(setTextarea(e.target.value))}
							/>
							<CheckBoxContainer>
								<label className='w-1/3 mb-4 text-white'>
									Agree All Terms:
								</label>
								<CheckBox
									type='checkbox'
									value={checkBox}
									onChange={(e) => dispatch(setCheckBox(e.target.value))}
								/>
							</CheckBoxContainer>
						</InputsWrapper>
						<ButtonWrapper>
							<Button onClick={onSubmitThird}>Submit</Button>
							<Button onClick={(e) => setStep('1')}>Previous</Button>
						</ButtonWrapper>
					</>
				);
			default:
				break;
		}
	};

	const onNameChange = (value) => {
		checkNumbersInString(value)
			? errorMsg('User Name')
			: dispatch(setName(value));
	};
	const onPetNameChange = (value) => {
		checkNumbersInString(value)
			? errorMsg('Pet Name')
			: dispatch(setPetName(value));
	};
	const onPetTypeChange = (value) => {
		checkNumbersInString(value)
			? errorMsg('Pet Type')
			: dispatch(setPetType(value));
	};

	const onSubmitFirst = () => {
		name === '' || (age === 0 && errorMsg('Fill Inputs'));
		console.log(name, age);
		setStep('2');
	};
	const onSubmitSecond = () => {
		petName === '' || (petType === '' && errorMsg('Fill Inputs'));
		setStep('3');
	};
	const onSubmitThird = () => {
		textareaInfo === '' || (!checkBox && errorMsg('Fill Inputs'));
		finish();
	};

	return (
		<ExploreSectionContainer name='SignIn'>
			<LandingSection>
				<SectionInfo>
					<Title>Personal Info</Title>
					{firstStep && StepInputs(step)}
				</SectionInfo>
			</LandingSection>
		</ExploreSectionContainer>
	);
}

export default Middle;
