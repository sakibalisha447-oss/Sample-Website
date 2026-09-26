import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Shield, MapPin, Sparkles } from 'lucide-react';

interface ScheduleDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  brandName?: string;
}

export const ScheduleDemoModal: React.FC<ScheduleDemoModalProps> = ({ isOpen, onClose, brandName = 'MR. BUR' }) => {
  const [formData, setFormData] = useState({
    dentistName: '',
    clinicName: '',
    specialty: 'Restorative & Prosthodontic',
    phone: '',
    email: '',
    preferredDate: '2026-10-05',
    focusTopic: 'One Slice IPR Kit Demonstration & Free Trial Box',
  });
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
      />

      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Clinical Appointment Requested!
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>Dr. {formData.dentistName || 'Doctor'}</strong>. Our Clinical Bur Specialist will reach out to <strong>{formData.clinicName || 'your practice'}</strong> within 4 business hours to confirm your trial box delivery.
            </p>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs space-y-1.5 max-w-sm mx-auto text-slate-700">
              <div><strong>Topic:</strong> {formData.focusTopic}</div>
              <div><strong>Requested Date:</strong> {formData.preferredDate}</div>
              <div><strong>Contact:</strong> {formData.phone || formData.email}</div>
            </div>

            <button
              onClick={() => {
                setIsBooked(false);
                onClose();
              }}
              className="bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-colors cursor-pointer"
            >
              Back to Store
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 mb-1">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Complimentary Clinical Demo</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Schedule In-Clinic Appointment & Trial Box
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-6">
              Experience the concentricity, zero-chatter tactile feedback, and endurance of {brandName} instruments firsthand in your operatory.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Dentist Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Alex Wong"
                    value={formData.dentistName}
                    onChange={(e) => setFormData({ ...formData, dentistName: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-purple-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Clinic / Practice Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Smile Precision Clinic"
                    value={formData.clinicName}
                    onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-purple-600 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Practice Specialty</label>
                  <select
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-purple-600 outline-none bg-white text-slate-800"
                  >
                    <option>Restorative & Prosthodontic</option>
                    <option>Orthodontics & Aligner Therapy</option>
                    <option>Oral & Maxillofacial Surgery</option>
                    <option>Endodontics</option>
                    <option>General Dental Practice</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+65 9123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-purple-600 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Product Sample & Trial Interest</label>
                <select
                  value={formData.focusTopic}
                  onChange={(e) => setFormData({ ...formData, focusTopic: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-purple-600 outline-none bg-white text-slate-800"
                >
                  <option>One Slice IPR Kit Demonstration & Free Trial Box</option>
                  <option>Composite Polishing Diamond Discs 4-Step System</option>
                  <option>Surgical Degranulation Kit Site Visit</option>
                  <option>Zirconia Crown Prep Diamond Burs (Chamfer/Shoulder)</option>
                  <option>Bulk Wholesale Clinic Pricing Consultation</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-purple-600 outline-none text-slate-800"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Clinic Email</label>
                  <input
                    type="email"
                    placeholder="doctor@clinic.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-purple-600 outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-700 to-indigo-800 hover:from-purple-800 hover:to-indigo-900 text-white font-bold rounded-xl shadow-md transition-all text-xs sm:text-sm mt-2 cursor-pointer"
              >
                Confirm Appointment & Request Trial Kit
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 text-center">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero obligation · Free sample bur sterilized for immediate clinical trial</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
