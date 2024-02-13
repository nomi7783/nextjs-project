"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function addProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");


  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!title || !description || !category ) {
    if (!title || !description ) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description,category }),
      });

      if (res.ok) {
        router.push("/crud");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };


  
  return (
    <div class="container px-5 py-24 mx-auto">
      <Link
        href={`/crud`}
        class="inline-block mt-4 mb-5 bg-white text-blue-500 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 hover:text-white"
      >
        Back
      </Link>
      <h1 class="text-white text-5xl font-bold text-center mb-10 ">
        Add Product Data
      </h1>

      <form onSubmit={handleSubmit}>
        <div class="flex gap-6 mb-6 w-full flex-wrap my-16 mx-auto px-5">
          <div className="w-full">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
             onChange={(e) => setTitle(e.target.value)}
             value={title}
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div className="w-full">
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <input
             onChange={(e) => setDescription(e.target.value)}
             value={description}
              type="text"
              id="last_name"
              class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
            />
          </div>

          {/* <div className="w-full">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <input
             onChange={(e) => setCategory(e.target.value)}
             value={category}
              type="text"
              class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
            />
          </div> */}

        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
