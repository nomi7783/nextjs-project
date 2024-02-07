import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const Header = () => {
  return (


<nav class="bg-white shadow-lg p-6">
  <div class="container mx-auto px-6 py-4">
    <div class="flex items-center justify-between ">
      <div class="flex items-center w-full nav" >
        <a class=" text-2xl font-semibold" href="#">
          Your Company
        </a>
        <div class="ml-10  flex gap-8 menu">
           
            <Link class="text-gray-300 " href="/">Home </Link>
            <Link class="text-gray-300 " href="/recipe">Fetch API Data </Link>
        </div>
      </div>
      
    </div>
  </div>
</nav>

  
  )
}

export default Header