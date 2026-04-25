import { motion } from 'motion/react';
import { Search, MapPin, Navigation, Phone, Clock } from 'lucide-react';

const STORES = [
  { id: 1, name: "Target Store #283", address: "123 Main St, Los Angeles, CA", dist: "0.8 miles", status: "In Stock" },
  { id: 2, name: "Whole Foods Market", address: "456 Sunset Blvd, Los Angeles, CA", dist: "1.2 miles", status: "Limited" },
  { id: 3, name: "CVS Pharmacy", address: "789 Hollywood Blvd, Los Angeles, CA", dist: "1.5 miles", status: "In Stock" },
  { id: 4, name: "7-Eleven", address: "101 Ocean Ave, Santa Monica, CA", dist: "2.4 miles", status: "In Stock" },
];

export default function StoreLocator() {
  return (
    <div className="bg-drpepper-black min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-12">
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-4">FIND YOUR <span className="text-drpepper-red">RESERVE.</span></h1>
          <p className="text-xl text-white/60 font-medium">Never run low on the 23 flavors. Locate the nearest stockist instantly.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[700px]">
          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col space-y-4 h-full">
            <div className="relative">
              <input 
                type="text" 
                placeholder="ZIP CODE OR CITY" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-5 font-bold uppercase tracking-wider focus:border-drpepper-red outline-none transition-colors"
                defaultValue="90210"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            </div>

            <div className="flex-grow overflow-y-auto space-y-4 pr-2 custom-scrollbar">
              {STORES.map(store => (
                <motion.div 
                  key={store.id}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                  className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-black italic text-xl uppercase tracking-tight group-hover:text-drpepper-red transition-colors">{store.name}</h3>
                    <span className="text-xs font-black text-drpepper-red">{store.dist}</span>
                  </div>
                  <p className="text-sm text-white/40 mb-4">{store.address}</p>
                  <div className="flex justify-between items-center">
                    <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-full ${store.status === 'In Stock' ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'}`}>
                      {store.status}
                    </span>
                    <div className="flex gap-2">
                       <button className="p-2 hover:text-drpepper-red transition-colors"><Phone size={16}/></button>
                       <button className="p-2 hover:text-drpepper-red transition-colors"><Navigation size={16}/></button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map View */}
          <div className="lg:col-span-8 bg-white/5 rounded-[3rem] border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <MapPin size={80} className="text-drpepper-red/20" />
            </div>
            <div className="absolute bottom-8 right-8 bg-drpepper-black/80 backdrop-blur-md p-6 rounded-3xl border border-white/10 max-w-xs shadow-2xl">
               <h4 className="font-black italic text-drpepper-red uppercase text-sm mb-2">NOW SEARCHING</h4>
               <p className="text-xs text-white/60 mb-4 font-medium leading-relaxed">
                 Updating real-time inventory for 90210. Stores with confirmed stock are highlighted.
               </p>
               <button className="w-full bg-drpepper-red text-white py-3 rounded-xl text-xs font-black uppercase hover:bg-white hover:text-drpepper-black transition-all">
                 REFRESH INVENTORY
               </button>
            </div>
            {/* Visual map markers placeholder */}
            <div className="absolute top-1/4 left-1/3 p-2 bg-drpepper-red rounded-full animate-bounce"><MapPin size={24} className="text-white"/></div>
            <div className="absolute top-1/2 left-1/2 p-2 bg-drpepper-red rounded-full animate-pulse"><MapPin size={24} className="text-white"/></div>
            <div className="absolute top-1/3 left-2/3 p-2 bg-drpepper-red rounded-full"><MapPin size={24} className="text-white"/></div>
          </div>
        </div>
      </div>
    </div>
  );
}
