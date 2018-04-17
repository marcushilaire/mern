const express = require('express');
const app = express();
const axios = require("axios");
const bodyParser= require("body-parser")
const db = require("./models");
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mern"
);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
app.post("/api/store", function(req, res){
  console.log("post", req.body)
  db.Random.create(req.body)
  .then(function(dbRandom){
    console.log("dbRandom",dbRandom)
  }).catch(function(err){
    return res.json(err)
  })
})

app.get("/api/random", (req, res) => {
  axios
    .get("https://randomuser.me/api/?results=5", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});


const PORT = process.env.PORT || 3001;
app.listen(PORT);