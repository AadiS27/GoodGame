import { Router } from 'express';
import booksController from '../controllers/booksController.js';

const router = Router();

router.get('/', booksController.getAllBooks);
router.get('/:id', booksController.getBookById);
router.post('/', booksController.createBook);
router.put('/:id', booksController.updateBook);
router.delete('/:id', booksController.deleteBook);

export default router;
