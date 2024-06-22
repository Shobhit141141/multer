import React from "react";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import GalleryPage from "./pages/GalleryPage";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/upload">Upload Images</Link>
            </li>
            <li>
              <Link to="/gallery">View Gallery</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
