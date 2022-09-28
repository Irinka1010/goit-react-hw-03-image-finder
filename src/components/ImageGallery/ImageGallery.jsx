import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import fetchImages from '../../Services/app';

export default class ImageGallery extends Component {
  state = {
    loading: false,
    error: null,
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
      if (picture.length === 0) {
        toast.info('Sorry, request not found, try something else');
      }
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
  openModal = bigPicture => {
    this.setState({
      modalOpen: true,
      bigPicture,
    });
  };
  closeModal = () => {
    this.setState({
      modalOpen: false,
      bigPicture: null,
    });
  };
  render() {
    const { pictures, loading, bigPicture, error, modalOpen } = this.state;

    const { loadMore, openModal, closeModal } = this;
    const isPictures = Boolean(pictures.length);
    return (
      <div>
        {loading && <Loader />}
        {modalOpen && <Modal onClose={closeModal} bigPicture={bigPicture} />}
        {error && <p>Спрабуйте пізніше</p>}
        {isPictures && (
          <ImageGalleryItem onClick={openModal} pictures={pictures} />
        )}
        {pictures.length >= 12 && <Button changePage={loadMore} />}
      </div>
    );
  }
}
