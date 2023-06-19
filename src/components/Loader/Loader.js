import React from 'react';
import PropTypes from 'prop-types';
import './Loader.css';

const Loader = ({ message }) => (
  <span className="loader-wrapper">
    <div className="loader" />
    <p className="loading-message">{message}</p>
  </span>
);

export default Loader;
Loader.propTypes = {
  message: PropTypes.string.isRequired,
};
