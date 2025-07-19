import React from 'react';

export default function Footer() {
  return (
    <footer className=" py-6 px-4 bg-black ">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 gap-2 sm:gap-0">
        <p className="text-center sm:text-left">
          ©2025, Abhishek. All Rights Reserved.
        </p>
        <p className="text-center sm:text-right">
          Lets Work Together!
        </p>
      </div>
    </footer>
  );
}
