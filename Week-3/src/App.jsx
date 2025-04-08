import React, { useState } from "react";
import Button from "./components/Button";
import Form from "./components/Form";
import LoginForm from "./components/LoginForm";
import TextUpdater from "./components/TextUpdater";
import UserCard from "./components/UserCard";

function App() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (name, email) => {
    setUser({ name, email });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser({ name: "", email: "" });
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-700 mb-2">
            Welcome to the App
          </h1>
          <p className="text-gray-600">Your ultimate dashboard experience</p>
        </header>

        {!isLoggedIn ? (
          <div className="bg-white shadow-xl rounded-lg p-8 mx-auto max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Sign In
            </h2>
            <LoginForm onLogin={handleLogin} />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="bg-white shadow-xl rounded-lg p-6 flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Dashboard
                </h2>
                <Button
                  className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition"
                  onClick={handleLogout}
                  label="Logout"
                />
              </div>
              <UserCard name={user.name} email={user.email} />
              <div className="mt-6">
                <TextUpdater />
              </div>
            </div>

            <div className="bg-white shadow-xl rounded-lg p-6 flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Submit Information
              </h2>
              <Form />
            </div>
          </div>
        )}

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2025 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
