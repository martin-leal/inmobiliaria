const express = require("express");
const router = express.Router();
const { User } = require("../../models");

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  User.findOne({
    where: { id },
    returning: true,
    plain: true,
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/", (req, res) => {
  User.findAll().then((users) => res.send(users));
});

// ruta POST de log in - creacion de cookie y mandar al cliente datos de usuario
// idem de log out
// /me   ruta GET / devuelve datos del usuario (salen de las cookies)

router.post("/add", (req, res) => {
  User.create(req.body).then((user) => res.status(201).send(user));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  User.destroy({ where: { id } }).then(() => res.sendStatus(204));
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  User.update(req.body, {
    where: { id },
    returning: true,
    plain: true,
  }).then((result) => {
    let obj = { updatedUser: result[1] };
    res.send(obj);
  });
});

module.exports = router;

//
//   {
//     name: "xxx",
//     lastname: "yyy",
//     phone: 114455667,
//     email: "xxx@gmail.com",
//     password: 12345678,
//   }
//
