import { motion } from 'motion/react';
import { Filter, ShoppingCart, Info } from 'lucide-react';
import { useState } from 'react';

const FLAVORS = [
  { id: 1, name: "Dr Pepper Classic", desc: "The original 23 flavors since 1885.", type: "Original", color: "bg-drpepper-maroon" },
  { id: 2, name: "Diet Dr Pepper", desc: "Classic taste, zero calories.", type: "Diet", color: "bg-gray-400" },
  { id: 3, name: "Dr Pepper Zero Sugar", desc: "Zero calories, bold Dr Pepper taste.", type: "Zero Sugar", color: "bg-black" },
  { id: 4, name: "Dr Pepper Cherry", desc: "A smooth cherry twist on the original.", type: "Cherry", color: "bg-red-800" },
  { id: 5, name: "Dr Pepper Strawberries & Cream", desc: "Strawberry sweetness meets creamy vanilla.", type: "Limited", color: "bg-red-500" },
  { id: 6, name: "Dr Pepper Cream Soda", desc: "Indulgently smooth and sweet.", type: "Cream", color: "bg-amber-800" },
];

export default function Products() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Original", "Zero Sugar", "Cherry", "Limited"];

  const filtered = activeFilter === "All" ? FLAVORS : FLAVORS.filter(f => f.type === activeFilter);

  return (
    <div className="pt-32 pb-24 px-4 bg-drpepper-black">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black italic tracking-tighter mb-6 underline decoration-drpepper-red"
          >
            THE FULL LINEUP.
          </motion.h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            From the original recipe to bold new experiments, discover the collection that refuses to blend in.
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-8 py-3 rounded-full font-black uppercase text-sm transition-all ${
                activeFilter === f 
                ? 'bg-drpepper-red text-white' 
                : 'bg-white/5 text-white/60 hover:bg-white/10'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filtered.map(product => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-[3rem] p-10 flex flex-col"
            >
              <div className={`h-64 rounded-[2rem] mb-8 relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-white/10 to-transparent`}>
                <div className={`absolute inset-0 opacity-20 ${product.color}`} />
                <motion.div
                  className="w-40 h-40 bg-white/10 rounded-full blur-3xl absolute"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <img 
                  src="https://images.unsplash.com/photo-1546549032-61a007783d9c?auto=format&fit=crop&q=80&w=400" 
                  alt={product.name}
                  className="h-full object-contain relative z-10 p-8"
                />
              </div>
              <div className="flex-grow">
                <span className="text-drpepper-red font-black uppercase text-xs tracking-widest mb-2 block">{product.type}</span>
                <h3 className="text-3xl font-black italic mb-4 uppercase">{product.name}</h3>
                <p className="text-white/60 font-medium mb-8 leading-relaxed">
                  {product.desc}
                </p>
              </div>
              <div className="flex gap-4">
                <button className="flex-grow bg-drpepper-red text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-white hover:text-drpepper-black transition-all">
                  <ShoppingCart size={18} />
                  BUY NOW
                </button>
                <button className="p-4 bg-white/5 rounded-2xl text-white hover:bg-white hover:text-drpepper-black transition-all">
                  <Info size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
