var express=require('express');
var sql=require('mysql');
var app=express();
var bodyparser=require('body-parser');
var connection=sql.createConnection({
  host:'localhost',
  user:'root',
  password:'password',
  database:'student_database'
});
connection.connect(function(err){
  if (err) throw err
  console.log('You are now connected with mysql database...')

});


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended:true
}));


app.post('/register',(req,res)=>{
  console.log("post operation::::")
  console.log("inside the request ::::::",req.body)
  let body=req.body;
  
  let params=[body.userID,body.firstName,body.email,body.password,body.gender,body.state,body.city,body.zip];
  console.log("params::::::::::",params)
  connection.query('insert into cusr (cusr_id,cusr_name,email_id,password,gender,state,city,zip) values (?,?,?,?,?,?,?,?)',params,(err,result,fields)=>{
    if(err)throw err
    console.log("successful !!!!")
    console.log(result)
    let text='{"responseCode":"000","responseMessage":"Values are inserted successfully"}';
    text=JSON.parse(text);
    console.log("text:::::::",text)
    res.end(JSON.stringify(text));
    //res.send('Hello,'+result[0].cusr_name);
  })
});

app.get('/fetch',(req,res)=>{
  console.log("inside the get function::::")
  connection.query('select * from cusr',(error,results,field)=>{
    if(error)throw error
    console.log("values are fetched successfully::::")
    res.end(JSON.stringify(results));
  })
});

app.delete('/deleteUser/:id',(req,res)=>{
console.log("am in delete section",req.params)
connection.query('delete from `cusr` where `cusr_id`=?',[req.params.id],(error,results,fields)=>{
  if(error)throw error;
  console.log("after deleting the record::::")
  let text='{"response":"Record has been deleted successfully!!!!"}';
  text=JSON.parse(text);
  console.log("59:::::::",text)
  console.log("60:::::::",JSON.stringify(text))
  res.end(JSON.stringify(text));
});
});
    
app.listen(3000);