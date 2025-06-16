"use client";
import React from 'react';
import axios, { AxiosError } from 'axios';
export default function Home() {
  
  const handleSaveData = async (event) => {
    event.preventDefault();
    const payload = {
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value,
    };
    console.log(payload);

    try {
      const { data } = await axios.post("/api/saveData", payload)
      
      alert(JSON.stringify(data));

    } catch(e) {
      const error = e;
      alert(error.message + ": " + error.response?.data.message);
    } 
  };

  
  return ( 
    <main>
      <h1>Next.JS authentication JWT verify http cookie only</h1>
      <form onSubmit={handleSaveData} className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              id="password"
              name="password"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="p-2 bg-orange-600 text-white w-fit rounded"
          >
            Submit
          </button>
      </form>
    </main>
  ); 
}
