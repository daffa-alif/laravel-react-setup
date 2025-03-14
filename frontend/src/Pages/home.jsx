import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Welcome to Laravel-React with Inertia.js</h1>
        <p className="text-gray-700 mb-4">
          This application is built with Laravel 12 for the backend, React for the frontend, and Inertia.js for seamless SPA-like navigation.
        </p>
        <div className="mt-8 flex space-x-4">
          <a href="/users" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors">
            User Management
          </a>
          <a href="https://inertiajs.com/" target="_blank" className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}