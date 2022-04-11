const router = require("express").Router();
const connection = require("../config/config");

router.get("/movies/all", (req, res) => {
  connection.query("SELECT * FROM avelaDB.movies", (err, result) => {
    if (err) console.log(err);
    res.json(result);
  })
});

router.post("/movies", (req, res) => {
  connection.query("INSERT INTO avelaDB.movies SET ?",
    {
      movie_name: req.body.name,
      likes: req.body.likes,
    },
    (err, data) => {
      res.json(data);
    if(err) throw(err);
    console.log(data);
  })
});

router.put("/movies", (req, res) => {
  connection.query("UPDATE avelaDB.movies SET likes = ? WHERE id = ?", [req.body.likes, req.body.id],
    (err, data) => {
      res.json(data);
    if(err) throw(err);
    console.log(data);
  })
});

module.exports = router;
