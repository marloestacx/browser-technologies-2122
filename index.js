const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const mongoose = require("mongoose");
const Enquete = require("./models/enquete");
const bodyParser = require("body-parser");
const dbURL = process.env.DBURL;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mongoose connect to db
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.render("home");
});

// send survey to db
// redirect naar send page
app.post("/", (req, res) => {
  const enquete = new Enquete(req.body);

  enquete
    .save()
    .then(() => {
      res.redirect("/send");
    })
    .catch((err) => {
      console.log(err);
    });
});

// send page
app.get("/send", (req, res) => {
  res.render("send");
});

app.get("/result", (req, res) => {
  Enquete.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("result", {
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/detail/:id", (req, res) => {
  const id = req.params.id;
  Enquete.findById(id)
    .then((result) => {
      res.render("details", { data: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
