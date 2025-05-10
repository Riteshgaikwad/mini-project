const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect('mongodb://your-mongodb-connection-string', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Define a Mongoose schema and model (e.g., for User)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});
const User = mongoose.model('User', userSchema);

// --- User Routes ---

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Get a single user
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id); // Parse the id from string to number
  const user = users.find((u) => u.id === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Create a new user
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1, //  simplified ID generation
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(newUser); // Send back the new user and 201 Created status
});

// Update a user
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex > -1) {
    users[userIndex] = { ...users[userIndex], name: req.body.name, email: req.body.email };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Delete a user
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === id);
    if(userIndex > -1){
        users.splice(userIndex, 1);
        res.status(204).send(); // 204 No Content
    }
    else{
        res.status(404).json({message: "User not found"});
    }
});

// --- Other Routes (for your other pages) ---
app.post('/register', (req, res) => {
  // Handle registration logic (e.g., create a new user in the database)
  console.log('Registration data:', req.body);
  res.json({ message: 'Registration successful' });
});

app.post('/login', (req, res) => {
  // Handle login logic (e.g., authenticate user)
  console.log('Login data:', req.body);
  res.json({ message: 'Login successful' });
});

app.post('/feedback', (req, res) => {
  //handle feedback
  console.log("Feedback data", req.body);
  res.json({message: "Feedback submitted successfully"})
})

app.get('/about', (req, res) => {
  res.send('About Us Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Us Page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});