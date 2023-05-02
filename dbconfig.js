const mysql =require('mysql');

var connections=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'stashook'
});
connections.connect(function(err)
{
    if(!!err)
    {
        console.log(err);
    }
    else
    {
        console.log("Connected");
    }
});

module.exports=connections;