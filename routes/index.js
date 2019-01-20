const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

router.get('/', function (req, res) {
  res.status(405).send('Not allowed to access resource');
});

// ==================
// 클라이언트 버전 체크
// ==================
router.get('/versionCheck', function (req, res) {
  fs.readdir(path.join(__dirname, '../public/repository/client'), function (error, files) {
    const body = {};
    body.version = '1.0.0';
    body.repository = '/repository/client/';
    body.files = files;
    res.status(200).json(body);
  });
});

module.exports = router;
