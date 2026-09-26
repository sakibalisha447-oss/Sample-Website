import React, { useState } from 'react';
import { Calendar, ChevronDown, Download, FileText, Sparkles, HelpCircle, Menu, X } from 'lucide-react';

interface SecondaryNavProps {
  onOpenSchedule: () => void;
  onNavigateSection: (sectionId: string) => void;
  activeSection?: string;
}

export const SecondaryNav: React.FC<SecondaryNavProps> = ({
  onOpenSchedule,
  onNavigateSection,
  activeSection = 'home',
}) => {
  const [isQuickLinkOpen, setIsQuickLinkOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'categories', label: 'Products' },
    { id: 'procedures', label: 'Clinical Cases' },
    { id: 'education', label: 'Education' },
    { id: 'video-showcase', label: 'Dental Facts' },
    { id: 'testimonials', label: 'FAQ' },
    { id: 'about-us', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <nav className="bg-slate-50 border-b border-slate-200 text-xs sm:text-sm font-medium text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Mobile menu trigger */}
        <div className="lg:hidden py-2.5 flex items-center justify-between w-full">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-2 text-slate-700 hover:text-purple-700 font-semibold"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            <span>Menu & Collections</span>
          </button>

          <button
            onClick={onOpenSchedule}
            className="flex items-center gap-1.5 text-xs font-semibold text-purple-700 bg-purple-100/70 hover:bg-purple-200 px-3 py-1.5 rounded-full transition-colors"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule Demo</span>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigateSection(link.id)}
              className={`px-3 py-3 font-medium transition-colors border-b-2 hover:text-purple-800 ${
                activeSection === link.id
                  ? 'border-purple-700 text-purple-800 font-semibold'
                  : 'border-transparent text-slate-600 hover:border-slate-300'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right CTA: Schedule Appointment & Quick Link Dropdown */}
        <div className="hidden lg:flex items-center gap-3 py-2">
          {/* Schedule Appointment CTA */}
          <button
            onClick={onOpenSchedule}
            className="flex items-center gap-1.5 text-xs font-semibold text-purple-800 hover:text-purple-950 bg-purple-50 hover:bg-purple-100 border border-purple-200 px-3.5 py-1.5 rounded-full transition-all shadow-xs cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-purple-600" />
            <span>Schedule Appointment</span>
          </button>

          {/* Quick Link Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsQuickLinkOpen(!isQuickLinkOpen)}
              onBlur={() => setTimeout(() => setIsQuickLinkOpen(false), 200)}
              className="flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300 px-3 py-1.5 rounded-full transition-colors"
            >
              <span>Quick Link</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {isQuickLinkOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-60 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 text-xs">
                <a
                  href="#catalog"
                  onClick={() => onNavigateSection('best-sellers')}
                  className="flex items-center gap-2.5 px-3 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-800 transition-colors"
                >
                  <Download className="w-4 h-4 text-purple-600" />
                  <div>
                    <div className="font-medium">2026 Clinical Bur Catalog</div>
                    <div className="text-[10px] text-slate-400">PDF Spec Sheet (14.2 MB)</div>
                  </div>
                </a>
                <a
                  href="#conversion"
                  onClick={() => onNavigateSection('education')}
                  className="flex items-center gap-2.5 px-3 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-800 transition-colors"
                >
                  <FileText className="w-4 h-4 text-blue-600" />
                  <div>
                    <div className="font-medium">Bur Cross-Reference Chart</div>
                    <div className="text-[10px] text-slate-400">ISO to Competitor match</div>
                  </div>
                </a>
                <a
                  href="#sterilization"
                  onClick={() => onNavigateSection('education')}
                  className="flex items-center gap-2.5 px-3 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-800 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <div>
                    <div className="font-medium">Autoclave & Care Protocols</div>
                    <div className="text-[10px] text-slate-400">134°C sterilization steps</div>
                  </div>
                </a>
                <div className="border-t border-slate-100 my-1" />
                <button
                  onClick={onOpenSchedule}
                  className="w-full text-left flex items-center gap-2 px-3 py-2 text-purple-700 hover:bg-purple-50 font-semibold"
                >
                  <HelpCircle className="w-4 h-4 text-purple-600" />
                  <span>Request In-Clinic Trial Box</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigateSection(link.id);
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-purple-50 hover:text-purple-800 rounded-lg"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                onOpenSchedule();
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-purple-700 text-white rounded-lg font-semibold text-sm shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule In-Clinic Appointment</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
