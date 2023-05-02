var express = require('express');
var router = express.Router();
const connections =require('../dbconfig');


/* GET register listing. */
router.get('/getregister', function(req, res, next) {
  // res.send('respond with a resource');
 //get register
  var getresisterQ="SELECT * FROM registration ";
  connections.query(getresisterQ, function(err,result)
  {
    if(err)    {
      console.log(err);
      res.send("Unable to get data");
    }
    else    {
      res.send(result);
    }
  });
});



//get register with id base select list

router.get('/getregister/:id', function(req, res, next) {
  // res.send('respond with a resource');
 //get register
  var getresisterQ="SELECT * FROM registration WHERE id="+req.params.id;

  connections.query(getresisterQ, function(err,result)
  {
    if(err)
    {
      console.log(err);
      res.send("Unable to get data");
    }
    else
    {
      res.send(result);
    }
  });
});


//insert data with nodejs working good 
// router.post('/postregister', function(req, res, next) {
// var sqlinser="INSERT INTO registration(username,password,gender,email_address) VALUES?";
// var Values=[
//   ['kala1','kala1','Male','r@g.com'],
//   ['hari','hari','FeMale','r1@g.com']
// ];
// connections.query(sqlinser,[Values],function(err,result)
// {
//   if(err)throw err;
//   console.log("No of data",+result.affectedRows);
// });
// });

router.post('/addregister', (req, res) => {
  let adddetail={
  username:req.body.username,
  password:req.body.password,
  gender:req.body.gender,
  email:req.body.email,
  };
  var sqlinser="INSERT INTO registration SET?";
    connections.query(sqlinser,adddetail,(error)=>
    {
      if(error){
        res.send({status:false,message:"Add Faild"});
      }
      else{
        res.send({status:true,message:"Add Scuccess"});
      }
    });
  });
    
  

module.exports = router;
