import React from "react";

const Skeleton = () => {
  return (
    <div role="status" className="w-full max-w-sm animate-pulse p-1">
      <div className="flex flex-col items-center bg-gray-300 rounded sm:w-80 dark:bg-gray-700 h-28">
        <svg
          className="w-20 h-20 text-gray-400 dark:text-gray-700 relative bottom-[-60px] z-10"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
      </div>
      <div className="w-full mt-1 py-5 px-1">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Skeleton;
