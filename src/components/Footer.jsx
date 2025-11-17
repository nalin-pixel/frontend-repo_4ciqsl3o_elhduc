export default function Footer() {
  return (
    <footer className="mt-16 py-10 border-t border-black/10 bg-white/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-bold text-lg">Bella Vogue</div>
            <p className="text-gray-600 mt-2">Minimal, modern, made for movement.</p>
          </div>
          <div className="space-y-2">
            <div className="font-medium">Help</div>
            <ul className="text-gray-600 space-y-1">
              <li>Shipping</li>
              <li>Returns</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="space-y-2">
            <div className="font-medium">Social</div>
            <ul className="text-gray-600 space-y-1">
              <li>Instagram</li>
              <li>TikTok</li>
              <li>Twitter/X</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Bella Vogue</div>
      </div>
    </footer>
  );
}
