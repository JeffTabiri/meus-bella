export default function About() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black font-mono text-3xl text-white">
      <div className="bg-oceanic-orange p-10 md:text-5xl">
        <h1 className="text-white">Check out some of my work...</h1>
      </div>

      <div className="mx-10 grid grid-cols-4 gap-10 bg-white md:mx-40">
        <div>
          <h1>Tailored Jeans</h1>
          <p className="price">$19.99</p>
          <p>Some text about the jeans..</p>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
}
