const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// get route that will retrieve all the notes
router.get('/notes', (req, res)=> {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

// post route that will create a new note
router.post('/notes', (req, res)=> {
    const { title, text } = req.body;

    if (req.body) {
      const newNote= {
        title, 
        text
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`TNote added successfully 🚀`);
    } else {
      res.error('Error in adding tip');
    }
})

module.exports = router;