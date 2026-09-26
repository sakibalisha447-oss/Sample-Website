import React, { useState, useRef, useEffect } from 'react';
import { Search, User, Heart, ShoppingBag, X } from 'lucide-react';
import { Product, Currency } from '../types';
import { CURRENCIES } from '../data/mockData';

interface HeaderProps {
  currentCurrency: Currency;
  cartCount: number;
  cartTotalINR: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenAuth: () => void;
  onSelectProduct: (product: Product) => void;
  allProducts: Product[];
  brandName?: string;
  onUpdateBrandName?: (name: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCurrency,
  cartCount,
  cartTotalINR,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenAuth,
  onSelectProduct,
  allProducts,
  brandName = 'YOUR COMPANY',
  onUpdateBrandName,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [customNameInput, setCustomNameInput] = useState(brandName);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Filter products matching search
  const filteredProducts = searchQuery.trim() === ''
    ? []
    : allProducts.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.specs.grit.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatPrice = (inr: number) => {
    const { symbol, rate } = CURRENCIES[currentCurrency];
    const converted = inr * rate;
    if (currentCurrency === 'INR') {
      return `${symbol} ${converted.toLocaleString('en-IN')}`;
    }
    return `${symbol}${converted.toFixed(2)}`;
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Left: Brand Logo Lockup */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (onUpdateBrandName) {
                setCustomNameInput(brandName);
                setIsEditModalOpen(true);
              }
            }}
            title="Click to customize company name"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 group-hover:text-purple-700 transition-colors">
                  {brandName}
                </span>
                <span className="h-2 w-2 rounded-full bg-purple-600 animate-pulse" />
              </div>
              <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold -mt-0.5">
                Dental Excellence
              </span>
            </div>
          </a>
        </div>

        {/* Center: Search Bar with Autocomplete Dropdown */}
        <div ref={searchContainerRef} className="flex-1 max-w-xl mx-2 sm:mx-6 relative">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              placeholder="Search products, bur head shapes, procedures (e.g. IPR, 0.2mm, carbide)..."
              className="w-full bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm pl-10 pr-9 py-2.5 rounded-full border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 p-0.5 text-slate-400 hover:text-slate-600 rounded-full"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Instant Search Results Dropdown */}
          {isSearchOpen && searchQuery.trim() !== '' && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="p-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Matching clinical instruments ({filteredProducts.length})</span>
                <span className="text-[11px] text-purple-600 font-medium">Dental Grade ISO 13485</span>
              </div>

              <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        onSelectProduct(p);
                        setIsSearchOpen(false);
                      }}
                      className="p-3 hover:bg-purple-50/70 transition-colors cursor-pointer flex items-center justify-between gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-purple-700 font-semibold uppercase tracking-wider">
                          {p.category.replace('-', ' ')}
                        </div>
                        <div className="text-sm font-medium text-slate-900 truncate">
                          {p.name}
                        </div>
                        <div className="text-xs text-slate-500 truncate">
                          {p.specs.grit} · {p.specs.shank}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-sm font-bold text-slate-900 tabular-nums">
                          {formatPrice(p.priceINR)}
                        </div>
                        {p.discountBadge && (
                          <span className="text-[10px] text-emerald-600 font-semibold">
                            {p.discountBadge}
                          </span>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center text-slate-500 text-xs">
                    No clinical instruments matched "{searchQuery}". Try searching "IPR", "Carbide", or "Zirconia".
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right: User Actions (Login, Wishlist, Cart) */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* Login / Register */}
          <button
            onClick={onOpenAuth}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-purple-700 px-2 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <User className="w-4 h-4 text-slate-500" />
            <span className="hidden lg:inline">Login / Register</span>
          </button>

          {/* Wishlist */}
          <button
            onClick={onOpenWishlist}
            className="relative p-2 text-slate-700 hover:text-purple-700 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1 text-xs sm:text-sm font-medium"
            title="Wishlist"
          >
            <Heart className="w-4 h-4 text-slate-600" />
            <span className="hidden xl:inline">Wishlist</span>
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-800 to-indigo-900 hover:from-purple-900 hover:to-indigo-950 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-full shadow-md shadow-purple-900/20 transition-all hover:shadow-lg active:scale-95 cursor-pointer"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4 text-purple-200" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-400 text-slate-900 text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border-2 border-purple-900">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="tabular-nums font-bold">
              {formatPrice(cartTotalINR)}
            </span>
          </button>
        </div>
      </div>

      {/* Edit Company Name Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1">Customize Company Name</h3>
            <p className="text-xs text-slate-500 mb-4">
              Enter your brand or dental company name to reflect across the entire store:
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (customNameInput.trim() && onUpdateBrandName) {
                  onUpdateBrandName(customNameInput.trim());
                }
                setIsEditModalOpen(false);
              }}
              className="space-y-3"
            >
              <input
                type="text"
                value={customNameInput}
                onChange={(e) => setCustomNameInput(e.target.value)}
                placeholder="e.g. YOUR COMPANY"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:border-purple-600 outline-none"
                autoFocus
              />
              <div className="flex justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs font-bold bg-purple-700 hover:bg-purple-800 text-white rounded-lg"
                >
                  Save Name
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};
