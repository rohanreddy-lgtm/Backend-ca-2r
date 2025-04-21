const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
  
app.use(express.json());
  
  
let users = [
    { email: "alice@example.com", password: "alice123" },
    { email: "bob@example.com", password: "bob123" },
    { email: "charlie@example.com", password: "charlie123" },
];
  
  
app.put('/users', (req, res) => {
  const { email, password } = req.body;
  
  const user = users.find(user => user.email === email);
  if (user) {
    user.password = password;
    res.json({ message: 'User updated successfully' });
  } else {
    res.status(404).json({ message: 'Email not found' });
  }
});
  
  app.delete('/users', (req, res) => {
    const { email } = req.body;
  
    const index = users.findIndex(user => user.email === email);
  
    if (index !== -1) {
      users.splice(index, 1);
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'Email not found' });
    }
  });
  
  // Home route
  app.get('/', (req, res) => {
    res.send('User Management API is running!');
  });
  
  // Start server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });