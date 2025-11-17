import { Menu, ShoppingBag, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-black/5 transition-colors">
              <Menu className="h-5 w-5" />
            </button>
            <span className="text-xl font-extrabold tracking-tight">Bella Vogue</span>
          </div>

          <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-6">
            <div className="relative group w-full">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search drops, scents, tees..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-black/5 focus:bg-white/60 border border-transparent focus:border-black/10 outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-black/5 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-black/5 transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-0.5 -right-0.5 h-4 w-4 text-[10px] leading-4 text-white bg-black rounded-full grid place-items-center">2</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
