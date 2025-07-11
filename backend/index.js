const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const connectDb=require('./config/db')
const userRegister=require('./routes/registerRoute');
const userLogin=require('./routes/loginRoute');
const dotenv= require('dotenv');
const vehicleRoute = require('./routes/vehicleRouter');
dotenv.config();

const secret=process.env.JWT_SECRET;

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json())

connectDb();
// Route to handle registration
app.use('/register',userRegister);
console.log("register function completed");
app.use('/login',userLogin);
app.use('/vehicleRegistration',vehicleRoute);


// Optional health check route
app.get('/', (req, res) => {
  res.send("Server is running...");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
