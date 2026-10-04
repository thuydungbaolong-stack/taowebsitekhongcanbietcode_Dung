import { UserCheck, Megaphone, Wrench, Sparkles, GraduationCap } from 'lucide-react';

export default function TargetAudience() {
  const audienceGroups = [
    {
      id: 'personal',
      title: 'Giáo viên muốn có website cá nhân',
      description: 'Tạo trang giới thiệu bản thân, thành tích, tài liệu và hoạt động chuyên môn để phụ huynh, đồng nghiệp và học sinh dễ dàng theo dõi.',
      badge: 'Thương hiệu cá nhân',
      icon: UserCheck,
      color: 'blue',
    },
    {
      id: 'promote',
      title: 'Giáo viên muốn quảng bá khóa học',
      description: 'Tạo website giới thiệu khóa học, chương trình đào tạo, lớp bổ trợ hoặc workshop chuyên môn một cách chuyên nghiệp và thuyết phục.',
      badge: 'Tuyển sinh & Đào tạo',
      icon: Megaphone,
      color: 'indigo',
    },
    {
      id: 'tools',
      title: 'Giáo viên muốn tạo công cụ giáo dục',
      description: 'Tạo các ứng dụng, biểu mẫu tương tác và công cụ nhỏ phục vụ công việc dạy học, chấm bài, lưu trữ tài nguyên hàng ngày.',
      badge: 'Công cụ giảng dạy',
      icon: Wrench,
      color: 'teal',
    },
    {
      id: 'beginners',
      title: 'Người chưa từng học lập trình',
      description: 'Vẫn có thể bắt đầu tự tin thông qua việc mô tả ý tưởng bằng ngôn ngữ tự nhiên, từng bước nhờ sự đồng hành của trí tuệ nhân tạo (AI).',
      badge: 'Không cần biết code',
      icon: Sparkles,
      color: 'amber',
    },
  ];

  const levels = [
    'Giáo viên Mầm non',
    'Giáo viên Tiểu học',
    'Giáo viên THCS',
    'Giáo viên THPT',
    'Người làm trong lĩnh vực giáo dục',
  ];

  return (
    <section id="danh-cho-ai" className="py-16 md:py-20 bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-semibold mb-3 border border-blue-100">
            <GraduationCap className="w-4 h-4" />
            <span>Đối tượng phù hợp</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Khóa Học Này Dành Cho Ai?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            Thiết kế thân thiện, dễ hiểu, bám sát nhu cầu giảng dạy và phát triển chuyên môn của thầy cô Việt Nam.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {audienceGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.id}
                className="group relative rounded-2xl p-6 sm:p-7 bg-slate-50/80 border border-slate-200/90 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/15 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <div className="inline-block px-2.5 py-0.5 rounded-md bg-blue-100/70 text-blue-800 text-xs font-semibold">
                      {group.badge}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {group.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {group.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Education Levels Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-blue-50/60 border border-blue-100 text-center">
          <p className="text-xs sm:text-sm font-semibold text-slate-600 mb-3">
            Đặc biệt phù hợp và tối ưu cho:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {levels.map((level, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-white text-slate-800 text-xs sm:text-sm font-medium border border-blue-200/70 shadow-2xs"
              >
                ✓ {level}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
