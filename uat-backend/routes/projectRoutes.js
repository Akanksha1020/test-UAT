const express = require('express');
const router = express.Router();
const { getProjects, createProject, updateProject, updateTaskStatus } = require('../controllers/projectController');
const { upload } = require('../config/aws');

// Project routes
router.get('/', getProjects);
router.post('/', createProject);
router.put('/:id', updateProject);
router.put('/task/status', updateTaskStatus);

// File upload route
router.post('/upload', upload.single('document'), (req, res) => {
  res.json({ 
    message: 'File uploaded successfully',
    fileUrl: req.file.location 
  });
});

module.exports = router;