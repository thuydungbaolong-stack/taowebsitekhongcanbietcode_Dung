import { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Tôi không biết lập trình có học được không?',
      answer:
        'Hoàn toàn được! Khóa học được thiết kế đặc biệt dành riêng cho người mới bắt đầu, không yêu cầu bất kỳ kiến thức lập trình nào. Thầy/Cô chỉ cần tập trung vào việc sử dụng AI và mô tả mong muốn của mình bằng ngôn ngữ tự nhiên hàng ngày.',
    },
    {
      question: 'Học phí hiện tại là bao nhiêu?',
      answer:
        'Học phí gốc của khóa học là 999.000Đ. Ưu đãi đăng ký ngay hôm nay giảm 500.000Đ, chỉ còn 499.000Đ trọn gói.',
    },
    {
      question: 'Tôi đăng ký như thế nào?',
      answer:
        'Quy trình đăng ký gồm 4 bước rất nhanh chóng: 1. Điền Google Form thông tin → 2. Chuyển khoản học phí ưu đãi 499.000Đ → 3. Bấm xác nhận đã chuyển khoản trên website → 4. Tham gia nhóm Zalo khóa học.',
    },
    {
      question: 'Quà tặng của khóa học là gì?',
      answer:
        'Quà tặng đặc biệt dành cho học viên là bộ 10 trợ lý AI được xây dựng trên ChatGPT và Gemini dành cho giáo viên, giúp hỗ trợ đắc lực trong công tác giảng dạy và xử lý công việc sư phạm.',
    },
    {
      question: 'Sau khi chuyển khoản tôi cần làm gì?',
      answer:
        'Sau khi chuyển khoản thành công, Thầy/Cô hãy tích chọn ô xác nhận trên website và bấm nút "Tôi đã chuyển khoản", sau đó bấm nút "Tham gia nhóm Zalo khóa học" để nhận thông báo lịch học và tài liệu hướng dẫn tiếp theo.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-20 bg-white border-t border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-semibold mb-3 border border-blue-100">
            <HelpCircle className="w-4 h-4" />
            <span>Giải đáp thắc mắc</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            CÂU HỎI THƯỜNG GẶP
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Những thông tin cần thiết giúp Thầy/Cô yên tâm đăng ký và tham gia khóa học.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 overflow-hidden transition-colors bg-slate-50/50 hover:bg-slate-50"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-600 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600 border-blue-200' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200/50 bg-white">
                    <p className="pt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
