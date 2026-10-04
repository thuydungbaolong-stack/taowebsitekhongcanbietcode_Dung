import { Sparkles, ArrowRight } from 'lucide-react';

interface MobileFloatingCTAProps {
  onRegisterClick: () => void;
}

export default function MobileFloatingCTA({ onRegisterClick }: MobileFloatingCTAProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 line-through">999K</span>
            <span className="text-base font-black text-orange-600">499.000Đ</span>
            <span className="text-[10px] bg-red-100 text-red-700 font-bold px-1.5 py-0.5 rounded-sm">
              -500K
            </span>
          </div>
          <span className="text-[11px] text-slate-500 block truncate">
            Tặng 10 trợ lý ChatGPT & Gemini
          </span>
        </div>

        <button
          id="mobile-floating-register-btn"
          type="button"
          onClick={onRegisterClick}
          className="flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-sm shadow-md shadow-orange-500/30 active:scale-95 transition-transform cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          <span>ĐĂNG KÝ NGAY – 499K</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
