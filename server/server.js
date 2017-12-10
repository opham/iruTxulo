var express = require('express');
var homeSlides = require('./json/homeSlides.json');
var app = express();


function returnInitData(routeName) {
    var initData = {};
    switch(routeName) {
    case 'home':
        console.log('homeSlides', homeSlides);
        initData = {homeSlides: JSON.parse(homeSlides)};
        break;
    default:
        break;
    }

    return initData;
}

app.get('/:routeName/init-data', function (req, res) {
    var routeName = req.params.routeName || '';
    var data= {};
    if (!routeName) {
        res.status(400).send('Bad Request');
    } else {
        data = returnInitData(routeName);
    }

    res.status(200).send('Bad request');
});

app.use(express.static('public'));

var server = app.listen(5000, function () {
    console.log('listening port 5000: Node server is running.. ');
});