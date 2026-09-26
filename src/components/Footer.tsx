import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Award, Shield, Phone, Mail, Globe } from 'lucide-react';

interface FooterProps {
  onOpenCredits?: () => void;
  brandName?: string;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCredits, brandName = 'MR. BUR' }) => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Socials (Col span 2 on large) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="text-2xl font-black text-slate-900 tracking-tight">
                {brandName}
              </span>
              <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                Dental Excellence
              </span>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Global manufacturer of dental rotary tools, calibrated IPR kits, diamond burs, and surgical bone debridement cutters. Precision engineered to empower clinicians in over 35 countries.
            </p>

            {/* Social Icons matching screenshot */}
            <div className="flex items-center gap-3 pt-2 text-slate-500">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-purple-100 hover:text-purple-700 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-purple-100 hover:text-purple-700 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-purple-100 hover:text-purple-700 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-purple-100 hover:text-purple-700 flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Quality & Factory Certification note */}
            <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>ISO XXXX Certified Medical Device Facility</span>
            </div>
          </div>

          {/* Column 2: Company links matching screenshot */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li><a href="#" className="hover:text-purple-700 transition-colors">About Mr Bur</a></li>
              <li><a href="#best-sellers" className="hover:text-purple-700 transition-colors">Store</a></li>
              <li><a href="#education" className="hover:text-purple-700 transition-colors">Education</a></li>
              <li><a href="#events" className="hover:text-purple-700 transition-colors">News and Events</a></li>
              <li><a href="#" className="hover:text-purple-700 transition-colors">Partnerships</a></li>
              <li><a href="#" className="hover:text-purple-700 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-purple-700 transition-colors">Refer a Friend</a></li>
              <li><a href="#" className="hover:text-purple-700 transition-colors">Membership Guide</a></li>
            </ul>
          </div>

          {/* Column 3: Other Links matching screenshot */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Other Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li><a href="#" className="hover:text-purple-700 transition-colors">Privacy policy</a></li>
              <li><a href="#" className="hover:text-purple-700 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-purple-700 transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-purple-700 transition-colors">Autoclave Guide</a></li>
              <li><a href="#" className="hover:text-purple-700 transition-colors">Shipping & Customs</a></li>
              <li><a href="#" className="hover:text-purple-700 transition-colors">FAQ & Support</a></li>
            </ul>
          </div>

          {/* Column 4: Where To Find Us */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Where To Find Us
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-center gap-1.5 font-medium text-slate-900">
                <Globe className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span>United Arab Emirates</span>
              </li>
              <li className="text-slate-500 pl-5">Dubai Healthcare City (DHCC)</li>
              <li className="text-slate-500 pl-5">Abu Dhabi</li>
              <li className="text-slate-500 pl-5">Sharjah</li>
              <li className="pt-1.5 pl-5 text-[11px] text-purple-700 font-medium">
                UAE Clinical Express Delivery (Next-Day)
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar matching screenshot */}
      <div className="border-t border-slate-200 bg-slate-50 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          {/* Member Credits Pill button on bottom left matching screenshot */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenCredits}
              className="flex items-center gap-1.5 bg-[#0052CC] hover:bg-[#0747A6] text-white px-3.5 py-1.5 rounded-full font-bold text-xs shadow-xs transition-colors cursor-pointer"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Member Credits</span>
            </button>
            <span>Copyright © 2026 {brandName} . All Rights Reserved</span>
          </div>

          {/* Payment Method Icons matching screenshot */}
          <div className="flex items-center gap-2">
            <div className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-700">
              GPay
            </div>
            <div className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-700">
              Mastercard
            </div>
            <div className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-700">
              Apple Pay
            </div>
            <div className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-blue-700">
              VISA
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
