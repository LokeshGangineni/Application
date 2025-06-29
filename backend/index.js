const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const connectDb=require('./config/db')
const userRegister=require('./routes/registerRoute');
const userLogin=require('./routes/loginRoute');


const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json())

connectDb();
// Route to handle registration
app.use('/register',userRegister);
console.log("register function completed");
app.use('/home',userLogin);


// Optional health check route
app.get('/', (req, res) => {
  res.send("Server is running...");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
