'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

function Navbar() {
  useEffect(() => {
    console.log('navbar');
  }, []);
  return (
    <>
      <div className="container mx-auto flex justify-between py-5">
        <div className="">
          <Link href="/">Home</Link>
        </div>
        <div>
          <ul className="flex gap-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/project">Project</Link>
            </li>
            <li>
              <Link href="/about">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
