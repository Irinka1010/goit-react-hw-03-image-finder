import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { APP } from 'components/StyledApp';
export default class App extends Component {
  state = {
    nameImages: '',
  };
  hendleFormSubmit = nameImages => {
    this.setState({ nameImages });
  };
  render() {
    return (
      <APP>
        <Searchbar onSudmit={this.hendleFormSubmit} />
        <ImageGallery nameImages={this.state.nameImages} />
        <ToastContainer autoClose={3000} />
      </APP>
    );
  }
}
