var express = require('express');
var router = express.Router();

const messages = require("./messages");
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Message Board', messages: messages });
});

module.exports = router;
