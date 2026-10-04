import { ShieldCheck, HeartHandshake, Compass, MessageSquare } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-14 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-200 text-xs sm:text-sm font-semibold mb-4 border border-blue-400/30">
          <ShieldCheck className="w-4 h-4 text-blue-300" />
          <span>Tinh thần học tập cởi mở & thực tế</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6">
          KHÔNG BIẾT CODE VẪN CÓ THỂ BẮT ĐẦU
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-blue-100/95 leading-relaxed font-normal max-w-3xl mx-auto">
          “Khóa học tập trung vào cách giáo viên sử dụng AI để biến ý tưởng thành website thông qua mô tả bằng ngôn ngữ tự nhiên. Người học được hướng dẫn theo từng bước để dễ thực hành và ứng dụng vào nhu cầu thực tế.”
        </p>

        {/* 3 Core guiding pillars (literal & faithful to prompt) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-left">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2.5 text-blue-300 font-semibold text-sm mb-1.5">
              <MessageSquare className="w-4 h-4" />
              <span>Giao tiếp tự nhiên</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Nói với AI bằng tiếng Việt như đang trao đổi với một trợ lý tận tâm.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2.5 text-blue-300 font-semibold text-sm mb-1.5">
              <Compass className="w-4 h-4" />
              <span>Từng bước rõ ràng</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Đi từ bố cục sơ khai đến giao diện hoàn chỉnh, không nhảy cóc hay lúng túng.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2.5 text-blue-300 font-semibold text-sm mb-1.5">
              <HeartHandshake className="w-4 h-4" />
              <span>Gắn liền việc dạy học</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Tạo ra sản phẩm phục vụ ngay nhu cầu chia sẻ tài liệu và kết nối học viên.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
