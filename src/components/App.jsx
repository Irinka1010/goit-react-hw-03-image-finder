import React, { Component } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
export default class App extends Component {
  state = {
    nameImages: '',
  };
  hendleFormSubmit = nameImages => {
    this.setState({ nameImages });
  };
  render() {
    return (
      <div>
        <Searchbar onSudmit={this.hendleFormSubmit} />
        <ImageGallery nameImages={this.state.nameImages} />
      </div>
    );
  }
}
