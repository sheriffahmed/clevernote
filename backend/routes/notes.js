var express = require('express');
var router = express.Router();
var db = require('../db/queries.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is the notes API');
});

router.get('/getAllNotes', db.getAllNotes);
router.get('/getNoteById/:id', db.getNoteById);
// router.get('/getNoteById/:id', db.getNoteById);
router.get('/deletenote/:id', db.deleteNote);

router.post('/newNote', db.newNote);
router.post('/editNote/:id', db.editNote);








module.exports = router;
