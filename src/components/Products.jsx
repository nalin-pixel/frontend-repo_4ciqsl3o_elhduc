import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Iridescent Tee',
    price: '$48',
    color: 'Pearl',
    image: 'https://images.unsplash.com/photo-1666374792290-665a1d115a40?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJcmlkZXNjZW50JTIwVGVlfGVufDB8MHx8fDE3NjMzOTE5OTB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'New',
  },
  {
    id: 2,
    name: 'Glass Bottle Hoodie',
    price: '$92',
    color: 'Lavender',
    image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1400&auto=format&fit=crop',
    tag: 'Bestseller',
  },
  {
    id: 3,
    name: 'Studio Sweatpants',
    price: '$78',
    color: 'Onyx',
    image: 'https://images.unsplash.com/photo-1693250707470-687a2cf908b0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHVkaW8lMjBTd2VhdHBhbnRzfGVufDB8MHx8fDE3NjMzOTE5OTB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Minimal Tank',
    price: '$36',
    color: 'Cloud',
    image: 'https://images.unsplash.com/photo-1755335853548-52622a24b11c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pbWFsJTIwVGFua3xlbnwwfDB8fHwxNzYzMzkxOTkwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function Products() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Featured</h2>
            <p className="text-gray-600 text-sm">Curated pieces designed to mix effortlessly</p>
          </div>
          <button className="text-sm underline underline-offset-4 hover:opacity-70">View all</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-2xl overflow-hidden bg-white border border-black/5"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
              <div className="p-3 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">{p.name}</div>
                  <div className="text-xs text-gray-500">{p.color}</div>
                </div>
                <div className="text-sm font-semibold">{p.price}</div>
              </div>
              {p.tag && (
                <span className="absolute left-3 top-3 text-[10px] uppercase tracking-wider bg-white/80 backdrop-blur px-2 py-1 rounded-full border border-black/5">{p.tag}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
