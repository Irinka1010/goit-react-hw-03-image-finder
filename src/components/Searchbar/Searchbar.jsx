import React, { Component } from 'react';

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
      alert('Enter the name of the image');

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
      <header class="searchbar">
        <form class="form" onSubmit={hendleSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            name="nameImages"
            value={nameImages}
            placeholder="Search images and photos"
            onChange={hendleNameChange}
          />
        </form>
      </header>
    );
  }
}
