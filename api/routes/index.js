var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getItem',function(req,res,next) {
  res.json({
    "id":"aaa",
    "name":"Almonds",
    "attributes": ["nuts","organic","raw"],
    "url":"www.almonds.com",
    "ingredients":["aab","aac"],
    "history":["bbb","ccc","ddd"]
  
  })
})

module.exports = router;
