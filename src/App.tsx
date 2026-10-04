import { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import TargetAudience from './components/TargetAudience';
import TrustSection from './components/TrustSection';
import WhatYouCanBuild from './components/WhatYouCanBuild';
import Benefits from './components/Benefits';
import SpecialGifts from './components/SpecialGifts';
import PricingSection from './components/PricingSection';
import RegistrationFlow from './components/RegistrationFlow';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileFloatingCTA from './components/MobileFloatingCTA';
import Toast from './components/Toast';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  }, []);

  const scrollToRegistration = useCallback(() => {
    const registrationSection = document.getElementById('dang-ky');
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white pb-20 md:pb-0">
      {/* Toast Alert */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Navigation */}
      <Navbar onNavigateToRegister={scrollToRegistration} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Banner */}
        <HeroBanner onRegisterClick={scrollToRegistration} />

        {/* 2. Target Audience */}
        <TargetAudience />

        {/* 3. Trust & Non-tech Friendly Philosophy */}
        <TrustSection />

        {/* 4. What You Can Build */}
        <WhatYouCanBuild />

        {/* 5. Benefits & Skills Acquired */}
        <Benefits />

        {/* 6. Special Gift: 10 AI Assistants on ChatGPT & Gemini */}
        <SpecialGifts />

        {/* 7. Dedicated Pricing Card */}
        <PricingSection onRegisterClick={scrollToRegistration} />

        {/* 8. Registration & Payment & Zalo Flow */}
        <RegistrationFlow onCopyNotice={showToast} />

        {/* 9. Frequently Asked Questions */}
        <FAQSection />

        {/* 10. Final Call-to-Action */}
        <FinalCTA onRegisterClick={scrollToRegistration} />
      </main>

      {/* Footer */}
      <Footer onRegisterClick={scrollToRegistration} />

      {/* Floating CTA for Mobile Screens */}
      <MobileFloatingCTA onRegisterClick={scrollToRegistration} />
    </div>
  );
}
