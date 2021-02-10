const express = require("express");

const todo = require("../conrollers/requests");

const router = express.Router();

router.get("/", todo.get);

router.post("/", todo.create);

router.get("/id/:id", todo.getById);

router.delete("/id/:id", todo.del);

router.patch("/id/:id", todo.update);

router.get("/period", todo.period);

router.get("/status", todo.status);

router.get("/search", todo.search);

module.exports = router;
