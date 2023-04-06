const student = require("../model/student");
const get_student = async (req, res) => {
  try {
    const entry = await student.find({});
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const post_student = async (req, res) => {
  try {
    const entry = await student.create({
      name: req.query.name,
      branch: req.query.branch,
    });
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const delete_student = async (req, res) => {
  try {
    const entry = await student.find({ _id: req.query.id });
    if (entry) {
      await student.findByIdAndDelete(req.query.id);
      res.status(200).json(entry);
    } else {
      res.status(404).send("No student with provided entry");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const update_student = async (req, res) => {
  try {
    const entry = await student.findOne({ _id: req.query.id });
    if (entry) {
      if (req.query.name && req.query.branch) {
        const updatedEntry = await student.updateOne(
          { _id: req.query.id },
          { name: req.query.name, branch: req.query.branch }
        );
        res.status(200).json(updatedEntry);
      } else if (req.query.name) {
        const updatedEntry = await student.updateOne(
          { _id: req.query.id },
          { name: req.query.name }
        );
        res.status(200).json(updatedEntry);
      } else if (req.query.branch) {
        const updatedEntry = await student.updateOne(
          { _id: req.query.id },
          { branch: req.query.branch }
        );
        res.status(200).json(updatedEntry);
      } else {
        res.send("Please provide entry to update");
      }
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
module.exports = { get_student, post_student, delete_student, update_student };
