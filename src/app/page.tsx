'use client';
import { useEffect } from 'react';
import Navbar from './components/Navbar';

export default function Home() {
  useEffect(() => {
    document.title = 'Atthawut';
  }, []);
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1530878902700-5ad4f9e4c318?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="absolute h-screen w-full filter grayscale blur-0 contrast-50 object-cover"
      />
      <Navbar bg={false} />
      <div className="container mx-auto px-3 sm:px-0 relative h-screen">
        {/* <div className="absolute bottom-20 left-0 uppercase flex flex-col items-end">
          <h1 className="md:text-8xl ">Atthawut</h1>
          <h1 className="md:text-8xl ">Smith</h1>
        </div> */}
        <div className="absolute top-20 w-3/4 translate-x-10 md:w-3/4 md:translate-x-10 lg:translate-x-28 flex flex-col items-start">
          <h3 className="text-2xl lg:text-3xl">Hi, I'm</h3>
          <h1 className="text-4xl sm:text-7xl lg:text-8xl">Atthawut Smith.</h1>
          <h2 className="text-3xl sm:text-3xl lg:text-4xl">I web developer.</h2>
          <p>
            I frontend developer, react library and learn backend expressjs
            prisma for Fullstack Webapplication, and i learn Flutter for Mobile
            App.
          </p>
        </div>
      </div>
    </div>
  );
}
