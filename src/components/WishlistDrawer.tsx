import React from 'react';
import { Product, Currency } from '../types';
import { CURRENCIES } from '../data/mockData';
import { X, Trash2, ShoppingCart, Heart, ArrowRight } from 'lucide-react';
import { ProductImageRender } from './BurVisual';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  currentCurrency: Currency;
  onRemoveWishlist: (id: string) => void;
  onAddToCart: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  currentCurrency,
  onRemoveWishlist,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  const { symbol, rate } = CURRENCIES[currentCurrency];

  const formatPrice = (inr: number) => {
    const converted = inr * rate;
    if (currentCurrency === 'INR') {
      return `${symbol} ${converted.toLocaleString('en-IN')}`;
    }
    return `${symbol}${converted.toFixed(2)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Saved Dental Instruments
              </h2>
              <span className="text-xs bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded-full">
                {wishlistProducts.length}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List or Empty State */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-slate-100">
            {wishlistProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Your wishlist is empty</h3>
                <p className="text-xs text-slate-500 max-w-xs">
                  Save clinical kits and burs for quick operatory reordering or clinical team review.
                </p>
                <button
                  onClick={onClose}
                  className="bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold px-6 py-2.5 rounded-full transition-colors"
                >
                  Browse Best Sellers
                </button>
              </div>
            ) : (
              wishlistProducts.map((p) => (
                <div key={p.id} className="py-4 flex gap-3 group">
                  <div className="w-18 h-18 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center p-1">
                    <ProductImageRender type={p.imageType} className="h-full" />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-900 line-clamp-1">
                          {p.name}
                        </h4>
                        <button
                          onClick={() => onRemoveWishlist(p.id)}
                          className="text-slate-400 hover:text-rose-600 p-1"
                          title="Remove from wishlist"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1">
                        {p.specs.shank}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 tabular-nums">
                        {formatPrice(p.priceINR)}
                      </div>

                      <button
                        onClick={() => {
                          onAddToCart(p);
                          onRemoveWishlist(p.id);
                        }}
                        className="flex items-center gap-1.5 text-xs font-bold bg-purple-50 hover:bg-purple-100 text-purple-800 border border-purple-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Move to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
