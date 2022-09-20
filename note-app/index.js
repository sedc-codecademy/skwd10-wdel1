const express = require("express");
const path = require("path");
const DataService = require("./data.service");

const NOTES_PATH = path.join(__dirname, "data", "db.json");

const app = express();

// Allows express to parse json in request bodies
app.use(express.json());

// 1.Get all notes
// 2.Get note by id
// 3.Create a note
// 4.Update a note
// 5.Delete a note

app.get("/", (req, res) => {
  res.send({ msg: "You have reached the server" });
});

app.listen(3000, () => {
  console.log("Server is up at port 3000");
});
