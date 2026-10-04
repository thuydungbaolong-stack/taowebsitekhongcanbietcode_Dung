import {
  UserCircle,
  FileText,
  Megaphone,
  GraduationCap,
  Sparkles,
  Wrench,
  FolderGit2,
  Award,
  AlertCircle
} from 'lucide-react';

export default function WhatYouCanBuild() {
  const capabilities = [
    {
      title: 'Website giới thiệu giáo viên',
      description: 'Trang cá nhân thanh lịch giới thiệu tiểu sử, phương pháp giảng dạy và triết lý giáo dục của Thầy/Cô.',
      icon: UserCircle,
      tag: 'Trang cá nhân',
    },
    {
      title: 'Website chia sẻ tài liệu',
      description: 'Kho lưu trữ bài giảng, giáo án điện tử, file PDF và đề thi thử giúp học sinh dễ dàng tra cứu 24/7.',
      icon: FileText,
      tag: 'Tài nguyên dạy học',
    },
    {
      title: 'Website quảng bá khóa học',
      description: 'Trang giới thiệu đầy đủ lộ trình học tập, thời gian, hình thức và học phí của lớp học thêm hoặc khóa bổ trợ.',
      icon: Megaphone,
      tag: 'Giới thiệu khóa học',
    },
    {
      title: 'Landing Page tuyển sinh',
      description: 'Trang tiếp nhận đăng ký chuyên nghiệp có tích hợp biểu mẫu và hướng dẫn đóng học phí nhanh chóng.',
      icon: GraduationCap,
      tag: 'Tuyển sinh học viên',
    },
    {
      title: 'Website giới thiệu sản phẩm giáo dục',
      description: 'Giới thiệu sách tham khảo, bộ học liệu, đồ dùng dạy học hoặc giáo trình do chính Thầy/Cô biên soạn.',
      icon: Award,
      tag: 'Sản phẩm giáo dục',
    },
    {
      title: 'Công cụ hỗ trợ giáo viên',
      description: 'Bảng tính điểm tự động, công cụ chấm thi trắc nghiệm nhỏ hoặc sổ tay ghi nhớ việc giảng dạy tiện lợi.',
      icon: Wrench,
      tag: 'Tiện ích sư phạm',
    },
    {
      title: 'Trang giới thiệu dự án',
      description: 'Trưng bày các hoạt động ngoại khóa, dự án STEM/STEAM và sáng kiến kinh nghiệm của tổ bộ môn.',
      icon: FolderGit2,
      tag: 'Dự án trường lớp',
    },
    {
      title: 'Trang xây dựng thương hiệu cá nhân',
      description: 'Xây dựng hình ảnh một nhà giáo tiên phong công nghệ, chỉn chu, uy tín trong mắt phụ huynh và cộng đồng.',
      icon: Sparkles,
      tag: 'Uy tín chuyên môn',
    },
  ];

  return (
    <section id="san-pham" className="py-16 md:py-20 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs sm:text-sm font-semibold mb-3 border border-indigo-100">
            <Sparkles className="w-4 h-4" />
            <span>Ứng dụng thực tế</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bạn Có Thể Làm Được Gì Sau Khóa Học?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            Từ ý tưởng đến sản phẩm phục vụ trực tiếp cho công tác giảng dạy và xây dựng hình ảnh chuyên nghiệp.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl p-5 bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-600">
                  <span>Học theo quy trình AI</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer as explicitly required */}
        <div className="mt-8 flex items-center justify-center gap-2 p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs sm:text-sm text-amber-900 max-w-3xl mx-auto text-center">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            * Lưu ý: Khóa học hướng dẫn các dạng website mẫu trong chương trình; kết quả thực tế tùy thuộc vào mức độ thực hành và yêu cầu cụ thể của từng Thầy/Cô.
          </span>
        </div>

      </div>
    </section>
  );
}
