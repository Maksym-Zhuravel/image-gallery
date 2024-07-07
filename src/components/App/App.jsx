import { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../images-api";

export default function App() {
  useEffect(() => {
    async function fetchImages() {
      try {
        const data = await getImages("batman");
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchImages();
  }, []);

  const handleSearch = (values) => {
    console.log(values);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
    </>
  );
}
