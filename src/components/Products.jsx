import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || '';
        const res = await fetch(`${base}/api/products`);
        if (!res.ok) throw new Error('Failed to load products');
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

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

        {loading && (
          <div className="text-sm text-gray-600">Loading products…</div>
        )}
        {error && (
          <div className="text-sm text-red-600">{error}</div>
        )}

        {!loading && !error && (
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
                <Link to={`/product/${p.id}`} className="block">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">{p.title}</div>
                      {p.color && <div className="text-xs text-gray-500">{p.color}</div>}
                    </div>
                    <div className="text-sm font-semibold">${'{'}p.price{'}'}</div>
                  </div>
                  {p.tag && (
                    <span className="absolute left-3 top-3 text-[10px] uppercase tracking-wider bg-white/80 backdrop-blur px-2 py-1 rounded-full border border-black/5">{p.tag}</span>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
