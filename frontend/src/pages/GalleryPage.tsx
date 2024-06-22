import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GalleryPage: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_SERVER}/api/images`);
        setImageUrls(response.data);
        console.log(response)
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Image Gallery</h1>
      <div>
        {imageUrls.map((url, index) => (
          <img key={index} src={`${import.meta.env.VITE_APP_SERVER}/${url}`} alt={`Uploaded ${index}`} width="200" />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
