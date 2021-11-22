import React from 'react'
import PropTypes from 'prop-types';

const TranslateText = ({ text }) => (
    <>
        { text }
    </>
);

TranslateText.propTypes = {
    text: PropTypes.string.isRequired
}

export default TranslateText;