import Link from "next/link";

export default function Crud() {
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
            <div class="p-4 md:w-1/4">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={"https://cdn.dummyjson.com/product-images/1/1.jpg"}
                  alt="blog"
                />
                <div class="p-6 text-white">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 text-white">
                  smartphones
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3 ">
                  iPhone X
                  </h1>
                  <p class="leading-relaxed mb-3">
                  An apple mobile which is nothing like apple
                  </p>
                  <div>

                  <Link href={"/"} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View Details</Link>
                  <Link href={"/editProduct"} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</Link>
                  <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button> 
                    
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  </div>
  );
}
