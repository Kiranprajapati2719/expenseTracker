const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const buildPath = path.join(__dirname, '..', 'build');
const app = express();

app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => console.log(`Server started on port ${port}`));
