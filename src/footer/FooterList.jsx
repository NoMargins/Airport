import React from 'react';
import PropTypes from 'prop-types';

const FooterList = ({ text }) => {
	return <li className='item'>{text}</li>;
};

FooterList.propTypes = {
	text: PropTypes.string,
};

export default FooterList;
