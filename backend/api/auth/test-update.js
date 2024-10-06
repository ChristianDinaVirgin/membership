// api/auth/update.js
const bcrypt = require('bcryptjs');
const { sql } = require('@vercel/postgres');

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');//edit next time para ang front end lang maka access
  res.setHeader('Access-Control-Allow-Methods', 'PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'PUT') {
    const { user_id, name, password } = req.body;

    if (!user_id) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    try {
      const result = await sql`
        SELECT * FROM users WHERE id = ${user_id};
      `;

      if (result.rowCount === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      const user = result.rows[0];
      let updatedPassword = user.password;

      if (password) {
        updatedPassword = await bcrypt.hash(password, 10);
      }

      await sql`
        UPDATE users SET
          name = ${name || user.name},
          password = ${updatedPassword}
        WHERE id = ${user_id};
      `;

      return res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
      console.error('Update error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
