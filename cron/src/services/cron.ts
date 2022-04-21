import fs from 'fs';
import { Client } from 'pg';

export default async () => {
  const client = new Client({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
  });
  client.connect();

  client.query('SELECT * from customers', (err, res) => {
    fs.writeFile(
      'resultLot.txt',
      `Rows in database Customers: ${JSON.stringify(res.rows.length)}`,
      err => {
        if (err) throw err;
        console.log('File successfully written to disk');
      },
    );
  });

  await client.end();
};
