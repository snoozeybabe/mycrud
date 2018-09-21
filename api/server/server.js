const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

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



app.post('/users/add', function(req, res){
  const {gender,lastName,firstName,birthDay,nDossier,commentaire } = req.body;
  const date_add  = Date.now();
  const formatCom  =  commentaire.replace(/[<>*()?]/g, "\\$&");
  console.log(formatCom);
  const INSERT_USER = `INSERT INTO patient (civilite,nom,prenom,n_dossier,date_naissance,commentaire,date_add) VALUES ("${gender}","${lastName}","${firstName}","${nDossier}", "${birthDay}","${formatCom}", ${date_add})`;
  connection.query(INSERT_USER, (err, results) =>{
    if(err){
      console.log(err);
      return res.send(err);
    }else {
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
  console.log(req.body);
  const value = req.body.firstName;
  const SEARCH_USER = `SELECT * FROM patient WHERE nom LIKE '%${value}%'  OR prenom LIKE '%${value}%' OR n_dossier LIKE '%${value}%' `
  connection.query(SEARCH_USER, (err, results, fields) => {
    if(err) return res.send(JSON.stringify(err));
    var data = [];
    results.map((user) => data.push(user));
    res.end(JSON.stringify(data));
  });
})

app.on('listening',function(){
    console.log('ok, server is running');
});

app.listen(3001,function(){
  console.log("App listening in 3100");
});