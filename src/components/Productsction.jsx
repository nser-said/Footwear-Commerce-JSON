"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductsSection({ products = [] }) {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-12 bg-gray-50 dark:bg-black/10" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-right">
          المنتجات الجديدة
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((shoe) => (
            <div
              key={shoe.id}
              onMouseEnter={() => setHovered(shoe.id)}
              onMouseLeave={() => setHovered(null)}
              className={`
                bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700
                transition-all duration-300 ease-in-out cursor-pointer
                ${hovered === shoe.id ? "shadow-xl -translate-y-2" : "shadow-sm hover:shadow-md"}
              `}
            >
              <Link href={`/products/${shoe.id}`} className="block h-full">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
                  <Image
                    src={shoe.image}
                    alt={shoe.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={`
                      object-cover transition-transform duration-500 ease-in-out
                      ${hovered === shoe.id ? "scale-110" : "scale-100"}
                    `}
                  />
                </div>

                <div className="text-right">
                  <h3
                    className={`text-lg font-bold mb-1 transition-colors duration-300 ${hovered === shoe.id ? "text-primary" : "text-gray-900 dark:text-white"
                      }`}
                  >
                    {shoe.name}
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400 font-medium mb-3">
                    {shoe.price} {shoe.currency}
                  </p>

                  <div className="flex items-center justify-end">
                    <span
                      className={`
                        text-sm font-bold transition-colors duration-300
                        ${hovered === shoe.id ? "text-primary" : "text-gray-400"}
                      `}
                    >
                      عرض التفاصيل ←
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
