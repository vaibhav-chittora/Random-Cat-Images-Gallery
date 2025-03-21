import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import Cards from './cards/Cards';
import axios from 'axios';

function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchImages() {
      try {
        const url = `https://api.thecatapi.com/v1/images/search?limit=100&mime_types=jpg,png&size=med&order=Random`;
        const response = await axios.get(url, {
          headers: { 'x-api-key': import.meta.env.VITE_CAT_API_KEY }
        });
        setImages(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchImages();
  }, []);

  return (
    <>
      <h1 className='text-5xl text-center bg-green-200 p-5 font-bold'>Cat Gallery</h1>
      <Navbar handleSearch={setSearchQuery} />
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 h-[100%] p-5'>
        {images.map((image, index) => (
          <Cards key={index} image={image} />
        ))}
      </div>
    </>
  );
}

export default App;
