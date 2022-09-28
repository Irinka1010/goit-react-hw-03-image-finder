import React, { Component } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { SearchbarStyled } from 'components/Searchbar/StyledSearchbar';
export default class Searchbar extends Component {
  state = {
    nameImages: '',
  };

  hendleNameChange = event => {
    this.setState({
      nameImages: event.currentTarget.value.toLowerCase(),
    });
  };
  hendleSubmit = ev => {
    ev.preventDefault();
    if (this.state.nameImages.trim() === '') {
      toast.error('Enter the name of the image');
      return;
    }
    this.props.onSudmit(this.state.nameImages);
    this.setState({
      nameImages: '',
    });
  };
  render() {
    const { hendleNameChange, hendleSubmit } = this;
    const { nameImages } = this.state;
    return (
      <SearchbarStyled>
        <form onSubmit={hendleSubmit}>
          <button type="submit">
            <IoSearchSharp />
            <span>Search</span>
          </button>
          <input
            type="text"
            autocomplete="off"
            autofocus
            name="nameImages"
            value={nameImages}
            placeholder="Search images and photos"
            onChange={hendleNameChange}
          />
        </form>
      </SearchbarStyled>
    );
  }
}
