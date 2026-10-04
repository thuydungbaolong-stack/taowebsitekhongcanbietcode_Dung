import { Bot, Sparkles, Gift, CheckCircle2, Cpu } from 'lucide-react';

export default function SpecialGifts() {
  return (
    <section id="qua-tang" className="py-16 md:py-20 bg-gradient-to-b from-slate-50 via-indigo-50/30 to-white relative overflow-hidden">
      
      {/* Decorative sparkle ambient */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card Container */}
        <div className="relative rounded-3xl bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white p-8 sm:p-12 md:p-14 shadow-2xl border border-indigo-700/50 overflow-hidden">
          
          {/* Background decorative elements */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-6 border border-amber-400/30">
              <Gift className="w-4 h-4 text-amber-300" />
              <span>Đặc quyền dành riêng cho học viên</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
              🎁 QUÀ TẶNG ĐẶC BIỆT
            </h2>

            {/* Main Content */}
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200 mb-4">
              TẶNG 10 TRỢ LÝ AI DÀNH CHO GIÁO VIÊN
            </div>

            {/* Platform indicator */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-xl bg-white/10 backdrop-blur-md text-white font-bold text-sm sm:text-base border border-white/20 flex items-center gap-2">
                <Bot className="w-4 h-4 text-emerald-400" />
                ChatGPT
              </span>
              <span className="text-amber-300 font-bold">&</span>
              <span className="px-4 py-1.5 rounded-xl bg-white/10 backdrop-blur-md text-white font-bold text-sm sm:text-base border border-white/20 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                Gemini
              </span>
            </div>

            <p className="text-lg sm:text-xl text-blue-100/90 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
              “Bộ trợ lý giúp giáo viên khai thác AI thuận tiện hơn trong công việc và giảng dạy.”
            </p>

            {/* 2 Platform Showcase Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto mb-10">
              
              {/* ChatGPT Card */}
              <div className="rounded-2xl p-6 bg-white/10 backdrop-blur-md border border-white/15 hover:border-emerald-400/50 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Trợ lý trên nền tảng ChatGPT</h3>
                    <span className="text-xs text-emerald-300 font-medium">Tối ưu cho công tác giáo dục</span>
                  </div>
                </div>
                <p className="text-sm text-blue-100/80 leading-relaxed">
                  Được thiết lập sẵn các câu lệnh thông minh giúp xử lý công việc sư phạm nhanh chóng và chuẩn xác.
                </p>
              </div>

              {/* Gemini Card */}
              <div className="rounded-2xl p-6 bg-white/10 backdrop-blur-md border border-white/15 hover:border-sky-400/50 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center font-bold">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Trợ lý trên nền tảng Gemini</h3>
                    <span className="text-xs text-sky-300 font-medium">Công nghệ đa phương tiện tiên tiến</span>
                  </div>
                </div>
                <p className="text-sm text-blue-100/80 leading-relaxed">
                  Hỗ trợ phân tích dữ liệu, tổng hợp ý tưởng bài giảng phong phú với khả năng mở rộng mạnh mẽ.
                </p>
              </div>

            </div>

            {/* Note about 10 assistants as instructed */}
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-400/15 border border-amber-300/40 text-amber-200 text-sm sm:text-base font-semibold">
              <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0" />
              <span>Chi tiết bộ 10 trợ lý sẽ được cung cấp cho học viên trong khóa học.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
