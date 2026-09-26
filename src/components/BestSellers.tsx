import React, { useState } from 'react';
import { Product, Currency } from '../types';
import { CURRENCIES } from '../data/mockData';
import { ProductImageRender } from './BurVisual';
import { Heart, Eye, ShoppingCart, Star, ShieldCheck, Check } from 'lucide-react';

interface BestSellersProps {
  products: Product[];
  currentCurrency: Currency;
  wishlistIds: string[];
  onAddToCart: (product: Product, quantity?: number) => void;
  onBuyNow: (product: Product) => void;
  onToggleWishlist: (productId: string) => void;
  onQuickView: (product: Product) => void;
  onViewAll: () => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({
  products,
  currentCurrency,
  wishlistIds,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  onQuickView,
  onViewAll,
}) => {
  const [filterTab, setFilterTab] = useState<'all' | 'ipr' | 'polishing' | 'surgical'>('all');
  const [addedNoticeId, setAddedNoticeId] = useState<string | null>(null);

  const formatPrice = (inr: number) => {
    const { symbol, rate } = CURRENCIES[currentCurrency];
    const converted = inr * rate;
    if (currentCurrency === 'INR') {
      return `${symbol} ${converted.toLocaleString('en-IN')}`;
    }
    return `${symbol}${converted.toFixed(2)}`;
  };

  const filteredProducts = products.filter((p) => {
    if (filterTab === 'ipr') return p.procedure === 'orthodontic' || p.headShape === 'ipr-burs';
    if (filterTab === 'polishing') return p.imageType === 'diamond-polisher' || p.category === 'diamond-burs';
    if (filterTab === 'surgical') return p.procedure === 'oral-surgery' || p.procedure === 'prosthodontic';
    return true;
  });

  const handleAddToCartWithFeedback = (p: Product) => {
    onAddToCart(p, 1);
    setAddedNoticeId(p.id);
    setTimeout(() => setAddedNoticeId(null), 1800);
  };

  return (
    <section id="best-sellers" className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-purple-700 font-extrabold mb-1">
              Clinical Excellence
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Best Sellers
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Top rated surgical kits and precision burs trusted by leading clinics worldwide
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Filter Tabs */}
            <div className="flex items-center p-1 bg-slate-100 rounded-lg text-xs font-medium">
              <button
                onClick={() => setFilterTab('all')}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  filterTab === 'all'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterTab('ipr')}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  filterTab === 'ipr'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                IPR Kits
              </button>
              <button
                onClick={() => setFilterTab('polishing')}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  filterTab === 'polishing'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Polishers
              </button>
              <button
                onClick={() => setFilterTab('surgical')}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  filterTab === 'surgical'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Surgical
              </button>
            </div>

            <button
              onClick={onViewAll}
              className="hidden md:inline-block text-xs sm:text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              View all
            </button>
          </div>
        </div>

        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((p) => {
            const isWishlisted = wishlistIds.includes(p.id);
            const isJustAdded = addedNoticeId === p.id;

            return (
              <div
                key={p.id}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all duration-200 flex flex-col overflow-hidden relative"
              >
                {/* Promotional Discount Badge matching screenshot */}
                {p.discountBadge && (
                  <div className="absolute top-3 right-3 z-10 bg-purple-900/90 backdrop-blur-xs text-white text-[11px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                    {p.discountBadge}
                  </div>
                )}

                {/* Floating Quick Action Icons */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => onToggleWishlist(p.id)}
                    aria-label="Save to Wishlist"
                    className={`p-2 rounded-full backdrop-blur-md transition-colors shadow-sm cursor-pointer ${
                      isWishlisted
                        ? 'bg-rose-50 text-rose-600'
                        : 'bg-white/90 hover:bg-white text-slate-600 hover:text-rose-600'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
                  </button>

                  <button
                    onClick={() => onQuickView(p)}
                    aria-label="Quick View Specs"
                    className="p-2 rounded-full bg-white/90 hover:bg-white text-slate-600 hover:text-purple-700 backdrop-blur-md transition-colors shadow-sm cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Image Container */}
                <div
                  onClick={() => onQuickView(p)}
                  className="w-full h-56 relative cursor-pointer group-hover:scale-[1.02] transition-transform duration-200"
                >
                  <ProductImageRender type={p.imageType} />
                </div>

                {/* Content Section */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Rating & Review Count */}
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className="flex items-center text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span className="text-xs font-bold text-slate-800 ml-1">
                          {p.rating}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400">
                        ({p.reviewCount} reviews)
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3
                      onClick={() => onQuickView(p)}
                      className="text-sm font-semibold text-slate-900 group-hover:text-purple-800 transition-colors line-clamp-2 cursor-pointer leading-snug mb-1"
                    >
                      {p.name}
                    </h3>

                    {/* Subtitle / Pieces specs */}
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
                      {p.subtitle}
                    </p>
                  </div>

                  <div>
                    {/* Price with Original Crossed Out */}
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-base sm:text-lg font-bold text-slate-900 tabular-nums">
                        {formatPrice(p.priceINR)}
                      </span>
                      {p.originalPriceINR && (
                        <span className="text-xs text-slate-400 line-through tabular-nums">
                          {formatPrice(p.originalPriceINR)}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons: "Buy Now" matching screenshot primary styling + Add to cart */}
                    <div className="grid grid-cols-5 gap-2">
                      <button
                        onClick={() => onBuyNow(p)}
                        className="col-span-4 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] hover:from-[#1E40AF] hover:to-[#1D4ED8] text-white text-xs sm:text-sm font-bold py-2.5 px-3 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
                      >
                        Buy now
                      </button>

                      <button
                        onClick={() => handleAddToCartWithFeedback(p)}
                        aria-label="Add to cart"
                        className={`col-span-1 flex items-center justify-center rounded-lg border transition-colors cursor-pointer ${
                          isJustAdded
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-600'
                            : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700 hover:text-purple-700'
                        }`}
                        title="Add to Cart"
                      >
                        {isJustAdded ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* ISO / Medical Cert marks at bottom matching screenshot */}
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                      <div className="flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-500" />
                        <span>ISO 13485</span>
                      </div>
                      <span>CE 0197</span>
                      <span>Autoclave 134°C</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel pagination dots indicator matching screenshot */}
        <div className="flex items-center justify-center gap-1.5 mt-10">
          <span className="w-2 h-2 rounded-full bg-slate-800" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  );
};
