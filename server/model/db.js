import mysql from "mysql";
import dotenv from 'dotenv';
import pdburl from "parse-database-url";

dotenv.config();

const dbConfig = pdburl(process.env.CLEARDB_DATABASE_URL);

// Create a connection to the database
const connection = mysql.createPool({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
});

module.exports = connection;