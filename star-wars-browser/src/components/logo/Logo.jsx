import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ logoImage }) => (
  <div>
    <img
      src={logoImage}
      alt="star wars browser logo"
      className="logo__image"
    />
  </div>
);

Logo.defaultProps = {
  logoImage: 'there is no image',
};

Logo.propTypes = {
  logoImage: PropTypes.string,
};
export default Logo;
