const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost/clever");

const getAllNotes = (req,res,next) =>{
    db.any('SELECT * FROM notes')
    .then(eachNote =>{
        res.status(200).send(eachNote);
    })
    .catch(err =>{
        res.status(500).send(`We tried to get the notes, but we hit a snag: ${err}`);
    })
}

const getNoteById = (req,res,next) =>{
    db.one("SELECT * FROM notes WHERE id = ${id}", {
        id: req.params.id
      })
    .then(note =>{
        res.status(200).send(note);
    })
    .catch(err =>{
        res.status(500).send(`We tried to get your note, but we hit a snag: ${err}`);
    })
}

const newNote = (req,res,next) =>{
    db.none('INSERT INTO notes (title, author, body) VALUES (${title}, ${author}, ${noteBody})', {
        title: req.body.title, 
        author: req.body.author, 
        noteBody: req.body.noteBody       
    })
    .then(() =>{
        res.status(200).send("New Note Successfully Added.");
    })
    .catch(err =>{
        res.status(500).send(`We tried to create your note, but we hit a snag: ${err}`);
    })
}

const editNote = (req, res, next) =>{
    db.none("UPDATE notes SET title = ${title}, body = ${noteBody} WHERE id = ${id}", {
        title: req.body.title,
        noteBody: req.body.noteBody,
        id: req.params.id

    })
    .then(updatedNote =>{
        res.status(200).send('Note successfully updated.');
    })
    .catch(err =>{
        console.log(err)
        res.status(500).send(`We tried to update your note, but we hit a snag: ${err}`);
    })

}

const deleteNote = (req, res, next) =>{
    db.none("DELETE FROM notes WHERE id = ${id}", {
        id: req.params.id

    })
    .then(updatedNote =>{
        res.status(200).send('Note successfully Deleted.');
    })
    .catch(err =>{
        console.log(err)
        res.status(500).send(`We tried to delete your note, but we hit a snag: ${err}`);
    })

}

module.exports = {
    getAllNotes,
    getNoteById,
    newNote,
    editNote,
    deleteNote
}