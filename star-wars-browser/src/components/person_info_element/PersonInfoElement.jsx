import React from 'react';
import PropTypes from 'prop-types';

const PersonInfoElement = ({ personProperty }) => <li className="person-info__element">{personProperty}</li>;

PersonInfoElement.defaultProps = {
  personProperty: 'person property',
};

PersonInfoElement.propTypes = {
  personProperty: PropTypes.string,
};

export default PersonInfoElement;
