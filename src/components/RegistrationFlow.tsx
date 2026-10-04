import { useState, useRef, useEffect, type FormEvent } from 'react';
import {
  ExternalLink,
  Copy,
  Check,
  Building2,
  CreditCard,
  QrCode,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  AlertCircle,
  Mail,
  User,
  Phone,
  CheckCircle2,
  Send,
  Edit3
} from 'lucide-react';
import type { RegistrationRecord } from '../types';

interface RegistrationFlowProps {
  onCopyNotice: (msg: string) => void;
}

export default function RegistrationFlow({ onCopyNotice }: RegistrationFlowProps) {
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [copiedContent, setCopiedContent] = useState(false);
  
  // Registration Form Fields (3 main questions from Google Form)
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subjectNote, setSubjectNote] = useState('');

  // Form Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccess, setIsSubmittedSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<{ fullName?: string; phone?: string; email?: string }>({});

  const [registeredRecords, setRegisteredRecords] = useState<RegistrationRecord[]>(() => {
    try {
      const saved = localStorage.getItem('utc_registered_students_list');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Confirmation state
  const [isConfirmedCheckbox, setIsConfirmedCheckbox] = useState(false);
  const [hasSubmittedConfirmation, setHasSubmittedConfirmation] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  // Official Google Form Links & Bank Details
  const GOOGLE_FORM_URL = 'https://forms.gle/kV3Dh231XLyxGd6M8';
  const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeRmgTqzZ9tciq-As_7bqhIVXOTQhG_18lH3NLIKGBGR4hg3w/formResponse';
  const ZALO_GROUP_URL = 'https://zalo.me/g/rhpd0kjku1sdy0wlmdxe';
  const ORGANIZER_GMAIL = 'ptathanhtam@gmail.com';
  const BANK_NAME = 'MB';
  const ACCOUNT_NUMBER = '33962571826';
  const DISCOUNT_AMOUNT = '499.000Đ';

  // Dynamic or default transfer message based on registered name & phone
  const studentNameClean = fullName.trim();
  const studentPhoneClean = phone.trim();

  const generatedContent = studentNameClean && studentPhoneClean
    ? `${studentNameClean.toUpperCase()} ${studentPhoneClean} WEBSITE`
    : 'HỌ TÊN + SĐT + WEBSITE';

  const qrImageUrl = `https://img.vietqr.io/image/MB-33962571826-compact2.png?amount=499000&addInfo=${encodeURIComponent(
    studentNameClean && studentPhoneClean
      ? `${studentNameClean} ${studentPhoneClean} WEBSITE`
      : 'HO TEN SDT WEBSITE'
  )}`;

  const handleCopyAccount = async () => {
    try {
      await navigator.clipboard.writeText(ACCOUNT_NUMBER);
      setCopiedAccount(true);
      onCopyNotice('Đã sao chép số tài khoản: 33962571826');
      setTimeout(() => setCopiedAccount(false), 2500);
    } catch {
      onCopyNotice('Sao chép: 33962571826');
    }
  };

  const handleCopyContent = async () => {
    const textToCopy = studentNameClean && studentPhoneClean
      ? `${studentNameClean.toUpperCase()} ${studentPhoneClean} WEBSITE`
      : 'HO TEN SDT WEBSITE';
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedContent(true);
      onCopyNotice(`Đã sao chép nội dung: ${textToCopy}`);
      setTimeout(() => setCopiedContent(false), 2500);
    } catch {
      onCopyNotice(`Nội dung: ${textToCopy}`);
    }
  };

  const validateForm = () => {
    const errors: { fullName?: string; phone?: string; email?: string } = {};

    if (!fullName.trim()) {
      errors.fullName = 'Vui lòng nhập Họ và tên của Thầy/Cô';
    } else if (fullName.trim().length < 2) {
      errors.fullName = 'Họ và tên quá ngắn, vui lòng nhập đầy đủ';
    }

    if (!phone.trim()) {
      errors.phone = 'Vui lòng nhập Số điện thoại Zalo';
    } else if (!/^[0-9+.\s]{8,15}$/.test(phone.trim())) {
      errors.phone = 'Số điện thoại không hợp lệ (cần từ 9 đến 11 số)';
    }

    if (!email.trim()) {
      errors.email = 'Vui lòng nhập Gmail nhận video và tài liệu';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = 'Địa chỉ Gmail không đúng định dạng (ví dụ: hoten@gmail.com)';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const newRecord: RegistrationRecord = {
      id: Date.now().toString(),
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      note: subjectNote.trim(),
      registeredAt: new Date().toISOString()
    };

    // Save record to local state and history list
    const updated = [newRecord, ...registeredRecords];
    setRegisteredRecords(updated);
    try {
      localStorage.setItem('utc_registered_students_list', JSON.stringify(updated));
      localStorage.setItem('utc_student_registration', JSON.stringify(newRecord));
    } catch {
      // Ignore storage errors in private mode
    }

    // 1. Submit through standard browser form target to background hidden iframe (Google Form)
    if (formRef.current) {
      try {
        formRef.current.submit();
      } catch (err) {
        console.warn('Form submit fallback:', err);
      }
    }

    // 2. Send direct email to Organizer Gmail (ptathanhtam@gmail.com) via FormSubmit
    try {
      const emailPayload = {
        _subject: `[ĐĂNG KÝ HỌC VIÊN MỚI] Khóa học Website - ${fullName.trim()} - ${phone.trim()}`,
        _template: 'table',
        _captcha: 'false',
        _replyto: email.trim(),
        'Họ và tên học viên': fullName.trim(),
        'Số điện thoại Zalo': phone.trim(),
        'Gmail nhận video & tài liệu': email.trim(),
        'Ghi chú môn học': subjectNote.trim() || 'Không có',
        'Thời gian đăng ký': new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }),
        'Học phí ưu đãi': '499.000Đ (Ngân hàng Quân Đội MB: 33962571826)',
        'Cú pháp chuyển khoản': `${fullName.trim().toUpperCase()} ${phone.trim()} WEBSITE`
      };

      fetch(`https://formsubmit.co/ajax/${ORGANIZER_GMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      }).catch((err) => {
        console.warn('Email dispatch warning:', err);
      });
    } catch (err) {
      console.warn('Email trigger error:', err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmittedSuccess(true);
      onCopyNotice('Đăng ký thành công! Thông tin đã được gửi về Gmail Ban tổ chức (ptathanhtam@gmail.com).');
      
      // Auto smooth scroll to step 2 after submission
      setTimeout(() => {
        const step2Element = document.getElementById('thanh-toan');
        if (step2Element) {
          step2Element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }, 600);
  };

  const handleConfirmTransfer = () => {
    if (!isConfirmedCheckbox) {
      alert('Vui lòng tích chọn ô xác nhận đã hoàn thành chuyển khoản học phí trước khi bấm.');
      return;
    }
    setHasSubmittedConfirmation(true);
  };

  // Gmail pre-filled mailto URL for direct backup
  const directMailtoUrl = `mailto:${ORGANIZER_GMAIL}?subject=${encodeURIComponent(`[Đăng ký Khóa học Website] - ${fullName.trim()} - ${phone.trim()}`)}&body=${encodeURIComponent(`Kính gửi Ban tổ chức,\n\nTôi xin đăng ký tham gia khóa học "Tạo Website Không Cần Biết Code":\n- Họ và tên: ${fullName.trim()}\n- Số điện thoại Zalo: ${phone.trim()}\n- Gmail nhận video: ${email.trim()}\n- Ghi chú/Môn học: ${subjectNote.trim() || 'Không có'}\n\nTôi đã thực hiện chuyển khoản 499.000Đ vào số tài khoản MB 33962571826.\nXin cảm ơn!`)}`;

  return (
    <section id="dang-ky" className="py-16 md:py-24 bg-slate-50 relative scroll-mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <span>Quy trình 4 bước đơn giản</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ĐĂNG KÝ KHÓA HỌC
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            Vui lòng điền thông tin đăng ký trực tiếp bên dưới trước khi thực hiện chuyển khoản.
          </p>
        </div>

        {/* Step Flow Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <div className={`p-3.5 rounded-xl border text-center shadow-xs transition-all ${
            isSubmittedSuccess ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-blue-200 text-slate-800'
          }`}>
            <span className={`text-xs font-bold block ${isSubmittedSuccess ? 'text-blue-100' : 'text-blue-600'}`}>BƯỚC 1</span>
            <span className="text-xs sm:text-sm font-semibold flex items-center justify-center gap-1">
              <span>Điền Form</span>
              {isSubmittedSuccess && <Check className="w-3.5 h-3.5" />}
            </span>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-blue-200 text-center shadow-xs">
            <span className="text-xs font-bold text-blue-600 block">BƯỚC 2</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-800">Chuyển khoản</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-blue-200 text-center shadow-xs">
            <span className="text-xs font-bold text-blue-600 block">BƯỚC 3</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-800">Xác nhận</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-emerald-300 bg-emerald-50/50 text-center shadow-xs">
            <span className="text-xs font-bold text-emerald-700 block">BƯỚC 4</span>
            <span className="text-xs sm:text-sm font-semibold text-emerald-900">Vào nhóm Zalo</span>
          </div>
        </div>

        {/* ================= STEP 1: NATIVE QUESTION FORM ON WEBSITE ================= */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-lg p-6 sm:p-9 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-sm shadow-blue-500/30">
                1
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">Bước 1</span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  ĐIỀN THÔNG TIN ĐĂNG KÝ HỌC VIÊN
                </h3>
              </div>
            </div>

            {/* Direct Google Form Backup Link */}
            <a
              id="google-form-external-link"
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 transition-colors border border-slate-200 shrink-0"
              title="Mở Google Form gốc trên Google Drive"
            >
              <span>Link Google Form phụ</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-slate-600 text-sm sm:text-base mb-6">
            Thầy/Cô vui lòng điền <strong>3 câu hỏi bắt buộc</strong> bên dưới. Thông tin được hệ thống gửi trực tiếp về <strong>Gmail Ban tổ chức ({ORGANIZER_GMAIL})</strong> để cấp tài khoản học và gửi video tài liệu bài giảng.
          </p>

          {/* Hidden iframe for background Google Form transmission without leaving page */}
          <iframe
            name="hidden_google_form_iframe"
            id="hidden_google_form_iframe"
            className="hidden"
            title="hidden_submission"
          />

          {!isSubmittedSuccess ? (
            /* ============ NATIVE FORM INTERFACE ============ */
            <form
              ref={formRef}
              action={GOOGLE_FORM_ACTION_URL}
              method="POST"
              target="hidden_google_form_iframe"
              onSubmit={handleSubmitForm}
              className="space-y-6"
            >
              {/* Hidden Google Form Entry Mapping */}
              <input type="hidden" name="entry.1476937236" value={fullName} />
              <input type="hidden" name="entry.57833854" value={phone} />
              <input type="hidden" name="entry.365809183" value={email} />
              <input type="hidden" name="fvv" value="1" />
              <input type="hidden" name="pageHistory" value="0" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* QUESTION 1: HỌ VÀ TÊN */}
                <div className="space-y-2">
                  <label htmlFor="input-full-name" className="flex items-center gap-1.5 text-sm font-bold text-slate-800">
                    <User className="w-4 h-4 text-blue-600" />
                    <span>1. Họ và tên Thầy/Cô</span>
                    <span className="text-red-500 font-black">*</span>
                  </label>
                  <input
                    id="input-full-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (formErrors.fullName) setFormErrors({ ...formErrors, fullName: undefined });
                    }}
                    placeholder="Ví dụ: Nguyễn Văn An, Cô Phạm Hương..."
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm sm:text-base text-slate-900 placeholder:text-slate-400 bg-slate-50/60 focus:bg-white focus:outline-hidden transition-all ${
                      formErrors.fullName
                        ? 'border-red-400 ring-2 ring-red-100 bg-red-50/30'
                        : 'border-slate-300 focus:border-blue-600 focus:ring-3 focus:ring-blue-100'
                    }`}
                  />
                  {formErrors.fullName ? (
                    <p className="text-xs font-semibold text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{formErrors.fullName}</span>
                    </p>
                  ) : (
                    <p className="text-[11px] text-slate-500">Dùng để làm danh sách lớp & cấp quyền học tập</p>
                  )}
                </div>

                {/* QUESTION 2: SỐ ĐIỆN THOẠI ZALO */}
                <div className="space-y-2">
                  <label htmlFor="input-phone-zalo" className="flex items-center gap-1.5 text-sm font-bold text-slate-800">
                    <Phone className="w-4 h-4 text-indigo-600" />
                    <span>2. Số điện thoại Zalo</span>
                    <span className="text-red-500 font-black">*</span>
                  </label>
                  <input
                    id="input-phone-zalo"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (formErrors.phone) setFormErrors({ ...formErrors, phone: undefined });
                    }}
                    placeholder="Ví dụ: 0912 345 678"
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm sm:text-base text-slate-900 placeholder:text-slate-400 bg-slate-50/60 focus:bg-white focus:outline-hidden transition-all ${
                      formErrors.phone
                        ? 'border-red-400 ring-2 ring-red-100 bg-red-50/30'
                        : 'border-slate-300 focus:border-indigo-600 focus:ring-3 focus:ring-indigo-100'
                    }`}
                  />
                  {formErrors.phone ? (
                    <p className="text-xs font-semibold text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{formErrors.phone}</span>
                    </p>
                  ) : (
                    <p className="text-[11px] text-slate-500">Dùng để mời Thầy/Cô vào nhóm hỗ trợ 1:1 và kết bạn Zalo</p>
                  )}
                </div>

              </div>

              {/* QUESTION 3: GMAIL NHẬN VIDEO */}
              <div className="space-y-2">
                <label htmlFor="input-email-gmail" className="flex items-center gap-1.5 text-sm font-bold text-slate-800">
                  <Mail className="w-4 h-4 text-emerald-600" />
                  <span>3. Gmail nhận video & tài liệu bài giảng</span>
                  <span className="text-red-500 font-black">*</span>
                </label>
                <input
                  id="input-email-gmail"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                  }}
                  placeholder="Ví dụ: hoten.giaovien@gmail.com"
                  className={`w-full px-4 py-3.5 rounded-xl border text-sm sm:text-base text-slate-900 placeholder:text-slate-400 bg-slate-50/60 focus:bg-white focus:outline-hidden transition-all ${
                    formErrors.email
                      ? 'border-red-400 ring-2 ring-red-100 bg-red-50/30'
                      : 'border-slate-300 focus:border-emerald-600 focus:ring-3 focus:ring-emerald-100'
                  }`}
                />
                {formErrors.email ? (
                  <p className="text-xs font-semibold text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{formErrors.email}</span>
                  </p>
                ) : (
                  <p className="text-[11px] text-slate-500">
                    Địa chỉ Gmail dùng để cấp quyền truy cập Google Drive xem video trọn đời & nhận bộ 10 trợ lý AI
                  </p>
                )}
              </div>

              {/* OPTIONAL: MÔN HỌC / GHI CHÚ */}
              <div className="space-y-2">
                <label htmlFor="input-note" className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700">
                  <span>Môn học đang giảng dạy / Ghi chú thêm (Không bắt buộc)</span>
                </label>
                <input
                  id="input-note"
                  type="text"
                  value={subjectNote}
                  onChange={(e) => setSubjectNote(e.target.value)}
                  placeholder="Ví dụ: Giáo viên Toán THCS, Giáo viên Tiếng Anh Tiểu học, Muốn làm web cho nhà trường..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/40 focus:bg-white focus:border-blue-500 focus:outline-hidden"
                />
              </div>

              {/* Reassurance banner */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Thông tin được mã hóa bảo mật. Khi nhấn <strong>&quot;Gửi thông tin đăng ký&quot;</strong>, dữ liệu sẽ được lưu tự động và gửi thông báo trực tiếp về Gmail Ban tổ chức để chuẩn bị tài liệu cho Thầy/Cô.
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  id="submit-registration-form-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-base sm:text-lg shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>ĐANG GỬI THÔNG TIN...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>GỬI THÔNG TIN ĐĂNG KÝ & CHUYỂN SANG BƯỚC 2</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : (
            /* ============ SUCCESS NOTIFICATION STATE ============ */
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/50 border-2 border-emerald-300 space-y-5 animate-fadeIn">
              
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-600/30 mt-0.5">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-200/70 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-1">
                    <span>Đã ghi nhận thông tin thành công</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-slate-900">
                    Cảm ơn Thầy/Cô {fullName.trim()}!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Thông tin đăng ký đã được gửi trực tiếp về Gmail Ban tổ chức (<strong>{ORGANIZER_GMAIL}</strong>).
                  </p>
                </div>
              </div>

              {/* Summary of submitted questions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-white border border-emerald-200">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase block">1. Họ và tên</span>
                  <span className="text-sm font-bold text-slate-900 block truncate">{fullName}</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase block">2. SĐT Zalo</span>
                  <span className="text-sm font-bold text-slate-900 block truncate">{phone}</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase block">3. Gmail nhận video</span>
                  <span className="text-sm font-bold text-slate-900 block truncate">{email}</span>
                </div>
              </div>

              {/* Action buttons after submission */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#thanh-toan"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Chuyển xuống Bước 2: Chuyển khoản học phí</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={directMailtoUrl}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm border border-slate-300 transition-colors"
                  title="Gửi email xác nhận bổ sung trực tiếp từ hòm thư của Thầy/Cô"
                >
                  <Mail className="w-4 h-4 text-red-500" />
                  <span>Gửi bản sao qua Gmail</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsSubmittedSuccess(false)}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-3 rounded-xl text-slate-500 hover:text-slate-800 text-xs font-medium transition-colors cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Sửa lại thông tin</span>
                </button>
              </div>

            </div>
          )}

        </div>


        {/* ================= STEP 2: BANK TRANSFER ================= */}
        <div id="thanh-toan" className="rounded-3xl bg-white border border-slate-200 shadow-lg p-6 sm:p-9 mb-10 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
              2
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">Bước 2</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                BƯỚC 2 – CHUYỂN KHOẢN HỌC PHÍ
              </h3>
            </div>
          </div>

          {/* Large Transfer Details Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-blue-100 p-5 sm:p-7">
            
            {/* Left: Text Information & Copy Buttons */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Bank row */}
              <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">Ngân hàng</span>
                    <span className="text-base sm:text-lg font-bold text-slate-900">{BANK_NAME} (Ngân hàng Quân Đội)</span>
                  </div>
                </div>
              </div>

              {/* Account number row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 bg-white rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">Số tài khoản</span>
                    <span className="text-xl sm:text-2xl font-black text-blue-700 font-mono tracking-wider">
                      {ACCOUNT_NUMBER}
                    </span>
                  </div>
                </div>

                <button
                  id="copy-account-number-btn"
                  type="button"
                  onClick={handleCopyAccount}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs sm:text-sm transition-colors border border-blue-200 cursor-pointer"
                >
                  {copiedAccount ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedAccount ? 'ĐÃ SAO CHÉP!' : 'SAO CHÉP SỐ TÀI KHOẢN'}</span>
                </button>
              </div>

              {/* Discount Amount row */}
              <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-semibold block">Số tiền ưu đãi</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-orange-600">
                    {DISCOUNT_AMOUNT}
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                  Đã áp dụng giảm 500K
                </span>
              </div>

              {/* Transfer Syntax row */}
              <div className="p-4 bg-white rounded-xl border-2 border-dashed border-amber-300 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase">Nội dung chuyển khoản:</span>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-sm">Bắt buộc đúng cú pháp</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 text-amber-400 font-mono font-bold text-sm sm:text-base tracking-wide text-center select-all">
                  {generatedContent}
                </div>

                <div className="text-xs text-slate-500 font-medium">
                  Ví dụ minh họa: <span className="font-bold text-slate-700">NGUYEN VAN A 0912345678 WEBSITE</span>
                </div>

                {/* Quick Helper inputs for teacher */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <span className="text-xs text-slate-600 block">
                    Cú pháp chuyển khoản tự động cập nhật theo thông tin Thầy/Cô đã điền ở Bước 1:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Họ và tên Thầy/Cô"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-500 bg-slate-50"
                    />
                    <input
                      type="tel"
                      placeholder="Số điện thoại Zalo"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-500 bg-slate-50"
                    />
                  </div>
                </div>

                <button
                  id="copy-transfer-note-btn"
                  type="button"
                  onClick={handleCopyContent}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer shadow-xs"
                >
                  {copiedContent ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedContent ? 'ĐÃ SAO CHÉP CÚ PHÁP!' : 'SAO CHÉP NỘI DUNG CHUYỂN KHOẢN'}</span>
                </button>
              </div>

              {/* Warning note */}
              <div className="flex items-start gap-2 text-xs text-amber-900 bg-amber-50 p-3 rounded-xl border border-amber-200/80">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="font-medium">
                  Vui lòng nhập đúng nội dung chuyển khoản để thuận tiện cho việc xác nhận đăng ký.
                </p>
              </div>

            </div>

            {/* Right: VietQR Code Preview */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-slate-200/80 text-center shadow-xs">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-2">
                <QrCode className="w-4 h-4 text-blue-600" />
                <span>Quét mã VietQR bằng App Ngân hàng</span>
              </div>
              <div className="p-2 bg-white rounded-xl border border-slate-200 shadow-xs max-w-[220px]">
                <img
                  src={qrImageUrl}
                  alt="Mã QR chuyển khoản học phí MB 33962571826"
                  className="w-full h-auto rounded-lg object-contain"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-2 font-medium">
                Mở app ngân hàng bất kỳ (MB, Vietcombank, Techcombank, VPBank,...) quét mã để tự động điền STK và số tiền 499.000Đ.
              </p>
            </div>

          </div>
        </div>

        {/* ================= STEP 3: CONFIRMATION & ZALO UNLOCK ================= */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-lg p-6 sm:p-9">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
              3
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Bước 3</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                XÁC NHẬN ĐÃ CHUYỂN KHOẢN
              </h3>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-5">
            
            {/* Checkbox item */}
            <label className="flex items-start gap-3 cursor-pointer select-none group">
              <input
                id="transfer-confirm-checkbox"
                type="checkbox"
                checked={isConfirmedCheckbox}
                onChange={(e) => setIsConfirmedCheckbox(e.target.checked)}
                className="w-5 h-5 mt-0.5 rounded-sm border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <span className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                Tôi xác nhận mình đã hoàn thành chuyển khoản học phí.
              </span>
            </label>

            {/* Confirm button */}
            {!hasSubmittedConfirmation ? (
              <button
                id="confirm-transfer-btn"
                type="button"
                onClick={handleConfirmTransfer}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-extrabold text-base sm:text-lg transition-all cursor-pointer ${
                  isConfirmedCheckbox
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20'
                    : 'bg-slate-200 text-slate-500 hover:bg-slate-300'
                }`}
              >
                <ShieldCheck className="w-5 h-5" />
                <span>TÔI ĐÃ CHUYỂN KHOẢN</span>
              </button>
            ) : (
              /* Success & Zalo Unlock Area */
              <div className="pt-2 space-y-5 animate-fadeIn">
                
                {/* Notice message */}
                <div className="p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-400 text-emerald-950">
                  <div className="flex items-center gap-2 font-bold text-lg text-emerald-900 mb-1">
                    <Check className="w-6 h-6 text-emerald-600" />
                    <span>Xác nhận thành công!</span>
                  </div>
                  <p className="text-base font-semibold leading-relaxed">
                    Cảm ơn Thầy/Cô đã đăng ký khóa học. Vui lòng tham gia nhóm Zalo để nhận thông báo và hướng dẫn tiếp theo.
                  </p>
                </div>

                {/* Zalo Button */}
                <div className="pt-2">
                  <a
                    id="join-zalo-group-btn"
                    href={ZALO_GROUP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-lg sm:text-xl shadow-xl shadow-blue-600/30 hover:shadow-blue-600/40 transition-all cursor-pointer transform hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span>THAM GIA NHÓM ZALO KHÓA HỌC</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

              </div>
            )}

            {/* Crucial legal/disclaimer note */}
            <p className="text-xs text-slate-500 italic pt-1">
              * Việc bấm xác nhận không thay thế bước kiểm tra giao dịch của người tổ chức khóa học.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
