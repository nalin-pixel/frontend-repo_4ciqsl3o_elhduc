import { useEffect, useRef } from 'react';

export default function Marquee() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.animate(
      [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-50%)' },
      ],
      {
        duration: 20000,
        iterations: Infinity,
        easing: 'linear',
      }
    );
  }, []);

  const items = ['BELLA VOGUE', 'CLEAN LINES', 'IRIDESCENT', 'GENDERLESS', 'SUSTAINABLE', 'LIMITED DROP'];

  return (
    <section className="py-8 select-none">
      <div className="overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap will-change-transform" ref={ref}>
          {[...items, ...items].map((t, i) => (
            <span key={i} className="text-sm tracking-[0.3em] uppercase text-gray-500">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
