const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle React Router - catch all handler for SPA
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`🌿 Natural Nagas Conservation Website running at http://0.0.0.0:${port}`);
  console.log(`📱 Public access: Port ${port} is now available`);
});