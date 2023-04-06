const express = require("express");
require("./config/mongoose");
const port = 8000;
const app = express();
app.use("/student", require("./routes/student"));
app.listen(port, (error) => {
  if (error) {
    return console.log("Error in starting the server :", error.message);
  }
  console.log("Server is up and running at port ", port);
});
