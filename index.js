require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('HotisPay Backend is running! Congratulations!');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(
    `Server is running on http://localhost: ${PORT}.`
  );
});
