"use client";
import { useEffect,useState } from "react";
import Link from "next/link";


export default function Counter() {

    const [data, setData] = useState([]);
        useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://dummyjson.com/products');
            const jsonData = await response.json();
            setData(jsonData.products);
            console.log(jsonData.products)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
    },[]);

  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <Link
            href={`/`}
            class="inline-block mt-4 mb-5 bg-white text-blue-500 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 hover:text-white"
          >
            Back
          </Link>

          <h1 class="text-white text-5xl font-bold text-center mb-10 ">
            Fetching API Data
          </h1>
          <div class="flex flex-wrap -m-4">
            {data.map((item) => (
              <div class="p-4 md:w-1/4" key={item.id}>
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={item.images[0]}
                    alt="blog"
                  />
                  <div class="p-6 text-white">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 text-white">
                    {item.category}
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3 ">
                      {item.title}
                    </h1>
                    <p class="leading-relaxed mb-3">
                    {item.description}
                    </p>
                    <div class="flex items-center flex-wrap text-gray-900 underline inline-block mt-4 mb-5 bg-white text-blue-500 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 hover:text-white w-44">
                      
                      <Link href={`/products/${item.id}`} className="">
                        Click for Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
