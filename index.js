const express = require('express');
const jsonServer = require('json-server');

const app = express();

// Serve db.json globally without a specific path
app.use(jsonServer.router('db.json'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
