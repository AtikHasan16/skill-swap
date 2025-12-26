"use client";

import React from "react";

const BackgroundGradient = () => {
  return (
    <div className="fixed inset-0 z-[-2] h-full w-full overflow-hidden bg-[#0a0a0a]">
      {/* Left Glow */}
      <div className="absolute -top-30 -left-[250px] h-[400px] w-[400px] rounded-full bg-cyan-700 blur-[150px]" />

      {/* Right Glow */}
      <div className="absolute -bottom-30 -right-[150px]  h-[400px] w-[400px] rounded-full bg-cyan-700 blur-[150px] " />
    </div>
  );
};

export default BackgroundGradient;
