import { useState, useEffect, useRef } from 'react';
import { fetchImages } from '../../unsplash-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import toast from 'react-hot-toast';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

import './App.css';
import {
  HandleLoadMore,
  HandleModalClose,
  HandleModalOpen,
  HandleSearch,
  Image,
  InittialModalParams,
} from './App.types';

function App() {
  const INITIAL_MODAL_PARAMS: InittialModalParams = {
    modalIsOpen: false,
    urlRegular: '',
    imgAlt: '',
    likes: 0,
    userName: '',
  };

  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [loadMoreBtn, setLoadMoreBtn] = useState<boolean>(false);
  const [modal, setModal] = useState(INITIAL_MODAL_PARAMS);

  // const appElementRef = useRef<HTMLDivElement>(null);
  const appElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function getImages() {
      try {
        setError(false);
        if (query === '') {
          setLoadMoreBtn(false);
          return;
        }
        setLoading(true);
        const data = await fetchImages(query, page);
        console.log(data);
        if (data.total === 0) {
          setLoadMoreBtn(false);
          toast('There are no results!');
          return;
        }
        setImages(prevImages => [...prevImages, ...data.results]);
        setLoadMoreBtn(data.total_pages !== page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  const handleSearch: HandleSearch = userQuery => {
    setQuery(userQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore: HandleLoadMore = () => {
    setPage(page + 1);
  };

  const handleModalOpen: HandleModalOpen = (
    urlRegular,
    imgAlt,
    likes,
    userName,
  ) => {
    setModal({
      modalIsOpen: true,
      urlRegular,
      imgAlt,
      likes,
      userName,
    });
  };
  const handleModalClose: HandleModalClose = () => {
    setModal(INITIAL_MODAL_PARAMS);
  };

  useEffect(() => {
    if (page === 1) return;
    if (appElementRef.current) {
      appElementRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [page, images]);

  return (
    <div ref={appElementRef}>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} onModalOpen={handleModalOpen} />
      )}
      {loadMoreBtn && !loading && (
        <LoadMoreBtn onLoadMoreBtn={handleLoadMore} />
      )}
      {loading && <Loader />}
      <ImageModal onModalClose={handleModalClose} modalData={modal} />
    </div>
  );
}

export default App;
