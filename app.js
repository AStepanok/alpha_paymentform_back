var express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(`${__dirname}/build`));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.post('/api/payment', function (req, res) {
    const {amount, cardNumber, expiration, cvv, holderName} = req.body;
    res.json({
       status: 'success',
       payment: {
           amount, cardNumber, expiration, cvv, holderName
       }
    });
});

app.listen(8084, function () {
    console.log('Server is running on port 8084');
});