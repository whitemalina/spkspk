const express = require("express");
const bodyParser = require("body-parser");
const requestsRoutes = require("./routes/requests.js");
const mysqlcon = require("./db.js");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/requests", requestsRoutes);

app.get("/", (req, res) => {
  console.log("[SUCCESS]");
  mysqlcon.query("SELECT * FROM requests", (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.send("ALL OKAY");
    } else console.log(err);
  });
});

app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));
