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
router.post("/notes", (req, res) =>{
  store.writeNote(req.body)
  .then((results) => {
    return res.json(results)
  })
  .catch((err) =>{
    res.status(500).json(err)
  })
})

router.delete("/notes/:id", (req, res) => {
  store.deleteNote(req.params.id)
  .then(() => {
    return res.json({ok: true})
  })
  .catch((err) =>{
    res.status(500).json(err)
  })
})
module.exports = router;