'use client';
import React, { useEffect } from 'react';

function about() {
  useEffect(() => {
    console.log('about');
  }, []);
  return <div className="container mx-auto">about</div>;
}

export default about;
