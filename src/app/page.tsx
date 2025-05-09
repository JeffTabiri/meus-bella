"use client";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black font-mono text-3xl text-white">
      <h1 className="animate-typing max-w-fit overflow-hidden text-nowrap">
        Oi
      </h1>
      <h1 className="animate-typing-delay-1 max-w-fit overflow-hidden text-nowrap">
        I am Jeff.
      </h1>
      <h1 className="animate-typing-delay-2 max-w-fit overflow-hidden text-nowrap">
        I make things.
      </h1>
    </div>
  );
}
