const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
