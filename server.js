const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(formidable());

app.post("/create-post", (req, res) => {
    console.log(req.body)
  });

app.listen(3000, () => {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});
