const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile(path.join('build', 'index.html'));
});

app.listen(port, () => console.log(`Server started on port ${port}`));
