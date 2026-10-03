import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/config';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const cleanNumber = COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(COMPANY_CONFIG.whatsappDefaultMessage);
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

  return (
    <div
      id="lycas-whatsapp-container"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {showTooltip && (
        <div
          id="lycas-whatsapp-tooltip"
          className="hidden md:flex items-center gap-2 bg-[#002D32]/95 backdrop-blur-md border border-[#00E5D4]/40 text-white text-xs px-3.5 py-2 rounded-full shadow-2xl animate-fade-in"
        >
          <span className="w-2 h-2 rounded-full bg-[#00E5D4] animate-ping" />
          <span>Chat with Lycas on WhatsApp</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-gray-400 hover:text-white ml-1"
            aria-label="Close message"
          >
            <X size={13} />
          </button>
        </div>
      )}

      <a
        id="lycas-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Lycas Media Space"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#063C3A] via-[#002D32] to-[#00D9A5] text-white shadow-xl shadow-[#00D9A5]/20 hover:shadow-[#00E5D4]/40 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#00E5D4] opacity-30 group-hover:opacity-60 animate-ping -z-10" />
        <MessageCircle size={26} className="text-white group-hover:rotate-6 transition-transform duration-300" />
      </a>
    </div>
  );
};
