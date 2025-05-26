import { useState, useEffect } from "react";
import axios from "axios";
import User from './components/User';
import UserTable from "./components/UserTable";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchUsers();
    }, []);

const fetchUsers = async (query = "") => {
    try {
        const url = query
            ? `https://user-management-system-nycx.onrender.com/api/search?query=${query}`
            : "https://user-management-system-nycx.onrender.com/api/users";
        const res = await axios.get(url);
        setUsers(res.data);
    } catch (err) {
        toast.error(err.response?.data?.message || "Failed to fetch users");
        console.error("Fetch Users Error:", err);
    }
};

const addUser = async (userData) => {
    try {
        await axios.post("https://user-management-system-nycx.onrender.com/api/addUser", userData);
        toast.success("User added successfully!");
        fetchUsers(searchQuery);
    } catch (error) {
        toast.error(error.response?.data?.message || "❌ Failed to add user");
    }
};

const updateUser = async (id, updatedData) => {
    try {
        await axios.put(`https://user-management-system-nycx.onrender.com/api/updateUser/${id}`, updatedData);
        toast.success("User updated successfully!");
        setEditingUser(null);
        fetchUsers(searchQuery);
    } catch (error) {
        toast.error(error.response?.data?.message || "❌ Failed to update user");
    }
};

const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
        try {
            await axios.delete(`https://user-management-system-nycx.onrender.com/api/deleteUser/${id}`);
            toast.success("User deleted successfully!");
            fetchUsers(searchQuery);
        } catch (error) {
            toast.error(error.response?.data?.message || "❌ Failed to delete user");
        }
    }
};


    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        fetchUsers(query);
    };

    return (
        <div className="max-w-4xl mx-auto p-5">
            <h1 className="font-bold text-3xl text-center mb-10">User Management System (CRUD)</h1>
            <User addUser={addUser} editingUser={editingUser} updateUser={updateUser} />
            {/* Search input */}
            <div className="mb-6 text-center">
                <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="border border-gray-300 rounded-lg p-2 w-full max-w-md mx-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <UserTable users={users} setEditingUser={setEditingUser} deleteUser={deleteUser} />

            {/* Toast container */}
           <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={true}
  closeOnClick
  pauseOnHover
  draggable
  theme="colored"
/>

        </div>
    );
}

export default App;
