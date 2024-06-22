import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GalleryPage: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5050/api/images');
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
          <img key={index} src={`http://localhost:5050/${url}`} alt={`Uploaded ${index}`} width="200" />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
