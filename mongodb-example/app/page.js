"use client";
import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
export default function Home() {
  const [allData, setAllData] = useState([]);
  const [showAllData, setShowAllData] = useState(false);

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

  const fetchAllData = async () => {
    const response = await fetch('/api/getAllData');
    const resJson = await response.json();
    if (response.ok) {
      const data = resJson.data;
      setAllData(data);
      setShowAllData(true);
      console.log(allData);
    } else {
      alert('Failed');
    }
  }
  
  return ( 
    <main>
      <h1>Saving data through mongodb</h1>
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
      <button
        onClick={fetchAllData}
        className="p-2 bg-orange-600 text-white w-fit rounded"
      >
        Get All Data
      </button>
      {showAllData && (
        <div>
          <h2>All Data</h2>
          <ul>
              <li key='0'>username, password</li>
            {allData.map((item) => (
              <li key={item._id}>{item.username},  {item.password}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  ); 
}
