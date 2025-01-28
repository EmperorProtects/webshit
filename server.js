const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static(path.join(__dirname, 'mychat')));

app.get('/hello', (req, res) => {
  res.send('Hello World');
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
