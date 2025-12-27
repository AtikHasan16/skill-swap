"use client";

import Link from "next/link";
import React, { useEffect } from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // Log the error using your preferred logging service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      {/* Glitchy Error Header */}
      <h1 className="text-[100px] font-black text-rose-600">ERROR</h1>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white uppercase tracking-widest">
          Something Went Wrong
        </h2>

        {/* Actual Error Message Visualization */}
        <div className="mx-auto max-w-2xl rounded-lg primary-bg border border-red-900/50 p-6">
          <p className="font-mono text-sm text-rose-200 wrap-break-word">
            {error?.message || "An unexpected error occurred"}
          </p>
          {error.digest && (
            <p className="mt-2 text-xs text-rose-600">Digest: {error.digest}</p>
          )}
        </div>

        <p className="max-w-md mx-auto text-gray-400">
          Our team has been notified. Please try again or return home.
        </p>
      </div>

      <div className="mt-12 flex gap-4">
        {/* Reset Button */}
        <button
          onClick={() => reset()}
          className="btn-1 px-8 py-3 text-lg font-semibold transition-transform hover:scale-105 bg-red-600 hover:bg-red-700 text-white border-0"
        >
          Try Again
        </button>

        {/* Optional Home Button */}
        <Link
          href="/"
          className="btn border border-white/20 bg-transparent text-white hover:bg-white/10 px-8 py-3 rounded-lg"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
