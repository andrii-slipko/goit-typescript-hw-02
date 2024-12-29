import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { toast } from 'react-hot-toast';
import { Image } from './types/types';

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [modalImage, setModalImage] = useState<Image | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const ACCESS_KEY = 'dzUE9NzoGi1KUWm8hzAfQJHG12LfbQQ7t6pwBZt2h4k';

  const fetchImages = async (query: string, page: number): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&client_id=${ACCESS_KEY}`
      );
      const data = await response.json();
      if (data.results.length === 0) {
        toast.error('No images found');
        setError('No images found');
      } else {
        setImages((prev) => [...prev, ...data.results]);
      }
    } catch (error) {
      setError('Something went wrong');
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      setImages([]); 
      fetchImages(query, 1);
    }
  }, [query]);

  const loadMoreImages = (): void => {
    setPage((prev) => prev + 1);
    fetchImages(query, page + 1);
  };

  const openModal = (image: Image): void => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={setQuery} />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery images={images} onImageClick={openModal} />
          {loading && <Loader />}
          {images.length > 0 && !loading && <LoadMoreBtn onClick={loadMoreImages} />}
        </>
      )}
      <ImageModal isOpen={isModalOpen} onClose={closeModal} image={modalImage} />
    </div>
  );
};

export default App;