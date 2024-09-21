'use client';
import React, { useEffect } from 'react';

function about() {
  useEffect(() => {
    console.log('about');
  }, []);
  return <div className="container mx-auto px-3 sm:px-0">about</div>;
}

export default about;
