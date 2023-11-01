const userData=require('../model/User')
 const   getAllUsers = async (req, res) => {
    try {
      const users = await userData.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };

 const getUserById = async (req, res) => {
    try {
      const user = await userData.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
 // Create a new user
  const createUser = async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = new userData({ username, email, password,createdAt: new Date()  });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  // Update a user
 const updateUser = async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const updatedUser = await userData.findByIdAndUpdate(req.params.id, { username, email, password }, { new: true });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
  // Delete a user
   const deleteUser = async (req, res) => {
    try {
      const deletedUser = await userData.findByIdAndRemove(req.params.id);
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
  const loginUser = async (req, res) => {
    // Implement user login logic using Firebase Authentication
  };
  
  // User Authorization Check
  const checkAuthorization = async (req, res, next) => {
    // Implement authorization logic based on the user role or permissions
    if (req.user.admin === true) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden' });
    }
  };
  module.exports = {
    loginUser,
    checkAuthorization,
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  };