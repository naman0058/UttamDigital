

  
var mysql = require('mysql')


const pool = mysql.createPool({
 
 host : 'localhost',
   user: 'root',
    password : '123',
    database: 'e-commerce',

    port:'3306' ,
    multipleStatements: true
  })


module.exports = pool;