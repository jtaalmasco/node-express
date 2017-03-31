var express = require('express');
var app = express();

app.get('/',function(res,req){
    res.send('Hello World')
})

app.listen(3000, function(){
    console.log('Example app listening to port 3000!');
})