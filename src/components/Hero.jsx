import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[90vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/10 to-white/80" />

      <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <p className="uppercase tracking-[0.3em] text-xs text-gray-600 mb-3">Bella Vogue</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            The Fragrance of Creativity
          </h1>
          <p className="mt-4 text-gray-700 max-w-xl mx-auto lg:mx-0">
            Minimal silhouettes. Iridescent energy. Essentials crafted for the Gen Z aesthetic.
            Thoughtfully designed pieces that flow from day to night.
          </p>
          <div className="mt-6 flex items-center justify-center lg:justify-start gap-3">
            <button className="pointer-events-auto inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-black text-white font-medium hover:opacity-90 transition-all">Shop New Drop</button>
            <button className="pointer-events-auto inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white/70 backdrop-blur border border-black/10 hover:bg-white transition-all">Lookbook</button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hidden lg:block"
        >
          <div className="rounded-2xl p-6 bg-white/40 backdrop-blur border border-white/50 shadow-sm">
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { label: 'Vegan', value: '100%' },
                { label: 'Recycled', value: '70%' },
                { label: 'Made Local', value: 'EU' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-white/60 border border-white/50">
                  <div className="text-xs text-gray-500">{stat.label}</div>
                  <div className="text-lg font-semibold">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
