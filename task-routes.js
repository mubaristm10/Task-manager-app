const express = require('express');
const router = express.Router();

const {
  add,
  get,
  edit,
  remove,
  completed,
} = require('../controllers/task-controller');

router.post('/', add);
router.get('/', get);
router.patch('/:id', edit);
router.delete('/:id', remove);
router.patch('/completed/:id', completed);

module.exports = router;
