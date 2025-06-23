import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch(`${BASE_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      alert(`Welcome back, ${data.user.name || "friend"}!`);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
        <h2 className="text-2xl font-bold text-center font-serif">Welcome Back</h2>

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Login
        </button>
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-black underline cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;