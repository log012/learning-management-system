import multer from 'multer';
import nextConnect from 'next-connect';
import path from 'path';
import fs from 'fs';

// Ensure upload directory exists
const uploadDir = './public/uploads';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

const handler = nextConnect({
  onError: (err, req, res) => {
    res.status(500).end(`Something went wrong! ${err.toString()}`);
  },
  onNoMatch: (req, res) => {
    res.status(405).end('Method Not Allowed');
  },
});

handler.use(upload.single('file'));

handler.post((req, res) => {
  res.status(200).json({ filePath: `/uploads/${req.file.filename}` });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
