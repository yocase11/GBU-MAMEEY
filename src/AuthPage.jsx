import React, { useState } from "react";

const AuthPage = () => {
  const [mode, setMode] = useState("login"); // or "signup"
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async () => {
    const endpoint = mode === "signup" ? "signup" : "login";
    const res = await fetch(`http://localhost:5000/api/auth/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setMsg(data.message || "Success!");
      if (mode === "login" && data.token) {
        localStorage.setItem("token", data.token);
      }
    } else {
      setMsg(data.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-teal-100 px-6">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          {mode === "login" ? "Login" : "Sign Up"}
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-4 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          {mode === "login" ? "Login" : "Sign Up"}
        </button>

        <p className="text-center mt-4 text-sm text-gray-600">
          {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => {
              setMode(mode === "login" ? "signup" : "login");
              setMsg("");
            }}
            className="text-blue-500 underline"
          >
            {mode === "login" ? "Sign Up" : "Login"}
          </button>
        </p>

        {msg && (
          <p className="text-center text-sm text-green-700 mt-4 font-medium">
            {msg}
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
