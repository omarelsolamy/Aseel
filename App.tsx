
import React from 'react';
import { 
  Users, 
  Calendar, 
  MessageCircle, 
  FileText, 
  BarChart3, 
  Globe, 
  ShieldCheck, 
  ChevronLeft,
  Mail,
  Smartphone,
  CheckCircle2,
  LayoutDashboard,
  Clock,
  ClipboardCheck,
  SmartphoneNfc
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/971509174676";
const CONTACT_EMAIL = "info@ctdigital.ae";

const HorseIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M12 2C10.5 2 9 3 8 4.5C7 6 7 8 7 9.5C7 11 8.5 12 10 12C11 12 12.5 11.5 13.5 10.5C14.5 9.5 15.5 8.5 16 7C16.5 5.5 16.5 4 15.5 3C14.5 2 13.5 2 12 2Z" 
      fill="currentColor"
    />
    <path 
      d="M7 9.5C7 11.5 5 13.5 3 14C4.5 15.5 6.5 16.5 8.5 16.5H15.5C17.5 16.5 19.5 15.5 21 14C19 13.5 17 11.5 17 9.5L12 12L7 9.5Z" 
      fill="currentColor"
    />
    <path 
      d="M8.5 16.5V21C8.5 21.5 8.9 22 9.4 22H11C11.6 22 12 21.5 12 21V18" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    <path 
      d="M15.5 16.5V21C15.5 21.5 15.1 22 14.6 22H13C12.4 22 12 21.5 12 21V18" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
  </svg>
);

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-4">
    <div className="container mx-auto px-6 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
          <HorseIcon className="text-slate-900 w-8 h-8" />
        </div>
        <div>
          <span className="text-2xl font-extrabold text-white tracking-tight block leading-none">أصيل</span>
          <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest">Stable Management</span>
        </div>
      </div>
      <div className="hidden md:flex gap-8 text-slate-300 font-medium">
        <a href="#features" className="hover:text-amber-400 transition-colors">المميزات</a>
        <a href="#preview" className="hover:text-amber-400 transition-colors">عن النظام</a>
        <a href="#contact" className="hover:text-amber-400 transition-colors">تواصل معنا</a>
      </div>
      <a 
        href={WHATSAPP_LINK}
        className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-2 rounded-full font-bold transition-all shadow-lg shadow-amber-500/10 active:scale-95"
      >
        اطلب العرض
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-l from-slate-950 via-slate-950/40 to-transparent z-10"></div>
      <img 
        src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2000&auto=format&fit=crop" 
        className="w-full h-full object-cover object-center transform scale-105 animate-slow-zoom"
        alt="Aseel Hero Horse"
      />
    </div>
    
    <div className="container mx-auto px-6 relative z-20">
      <div className="max-w-3xl text-right">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 mb-6 backdrop-blur-sm">
          <ShieldCheck className="w-4 h-4" />
          <span className="text-sm font-bold tracking-wide italic">نظام إدارة الإسطبلات السحابي</span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
          إدارة إسطبلك أصبحت <br />
          <span className="text-transparent bg-clip-text gold-gradient">أسهل وأكثر دقة</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl drop-shadow-md">
          منصة "أصيل" هي الحل الرقمي المتكامل لمتابعة المتدربين، تسجيل الحضور، إدارة الخيول، والتقارير المالية، مع ميزة الإشعارات التلقائية عبر واتساب.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <a 
            href={WHATSAPP_LINK}
            className="group flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-950 px-10 py-4 rounded-xl font-bold text-lg shadow-xl transition-all"
          >
            جرب النظام الآن
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </a>
          
          <a 
            href={WHATSAPP_LINK}
            className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
          >
            تحدث مع المبيعات
          </a>
        </div>
      </div>
    </div>

    <style>{`
      @keyframes slow-zoom {
        0% { transform: scale(1); }
        100% { transform: scale(1.1); }
      }
      .animate-slow-zoom {
        animation: slow-zoom 20s infinite alternate ease-in-out;
      }
    `}</style>
  </header>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="glass-card p-8 rounded-3xl hover:bg-white/5 transition-all border border-white/5 group">
    <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:scale-110 transition-all shadow-lg">
      <Icon className="w-8 h-8 text-amber-500 group-hover:text-slate-900" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

const Features = () => (
  <section id="features" className="py-24 bg-slate-950">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-amber-500 font-bold text-sm tracking-widest uppercase mb-2">مميزات النظام</h2>
        <h3 className="text-3xl md:text-5xl font-black text-white">حلول تقنية لكل تفاصيل الإسطبل</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard 
          icon={Users} 
          title="إدارة المتدربين والزوار" 
          description="تسجيل كامل للمتدربين، تتبع الباقات المشتركين بها، وعدد الحصص المستهلكة والمتبقية."
        />
        <FeatureCard 
          icon={SmartphoneNfc} 
          title="تكامل واتساب آلي" 
          description="إرسال إشعارات تلقائية للعملاء بمواعيد الحصص، تأكيدات الدفع، ورسائل الترحيب."
        />
        <FeatureCard 
          icon={HorseIcon} 
          title="إدارة الخيول والإيواء" 
          description="سجل شامل لكل خيل، يشمل الحالة الصحية، مواعيد التحصين، وتفاصيل الإيواء اليومي."
        />
        <FeatureCard 
          icon={FileText} 
          title="توليد العقود PDF" 
          description="إصدار عقود الإيواء والتعهدات القانونية آلياً مع إمكانية طباعتها أو مشاركتها كملف PDF."
        />
        <FeatureCard 
          icon={BarChart3} 
          title="الماليات والتقارير" 
          description="نظام مالي مبسط لتتبع الدخل والمصروفات، مع تقارير دورية تساعدك على اتخاذ القرار."
        />
        <FeatureCard 
          icon={ClipboardCheck} 
          title="العمليات اليومية والحضور" 
          description="تسجيل حضور المتدربين والمدربين، وتنظيم جدول الحصص اليومي بكل سلاسة."
        />
      </div>
    </div>
  </section>
);

const WhyAseel = () => (
  <section id="preview" className="py-24 bg-slate-900/50">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="relative group">
            <div className="absolute -inset-4 bg-amber-500/20 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative glass-card p-4 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1599053581540-248ea75b59cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvcnNlfGVufDB8fDB8fHww" 
                className="w-full h-auto rounded-3xl opacity-90 shadow-inner group-hover:scale-105 transition-transform duration-700"
                alt="Professional Stable Care"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">لماذا يختار أصحاب الإسطبلات "أصيل"؟</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">واجهة مستخدم احترافية</h4>
                <p className="text-slate-400">صُمم النظام ليكون عملياً وسهل الاستخدام، مما يقلل من وقت تدريب الموظفين.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">سرعة في الإنجاز</h4>
                <p className="text-slate-400">أتمتة العمليات الإدارية تمنحك فرصة أكبر للإشراف الفعلي على الخيول والتدريبات.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">دقة في البيانات</h4>
                <p className="text-slate-400">تخلص من أخطاء السجلات الورقية، واحصل على بيانات دقيقة لحظة بلحظة.</p>
              </div>
            </div>
          </div>
          <a 
            href={WHATSAPP_LINK}
            className="mt-10 inline-block bg-white text-slate-950 px-10 py-3 rounded-xl font-bold hover:bg-amber-500 transition-all shadow-xl active:scale-95"
          >
            تواصل معنا لتجربة النظام
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center">
              <HorseIcon className="text-slate-900 w-6 h-6" />
            </div>
            <span className="text-2xl font-black italic tracking-tight">أصيل</span>
          </div>
          <p className="text-slate-500 leading-relaxed max-w-sm">
            نظام متكامل لإدارة الإسطبلات يجمع بين سهولة الاستخدام وقوة التقارير السحابية لخدمة ملاك الخيل في المنطقة العربية.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 text-white/90">تواصل معنا</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-amber-500" />
              <a href={WHATSAPP_LINK} className="text-slate-400 hover:text-white transition-colors">+20 101 941 8796</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-amber-500" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-400 hover:text-white transition-colors">{CONTACT_EMAIL}</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 text-white/90">روابط سريعة</h4>
          <ul className="space-y-4">
            <li><a href="#features" className="text-slate-400 hover:text-white transition-colors">المميزات والخصائص</a></li>
            <li><a href={WHATSAPP_LINK} className="text-slate-400 hover:text-white transition-colors">طلب نسخة تجريبية</a></li>
            <li><a href="https://ctdigital.ae" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">CT Digital</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-slate-900 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} أصيل. جميع الحقوق محفوظة.</p>
        <p>تطوير: <a href="https://ctdigital.ae" className="text-amber-500 font-bold hover:underline transition-colors">CT Digital</a></p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-200">
      <Navbar />
      <main>
        <Hero />
        
        {/* Trusted Partners Section */}
        <section className="py-12 bg-slate-900/40 border-y border-slate-800">
          <div className="container mx-auto px-6 text-center">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">نفخر بدعم عملائنا في دولة الإمارات العربية المتحدة</p>
            <div className="flex justify-center items-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500">
               <div className="flex items-center gap-3">
                 <HorseIcon className="w-6 h-6 text-white" />
                 <span className="text-white font-bold text-lg tracking-widest uppercase">United Arab Emirates Stables</span>
               </div>
            </div>
          </div>
        </section>

        <Features />
        <WhyAseel />
        
        {/* Simple CTA */}
        <section className="py-24 bg-amber-500 text-slate-950 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-600/20 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">جاهز لتنظيم إسطبلك رقمياً؟</h2>
            <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
              انضم إلينا اليوم وابدأ في استخدام نظام "أصيل" لتحسين كفاءة إدارتك وتوفير وقتك وجهدك.
            </p>
            <a 
              href={WHATSAPP_LINK}
              className="inline-flex items-center gap-3 bg-slate-950 text-white px-12 py-4 rounded-xl font-bold text-xl hover:bg-slate-900 transition-all shadow-2xl active:scale-95"
            >
              اطلب النظام الآن
              <ChevronLeft className="w-6 h-6" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
