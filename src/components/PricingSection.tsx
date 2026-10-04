import { Sparkles, ArrowRight, CheckCircle2, Gift, ShieldAlert, Tag } from 'lucide-react';

interface PricingSectionProps {
  onRegisterClick: () => void;
}

export default function PricingSection({ onRegisterClick }: PricingSectionProps) {
  return (
    <section id="hoc-phi" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <Tag className="w-4 h-4" />
            <span>Mức đầu tư giáo dục tối ưu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            HỌC PHÍ KHÓA HỌC
          </h2>
          <p className="mt-2 text-slate-600 text-base sm:text-lg">
            Chi phí một lần – Sở hữu kỹ năng tạo website trọn đời bằng trí tuệ nhân tạo.
          </p>
        </div>

        {/* Featured Pricing Card */}
        <div className="relative rounded-3xl bg-white border-2 border-orange-500/80 shadow-2xl shadow-orange-500/10 p-6 sm:p-10 overflow-hidden">
          
          {/* Top Ribbons */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-orange-500 to-amber-500 text-white font-extrabold text-xs sm:text-sm py-1.5 px-6 rounded-bl-2xl shadow-sm uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TIẾT KIỆM 500.000Đ</span>
          </div>

          <div className="text-center space-y-4 pt-2">
            
            {/* Header Text */}
            <div className="text-sm sm:text-base font-bold text-orange-600 uppercase tracking-widest">
              ƯU ĐÃI ĐĂNG KÝ NGAY HÔM NAY
            </div>

            {/* Price Comparison */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 py-2">
              <div className="text-slate-400 text-lg sm:text-xl font-bold">
                <span>Học phí gốc: </span>
                <span className="line-through decoration-red-500 decoration-2">999.000Đ</span>
              </div>
              <span className="hidden sm:inline text-slate-300 text-2xl font-light">|</span>
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-orange-600 tracking-tight">
                499.000Đ
              </div>
            </div>

            <p className="text-slate-600 text-sm font-medium">
              Chỉ 499.000Đ để tự tay làm chủ website, phục vụ công tác giảng dạy lâu dài.
            </p>

            {/* Included highlights */}
            <div className="my-8 py-6 border-y border-slate-100 max-w-lg mx-auto space-y-3.5 text-left">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-slate-800 text-sm sm:text-base font-semibold">
                  Toàn bộ nội dung khóa học Tạo Website Không Cần Biết Code
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Gift className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-slate-800 text-sm sm:text-base font-bold text-amber-800">
                  🎁 Tặng kèm bộ 10 Trợ lý AI trên ChatGPT và Gemini dành cho giáo viên
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-slate-800 text-sm sm:text-base font-semibold">
                  Tham gia nhóm Zalo kết nối học viên và nhận tài liệu hỗ trợ
                </span>
              </div>
            </div>

            {/* Main Action Button */}
            <div className="pt-2">
              <button
                id="pricing-register-btn"
                type="button"
                onClick={onRegisterClick}
                className="w-full sm:w-auto min-w-[280px] sm:min-w-[360px] inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-lg sm:text-xl shadow-xl shadow-orange-500/25 hover:shadow-orange-500/35 transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-5 h-5" />
                <span>TÔI MUỐN ĐĂNG KÝ 499K</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-slate-500 pt-2 flex items-center justify-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-slate-400" />
              <span>Chuyển khoản trực tiếp tới tài khoản chính thức của ban tổ chức</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
