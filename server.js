import express from 'express';
import Appartement from './models/Appartement.js';

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", async function (req, res) {
  const List = await Appartement.loadMany();
  let totalarea = "";
  res.render('listpiece.ejs', {List, totalarea});
});

app.post("/add", async function (req, res) {
  const Newdatabase = new Appartement();
  Newdatabase.piece = req.body.piece
  Newdatabase.length = req.body.length
  Newdatabase.width = req.body.width
  await Newdatabase.save();
  res.redirect('/');
});

app.post('/calcul', async function(req, res) {
  const areacalcul = await Appartement.loadMany();
  let totalarea = 0;
  for(let elem of areacalcul) {
    let area = elem.length * elem.width;
    totalarea += area
  }
  res.render('listpiece.ejs', {List: areacalcul, totalarea});
  
});

// Ajouter une image
app.use(express.static('public'));

app.listen(4000);
