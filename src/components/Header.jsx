"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
    }
  };

  return (
    <header className="bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* الشعار والقائمة */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-black dark:text-white"
            >
              <svg
                className="h-6 w-6 text-primary"
                fill="currentColor"
                viewBox="0 0 48 48"
              >
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" />
              </svg>
              <h1 className="text-xl font-bold">Footwear</h1>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <a className="nav-link cursor-pointer hover:text-primary" href="/">
                New Arrivals
              </a>

              <a className="nav-link cursor-pointer hover:text-primary" href="/contact">
                Contact Us
              </a>
              <a className="nav-link cursor-pointer hover:text-primary" href="/about">
                About Us
              </a>
              <a className="nav-link cursor-pointer hover:text-primary" href="/checkout">
                checkout
              </a>
            </nav>
          </div>

          {/* البحث والسلة والصورة */}
          <div className="flex items-center gap-4">
            <form
              onSubmit={handleSearch}
              className="hidden sm:flex items-center bg-white dark:bg-black/20 rounded-lg shadow-sm px-3"
            >
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-none outline-none text-sm py-1"
              />
              <button type="submit" className="text-primary font-bold px-2" aria-label="Search">
                🔍
              </button>
            </form>


            {/* زر السلة */}
            <button
              onClick={() => setOpen(!open)}
              className="relative  flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary/90 transition"
              aria-label="Shopping Cart"
            >
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-[2px] rounded-full text-white">
                  {cartCount}


                </span>
              )}
            </button>
            {/* صورة المستخدم */}
            {/* نافذة السلة المنسدلة */}
            {open && (
              <div className="absolute right-4 top-16 w-72 bg-white dark:bg-gray-800 shadow-xl rounded-xl p-4 border border-gray-200 dark:border-gray-700 z-50">
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  🛍️ سلة المشتريات
                </h3>

                {cart.length === 0 ? (
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    لا توجد منتجات في السلة بعد.
                  </p>
                ) : (
                  <ul className="space-y-2 max-h-60 overflow-y-auto">
                    {cart.map((item, index) => (
                      <li key={index} className="flex justify-between text-sm">
                        <span className="text-gray-700 dark:text-gray-200">{item.name}</span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {item.quantity} × {item.price}$
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  href="/checkout"
                  className="block mt-4 bg-primary text-white text-center py-2 rounded-lg hover:bg-primary/90 transition"
                >
                  إتمام الشراء
                </Link>
              </div>
            )}

          </div>
        </div>
      </div>
    </header>
  );
}




