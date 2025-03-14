import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import axios from 'axios';

export default function Index({ users, flash }) {
  const [userList, setUserList] = useState(users);
  const [message, setMessage] = useState(flash?.message || '');

  const deleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`/users/${id}`);
        setUserList(userList.filter(user => user.id !== id));
        setMessage('User deleted successfully.');
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Users</h1>
              <Link
                href="/users/create"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Add User
              </Link>
            </div>

            {message && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                {message}
              </div>
            )}

            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {userList.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.created_at}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link
                        href={`/users/${user.id}/edit`}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}