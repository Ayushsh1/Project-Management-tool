const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Storage setup for uploaded files
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

// Middleware
app.use(express.json());
app.use('/uploads', express.static(uploadDir));

// Upload endpoint
app.post('/api/upload', upload.single('file'), (req, res) => {
    res.json({ filePath: `/uploads/${req.file.filename}`, fileName: req.file.originalname });
});

// List files endpoint
app.get('/api/files', (req, res) => {
    fs.readdir(uploadDir, (err, files) => {
        if (err) return res.status(500).send('Unable to read files');
        res.json(files.map(file => ({
            name: file,
            url: `/uploads/${file}`
        })));
    });
});

// Delete file endpoint
app.delete('/api/files/:filename', (req, res) => {
    const filePath = path.join(uploadDir, req.params.filename);
    fs.unlink(filePath, (err) => {
        if (err) return res.status(500).send('Failed to delete file');
        res.status(200).send('File deleted');
    });
});

app.listen(PORT, () => console.log(`File server running on http://localhost:${PORT}`));