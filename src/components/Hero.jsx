import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] md:h-[80vh] flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
          alt="Footwear Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-black/50" /> {/* Overlay for better text readability and contrast */}
      <div className="relative max-w-2xl text-center text-white bg-black/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-2xl border border-white/10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
          Step Into Style
        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl text-white font-medium max-w-lg mx-auto">
          Discover the latest trends in footwear with our curated collection.
        </p>
        <button
          className="mt-8 px-8 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-primary/50"
          aria-label="Shop Now - Browse our footwear collection"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}
