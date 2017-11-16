var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    // 1-Recuperar una fitxa qualsevol (aleatòri, seqüencial, etc..)
    //TODO


    // 2-Recuperar la llista d'avisos actius i dels propers
    //TODO


    res.render('index', {
        title: 'Express',
        fitxa:
            {
                id: 1,
                name: 'fitxa1',
                description: 'fitxa 1'
            },
        avisos:
            [
                { id: 1, name: 'alarma1', description: 'alarma 1', alarmtime: '10/10/2017 10:00:00'},
                { id: 2, name: 'alarma2', description: 'alarma 2', alarmtime: '10/10/2017 12:00:00'}
            ]
    });
});

module.exports = router;
