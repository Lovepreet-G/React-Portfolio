const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");
const cors = require("cors"); // Import the cors module

const dbUrl = "mongodb+srv://admin:test123@cluster0.hgz3mfs.mongodb.net/";
const client = new MongoClient(dbUrl);

const app = express();
const port = process.env.PORT || "8888";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

app.get('/api/projects', async (req, res) => {
  const db = await connection();
  const results = await db.collection("projects").find({}).toArray();
  res.status(200).json(results);
});

app.get('/api/skills', async (req, res) => {
  const db = await connection();
  const results = await db.collection("skills").find({}).toArray();
  res.status(200).json(results);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
});

async function connection() {
  db = client.db("Portfolio");
  return db;
}
