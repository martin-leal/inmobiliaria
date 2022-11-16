const express = require("express");
const app = express();
const port = 3000;
const routerApi = require("./api/routes");
const db = require("./db/index");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("mi inmobiliaria");
});

routerApi(app);

// MIDDLEWARE DE ERROR CON DESCRIPCION DE ERROR

//DB
//{ force: true }
db.sync({ force: false }).then(() => {
  console.log("DataBase Connected");
  app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
  });
});
