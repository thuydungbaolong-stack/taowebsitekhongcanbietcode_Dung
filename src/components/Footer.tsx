import { Laptop, MessageCircle, ArrowUp, ExternalLink } from 'lucide-react';

interface FooterProps {
  onRegisterClick: () => void;
}

export default function Footer({ onRegisterClick }: FooterProps) {
  const ZALO_GROUP_URL = 'https://zalo.me/g/rhpd0kjku1sdy0wlmdxe';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Khóa học: Tạo Website Không Cần Biết Code
              </h3>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              Hỗ trợ giáo viên ứng dụng AI để hiện thực hóa ý tưởng số.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              id="footer-register-btn"
              type="button"
              onClick={onRegisterClick}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-bold shadow-md transition-all cursor-pointer"
            >
              ĐĂNG KÝ KHÓA HỌC
            </button>

            <a
              id="footer-zalo-btn"
              href={ZALO_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-sm font-semibold transition-colors"
              title="Dành cho Thầy/Cô đã hoàn tất chuyển khoản học phí"
            >
              <MessageCircle className="w-4 h-4 text-blue-400" />
              <span>THAM GIA NHÓM ZALO</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} Khóa học Tạo Website Không Cần Biết Code. Dành riêng cho Giáo viên Việt Nam.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer py-1"
          >
            <span>Lên đầu trang</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
