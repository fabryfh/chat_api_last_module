// import express from 'express';
const express = require("express"); // cjs -common java script
const morgan = require("morgan");
const cors = require("cors");
const apiv1Routes = require("./routes/apiv1.routes");
const errorRoutes = require("./routes/error.routes");
require("dotenv").config();

const PORT = process.env.PORT ?? 8000;

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ok");
});

apiv1Routes(app);
errorRoutes(app);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
