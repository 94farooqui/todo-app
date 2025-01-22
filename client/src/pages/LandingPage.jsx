// src/pages/LandingPage.jsx

import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col">
      {/* Header */}
      <header className="p-5 flex justify-between items-center bg-opacity-20 bg-black">
        <h1 className="text-2xl font-bold">TaskMaster</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#features" className="hover:text-gray-200">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center text-center p-10">
        <div>
          <h2 className="text-5xl font-extrabold mb-6">
            Organize Your Tasks Effortlessly
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            TaskMaster is your ultimate productivity tool. Plan, track, and
            complete tasks with ease.
          </p>
          <div>
            <a
              href="/signup"
              className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-200"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="ml-4 px-6 py-3 border border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="p-10 bg-white text-gray-800">
        <h3 className="text-3xl font-bold text-center mb-8">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg text-center">
            <h4 className="font-bold text-xl mb-4">Easy to Use</h4>
            <p>
              Quickly add, edit, and organize tasks with an intuitive interface.
            </p>
          </div>
          <div className="p-6 border rounded-lg text-center">
            <h4 className="font-bold text-xl mb-4">Customizable</h4>
            <p>Set priorities, deadlines, and tags to manage tasks your way.</p>
          </div>
          <div className="p-6 border rounded-lg text-center">
            <h4 className="font-bold text-xl mb-4">Cross-Platform</h4>
            <p>Access your tasks on any device, anytime, anywhere.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="p-5 bg-black text-center">
        <p>
          &copy; {new Date().getFullYear()} TaskMaster. All rights reserved.
        </p>
        <p>
          <a href="mailto:support@taskmaster.com" className="hover:underline">
            support@taskmaster.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
