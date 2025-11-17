import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || '';
        const res = await fetch(`${base}/api/products/${id}`);
        if (!res.ok) throw new Error('Failed to load product');
        const data = await res.json();
        setProduct(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="min-h-[60vh] grid place-items-center text-sm text-gray-600">Loading…</div>;
  if (error) return <div className="min-h-[60vh] grid place-items-center text-sm text-red-600">{error}</div>;
  if (!product) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-blue-50 text-black">
      <header className="w-full sticky top-0 z-40 backdrop-blur-xl bg-white/60 border-b border-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link to="/" className="text-sm underline underline-offset-4">Back</Link>
          <div className="font-extrabold">Bella Vogue</div>
          <div />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white border border-black/5">
          {product.image && (
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
          )}
        </div>
        <div>
          <div className="uppercase tracking-[0.3em] text-xs text-gray-600 mb-2">Bella Vogue</div>
          <h1 className="text-3xl sm:text-4xl font-extrabold">{product.title}</h1>
          <p className="mt-3 text-gray-700">{product.description}</p>
          <div className="mt-4 text-xl font-bold">${'{'}product.price{'}'}</div>
          {product.sizes?.length > 0 && (
            <div className="mt-6">
              <div className="text-sm font-medium mb-2">Size</div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button key={s} className="px-3 py-1.5 rounded-full bg-white border border-black/10 hover:border-black/40 transition">{s}</button>
                ))}
              </div>
            </div>
          )}
          <div className="mt-6 flex gap-3">
            <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-black text-white font-medium hover:opacity-90 transition-all">Add to cart</button>
            <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white/70 backdrop-blur border border-black/10 hover:bg-white transition-all">Wishlist</button>
          </div>
        </div>
      </main>
    </div>
  );
}
