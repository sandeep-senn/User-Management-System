import express from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  searchUserByName,
  getPaginatedUsers
} from '../controllers/user.controller.js';

const router = express.Router();

router.post('/addUser', createUser);
router.get('/users', getAllUsers);
router.get('/user/:id', getUserById);
router.put('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);
router.get('/search', searchUserByName);
router.get('/paginatedUsers', getPaginatedUsers);

export default router;
