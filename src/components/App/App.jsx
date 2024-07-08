import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../images-api";
import ImageGallery from "../ImageGallery/ImageGallery";

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchImages() {
      try {
        const data = await getImages(query);
        setImages(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchImages();
  }, [query]);

  const handleSearch = async (values) => {
    setQuery(values);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery images={images} />
    </>
  );
}
