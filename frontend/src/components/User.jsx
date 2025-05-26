import { useState, useEffect } from "react";

function User({ addUser, editingUser, updateUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) return alert("All fields are required!");

    if (editingUser) {
      updateUser(editingUser._id, { name, email, phone });
    } else {
      addUser({ name, email, phone });
    }

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="text-center">
<form
  onSubmit={handleSubmit}
  className="max-w-md mx-auto bg-gray-900 p-8 m-10 rounded-xl shadow-full font-sans text-center"
>
  <div>
    <h1 className="font-bold text-2xl text-white mb-10">Enter Your Details!</h1>
  </div>
  <div className="relative mb-10">
    <input
      type="text"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="peer placeholder-transparent w-full border-b-2 border-gray-300 focus:border-indigo-600 outline-none py-3 text-lg font-medium tracking-wide leading-relaxed rounded-full pl-4"
      placeholder="Name"
    />
    <label
      htmlFor="name"
      className="absolute left-0 -top-8 text-green-700 text-base font-semibold tracking-wide transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:-top-8 peer-focus:text-gray-50 peer-focus:text-base px-4"
    >
      Name
    </label>
  </div>

  <div className="relative mb-10">
    <input
      type="email"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="peer placeholder-transparent w-full border-b-2 border-gray-300 focus:border-indigo-600 outline-none py-3 text-lg font-medium tracking-wide leading-relaxed rounded-full pl-4"
      placeholder="Email"
    />
    <label  
      htmlFor="email"
      className="absolute left-0 -top-8 text-green-700 text-base font-semibold tracking-wide transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:-top-8 peer-focus:text-indigo-100 peer-focus:text-base  px-4"
    >
      Email
    </label>
  </div>
  <div className="relative mb-10">
    <input
      type="number"
      id="number"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      className="peer placeholder-transparent w-full border-b-2 border-gray-300 focus:border-indigo-600 outline-none py-3 text-lg font-medium tracking-wide leading-relaxed rounded-full pl-4"
      placeholder="Phone Number"
    />
    <label  
      htmlFor="Phone"
      className="absolute left-0 -top-8 text-green-700 text-base font-semibold tracking-wide transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:-top-8 peer-focus:text-indigo-100 peer-focus:text-base  px-4"
    >
      Phone
    </label>
  </div>

  <button
    type="submit"
    className="w-full bg-indigo-700 text-white py-3 rounded-lg font-semibold tracking-wide text-lg leading-snug hover:bg-indigo-800 transition-shadow shadow-md hover:shadow-lg"
  >
    {editingUser ? "Update" : "Add"} User
  </button>
</form>
  <button
    className="max-w-full p-4 bg-blue-500 text-gray-50 mb-10 text-2xl rounded-full font-bold w-lg px-10"
  >
    See User Details Here!
  </button>
  </div>
  );
}

export default User;
