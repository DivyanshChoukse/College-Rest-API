const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://Divyansh:12345@cluster0.gwqn2dg.mongodb.net/student?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((error) => {
    console.log("Error in connectig to database :", error.message);
  });
