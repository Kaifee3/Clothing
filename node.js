// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const app = express();

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/user-login', {
//   serverSelectionTimeoutMS: 5000,
// });

// // Define User schema
// const UserSchema = new mongoose.Schema({
//   name: String,
//   password: String,
//   createdAt: Date,
// });

// // Define User model
// const User = mongoose.model('User', UserSchema);

// // Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.set('view engine', 'ejs');

// // Serve the login page
// app.get('/', (req, res) => {
//   res.render('PROJECT');
// });

// // Handle the login form submission
// app.post('/login', async (req, res) => {
//   const { name, password } = req.body;

//   // Check if the user exists
//   const user = await User.findOne({ name, password }).exec();

//   if (user) {
//     // User exists, store the user information
//     const newUser = new User({
//       name,
//       password,
//       createdAt: new Date(),
//     });

//     await newUser.save();

//     res.redirect('/');
//   } else {
//     // User doesn't exist, show an error message
//     res.render('PROJECT', { error: 'Invalid username or password' });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));