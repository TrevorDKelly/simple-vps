const express = require('express');
const app = express();
const { Pool } = require('pg');
require('dotenv').config();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const pool = new Pool({
  //port: 3001,
  //host: "localhost",
  database: "words",
  //user: "test",
  //password: "test",
});

app.get("/", async (req, res) => {
  const text = "SELECT * from words";

  const client = await pool.connect();
  const qres = await client.query(text)
  console.log(qres);
  res.send(qres);
});

app.post("/", async (req, res) => {
  const word = req.params.word;
  const text = "INSERT INTO words ( word ) VALUES ($1);";
console.log(req.body);
  const client = await pool.connect();
  const qr = await client.query(text, [word]);
  res.send(qr);
});

app.listen(3001,  () => console.log(`DB running on port ${process.env.DBPORT}`));
