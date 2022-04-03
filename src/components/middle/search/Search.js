import React from 'react';
import { InputContainer } from '../../../styles/middle/Search.Styled';
function Search({ setSearch, placeholder }) {
	return (
		<InputContainer
			placeholder={placeholder}
			onChange={(e) => setSearch(e)}
		/>
	);
}

export default Search;
