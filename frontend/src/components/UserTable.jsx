import { motion } from "framer-motion";

function UserTable({ users, setEditingUser, deleteUser }) {
  return (
    <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-900 bg-gradient-to-br from-gray-300 via-slate-100 to-gray-300 p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center tracking-wide">
        📋 User List
      </h2>

      <table className="min-w-full divide-y divide-gray-300 text-sm sm:text-base">
        <thead className="bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-t-xl">
          <tr>
            <th className="py-4 px-6 text-left font-semibold tracking-wide uppercase">Name</th>
            <th className="py-4 px-6 text-left font-semibold tracking-wide uppercase">Email</th>
            <th className="py-4 px-6 text-left font-semibold tracking-wide uppercase">Phone</th>
            <th className="py-4 px-6 text-left font-semibold tracking-wide uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user, index) => (
            <motion.tr
              key={user._id}
              className="hover:bg-blue-50 transition-all duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <td className="py-4 px-6 font-medium text-gray-800">{user.name}</td>
              <td className="py-4 px-6 text-gray-600">{user.email}</td>
              <td className="py-4 px-6 text-gray-600">{user.phone}</td>
              <td className="py-4 px-6">
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setEditingUser(user)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
                    aria-label={`Edit ${user.name}`}
                  >
                    ✏️ Edit
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => deleteUser(user._id)}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
                    aria-label={`Delete ${user.name}`}
                  >
                    🗑️ Delete
                  </motion.button>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
