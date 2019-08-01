const { Router } = require('express');

const router = Router();

const notes = require('../Controllers/notes.controller')

router.route('/')
    .get(notes.getNotes)
    .post(notes.createNote)

router.route('/:id')
    .get(notes.getNote)
    .put(notes.updateNote)
    .delete(notes.deleteNote)

module.exports = router;