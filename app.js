const express = require("express");
const cors = require("cors");

const { sequelize } = require("./models/index");
const task = require("./models/init-models")(sequelize).task;

const app = express();
app.use(cors());
app.use(express.json());

app.post("/tasks", async (req, res) => {
  const { description } = req.body;

  try {
    const result = await task.create({ description });

    return res.json(result);
  } catch (err) {
    return res.status(500).json(err);
  }
});

app.get("/tasks/all/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await task.findAll({ where: { id } });

    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
});

app.listen({ port: 5000 }, async () => {
  console.log("Server up");
});
