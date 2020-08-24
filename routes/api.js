const router = require("express").Router();
const connection = require("../config/config");

router.get("/leagues", (req, res) => {
  connection.query("SELECT * FROM leaguesDB.leagues WHERE budget<=?", [req.query.budget], (err, result) => {
    if (err) console.log(err);
    res.json(result);
  })
});

router.post("/leagues", (req, res) => {
  connection.query("INSERT INTO leaguesDB.leagues SET ?",
    {
      league_name: req.body.name,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      budget: req.body.budget
    },
    (err, data) => {
      res.json(data);
    if(err) throw(err);
    console.log(data);
  })
})

module.exports = router;