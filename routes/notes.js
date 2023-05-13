const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');


// get route that will retrieve all the notes
router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

router.get('/notes/:id', (req, res) => {
    const noteId = req.params.id;

    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((notes) => {

            const selectedNote = notes.find((note) => note.id === noteId);
            res.json(selectedNote);
        })
        .catch((err) => {
            res.status(500).json({ error: 'Failed to retrieve the note' });
        });
});

// post route that will create a new note
router.post('/notes', (req, res) => {
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id:  uuidv4()
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`TNote added successfully 🚀`);
    } else {
        res.error('Error in adding tip');
    }
});

module.exports = router;