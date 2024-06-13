

import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost', // Your database host
  user: 'root', // Your database username
  password: '', // Your database password
  database: 'learning_management_system', // Your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  keepAliveInitialDelay: 10000, // 0 by default.
  enableKeepAlive: true,
});

export async function query({ query, values }) {
  const [results] = await pool.execute(query, values);
  return results;
}