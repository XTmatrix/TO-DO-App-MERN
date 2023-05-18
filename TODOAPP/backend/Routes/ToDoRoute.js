const { Router } = require("express");
const {
  getToDo,
  saveToDo,
  updateToDO,
  deleteToDo,
} = require("../controllers/ToDoControllers");

const router = Router();

router.get("/", getToDo);
router.post("/save", saveToDo);
router.post("/update", updateToDO);
router.post("/delete", deleteToDo);

module.exports = router;
