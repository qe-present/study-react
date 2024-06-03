import fs from 'node:fs/promises';


import bodyParser from 'body-parser';
import express from 'express';
import path from "path";
import {fileURLToPath} from "url";

const app = express();

app.use(express.static('images'));
app.use(bodyParser.json());

// CORS

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  next();
});
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let placesJsonFile=path.resolve(__dirname, 'data/places.json')
let placesUserJsonFile=path.resolve(__dirname, 'data/user-places.json')
app.get('/places', async (req, res) => {

  const fileContent = await fs.readFile(placesJsonFile);

  const placesData = JSON.parse(fileContent);

  res.status(200).json({ places: placesData });
});

app.get('/user-places', async (req, res) => {
  const fileContent = await fs.readFile(placesUserJsonFile);

  const places = JSON.parse(fileContent);

  res.status(200).json({ places });
});

app.put('/user-places', async (req, res) => {
  const places = req.body.places;

  await fs.writeFile(placesUserJsonFile, JSON.stringify(places));

  res.status(200).json({ message: 'User places updated!' });
});

// 404
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  res.status(404).json({ message: '404 - Not Found' });
});

app.listen(3000);
