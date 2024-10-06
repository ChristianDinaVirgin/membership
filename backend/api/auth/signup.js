// api/auth/signup.js
const bcrypt = require('bcryptjs');
const { sql } = require('@vercel/postgres');

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');//edit next time para ang front end lang maka access
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'POST') {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ message: 'Name, email, and password are required' });
    }

    try {
      const existingUser = await sql`
        SELECT * FROM users WHERE email = ${email};
      `;

      if (existingUser.rowCount > 0) {
        return res.status(409).json({ message: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await sql`
        INSERT INTO users (name, email, password)
        VALUES (${name}, ${email}, ${hashedPassword});
      `;

      return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Sign-up error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
