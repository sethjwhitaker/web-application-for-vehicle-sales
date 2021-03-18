import mysql from "mysql";
import dotenv from 'dotenv';
import pdburl from "parse-database-url";

dotenv.config();

const dbConfig = pdburl(process.env.DATABASE_URL);

// Create a connection to the database
const connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

module.exports = connection;