
const express = require('express');
const app = express()
require("dotenv").config();

const PORT = process.env.port || 4000

// Middleware
// for converting the json part of the request body
app.use(express.urlencoded({extended: true}));
app.use(express.json()) 

// Route for authentication routes
app.use("/api/auth", require("./routes/auth/auth"));

app.use("/api/survey", require("./routes/survey/survey"));

app.use("/api/image", require("./routes/image/image"));

app.get('/', (req, res) => {
  res.status(200).send('Surveyyyy Time.....')
})


app.listen(PORT, () => {
  console.log(`Example app listening at ${PORT}`)
})

