import React from 'react';
import { useForm } from '@inertiajs/react';

export default function Edit({ user }) {
  const { data, setData, put, errors, processing } = useForm({
    name: user.name,
    email: user.email,
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(`/users/${user.id}`);
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit User</h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`shadow appearance-none border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                />
                {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`shadow appearance-none border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                />
                {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password (leave blank to keep current)
                </label>
                <input
                  type="password"
                  id="password"
                  className={`shadow appearance-none border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  value={data.password}
                  onChange={(e) => setData('password', e.target.value)}
                />
                {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  disabled={processing}
                >
                  {processing ? 'Updating...' : 'Update User'}
                </button>
                
                  href="/users"
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                >
                  Cancel
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}