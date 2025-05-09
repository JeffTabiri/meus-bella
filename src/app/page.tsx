"use client";
import { useState } from "react";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-black font-mono text-3xl text-white">
      <div className="bg-oceanic-orange an md:text-5xl">
        <h1 className="text-accent-magenta animate-typing max-w-fit overflow-hidden text-nowrap">
          Oi
        </h1>
        <h1 className="text-accent-yellow animate-typing max-w-fit overflow-hidden text-nowrap">
          I am Jeff.
        </h1>
        <h1 className="animate-typing max-w-fit overflow-hidden text-nowrap text-white">
          I make things.{" "}
        </h1>
      </div>
    </div>
  );
}
