import { motion } from 'motion/react';
import { Target, Heart, History, Users } from 'lucide-react';
import React from 'react';

export default function About() {
  return (
    <div className="bg-drpepper-black pt-32 pb-24">
      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-6xl md:text-8xl font-black italic leading-none mb-8 tracking-tighter">
              UNCONVENTIONAL <br /> <span className="text-drpepper-red">SINCE 1885.</span>
            </h1>
            <p className="text-2xl text-white/80 leading-relaxed font-medium mb-8">
              Born in Waco, Texas, Dr Pepper is the oldest major soft drink in the United States. While others were blending into the crowd, we were busy crafting something entirely different. 
            </p>
            <div className="bg-white/5 p-8 border-l-4 border-drpepper-red rounded-r-3xl">
              <p className="italic text-xl text-white/60">
                "We don't fit into a box, and neither should you."
              </p>
            </div>
          </motion.div>
          <div className="relative">
            <div className="absolute -inset-4 bg-drpepper-red/20 blur-3xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1546549032-61a007783d9c?auto=format&fit=crop&q=80&w=800" 
              alt="Vintage Dr Pepper"
              className="rounded-[3rem] relative z-10 w-full"
            />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-drpepper-maroon">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <Pillar 
              icon={<History size={32} />} 
              title="The Legacy" 
              text="138 years of staying true to our unique recipe of 23 flavors." 
            />
            <Pillar 
              icon={<Target size={32} />} 
              title="Identity" 
              text="We celebrate the 'Peppers' of the world—the ones who embrace their quirks." 
            />
            <Pillar 
              icon={<Users size={32} />} 
              title="Community" 
              text="From college football to fan clubs, we unite the unconventional." 
            />
            <Pillar 
              icon={<Heart size={32} />} 
              title="Passion" 
              text="Quality ingredients and meticulous blending in every single can." 
            />
          </div>
        </div>
      </section>

      {/* Big Statement */}
      <section className="py-32 text-center overflow-hidden">
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: true }}
           className="relative inline-block"
        >
          <h2 className="text-[12vw] font-black italic tracking-tighter opacity-10 leading-none">THE UNIQUE ONE</h2>
          <div className="absolute inset-0 flex items-center justify-center">
             <p className="text-4xl md:text-6xl font-black italic uppercase">There's Nothing Like It.</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function Pillar({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="text-center">
      <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-drpepper-red border border-white/5">
        {icon}
      </div>
      <h3 className="text-2xl font-black mb-4 uppercase italic italic tracking-tight">{title}</h3>
      <p className="text-white/60 font-medium leading-relaxed">{text}</p>
    </div>
  );
}
