import express, { Request, Response } from 'express';
import upload from '../middleware/middleware';
import Image from '../models/imageModel';

// Custom interface to extend the Express Request type
interface MulterRequest extends Request {
  files: Express.Multer.File[];
}

const router = express.Router();

router.post('/upload', upload.array('images'), async (req: MulterRequest, res: Response) => {
  const files = req.files;
  console.log(files)
  const images = [];

  for (const file of files) {
    const image = new Image({
      filename: file.originalname,
      path: file.path.replace("public",""),
    });

    try {
      await image.save();
      images.push(image);
    } catch (error) {
      console.error('Error saving image to MongoDB:', error);
      res.status(500).json({ message: 'Error saving image to MongoDB' });
      return;
    }
  }

  res.json({ message: 'Images uploaded successfully', images });
});

router.get('/images', async (req: Request, res: Response) => {
  try {
    const images = await Image.find({}, 'path');
    const imageUrls = images.map((image) => image.path);
    res.json(imageUrls);
  } catch (error) {
    console.error('Error fetching images from MongoDB:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
