// api/auth/delete.js
const { sql } = require('@vercel/postgres');

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');//edit next time para ang front end lang maka access
  res.setHeader('Access-Control-Allow-Methods', 'DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'DELETE') {
    const { user_id } = req.body;

    if (!user_id) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    try {
      const result = await sql`
        DELETE FROM users WHERE id = ${user_id};
      `;

      if (result.rowCount === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Delete error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
