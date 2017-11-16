var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
    // 1-Recuperar la fitxa
    //TODO


    // 2-Recuperar la llista d'històrics
    //TODO

    // 4-Recuperar l'alarma actual
    //TODO

  res.render('fitxa',
      {
          title: 'Express',
          fitxa:
              {
                  id: req.params.id,
                  name: 'fitxa' + req.params.id,
                  description: 'fitxa ' + req.params.id
              },
          historics:
              [
                  { id: 1, name: 'alarma1', description: 'alarma 1', alarmtime: '10/10/2017 10:00:00'},
                  { id: 2, name: 'alarma2', description: 'alarma 2', alarmtime: '10/10/2017 11:00:00'}
              ],
          avisos:
              [
                  { id: 1, name: 'alarma1', description: 'alarma 1', alarmtime: '10/10/2017 10:00:00'},
                  { id: 2, name: 'alarma2', description: 'alarma 2', alarmtime: '10/10/2017 11:00:00'}
              ]
      });
});

module.exports = router;
