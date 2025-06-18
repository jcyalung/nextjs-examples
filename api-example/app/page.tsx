"use client";
import { useState } from 'react';
import axios from 'axios';
type Beer = {
  id: number;
  name: string;
  price?: string;
  rating?: {
    average: number;
    reviews: number;
  };
  image?: string;
};

export default function Home() {
  const [apiData, setApiData] = useState<Beer[]>([]);
  const [show, setShow] = useState(false);
  
  const handleClick = async (option : number) => {
    if(option === 0) {
      const { data } = await axios.get('https://api.sampleapis.com/beers/ale');
      console.log(data);
      setApiData(data);
    }
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
