const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

router.ws('/', function (ws, req) {
  ws.on('message', function (msg) {
    console.log(msg);
    ws.send(msg);
  });
});

module.exports = router;
