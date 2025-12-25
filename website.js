import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  EyeOff, 
  Clock, 
  BarChart3, 
  ShieldCheck, 
  TrendingUp, 
  Lock,
  Menu,
  X,
  ArrowRight,
  Image as ImageIcon,
  Download,
  Coins,
  LineChart,
  PieChart,
  Building2,
  Calculator,
  CheckCircle2,
  XCircle,
  Database,
  Timer,
  Shield
} from 'lucide-react';

/**
 * Trex Landing Page - Dark Edition
 * Theme: Midnight Graphite + Glowing Sage
 * Focus: High-trust qualification & human-first legal language
 */

// --- Reusable UI Components ---

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-[#6FAF9E] text-[#0B0F1A] hover:bg-[#88c5b6] shadow-lg shadow-[#6FAF9E]/20',
    outline: 'border-2 border-[#334155] text-[#F1F5F9] hover:bg-[#1F2933]/50',
    ghost: 'text-[#F1F5F9]/70 hover:text-white hover:bg-[#1F2933]/50'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-6 py-3 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

const SectionHeading = ({ title, subtitle, centered = true, tag = "" }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    {tag && (
      <span className="text-[#6FAF9E] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
        {tag}
      </span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-[#F1F5F9] tracking-tighter mb-6"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-[#F1F5F9]/50 text-lg max-w-2xl mx-auto leading-relaxed"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// --- Section Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0F1A]/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#6FAF9E] rounded-lg flex items-center justify-center">
            <TrendingUp className="text-[#0B0F1A] w-5 h-5" />
          </div>
          <span className="text-2xl font-bold text-[#F1F5F9] tracking-tighter">Trex</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="text-[#F1F5F9]/60 hover:text-[#6FAF9E] transition-colors">Features</a>
          <a href="#how-it-works" className="text-[#F1F5F9]/60 hover:text-[#6FAF9E] transition-colors">How it Works</a>
          <Button className="px-5 py-2">Download App</Button>
        </div>

        <button className="md:hidden text-[#F1F5F9]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B0F1A] border-b border-white/5 px-6 py-8 flex flex-col gap-4 overflow-hidden"
          >
            <a href="#features" className="text-lg font-medium text-white" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-lg font-medium text-white" onClick={() => setIsOpen(false)}>How it Works</a>
            <hr className="border-white/10" />
            <Button onClick={() => setIsOpen(false)}>Download App</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const S25UltraMockup = () => {
  return (
    <motion.div 
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto w-[280px] h-[580px] md:w-[320px] md:h-[660px] bg-[#2D3436] rounded-[32px] p-[8px] shadow-[0_0_50px_rgba(111,175,158,0.15)] border-[3px] border-[#B2BEC3]/30 overflow-hidden"
    >
      <div className="absolute inset-0 rounded-[28px] pointer-events-none z-20 shadow-[inset_0_0_15px_rgba(0,0,0,0.8)]"></div>
      <div className="w-full h-full bg-[#FFFFFF] rounded-[24px] overflow-hidden relative border border-white/10">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-black rounded-full z-30 opacity-80"></div>
        <div className="w-full h-full bg-[#F6F7F8] flex flex-col items-center justify-center p-8 text-center group">
          <div className="w-16 h-16 bg-[#6FAF9E]/10 rounded-full flex items-center justify-center mb-4 transition-transform duration-500 shadow-sm border border-[#6FAF9E]/20">
            <ImageIcon className="text-[#6FAF9E] w-8 h-8" />
          </div>
          <p className="text-[#1F2933] font-bold text-sm tracking-tight mb-1 uppercase text-center">Light Mode App Preview</p>
          <p className="text-[#1F2933]/40 text-[10px] leading-tight max-w-[140px] font-medium text-center">
            1080x2340 App Screenshot
          </p>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-white/10 opacity-30 pointer-events-none"></div>
          <div className="absolute inset-0 border-[1px] border-dashed border-[#6FAF9E]/30 m-4 rounded-xl pointer-events-none"></div>
        </div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#6FAF9E]/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#6FAF9E]/10 rounded-full text-[#6FAF9E] text-sm font-bold mb-6 border border-[#6FAF9E]/20">
            <Lock size={14} />
            Privacy-First Wealth Tracking
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.05] mb-6">
            Your Wealth. <br />
            Your Business. <br />
            <span className="text-[#6FAF9E]">No Bank. No PAN. No Aadhaar.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#F1F5F9]/60 mb-10 max-w-xl leading-relaxed">
            Trex gives you the power of automated tracking with the peace of mind of 100% privacy. Log your assets once—we’ll handle the live market math.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="px-10 py-5 text-xl">
              <Download size={24} /> Download for Android
            </Button>
          </div>
          
          <div className="mt-16 flex items-center gap-8 opacity-30">
            <span className="text-sm font-bold text-white tracking-widest uppercase">Secure Logs</span>
            <span className="text-sm font-bold text-white tracking-widest uppercase">Live Markets</span>
            <span className="text-sm font-bold text-white tracking-widest uppercase">100% Private</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <S25UltraMockup />
        </motion.div>
      </div>
    </section>
  );
};

/**
 * Qualifier Audit Section
 * Builds trust by filtered exclusion.
 */
const AudienceAudit = () => {
  const forYou = [
    { 
      text: "You want a single net-worth view across stocks, FDs, gold, and mutual funds",
      icon: <Database size={18} />
    },
    { 
      text: "You enter investments once and let the app handle returns, interest, and maturity math",
      icon: <Calculator size={18} />
    },
    { 
      text: "You expect your portfolio to stay accurate as prices and time change",
      icon: <Timer size={18} />
    },
    { 
      text: "You want financial clarity without linking banks or accounts",
      icon: <Shield size={18} />
    }
  ];

  const notForYou = [
    "You want automatic bank, broker, or demat syncing",
    "You expect tips, recommendations, or buy/sell signals",
    "You want social feeds, rankings, or portfolio comparisons",
    "You’re okay trading privacy for convenience"
  ];

  return (
    <section className="py-24 px-6 bg-[#0B0F1A]">
      <div className="max-w-5xl mx-auto">
        <SectionHeading 
          tag="Transparency"
          title="Is Trex right for you?"
          subtitle="Trex is built with a specific philosophy. We aren't for everyone, and we're proud of that."
        />
        
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* For You */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-[40px] bg-[#1F2933]/30 border border-[#6FAF9E]/20 shadow-xl shadow-[#6FAF9E]/5 h-full"
          >
            <h3 className="text-[#6FAF9E] font-bold text-2xl mb-8 flex items-center gap-3">
              <CheckCircle2 size={24} /> Trex is for you if:
            </h3>
            <ul className="space-y-6">
              {forYou.map((item, i) => (
                <li key={i} className="flex gap-4 text-white/90 leading-relaxed font-medium">
                  <span className="text-[#6FAF9E] mt-1 shrink-0 bg-[#6FAF9E]/10 p-1.5 rounded-lg border border-[#6FAF9E]/20">
                    {item.icon}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not For You */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-[40px] bg-[#1F2933]/20 border border-white/5 h-full"
          >
            <h3 className="text-white/40 font-bold text-2xl mb-8 flex items-center gap-3">
              <XCircle size={24} /> Trex is not for you if:
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex gap-4 text-[#F1F5F9]/20 text-sm leading-relaxed italic">
                  <span className="mt-1 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Philosophical Punchline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-[#6FAF9E] font-bold text-xl md:text-2xl tracking-tight opacity-90">
            “Trex doesn’t make decisions for you. It makes your decisions clearer.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const BentoGrid = () => {
  const cards = [
    {
      title: "Live Market Sync",
      content: "We fetch latest stock prices and mutual fund NAVs every minute. No more manual refreshing or spreadsheet updates.",
      icon: Zap,
      size: "md:col-span-2",
      variant: 'dark'
    },
    {
      title: "100% Privacy",
      content: "No Bank Linking. No PAN. No Aadhaar. Your sensitive financial data never leaves your device.",
      icon: EyeOff,
      size: "md:col-span-1",
      variant: 'accent'
    },
    {
      title: "Smart Calculation Engine",
      content: "Trex automates the math for you. It calculates accrued interest, maturity values, and real-time gains across every asset.",
      icon: Calculator,
      size: "md:col-span-1",
      variant: 'dark'
    },
    {
      title: "Unified Dashboard",
      content: "Every asset in one unified view. Supports Stocks, Gold, FD, and Mutual Funds (SIP & One-time) for pro analytics.",
      icon: BarChart3,
      size: "md:col-span-2",
      variant: 'highlight',
      showAssets: true
    }
  ];

  const assets = [
    { label: "Stocks", icon: LineChart },
    { label: "Gold", icon: Coins },
    { label: "FD", icon: Building2 },
    { label: "MF (SIP/One-time)", icon: PieChart }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          tag="Features"
          title="The Future of Privacy-First Wealth"
          subtitle="Everything you need to manage a multi-asset portfolio without surrendering your financial soul to data brokers."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const isAccent = card.variant === 'accent';
            const isHighlight = card.variant === 'highlight';
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`
                  ${card.size} p-8 rounded-[32px] border transition-all duration-500 relative overflow-hidden group
                  ${isAccent ? 'bg-[#6FAF9E] border-transparent shadow-2xl shadow-[#6FAF9E]/10' : ''}
                  ${!isAccent && !isHighlight ? 'bg-[#1F2933]/40 backdrop-blur-md border-white/5 hover:bg-[#1F2933]/60' : ''}
                  ${isHighlight ? 'bg-[#1F2933]/80 border-[#6FAF9E]/30 shadow-xl shadow-[#6FAF9E]/5' : ''}
                `}
              >
                <div className={`
                  w-12 h-12 rounded-2xl flex items-center justify-center mb-6 
                  ${isAccent ? 'bg-[#0B0F1A]/10' : 'bg-[#6FAF9E]/10 border border-[#6FAF9E]/20'}
                `}>
                  <card.icon className={isAccent ? 'text-[#0B0F1A]' : 'text-[#6FAF9E]'} />
                </div>

                <h3 className={`text-2xl font-bold tracking-tight mb-3 ${isAccent ? 'text-[#0B0F1A]' : 'text-[#F1F5F9]'}`}>
                  {card.title}
                </h3>

                <p className={`leading-relaxed mb-6 ${isAccent ? 'text-[#0B0F1A]/80' : 'text-[#F1F5F9]/60'}`}>
                  {card.content}
                </p>

                {card.showAssets && (
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                    {assets.map((asset, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 text-white/90 text-xs font-bold">
                        <asset.icon size={12} className="text-[#6FAF9E]" />
                        {asset.label}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Steps = () => {
  const steps = [
    { 
      num: "01", 
      title: "Log your assets", 
      desc: "Simply enter your stock quantity or FD details.",
      icon: <ImageIcon className="w-6 h-6" />
    },
    { 
      num: "02", 
      title: "Trex automates the math", 
      desc: "Our system pulls live prices and calculates accrued interest instantly.",
      icon: <Zap className="w-6 h-6" />
    },
    { 
      num: "03", 
      title: "Own your total net worth", 
      desc: "See your total financial standing in one secure, private view you truly own.",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <section id="how-it-works" className="py-32 px-6 bg-[#0B0F1A] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/5 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          tag="Process"
          title="Simple, Powerful, Private."
          subtitle="Three steps to total financial clarity without ever sharing your bank credentials."
        />

        <div className="space-y-12 relative">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 w-full">
                <div className="bg-[#1F2933]/30 p-8 md:p-12 rounded-[40px] border border-white/5 shadow-sm hover:border-[#6FAF9E]/20 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                    <span className="text-9xl font-black text-white">{step.num}</span>
                  </div>
                  
                  <div className="w-14 h-14 bg-[#6FAF9E] rounded-2xl flex items-center justify-center text-[#0B0F1A] mb-6 shadow-lg shadow-[#6FAF9E]/20">
                    {step.icon}
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{step.title}</h4>
                  <p className="text-white/50 text-lg leading-relaxed">{step.desc}</p>
                </div>
              </div>

              <div className="hidden lg:flex w-16 h-16 bg-[#0B0F1A] border-4 border-[#1F2933] rounded-full items-center justify-center z-10">
                 <div className="w-3 h-3 bg-[#6FAF9E] rounded-full shadow-[0_0_10px_#6FAF9E]"></div>
              </div>

              <div className="hidden lg:block flex-1"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0B0F1A] text-white py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#6FAF9E] rounded-lg flex items-center justify-center">
                <TrendingUp className="text-[#0B0F1A] w-5 h-5" />
              </div>
              <span className="text-2xl font-bold tracking-tighter">Trex</span>
            </div>
            <p className="text-white/40 max-w-xs mb-8 leading-relaxed">
              The privacy-first investment tracker for the modern conscious investor. No bank links, no leaks, no sharing.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-bold text-[#6FAF9E]">
              <ShieldCheck size={14} />
              Designed for the privacy-conscious
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-white/90 uppercase tracking-widest text-xs">Support</h5>
            <ul className="space-y-4 text-white/40 text-sm font-medium">
              <li><a href="#" className="hover:text-[#6FAF9E] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#6FAF9E] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#6FAF9E] transition-colors">How We Protect Your Data</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-white/90 uppercase tracking-widest text-xs">App</h5>
            <ul className="space-y-4 text-white/40 text-sm font-medium">
              <li><a href="#" className="hover:text-[#6FAF9E] transition-colors flex items-center gap-2">Android <Download size={12}/></a></li>
              <li><a href="#" className="hover:text-[#6FAF9E] transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-xs text-center md:text-left">
          <p>© 2024 Trex Wealth Systems. Private and Secure.</p>
          <div className="flex gap-6 font-medium">
            <span>Encrypted financial logs</span>
            <span>Manual portfolio manager</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-[#F1F5F9] font-sans selection:bg-[#6FAF9E] selection:text-[#0B0F1A]">
      <Navbar />
      <main>
        <Hero />
        <Steps />
        <AudienceAudit />
        <BentoGrid />
        
        <section className="py-24 px-6 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-gradient-to-br from-[#1F2933] to-[#0B0F1A] rounded-[48px] p-12 md:p-20 text-center relative border border-white/10 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#6FAF9E]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] pointer-events-none"></div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 leading-tight">
              Ready to Own Your <br className="hidden md:block" /> Financial Truth?
            </h2>
            <p className="text-white/50 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of private investors who prefer manual control and absolute data sovereignty. Download the app today.
            </p>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#6FAF9E] text-[#0B0F1A] font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl shadow-[#6FAF9E]/20 flex items-center gap-3 transition-all"
              >
                <Download size={24} /> Get it on Android
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;