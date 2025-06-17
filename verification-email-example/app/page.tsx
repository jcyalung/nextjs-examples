"use client"

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const { push } = useRouter();
  const [message, setMessage] = useState(false);
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value,
      email: event.currentTarget.email.value,
    };

    try {
      const { data } = await axios.post("/api/request-verification", payload);
      setMessage(true);
      alert(JSON.stringify(data));
      // redirect user to dashboard
    } catch(e) {
      const error = e as AxiosError;
      alert(error.message);
    }
  };
  
  return (
    <main>
      <h1>Verification Email Test</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="border rounded border-black"
              />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              id="password"
              name="password"
              required
              className="border rounded border-black"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              required
              className="border rounded border-black"
            />
          </div>
          <button
            type="submit"
            className="p-2 bg-orange-600 text-white w-fit rounded"
          >
            Submit
          </button>
      </form>
      { message ? <p>Email sent!</p>: null}
    </main>
  );
}