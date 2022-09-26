import React, { Component } from 'react';
import axios from 'axios';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import fetchImages from '../../Services/app';

export default class ImageGallery extends Component {
  state = {
    status: 'idle',
    loading: false,
    error: null,
    showButton: true,
    pictures: [],
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.nameImages;
    const nexName = this.props.nameImages;
    const { page } = this.state;
    if (prevName !== nexName) {
      this.setState({
        pictures: [],
        page: 1,
      });
      this.fechPictures();
    }
    if (prevState.page !== page) {
      this.fechPictures();
    }
  }

  async fechPictures() {
    const { page } = this.state;
    const nexName = this.props.nameImages;
    try {
      this.setState({
        loading: true,
      });
      const picture = await fetchImages(nexName, page);
      this.setState(state => ({
        pictures: [...state.pictures, ...picture],
        loading: false,
      }));
      console.log(picture);
    } catch (error) {
      this.setState({
        error,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { pictures, loading, error } = this.state;
    const { nameImages } = this.props;
    const { loadMore } = this;
    const isPictures = Boolean(pictures.length);
    return (
      <div>
        {loading && <Loader />}
        {error && <p>Спрабуйте пізніше</p>}
        {isPictures && <ImageGalleryItem pictures={pictures} />}
        {isPictures && <Button changePage={loadMore} />}
      </div>
    );
  }
}
