const router = require("express").Router();
const store = require("../db/store.js");

router.get("/notes", (req, res) => {
  store.getNotes()
    .then((results) => {
      return res.json(results)
    })
    .catch((err) =>{
      res.status(500).json(err)
    })

})

module.exports = router;