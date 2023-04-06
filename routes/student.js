const {
  get_student,
  post_student,
  delete_student,
  update_student,
} = require("../controller/student_controller");
const express = require("express");
const router = express.Router();
router.get("/", get_student);
router.post("/", post_student);
router.delete("/", delete_student);
router.put("/", update_student);
module.exports = router;
