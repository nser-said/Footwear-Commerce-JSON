export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black/20 mt-12 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="flex items-center gap-2 text-black dark:text-white group">
              <svg
                className="h-8 w-8 text-primary group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 48 48"
              >
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" />
              </svg>
              <h1 className="text-2xl font-bold tracking-tighter">Footwear</h1>
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 max-w-xs mx-auto md:mx-0 leading-relaxed">
              Your destination for premium quality shoes and sneakers. Elevate your style with our exclusive collection.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Men</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Women</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Kids</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Newsletter / Social (Optional placeholder) */}
          <div>
            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-6">Stay Connected</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-bold">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Footwear. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
