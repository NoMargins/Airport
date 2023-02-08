import React from 'react';
import SearchingGlass from './svg/SearchingGlass.jsx';
import 'searchSection.scss';

const SearchingForm = () => {
	const [searchingText, setSearchingText] = useState('');

	return (
		<div className='searching_textfield'>
			<form className='searching_form'>
				<label>
					<SearchingGlass />
					<input
						type='text'
						className='searching_form__input'
						name='searching-field'
						placeholder='Airline, destination or fligth #'
						value={searchingText}
						onChange={(e) => setSearchingText(e.target.value)}
					/>
				</label>
				<button className='searching_form__btn' disabled>
					Search
				</button>
			</form>
		</div>
	);
};

export default SearchingForm;
