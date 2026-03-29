import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-black bg-gradient-to-r from-yellow-300 to-orange-200 bg-clip-text text-transparent">
            🛒 STOCK DEALS
          </Link>
          <Link to="/cart" className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-xl hover:bg-white/30">
            <ShoppingCart size={24} />
            <span className="font-bold">Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
