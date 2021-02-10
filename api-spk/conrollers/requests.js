const date = require("date-and-time");
const { v4: uuidv4 } = require("uuid");
const mysqlcon = require("../db.js");

let todo = [];

// создание заявки
todo.create = (req, res) => {
  const input = req.body;
  const request = { ...input, id: uuidv4() };
  const requestID = uuidv4();
  mysqlcon.query(
    "INSERT INTO requests (`id`, `worker`, `cab`, `problem`, `status`, `date`) VALUES (?, ?, ?, ?, ?, ?)",
    [
      requestID,
      request.worker,
      request.cab,
      request.problem,
      request.status,
      request.date,
    ],
    (err, rows, fields) => {
      if (!err) {
        console.log(rows);
        res.send(`Create request with id:${requestID}  success`);
      } else console.log(err);
    }
  );
};

// получение всех заявок
todo.get = (req, res) => {
  mysqlcon.query("SELECT * FROM requests", (err, rows, fields) => {
    if (!err) {
      console.log(rows);
      res.send(rows);
    } else console.log(err);
  });
};

// получение заявки по айди
todo.getById = (req, res) => {
  mysqlcon.query(
    "SELECT * FROM requests WHERE id = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) {
        console.log(rows);
        res.send(rows);
      } else console.log(err);
    }
  );
};

// удаление заявки по айди
todo.del = (req, res) => {
  mysqlcon.query(
    "DELETE FROM  requests WHERE id = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) {
        console.log(rows);
        res.send(`Deleted request with id:${req.params.id}  success`);
      } else console.log(err);
    }
  );
};

// update заявки
todo.update = (req, res) => {
  const id = req.params.id;
  mysqlcon.query(
    "SELECT * FROM requests WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        console.log(rows);

        if (req.body.status)
          mysqlcon.query(
            `UPDATE requests SET status = "${req.body.status}" WHERE id="${id}"`,
            (err, rows, fields) => {
              if (err) console.log(err);
            }
          );
        if (req.body.worker)
          mysqlcon.query(
            `UPDATE requests SET worker = ${req.body.worker} WHERE id="${id}"`,
            (err, rows, fields) => {
              if (err) console.log(err);
            }
          );
        if (req.body.cab)
          mysqlcon.query(
            `UPDATE requests SET cab = ${req.body.cab} WHERE id="${id}"`,
            (err, rows, fields) => {
              if (err) console.log(err);
            }
          );
        if (req.body.problem)
          mysqlcon.query(
            `UPDATE requests SET problem = ${req.body.problem} WHERE id="${id}"`,
            (err, rows, fields) => {
              if (err) console.log(err);
            }
          );
        if (req.body.date)
          mysqlcon.query(
            `UPDATE requests SET date = ${req.body.date} WHERE id="${id}"`,
            (err, rows, fields) => {
              if (err) console.log(err);
            }
          );

        res.send(`Updated request with id:${req.params.id}  success`);
      } else console.log(err);
    }
  );
};

// получение всех заявок по периоду
todo.period = (req, res) => {
  const from = req.query.from;
  const to = req.query.to;
  mysqlcon.query(
    `SELECT * FROM requests WHERE date > "${from}" and date < "${to}"`,
    (err, rows, fields) => {
      if (!err) {
        console.log(rows);
        res.send(rows);
      } else console.log(err);
    }
  );
};

todo.status = (req, res) => {
  const status = req.query.status;
  mysqlcon.query(
    `SELECT * FROM requests WHERE status ="${status}"`,
    (err, rows, fields) => {
      if (!err) {
        console.log(rows);
        res.send(rows);
      } else console.log(err);
    }
  );
};

todo.search = (req, res) => {
  const search = req.query.search;
  console.log(search);
  mysqlcon.query(
    `SELECT * FROM requests WHERE problem LIKE "%${search}%"`,
    (err, rows, fields) => {
      if (!err) {
        console.log(rows);
        res.send(rows);
      } else console.log(err);
    }
  );
};

module.exports = todo;
