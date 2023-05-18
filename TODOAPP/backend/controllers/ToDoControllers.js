const toDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const toDo = await toDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  await toDoModel.create({ text }).then((data) => {
    console.log("Added Successfully");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateToDO = async (req, res) => {
  const { _id, text } = req.body;

  await toDoModel
    .findByIdAndUpdate(_id, { text })
    .then(() => res.send("updated successfully"))
    .catch((err) => console.log("Error in updating"));
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  await toDoModel
    .findByIdAndDelete(_id)
    .then(() => console.log("delete successfully"))
    .catch((err) => console.log("error while deleting"));
};
