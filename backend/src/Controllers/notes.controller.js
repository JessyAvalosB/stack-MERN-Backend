const notesCrtl = {};

const Note = require('../Models/Notes');

notesCrtl.getNotes = async(req, res) => {
    const notes = await Note.find();
    res.json(notes)
}

notesCrtl.createNote = async(req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title,
        content,
        date,
        author
    })
    await newNote.save();
    res.json({ message: 'Note saved' })
}

notesCrtl.getNote = async(req, res) => {

    const note = await Note.findById(req.params.id);

    res.json(note)
}

notesCrtl.updateNote = async(req, res) => {
    const { title, content, author } = req.body;
    await Note.findOneAndUpdate({ _id: req.params.id }, {
        title,
        content,
        author
    });
    res.json({ message: 'Note updated' })
}

notesCrtl.deleteNote = async(req, res) => {
    await Note.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'Note deleted' })
}

module.exports = notesCrtl;