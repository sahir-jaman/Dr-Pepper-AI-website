import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-drpepper-black">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        {/* Background Image / Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-drpepper-black via-drpepper-black/60 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1622483767028-3f66f303ef97?auto=format&fit=crop&q=80&w=2000" 
            alt="Fizzing Soda Background"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-drpepper-red font-black tracking-widest uppercase text-sm mb-4 block"
            >
              Est. 1885 • Waco, Texas
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6 italic tracking-tighter">
              THERE'S NOTHING LIKE A <span className="text-drpepper-red">DR PEPPER.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed font-medium">
              23 flavors. One unique you. Experience the unconventional taste that has been defying norms for over a century.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-drpepper-red text-white px-10 py-5 rounded-full font-black text-lg flex items-center justify-center gap-2 shadow-2xl shadow-drpepper-red/20"
              >
                FIND YOUR FLAVOR
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white/20 text-white px-10 py-5 rounded-full font-black text-lg flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                OUR 23 FLAVORS
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Floating Can Placeholder */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute right-[5%] top-[20%] hidden lg:block z-20"
        >
          <img 
            src="https://images.unsplash.com/photo-1594191630713-3932759e99a8?auto=format&fit=crop&q=80&w=600" 
            alt="Dr Pepper Can" 
            className="w-[450px] drop-shadow-[0_35px_35px_rgba(113,31,37,0.4)]"
          />
        </motion.div>
      </section>

      {/* 23 Flavors Section */}
      <section className="py-24 bg-drpepper-maroon text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black italic mb-8">THE 23 FLAVOR PHENOMENON</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            {[...Array(23)].map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, backgroundColor: '#C8102E' }}
                className="bg-drpepper-black/20 border border-white/10 rounded-xl p-6 font-black text-2xl h-24 flex items-center justify-center cursor-default transition-colors"
              >
                {i + 1}
              </motion.div>
            ))}
            <div className="bg-drpepper-red rounded-xl p-6 font-black text-2xl h-24 flex items-center justify-center col-span-2 md:col-span-1">
              ?
            </div>
          </div>
          <p className="max-w-3xl mx-auto text-xl text-white/90 leading-relaxed mb-10">
            It's not a cola. It's not a root beer. It's an blend of 23 secret flavors that creates its own category. Can you identify them all?
          </p>
          <button className="inline-flex items-center gap-2 text-xl font-bold border-b-2 border-drpepper-red pb-1 hover:text-drpepper-red transition-colors">
            EXPLORE THE SCIENCE OF TASTE <ChevronRight />
          </button>
        </div>
      </section>

      {/* Product Highlight Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-4 uppercase">THE LINEUP</h2>
              <p className="text-xl text-white/60 max-w-lg">Bold variations for every Pepper. From Zero Sugar to indulgent Cream Soda.</p>
            </div>
            <Link to="/products" className="bg-white text-drpepper-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-drpepper-red hover:text-white transition-all">
              VIEW ALL PRODUCTS <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard 
              name="Original Dr Pepper" 
              tagline="The OG"
              image="https://images.unsplash.com/photo-1546549032-61a007783d9c?auto=format&fit=crop&q=80&w=500"
              color="bg-[#711F25]"
            />
            <ProductCard 
              name="Dr Pepper Zero Sugar" 
              tagline="Zero sugar, 100% Bold"
              image="https://images.unsplash.com/photo-1622483767028-3f66f303ef97?auto=format&fit=crop&q=80&w=500"
              color="bg-[#000000]"
            />
            <ProductCard 
              name="Strawberries & Cream" 
              tagline="Smooth & Sweet"
              image="https://images.unsplash.com/photo-1594191630713-3932759e99a8?auto=format&fit=crop&q=80&w=500"
              color="bg-[#ed1c24]"
            />
          </div>
        </div>
      </section>

      {/* Store Locator CTA */}
      <section className="py-24 bg-white text-drpepper-black">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-6">REFILL YOUR RESERVE.</h2>
            <p className="text-2xl mb-10 font-medium">Find the nearest supply of Dr Pepper in seconds.</p>
            <div className="relative max-w-md">
              <input 
                type="text" 
                placeholder="Enter Zip Code" 
                className="w-full pl-6 pr-12 py-5 rounded-full border-2 border-drpepper-black font-bold text-lg focus:ring-2 focus:ring-drpepper-red focus:border-drpepper-red outline-none"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-drpepper-red text-white px-6 rounded-full flex items-center">
                <MapPin />
              </button>
            </div>
          </div>
          <div className="flex-1 w-full h-[400px] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl relative border border-gray-200">
            <div className="absolute inset-0 flex items-center justify-center opacity-20 font-black text-9xl italic pointer-events-none -rotate-12">MAP</div>
            {/* Visual enhancement for map placeholder */}
            <div className="absolute inset-4 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center text-gray-400">
              <MapPin size={48} className="mb-4" />
              <p className="font-bold">Interactive Locator Active</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-drpepper-red relative overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-full opacity-5 pointer-events-none">
          <span className="text-[200px] font-black italic rotate-12 absolute -left-24 -top-24 select-none">LOYALTY</span>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black italic mb-6">JOIN THE PEPPER PACK</h2>
          <p className="text-xl mb-10 font-medium text-white/90">Exclusive drops, early access, and unconventional rewards. Are you in?</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADRESS" 
              className="flex-grow px-8 py-5 rounded-full bg-white text-drpepper-black font-bold outline-none placeholder:text-gray-400"
            />
            <button className="bg-drpepper-black text-white px-12 py-5 rounded-full font-black text-lg hover:bg-white hover:text-drpepper-black transition-all">
              SUBSCRIBE
            </button>
          </div>
          <p className="mt-6 text-sm text-white/60">By signing up, you agree to our Terms and have read our Privacy Policy.</p>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ name, tagline, image, color }: { name: string; tagline: string; image: string; color: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`relative group h-[500px] rounded-[2rem] overflow-hidden flex flex-col justify-end p-8 ${color}`}
    >
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
      </div>
      <div className="relative z-10">
        <span className="text-xs font-black uppercase tracking-widest text-white/60 mb-2 block">{tagline}</span>
        <h3 className="text-3xl font-black italic leading-tight mb-6 uppercase">{name}</h3>
        <button className="w-full bg-white text-drpepper-black py-4 rounded-full font-bold flex items-center justify-center gap-2 transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          LEARN MORE <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}
