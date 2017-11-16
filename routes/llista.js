var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('llista', {
      title: 'Express',
      fitxes: [
          { id: 1, name: 'fitxa1', description: 'fitxa 1' },
          { id: 2, name: 'fitxa2', description: 'fitxa 2' },
          { id: 3, name: 'fitxa3', description: 'fitxa 3' },
          { id: 4, name: 'fitxa4', description: 'fitxa 4' }
      ]
  });
});

module.exports = router;
