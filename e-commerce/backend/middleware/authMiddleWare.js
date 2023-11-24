const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'your-default-secret', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    
    req.user = user;
    next();
  });
}

module.exports = { authenticateToken };

