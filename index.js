const express = require("express"); //Import the express dependency
const app = express(); //Instantiate an express app, the main work horse of this server
const port = 3000; //Save the port number where your server will be listening

app.set("view engine", "ejs");
app.set("views", "./views");

//Idiomatic expression in express to route and respond to a client request
app.get("/", (req, res) => {
  //get requests to the root ("/") will route here
  res.render("home");
});

app.listen(port, () => {
  //server starts listening for any attempts from a client to connect at port: {port}
  console.log(`Now listening on port ${port}`);
});
