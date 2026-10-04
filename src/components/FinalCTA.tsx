import { Sparkles, ArrowRight, Gift } from 'lucide-react';

interface FinalCTAProps {
  onRegisterClick: () => void;
}

export default function FinalCTA({ onRegisterClick }: FinalCTAProps) {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white relative overflow-hidden">
      
      {/* Visual background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          BẠN KHÔNG CẦN TRỞ THÀNH LẬP TRÌNH VIÊN ĐỂ BIẾN Ý TƯỞNG THÀNH WEBSITE
        </h2>

        <p className="text-lg sm:text-xl text-blue-100 font-medium max-w-2xl mx-auto">
          Bắt đầu học cách tận dụng AI để tạo website phục vụ công việc và giáo dục.
        </p>

        {/* Pricing badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
          <span className="text-slate-300 text-lg sm:text-xl line-through decoration-red-400 decoration-2 font-bold">
            999.000Đ
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl font-black text-amber-300">
            CHỈ 499.000Đ HÔM NAY
          </span>
        </div>

        {/* Gift badge */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-200 text-sm sm:text-base font-bold">
            <Gift className="w-4 h-4 text-amber-300" />
            <span>🎁 TẶNG 10 TRỢ LÝ CHATGPT & GEMINI DÀNH CHO GIÁO VIÊN</span>
          </div>
        </div>

        {/* Primary CTA Button */}
        <div className="pt-4">
          <button
            id="bottom-cta-register-btn"
            type="button"
            onClick={onRegisterClick}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-lg sm:text-xl shadow-2xl shadow-orange-500/40 transition-all cursor-pointer transform hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-6 h-6" />
            <span>ĐĂNG KÝ KHÓA HỌC NGAY</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        <p className="text-xs text-blue-200/80">
          * Đăng ký nhanh gọn qua Google Form và chuyển khoản qua ngân hàng Quân Đội (MB)
        </p>

      </div>
    </section>
  );
}
