import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingBag, MapPin, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-drpepper-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-3xl font-black tracking-tighter text-drpepper-red italic">DR PEPPER</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">Our Story</NavLink>
            <NavLink to="/find">
              <span className="flex items-center gap-1">
                <MapPin size={18} />
                Find a Pepper
              </span>
            </NavLink>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-drpepper-red hover:bg-[#E31837] text-white px-6 py-2 rounded-full font-bold transition-colors flex items-center gap-2"
            >
              <ShoppingBag size={18} />
              Shop Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-drpepper-black border-b border-white/10 px-4 py-8 space-y-6"
        >
          <MobileNavLink to="/products" onClick={() => setIsOpen(false)}>Products</MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>Our Story</MobileNavLink>
          <MobileNavLink to="/find" onClick={() => setIsOpen(false)}>Find a Pepper</MobileNavLink>
          <button className="w-full bg-drpepper-red text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2">
            <ShoppingBag size={20} />
            Shop Now
          </button>
        </motion.div>
      )}
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-white/70 hover:text-white font-medium transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-drpepper-red transition-all group-hover:w-full" />
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block text-2xl font-bold text-white hover:text-drpepper-red transition-colors"
    >
      {children}
    </Link>
  );
}
