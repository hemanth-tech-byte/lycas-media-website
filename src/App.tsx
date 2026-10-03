/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ShowreelModal } from './components/ShowreelModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Work } from './pages/Work';
import { Podcast } from './pages/Podcast';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { PageId } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [showreelOpen, setShowreelOpen] = useState(false);

  // Scroll to top on page change
  const handleNavigate = (page: PageId, serviceId?: string) => {
    setCurrentPage(page);
    setSelectedServiceId(serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#050708] text-[#F7F8F8] flex flex-col font-sans selection:bg-[#00E5D4]/30 selection:text-[#00E5D4] transition-colors duration-300">
        {/* 3. Sticky Navigation Bar */}
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

        {/* Main Page Content */}
        <main className="flex-1 w-full">
          {currentPage === 'home' && (
            <Home
              onNavigate={handleNavigate}
              onOpenShowreel={() => setShowreelOpen(true)}
            />
          )}
          {currentPage === 'about' && <About onNavigate={handleNavigate} />}
          {currentPage === 'services' && (
            <Services
              onNavigate={handleNavigate}
              selectedServiceId={selectedServiceId}
            />
          )}
          {currentPage === 'work' && <Work onNavigate={handleNavigate} />}
          {currentPage === 'podcast' && <Podcast onNavigate={handleNavigate} />}
          {currentPage === 'blog' && <Blog onNavigate={handleNavigate} />}
          {currentPage === 'contact' && <Contact />}
        </main>

        {/* 21. Footer */}
        <Footer onNavigate={handleNavigate} />

        {/* 19. Floating WhatsApp Communication Toggle */}
        <WhatsAppButton />

        {/* Showreel Video Modal */}
        <ShowreelModal
          isOpen={showreelOpen}
          onClose={() => setShowreelOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
