import React from 'react';
import PropTypes from 'prop-types';
export default function Button({ changePage }) {
  return (
    <button onClick={changePage} type="button">
      Load More
    </button>
  );
}
Button.propTypes = {
  changePage: PropTypes.func.isRequired,
};
