const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("tiny"));

morgan.token("body", function (req, res) {
  return `${JSON.stringify(req.body)}`;
});
app.use(morgan(":method :url :status - :response-time ms :body"));

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-01-10T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2022-01-10T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-01-10T19:20:14.298Z",
    important: true,
  },
];

//Return persons array to html
app.get("/api/persons", (req, res) => {
  res.json(persons);
});

//The page has to show the time that the request was received and how many entries are in the phonebook at the time of processing the request.

app.get("/info", (request, response) => {
  const currentDate = new Date();
  response.send(
    `<h2>Phonebook has info for ${persons.length} people</h2> <h2>${currentDate}</h2>`
  );
});

//Implement the functionality for displaying the information for a single phonebook entry. The url for getting the data for a person with the id 5 should be http://localhost:3001/api/persons/5
// If an entry for the given id is not found, the server has to respond with the appropriate status code.

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = persons.find((item) => item.id === id);
  console.log(note);
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

//3.4: Phonebook backend step4
// Implement functionality that makes it possible to delete a single phonebook entry by making an HTTP DELETE request to the unique URL of that phonebook entry.
app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((entry) => entry.id !== id);
  response.status(204).end();
});

//3.5: Phonebook backend step5
// Expand the backend so that new phonebook entries can be added by making HTTP POST requests to the address http://localhost:3001/api/persons.
// Generate a new id for the phonebook entry with the Math.random function. Use a big enough range for your random values so that the likelihood of creating duplicate ids is small.
app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({ error: "name or number is missing" });
  }

  if (persons.find((entry) => entry.name === body.name)) {
    return response.status(409).json({ error: "Name has to be unique" });
  }
  let entry = {
    id: generateId(persons),
    name: body.name,
    number: body.number,
  };

  // 3.6: Phonebook backend step6
  // Implement error handling for creating new entries. The request is not allowed to succeed, if:

  // The name or number is missing
  // The name already exists in the phonebook
  // Respond to requests like these with the appropriate status code, and also send back information that explains the reason for the error, e.g.:
  // { error: 'name must be unique' }

  persons.push(entry);
  response.json(entry);
});

//
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

const generateId = (array) => {
  const maxId = array.length > 0 ? Math.max(...array.map((n) => n.id)) : 0;
  return maxId + 1;
};

app.post("/api/notes", (request, response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(notes),
  };

  notes = notes.concat(note);

  response.json(note);
});

//Return arr of all notes
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

//Delete method - removes specific doc of given id
app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);

  response.status(204).end();
});

//returns doc of given id
app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((note) => note.id === id);

  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
