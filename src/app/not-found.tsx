import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      {/* Glitchy/Glowing 404 Text */}
      <h1 className="text-[150px] font-black leading-none text-transparent bg-clip-text bg-primary">
        404
      </h1>

      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-white uppercase tracking-widest">
          Page Not Found
        </h2>
        <p className="max-w-md mx-auto text-gray-400">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
      </div>

      <div className="mt-12">
        <Link
          href="/"
          className="btn-1 px-8 py-3 text-lg font-semibold transition-transform hover:scale-105"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
