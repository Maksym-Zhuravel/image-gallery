import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../images-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchImages() {
      try {
        const data = await getImages(query, page);
        setImages((prevImages) => [...prevImages, ...data]);
      } catch (err) {
        console.log(err);
      }
    }

    fetchImages();
  }, [query, page]);

  const handleSearch = async (values) => {
    setQuery(values);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery images={images} />
      <LoadMoreBtn onClick={handleLoadMore} />
    </>
  );
}
