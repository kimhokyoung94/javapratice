const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "express_js_example",
  connectionLimit: 10,
});

module.exports = pool;
