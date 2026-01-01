"use client";

import ErrorPage from "@/components/ErrorPage";
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

  return <ErrorPage error={error} reset={reset} />;
};

export default Error;
