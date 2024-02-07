import Image from "next/image";
import Link from 'next/link';
import Header from "../../components/Header";

export default function Home() {
  return (
    <main>
     
      <section class="bg-blue-500 text-white py-28 px-6 text-center h-screen flex justify-center items-center flex-col">
        <h1 class="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p class="text-lg">Discover amazing features and services.</p>
        <Link
          href={"/recipe"}
          class="inline-block mt-4 bg-white text-blue-500 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 hover:text-white"
        >
          Fetching API Data
        </Link>
      </section>
      
    </main>
  );
}

