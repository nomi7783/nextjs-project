"use client";
import { useEffect,useState } from "react";
import Link from 'next/link';


const Page = ({params}) => {

  const[data,setData] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${params.details}`);
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    },[]);


  return (
    <div class="container mx-auto py-8 px-4 mt-10">
      <Link
        href={`/products`}
        class="inline-block mt-4 mb-5 bg-white text-blue-500 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 hover:text-white"
      >
        Back
      </Link>

      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2">
          {data && data.images && data.images[2] && (
            <img
              src={data.images[2]}
              alt="Product Image"
              className="w-full h-auto rounded-lg"
            />
          )}

          {/* <img src={data.images[0]} alt="Product Image" class="w-full h-auto rounded-lg"/> */}
        </div>

        <div class="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h2 class="text-2xl font-bold mb-2 text-white">{data.title}</h2>
          <p class="text-gray-700 mb-2 text-white">{data.description}</p>
          <div class="text-lg font-bold mb-2">
            Price: <span className="text-white">{data.price}$</span>
          </div>
          <div class="text-lg font-bold mb-2">
            Brand: <span className="text-white">{data.brand}</span>
          </div>

          <div class="flex items-center font-bold mb-4">
            Rating: &nbsp;
            <span class="text-yellow-500"> &#9733;</span>
            <span class="text-gray-700 ml-2 text-white">{data.rating}</span>
          </div>

          <button class="bg-blue-600 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page
