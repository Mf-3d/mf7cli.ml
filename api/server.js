const express = require('express');

const app = express();

var server = app.listen(3000, () => {
    console.log("Node.js is listening to PORT:" + server.address().port);
});

app.use(express.static('/src'));