const express = require("express");
const app = express();
const port = 3000;
const cors = require('./middleware/cors');
const usersRouter = require("./routes/usersRouter");
const problemsRouter = require("./routes/problemsRouter");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors);

app.use("/user", usersRouter);
app.use("/problems", problemsRouter);


/* Error handler middleware */


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

