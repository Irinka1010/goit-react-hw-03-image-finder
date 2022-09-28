import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from 'components/Button/StyledButton';
export default function Button({ changePage }) {
  return (
    <ButtonStyled onClick={changePage} type="button">
      Load More
    </ButtonStyled>
  );
}
Button.propTypes = {
  changePage: PropTypes.func.isRequired,
};
