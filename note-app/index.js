const express = require("express");
const path = require("path");
const DataService = require("./data.service");
const { v4: uuid } = require("uuid");

const NOTES_PATH = path.join(__dirname, "data", "db.json");

const app = express();

// Allows express to parse json in request bodies
app.use(express.json());

// 1.Get all notes
app.get("/notes", async (req, res) => {
  const notes = await DataService.readJSONFile(NOTES_PATH);

  return res.status(200).json(notes);
});
// 2.Create a note
app.post("/notes", async (req, res) => {
  const { title, body } = req.body;

  const newNote = {
    title,
    body,
    id: uuid(),
  };

  const notes = await DataService.readJSONFile(NOTES_PATH);

  const updatedNotes = [...notes, newNote];

  await DataService.writeJSONFile(NOTES_PATH, updatedNotes);

  return res.status(201).json(newNote);
});
// 3.Get note by id
app.get("/notes/:id", async (req, res) => {
  const noteId = req.params.id;

  const notes = await DataService.readJSONFile(NOTES_PATH);

  const foundNote = notes.find(note => note.id === noteId);

  if (!foundNote) {
    return res.status(404).send({ message: "Note not found!" });
  }

  res.status(200).json(foundNote);
});
// 4.Update a note
app.put("/notes/:id", async (req, res) => {
  const noteId = req.params.id;
  const noteUpdates = req.body;

  const notes = await DataService.readJSONFile(NOTES_PATH);

  const foundNote = notes.find(note => note.id === noteId);

  if (!foundNote) {
    return res.status(404).send({ message: "Note not found!" });
  }

  const updatedNote = { ...foundNote, ...noteUpdates };

  const updatedNotes = notes.map(note =>
    note.id === updatedNote.id ? updatedNote : note
  );

  await DataService.writeJSONFile(NOTES_PATH, updatedNotes);

  return res.status(200).json(updatedNote);
});

// 5.Delete a note
app.delete("/notes/:id", async (req, res) => {
  const noteId = req.params.id;

  const notes = await DataService.readJSONFile(NOTES_PATH);

  const updatedNotes = notes.filter(note => note.id !== noteId);

  if (notes.length === updatedNotes.length) {
    return res.status(404).json({ message: "Note not found!" });
  }

  await DataService.writeJSONFile(NOTES_PATH, updatedNotes);

  res.sendStatus(200);
  //   res.sendStatus(204)
});

app.get("/", (req, res) => {
  res.send("Welcome to the notes api");
});

app.all("*", (req, res) => {
  res.status(404).send("Error 404!, Request endpoint doesn't exist");
});

app.listen(3000, () => {
  console.log("Server is up at port 3000");
});
