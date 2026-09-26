import React, { useState } from 'react';
import { CartItem, Currency } from '../types';
import { CURRENCIES } from '../data/mockData';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, CheckCircle2, Truck } from 'lucide-react';
import { ProductImageRender } from './BurVisual';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  currentCurrency: Currency;
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  currentCurrency,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoDiscountRate, setPromoDiscountRate] = useState<number>(0);
  const [promoError, setPromoError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const { symbol, rate } = CURRENCIES[currentCurrency];

  const formatPrice = (inr: number) => {
    const converted = inr * rate;
    if (currentCurrency === 'INR') {
      return `${symbol} ${converted.toLocaleString('en-IN')}`;
    }
    return `${symbol}${converted.toFixed(2)}`;
  };

  const rawSubtotalINR = cartItems.reduce(
    (sum, item) => sum + item.product.priceINR * item.quantity,
    0
  );

  const discountAmountINR = rawSubtotalINR * promoDiscountRate;
  const subtotalAfterDiscountINR = Math.max(0, rawSubtotalINR - discountAmountINR);

  // Free shipping threshold: 15,000 INR
  const freeShippingThresholdINR = 15000;
  const isFreeShipping = subtotalAfterDiscountINR >= freeShippingThresholdINR || rawSubtotalINR === 0;
  const remainingForFreeShippingINR = Math.max(0, freeShippingThresholdINR - subtotalAfterDiscountINR);
  const shippingProgressPct = Math.min(100, (subtotalAfterDiscountINR / freeShippingThresholdINR) * 100);

  const shippingCostINR = isFreeShipping ? 0 : 850;
  const totalAmountINR = subtotalAfterDiscountINR + shippingCostINR;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoInput.trim().toUpperCase();
    if (code === 'BUY3FREE1') {
      setAppliedPromo('BUY3FREE1');
      setPromoDiscountRate(0.25); // 25% off equivalent to Buy 3 Free 1
      setPromoError('');
    } else if (code === 'CLINIC10' || code === 'WELCOME10') {
      setAppliedPromo(code);
      setPromoDiscountRate(0.10);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try "BUY3FREE1" or "CLINIC10".');
    }
  };

  const handleCompleteOrder = () => {
    setOrderComplete(true);
    setTimeout(() => {
      onClearCart();
      setIsCheckingOut(false);
      setOrderComplete(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Your Clinical Order
              </h2>
              <span className="text-xs bg-purple-100 text-purple-800 font-bold px-2 py-0.5 rounded-full">
                {cartItems.reduce((acc, i) => acc + i.quantity, 0)} items
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="p-3 bg-purple-50/80 border-b border-purple-100 text-xs">
            <div className="flex items-center justify-between mb-1.5 text-purple-950 font-medium">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-purple-700" />
                {isFreeShipping ? (
                  <strong className="text-emerald-700 font-bold">Free Clinical Express Shipping Unlocked!</strong>
                ) : (
                  <span>Add <strong>{formatPrice(remainingForFreeShippingINR)}</strong> for Free Shipping</span>
                )}
              </span>
              <span className="tabular-nums font-bold">{Math.round(shippingProgressPct)}%</span>
            </div>
            <div className="w-full h-1.5 bg-purple-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-all duration-300"
                style={{ width: `${shippingProgressPct}%` }}
              />
            </div>
          </div>

          {/* Body: Items or Empty state */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-slate-100">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
                  <Truck className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Your cart is currently empty</h3>
                <p className="text-xs text-slate-500 max-w-xs">
                  Discover our top-rated One Slice IPR Kits, diamond burs, and composite polishers with limited time Buy 3 Free 1.
                </p>
                <button
                  onClick={onClose}
                  className="bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold px-6 py-2.5 rounded-full transition-colors"
                >
                  Start Exploring
                </button>
              </div>
            ) : isCheckingOut ? (
              <div className="space-y-4 py-2">
                {orderComplete ? (
                  <div className="p-8 text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-200">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h3 className="text-base font-bold text-emerald-950">Clinical Order Confirmed!</h3>
                    <p className="text-xs text-emerald-800">
                      Order reference: <strong>#MB-{Math.floor(100000 + Math.random() * 900000)}</strong>. A confirmation email and tracking link have been dispatched.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-slate-900">Delivery & Clinic Verification</h3>
                      <button
                        onClick={() => setIsCheckingOut(false)}
                        className="text-xs text-purple-700 hover:underline"
                      >
                        Back to items
                      </button>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="block text-slate-700 font-medium mb-1">Clinic Name / Doctor</label>
                        <input
                          type="text"
                          defaultValue="Apex Specialty Dental Practice"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-700 font-medium mb-1">Shipping Address</label>
                        <input
                          type="text"
                          defaultValue="Suite 402, Medical Arts Pavilion, Orchard Road"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-slate-700 font-medium mb-1">Postal Code</label>
                          <input
                            type="text"
                            defaultValue="238864"
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-700 font-medium mb-1">Phone Number</label>
                          <input
                            type="text"
                            defaultValue="+65 9123 4567"
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900"
                          />
                        </div>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <div className="text-[11px] font-bold text-slate-700 uppercase mb-1">Payment Method</div>
                        <div className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                          <input type="radio" checked readOnly className="text-purple-600" />
                          <span>Direct Clinical Invoice / Credit Card (Encrypted)</span>
                        </div>
                      </div>

                      <button
                        onClick={handleCompleteOrder}
                        className="w-full py-3 bg-gradient-to-r from-purple-700 to-indigo-800 hover:from-purple-800 hover:to-indigo-900 text-white font-bold rounded-xl shadow-md transition-all text-sm cursor-pointer"
                      >
                        Place Order · {formatPrice(totalAmountINR)}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.product.id} className="py-4 flex gap-3 group">
                  <div className="w-18 h-18 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center p-1">
                    <ProductImageRender type={item.product.imageType} className="h-full" />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-900 line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-slate-400 hover:text-rose-600 p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1">
                        {item.product.specs.shank}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-slate-200 rounded-md bg-slate-50">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="p-1 hover:bg-slate-200 text-slate-600 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-slate-800 tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="p-1 hover:bg-slate-200 text-slate-600 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-xs sm:text-sm font-bold text-slate-900 tabular-nums">
                        {formatPrice(item.product.priceINR * item.quantity)}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer calculation */}
          {cartItems.length > 0 && !isCheckingOut && (
            <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-3">
              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  placeholder="Promo Code (e.g. BUY3FREE1)"
                  className="flex-1 px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg uppercase placeholder:normal-case focus:border-purple-600 outline-none"
                />
                <button
                  type="submit"
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </form>

              {appliedPromo && (
                <div className="text-[11px] text-emerald-600 font-semibold flex items-center justify-between">
                  <span>Promo {appliedPromo} applied (-{(promoDiscountRate * 100)}%)</span>
                  <button
                    onClick={() => {
                      setAppliedPromo(null);
                      setPromoDiscountRate(0);
                    }}
                    className="text-slate-400 hover:text-slate-600 text-[10px]"
                  >
                    Remove
                  </button>
                </div>
              )}
              {promoError && (
                <div className="text-[11px] text-rose-600">{promoError}</div>
              )}

              {/* Cost breakdown */}
              <div className="space-y-1.5 text-xs pt-1 border-t border-slate-200/80">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="tabular-nums font-medium">{formatPrice(rawSubtotalINR)}</span>
                </div>
                {appliedPromo && (
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>Discount ({appliedPromo})</span>
                    <span className="tabular-nums">-{formatPrice(discountAmountINR)}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-600">
                  <span>Clinical Shipping</span>
                  <span className="tabular-nums font-medium">
                    {isFreeShipping ? 'FREE' : formatPrice(shippingCostINR)}
                  </span>
                </div>
                <div className="flex justify-between text-sm sm:text-base font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Total</span>
                  <span className="tabular-nums">{formatPrice(totalAmountINR)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-3 bg-gradient-to-r from-purple-700 to-indigo-800 hover:from-purple-800 hover:to-indigo-900 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Encrypted 256-bit SSL · Medical Class II Delivery</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
