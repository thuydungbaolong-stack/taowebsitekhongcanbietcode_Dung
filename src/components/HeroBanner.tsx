import { CheckCircle2, ArrowRight, Sparkles, Tag, Layers, MessageSquareText, Globe2, BookOpen } from 'lucide-react';

interface HeroBannerProps {
  onRegisterClick: () => void;
}

export default function HeroBanner({ onRegisterClick }: HeroBannerProps) {
  const highlights = [
    'Không yêu cầu kiến thức lập trình.',
    'Hướng dẫn theo từng bước, dễ thực hành.',
    'Phù hợp với giáo viên và người mới bắt đầu.',
  ];

  return (
    <section id="banner" className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-blue-50/70 via-white to-slate-50">
      {/* Subtle decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-blue-200/25 via-indigo-100/20 to-purple-100/30 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & Pricing */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Tag / Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 text-blue-800 text-xs sm:text-sm font-semibold border border-blue-200">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Khóa học thực chiến dành riêng cho Giáo viên Việt Nam</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              TỰ TẠO WEBSITE <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600">
                KHÔNG CẦN BIẾT CODE
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed">
              Biến ý tưởng thành website thực tế với sự hỗ trợ của AI – Giáo viên không cần biết lập trình vẫn có thể làm được.
            </p>

            {/* Journey Concept Quote */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-blue-100 shadow-sm">
              <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Phương pháp học tự nhiên</span>
              </div>
              <p className="text-slate-800 font-semibold text-base sm:text-lg flex flex-wrap items-center gap-2">
                <span>Từ một ý tưởng đơn giản</span>
                <span className="text-blue-500 font-bold">→</span>
                <span>dùng AI mô tả mong muốn</span>
                <span className="text-blue-500 font-bold">→</span>
                <span className="text-blue-700 font-bold">từng bước tạo ra website của riêng bạn.</span>
              </p>
            </div>

            {/* 3 Highlights */}
            <div className="space-y-2.5 pt-1">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-800 text-sm sm:text-base font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Pricing Box & CTA */}
            <div className="pt-4 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-50/80 via-orange-50/60 to-white border-2 border-amber-300/80 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div>
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">Học phí gốc:</span>
                    <span className="text-lg font-bold text-slate-400 line-through">999.000Đ</span>
                  </div>
                  <div className="h-8 w-px bg-slate-200"></div>
                  <div>
                    <span className="text-xs text-amber-700 font-bold uppercase tracking-wider block">Ưu đãi đăng ký ngay hôm nay:</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-orange-600">CHỈ 499.000Đ</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500 text-white text-xs sm:text-sm font-bold shadow-xs">
                  <Tag className="w-3.5 h-3.5" />
                  <span>TIẾT KIỆM 500.000Đ</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                <button
                  id="hero-register-primary-btn"
                  type="button"
                  onClick={onRegisterClick}
                  className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-lg shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>ĐĂNG KÝ NGAY – CHỈ 499K</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-3 text-center sm:text-left text-xs text-slate-600 flex items-center justify-center sm:justify-start gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Tặng kèm bộ 10 Trợ lý AI trên ChatGPT & Gemini</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Diagram for Vietnamese Teachers */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Card */}
              <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xl shadow-slate-200/60 relative overflow-hidden">
                
                {/* Header of card */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <span className="ml-2 text-xs font-mono font-medium text-slate-500">Trải nghiệm tạo website bằng AI</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-semibold border border-blue-100">
                    Không viết 1 dòng code
                  </span>
                </div>

                {/* 3 Step Visual Stream */}
                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/70 hover:bg-blue-50/50 hover:border-blue-200 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                      1
                    </div>
                    <div>
                      <div className="text-xs font-bold text-blue-600 uppercase tracking-wide">Bước 1: Lên ý tưởng</div>
                      <h4 className="text-sm font-bold text-slate-800">Mục tiêu của Thầy/Cô</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Ví dụ: "Tôi muốn trang web chia sẻ tài liệu bài giảng và giới thiệu lớp học."</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/70 hover:bg-indigo-50/50 hover:border-indigo-200 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                      2
                    </div>
                    <div>
                      <div className="text-xs font-bold text-indigo-600 uppercase tracking-wide">Bước 2: Dùng AI hỗ trợ</div>
                      <h4 className="text-sm font-bold text-slate-800">Mô tả bằng tiếng Việt tự nhiên</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Viết câu lệnh rõ ràng để AI thiết kế bố cục, tạo biểu mẫu và nội dung chuẩn.</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                      3
                    </div>
                    <div>
                      <div className="text-xs font-bold text-emerald-700 uppercase tracking-wide">Bước 3: Hoàn thiện</div>
                      <h4 className="text-sm font-bold text-slate-900">Website sẵn sàng hoạt động</h4>
                      <p className="text-xs text-slate-700 mt-0.5">Tự tay làm chủ website cá nhân, phục vụ giảng dạy và kết nối phụ huynh, học sinh.</p>
                    </div>
                  </div>
                </div>

                {/* Bottom feature pill */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Globe2 className="w-4 h-4 text-blue-600" />
                    Ứng dụng thực tế ngay
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-indigo-600" />
                    Cầm tay chỉ việc
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageSquareText className="w-4 h-4 text-emerald-600" />
                    Hỗ trợ qua Zalo
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
