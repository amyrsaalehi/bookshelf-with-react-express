const express = require('express');
const cors = require('cors');
const books = require('./books.json')


const { PORT = 5001 } = process.env;

const app = express();
app.use(cors());



app.get('/api/v1/books', (req, res) => {
  res.json(books)
});


app.listen(PORT, () => {
  console.log(`Server is up and running on PORT: ${PORT}`);
});