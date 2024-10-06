const { sql } = require('@vercel/postgres');

async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://mem-fee-online.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    try {
      const { rows } = await sql`SELECT * FROM users;`;
      console.log('Data fetched successfully:', rows);
      res.status(200).json(rows);
    } catch (err) {
      console.error('Error querying the database:', err);
      res.status(500).json({ error: 'Error querying the database', details: err.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

module.exports = handler;
