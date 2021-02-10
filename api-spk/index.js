const express = require("express");
const bodyParser = require("body-parser");
const requestsRoutes = require("./routes/requests.js");
const mysqlcon = require("./db.js");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/requests", requestsRoutes);

app.get("/", (req, res) => {
  console.log("[TEST]");
  mysqlcon.query("SELECT * FROM requests", (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.send(rows);
    } else console.log(err);
  });
});

app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));
