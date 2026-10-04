import {
  Lightbulb,
  TerminalSquare,
  LayoutGrid,
  FormInput,
  Palette,
  CheckCheck,
  SlidersHorizontal,
  CheckCircle,
} from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Lightbulb,
      title: 'Biến một ý tưởng thành kế hoạch xây dựng website rõ ràng.',
      detail: 'Không còn mung lung; bạn sẽ biết cách chia nhỏ nhu cầu của mình thành các phần nội dung mạch lạc trước khi bắt tay thực hiện.',
    },
    {
      icon: TerminalSquare,
      title: 'Viết câu lệnh để AI hiểu chính xác website mình muốn tạo.',
      detail: 'Nắm vững các câu lệnh mẫu (prompt) bằng tiếng Việt để AI sinh đúng giao diện, đúng chức năng mà không bị sai lệch ý tưởng.',
    },
    {
      icon: LayoutGrid,
      title: 'Thiết kế bố cục website khoa học, chuyên nghiệp.',
      detail: 'Sắp xếp banner, danh mục bài viết, giới thiệu và nút liên hệ theo chuẩn thị giác hài hòa, phụ huynh và học sinh dễ xem.',
    },
    {
      icon: FormInput,
      title: 'Tạo các nút, biểu mẫu và khu vực nội dung cần thiết.',
      detail: 'Dễ dàng tích hợp form đăng ký, form nhận tài liệu, bảng thông báo hoặc nút kết nối mạng xã hội.',
    },
    {
      icon: Palette,
      title: 'Điều chỉnh màu sắc, hình ảnh và nội dung.',
      detail: 'Tự do thay đổi tông màu chủ đạo theo sở thích, chèn hình ảnh cá nhân hoặc biểu trưng của trường lớp chỉ qua vài thao tác đơn giản.',
    },
    {
      icon: CheckCheck,
      title: 'Hoàn thiện website phục vụ nhu cầu thực tế.',
      detail: 'Đưa website vào sử dụng ngay để chia sẻ học liệu, thông báo sự kiện hoặc tiếp nhận học viên trực tuyến.',
    },
    {
      icon: SlidersHorizontal,
      title: 'Chủ động chỉnh sửa website khi cần.',
      detail: 'Hoàn toàn độc lập, không cần phụ thuộc hay tốn chi phí thuê người ngoài mỗi khi muốn cập nhật bài viết mới.',
    },
  ];

  return (
    <section id="loi-ich" className="py-16 md:py-20 bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-semibold mb-3 border border-emerald-200">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Giá trị thực tế nhận được</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            SAU KHÓA HỌC, BẠN SẼ HIỂU CÁCH
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            Từng bước nắm quyền làm chủ công nghệ, biến những trở ngại kỹ thuật thành niềm hứng khởi sáng tạo.
          </p>
        </div>

        {/* Benefits List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50/40 hover:border-blue-200 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
