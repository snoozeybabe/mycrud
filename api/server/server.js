const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const Helpers = require('../utils/helpers');

const SELECT_ALL = 'SELECT * FROM patient';

const connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "root",
  database : "patients",
  port  : "8889"
});

connection.connect((err) =>{
  if(err) { return  err;}
  console.log('Ur connected');
})

app.use(bodyParser.json());
app.use(cors());


 app.all('/*', function(req, res, next){
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', "GET,PUT,POST,DELETE,OPTIONS");
   res.header('Access-Control-Allows-Headers', 'Content-type, Accept,X-Access-Token','X-Key');
   if(req.method == 'OPTIONS'){
     res.status(200).end();
   }else{
     next();
   }
 })



app.post('/users/add', function(req, res){

  console.log(req.body);
  const {gender,lastname,firstname,birthday,ndossier,commentaire } = req.body;
  const date_add    = Date.now();
  const UPDATE_USER = `UPDATE patient SET ${Helpers.formatUpdate(req.body.datas)} WHERE  id=` + req.body.id;
  const INSERT_USER = `INSERT INTO patient (gender,lastname,firstname,ndossier,birthday,commentaire,dateadd) VALUES ("${gender}","${lastname}","${firstname}","${ndossier}", "${birthday}","${commentaire}", ${date_add})`;


   connection.query(req.body.id ? UPDATE_USER : INSERT_USER, (err, results) =>{
    if(err){
      return res.send(err);
    }else {
      console.log(results);
      return res.send("Users added here ");
     }
   });

})
app.get('/users', function(req,res){
  connection.query(SELECT_ALL, (err, results) =>{
    if(err){
      return res.send(err);
    }else{
      return res.json({
        data : results
      });
    }
  })
});

app.post('/users/search', function(req, res){
  const value = req.body.firstName;
  const SEARCH_USER = `SELECT * FROM patient WHERE lastname LIKE '%${value}%'  OR firstname LIKE '%${value}%' OR ndossier LIKE '%${value}%' `
  connection.query(SEARCH_USER, (err, results, fields) => {
    if(err) return res.send(JSON.stringify(err));
    var data = [];
    results.map((user) => data.push(user));
    res.end(JSON.stringify(data));
  });
});

app.delete('/users/delete/:id', function(req, res){
  if( !req.params.id ) return;
 const id = req.params.id;
  const DELETE_USER = `DELETE FROM patient WHERE id = ${id}`;
  connection.query(DELETE_USER, (err, res) => {
    if(err) throw err;
  })
})

app.on('listening',function(){
    console.log('ok, server is running');
});

app.listen(3123,function(){
  console.log("App listening in 3123");
});