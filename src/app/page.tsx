'use client';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log('home');
  }, []);
  return <div className="container mx-auto">Home</div>;
}
