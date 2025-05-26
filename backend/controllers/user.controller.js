import User from "../model/user.model.js";

// ➕ Create a new user
export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}


// 📥 Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users", message: err.message });
  }
};

// 🔍 Get single user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(404).json({ error: "User not found", message: err.message });
  }
};

// ✏️ Update a user
export const updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "User updated successfully" });
  } catch (err) {
    res.status(400).json({ error: "Update failed", message: err.message });
  }
};

// ❌ Delete a user
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: "Delete failed", message: err.message });
  }
};

// 🔍 Search user by name
export const searchUserByName = async (req, res) => {
  try {
    const { query } = req.query;   // name -> query
    const users = await User.find({ name: new RegExp(query, "i") });
    res.json(users);
  } catch (err) {
    res.status(400).json({ error: "Search failed", message: err.message });
  }
};

// 📄 Pagination
export const getPaginatedUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const users = await User.find().skip(skip).limit(limit);
    const total = await User.countDocuments();

    res.json({
      users,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (err) {
    res.status(400).json({ error: "Pagination failed", message: err.message });
  }
};
