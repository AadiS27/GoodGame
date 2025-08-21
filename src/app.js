import express from 'express';
import booksRouter from './routes/books.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/books', booksRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Book Directory API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
