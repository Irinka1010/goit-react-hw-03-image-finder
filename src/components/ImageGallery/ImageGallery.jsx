import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import fetchImages from '../../Services/app';

export default class ImageGallery extends Component {
  state = {
    status: 'idle',
    loading: false,
    error: null,
    showButton: true,
    bigPicture: null,
    pictures: [],
    page: 1,
    modalOpen: false,
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
  toggleModal = picture => {
    this.setState(({ modalOpen }) => ({ modalOpen: !modalOpen }));
    this.setState({ bigPicture: picture });
  };

  render() {
    const { pictures, loading, bigPicture, error, modalOpen } = this.state;
    // const { nameImages } = this.props;
    const { loadMore, toggleModal } = this;
    const isPictures = Boolean(pictures.length);
    return (
      <div>
        {loading && <Loader />}
        {modalOpen && (
          <Modal
            pictures={pictures}
            toggleModal={this.toggleModal}
            bigPicture={bigPicture}
          />
        )}
        {error && <p>Спрабуйте пізніше</p>}
        {isPictures && (
          <ImageGalleryItem onClick={toggleModal} pictures={pictures} />
        )}
        {isPictures && <Button changePage={loadMore} />}
      </div>
    );
  }
}
