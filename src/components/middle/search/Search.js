import React from 'react';
import { InputContainer } from '../../../styles/middle/Search.Styled';
function Search({ setSearch }) {
	return (
		<InputContainer
			placeholder='Please Enter Destenation'
			onChange={(e) => setSearch(e)}
		/>
	);
}

export default Search;
