import React, { useState } from 'react';
import { Product, Currency } from '../types';
import { CURRENCIES } from '../data/mockData';
import { ProductImageRender } from './BurVisual';
import { X, Star, ShieldCheck, ShoppingCart, Heart, Check, Zap, Info } from 'lucide-react';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  currentCurrency: Currency;
  isWishlisted: boolean;
  onToggleWishlist: (id: string) => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onBuyNow: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  currentCurrency,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onBuyNow,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const { symbol, rate } = CURRENCIES[currentCurrency];

  const formatPrice = (inr: number) => {
    const converted = inr * rate;
    if (currentCurrency === 'INR') {
      return `${symbol} ${converted.toLocaleString('en-IN')}`;
    }
    return `${symbol}${converted.toFixed(2)}`;
  };

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
      />

      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-slate-700 bg-white/80 hover:bg-white rounded-full shadow-xs transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Visual Showcase */}
          <div className="h-72 md:h-full bg-slate-50 relative flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-slate-200">
            <ProductImageRender type={product.imageType} className="max-w-xs" />
            {product.discountBadge && (
              <span className="absolute top-4 left-4 bg-purple-900 text-white text-xs font-bold px-2.5 py-1 rounded-md">
                {product.discountBadge}
              </span>
            )}
          </div>

          {/* Details & Specs */}
          <div className="p-6 flex flex-col justify-between space-y-4">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700">
                  {product.category.replace('-', ' ')}
                </span>
                <div className="flex items-center text-amber-400 text-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-400 mr-1" />
                  <span className="font-bold text-slate-800">{product.rating}</span>
                  <span className="text-slate-400 ml-1">({product.reviewCount})</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {product.name}
              </h2>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {product.subtitle}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-2.5 mt-3">
                <span className="text-2xl font-black text-slate-900 tabular-nums">
                  {formatPrice(product.priceINR)}
                </span>
                {product.originalPriceINR && (
                  <span className="text-sm text-slate-400 line-through tabular-nums">
                    {formatPrice(product.originalPriceINR)}
                  </span>
                )}
                <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                  In Stock & Ready to Ship
                </span>
              </div>

              {/* Technical Clinical Specifications Table */}
              <div className="mt-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-slate-800 pb-1 border-b border-slate-200">
                  <Info className="w-3.5 h-3.5 text-purple-600" />
                  <span>Clinical Technical Specifications</span>
                </div>
                <div className="grid grid-cols-2 gap-y-1.5 gap-x-2 text-[11px]">
                  <div>
                    <span className="text-slate-400 block">Shank Type:</span>
                    <span className="font-medium text-slate-800">{product.specs.shank}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Head Grit:</span>
                    <span className="font-medium text-slate-800">{product.specs.grit}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Recommended RPM:</span>
                    <span className="font-medium text-slate-800">{product.specs.rpm}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Autoclave Protocol:</span>
                    <span className="font-medium text-slate-800">{product.specs.autoclavable}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions: Quantity + Add to Cart + Buy Now */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-slate-300 rounded-lg">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-2.5 py-1.5 text-slate-600 hover:bg-slate-100 rounded-l-lg"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-bold tabular-nums">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-2.5 py-1.5 text-slate-600 hover:bg-slate-100 rounded-r-lg"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={handleAdd}
                  className={`flex-1 py-2.5 px-4 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    added
                      ? 'bg-emerald-600 text-white'
                      : 'bg-purple-700 hover:bg-purple-800 text-white shadow-sm'
                  }`}
                >
                  {added ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                  <span>{added ? 'Added to Cart' : 'Add to Cart'}</span>
                </button>

                {/* Wishlist */}
                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className={`p-2.5 border rounded-lg transition-colors cursor-pointer ${
                    isWishlisted
                      ? 'bg-rose-50 border-rose-300 text-rose-600'
                      : 'border-slate-300 hover:bg-slate-50 text-slate-600'
                  }`}
                  title="Save to Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
                </button>
              </div>

              {/* Buy Now Button */}
              <button
                onClick={() => {
                  onBuyNow(product);
                  onClose();
                }}
                className="w-full py-2.5 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold rounded-lg text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
              >
                <Zap className="w-4 h-4 text-amber-300" />
                <span>Instant Buy Now · Fast Dispatch</span>
              </button>

              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{product.specs.isoCert}</span>
                </span>
                <span>Free sterile clinical packaging</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
