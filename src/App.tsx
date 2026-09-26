import React, { useState, useEffect } from 'react';
import { Currency, Product, CartItem } from './types';
import { PRODUCTS } from './data/mockData';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { SecondaryNav } from './components/SecondaryNav';
import { HeroSlider } from './components/HeroSlider';
import { CategoryProcedure } from './components/CategoryProcedure';
import { CategoryHeadType } from './components/CategoryHeadType';
import { BestSellers } from './components/BestSellers';
import { Testimonials } from './components/Testimonials';
import { EducationCases } from './components/EducationCases';
import { BeyondATool } from './components/BeyondATool';
import { Newsletter } from './components/Newsletter';
import { NewsEvents } from './components/NewsEvents';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { ScheduleDemoModal } from './components/ScheduleDemoModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { AuthModal } from './components/AuthModal';
import { MemberCreditsModal } from './components/MemberCreditsModal';
import { LiveChatWidget } from './components/LiveChatWidget';

export default function App() {
  // Enforce tab title is Sample Website
  useEffect(() => {
    document.title = 'Sample Website';
  }, []);

  // Brand name configurable - updated to YOUR COMPANY
  const [brandName, setBrandName] = useState<string>('YOUR COMPANY');

  // State management
  const [currentCurrency, setCurrentCurrency] = useState<Currency>('INR');
  const [activeProcedure, setActiveProcedure] = useState<string>('all');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Pre-populate with 1 authentic kit matching the screenshot (or can start with empty/1 item)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0], // One Slice IPR Kit
      quantity: 1,
    },
  ]);

  const [wishlistIds, setWishlistIds] = useState<string[]>([PRODUCTS[1].id]);
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState<Product | null>(null);

  // Modal visibilities
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCreditsOpen, setIsCreditsOpen] = useState(false);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added "${product.name.slice(0, 30)}..." to your clinical cart`);
  };

  const handleBuyNow = (product: Product) => {
    handleAddToCart(product, 1);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Wishlist operations
  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) => {
      if (prev.includes(productId)) {
        showToast('Removed instrument from wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved instrument to wishlist');
        return [...prev, productId];
      }
    });
  };

  // Filtered products list for BestSellers
  const displayedProducts = PRODUCTS.filter((p) => {
    const matchProc = activeProcedure === 'all' || p.procedure === activeProcedure;
    const matchCat = activeCategory === 'all' || p.category === activeCategory || p.headShape === activeCategory;
    return matchProc && matchCat;
  });

  const cartTotalINR = cartItems.reduce(
    (sum, item) => sum + item.product.priceINR * item.quantity,
    0
  );

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-purple-600 selection:text-white">
      {/* 1. Top Bar */}
      <TopBar
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        onOpenSchedule={() => setIsScheduleOpen(true)}
      />

      {/* 2. Main Header */}
      <Header
        currentCurrency={currentCurrency}
        cartCount={cartCount}
        cartTotalINR={cartTotalINR}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onSelectProduct={(p) => setSelectedQuickViewProduct(p)}
        allProducts={PRODUCTS}
        brandName={brandName}
        onUpdateBrandName={setBrandName}
      />

      {/* 3. Secondary Nav */}
      <SecondaryNav
        onOpenSchedule={() => setIsScheduleOpen(true)}
        onNavigateSection={scrollToSection}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 4. Hero Section (Slider with Burs lineup & BUY 3 FREE 1 promo) */}
        <HeroSlider
          onShopNow={() => scrollToSection('best-sellers')}
          brandName={brandName}
        />

        {/* 5. Shop By Procedure (Circular badges: Restorative, Prosthodontic, Oral Surgery, Orthodontic, Endodontic, Pediatric) */}
        <CategoryProcedure
          activeProcedure={activeProcedure}
          onSelectProcedure={(procId) => {
            setActiveProcedure(activeProcedure === procId ? 'all' : procId);
            scrollToSection('best-sellers');
          }}
          onViewAll={() => {
            setActiveProcedure('all');
            scrollToSection('best-sellers');
          }}
        />

        {/* 6. Shop By Friction Grip / Head Type (Specialty Bur Kits, Diamond Burs, Carbide Burs, Gold Burs, Tungsten Carbide, IPR Burs) */}
        <CategoryHeadType
          activeCategory={activeCategory}
          onSelectCategory={(catId) => {
            setActiveCategory(activeCategory === catId ? 'all' : catId);
            scrollToSection('best-sellers');
          }}
          onViewAll={() => {
            setActiveCategory('all');
            scrollToSection('best-sellers');
          }}
        />

        {/* 7. Featured Products / Best Sellers Grid */}
        <BestSellers
          products={displayedProducts.length > 0 ? displayedProducts : PRODUCTS}
          currentCurrency={currentCurrency}
          wishlistIds={wishlistIds}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
          onToggleWishlist={handleToggleWishlist}
          onQuickView={(p) => setSelectedQuickViewProduct(p)}
          onViewAll={() => {
            setActiveProcedure('all');
            setActiveCategory('all');
          }}
        />

        {/* 8. Customer Testimonials / Reviews ("Voices of Dentists") */}
        <Testimonials />

        {/* 9. Clinical Cases & Educational Articles ("Dentistry Weekly Insights") */}
        <EducationCases
          onSelectArticle={(id) => {
            showToast('Opening clinical paper & CAD/CAM prep protocol...');
          }}
          brandName={brandName}
        />

        {/* 10. Video Showcase Section ("BEYOND A TOOL") */}
        <BeyondATool
          onShopNow={() => scrollToSection('best-sellers')}
          brandName={brandName}
        />

        {/* 11. Newsletter Signup */}
        <Newsletter />

        {/* 12. Latest News & Events */}
        <NewsEvents brandName={brandName} />
      </main>

      {/* 13. Footer */}
      <Footer
        onOpenCredits={() => setIsCreditsOpen(true)}
        brandName={brandName}
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        currentCurrency={currentCurrency}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        currentCurrency={currentCurrency}
        onRemoveWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      {/* Product Quick View Modal */}
      <QuickViewModal
        product={selectedQuickViewProduct}
        onClose={() => setSelectedQuickViewProduct(null)}
        currentCurrency={currentCurrency}
        isWishlisted={selectedQuickViewProduct ? wishlistIds.includes(selectedQuickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* Schedule In-Clinic Demo Modal */}
      <ScheduleDemoModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
        brandName={brandName}
      />

      {/* Doctor Portal Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        brandName={brandName}
      />

      {/* Member Credits Modal */}
      <MemberCreditsModal
        isOpen={isCreditsOpen}
        onClose={() => setIsCreditsOpen(false)}
        brandName={brandName}
      />

      {/* Live Clinical Advisor Chat Widget */}
      <LiveChatWidget brandName={brandName} />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-2xl border border-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-150 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
