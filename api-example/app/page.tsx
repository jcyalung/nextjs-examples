"use client";
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [apiData, setApiData] = useState<any[]>([]);
  const [show, setShow] = useState(false);
  
  const handleClick = async (option : number) => {
    if(option === 0) {
      const { data } = await axios.get('https://api.sampleapis.com/beers/ale');
      console.log(data);
      setApiData(data);
    }
    else if(option === 1) {
      const { data } = await axios.get('http://localhost:3000/api/getData');
      console.log(data);
      setApiData(data);
    }
    else if(option === 2) {
      const { data } = await axios.post('http://localhost:3000/api/getData', {word:"hello!"});
      console.log(data);
      setApiData(data);
    };
    setShow(true);
  }
  return (
    <main>
      <h1 className='font-bold'>API Example</h1>
          <button
            onClick={() => {handleClick(0)}}
            type="submit"
            className="p-2 bg-orange-600 text-white w-fit rounded cursor-pointer"
          >
            Click me to test an API
          </button>
          <button
            onClick={() => {handleClick(1)}}
            type="submit"
            className="p-2 bg-orange-600 text-white w-fit rounded cursor-pointer"
          >
            Click me to test YOUR API
          </button>
          <button
            onClick={() => {handleClick(2)}}
            type="submit"
            className="p-2 bg-orange-600 text-white w-fit rounded cursor-pointer"
          >
            Click me to test the POST request
          </button>
        <div>
          {show === true ? 
            <>
            <ul>
              {apiData.slice(0,5).map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
            </ul>
            </>
          : null}
        </div>
    </main>
  );
}
