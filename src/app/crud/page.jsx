"use client";
import Link from "next/link";
import Deletebtn from "../../../components/Deletebtn"
import { useRouter } from "next/navigation";

// =====================================
const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function Crud() {
  const {topics} = await getTopics();
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
          CRUD API Data
        </h1>
        <Link
          href={`/addProduct`}
          class="block text-center w-fit inline-block mt-4 mb-5 bg-white text-blue-500 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 hover:text-white"
        >
          + Add Product
        </Link>

        <div class="flex flex-wrap -m-4">


        {topics.map((t) => (
            <div class="p-4 md:w-1/4">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={"https://cdn.dummyjson.com/product-images/1/1.jpg"}
                  alt="blog"
                />
                <div class="p-6 text-white">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 text-white">
                  {t.category}
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3 ">
                  {t.title}
                  </h1>
                  <p class="leading-relaxed mb-3">
                  {t.description}
                  </p>
                  <div>
                  <Link href={`/editProduct/${t._id}`} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</Link>
                  <Deletebtn id={t._id}/>
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
