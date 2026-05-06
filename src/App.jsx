import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useInView, animate } from 'framer-motion';
import { Menu, X, BookOpen, GraduationCap, Award, Phone, MapPin, Users, Mail, ChevronRight, Star, Quote, ArrowRight, ChevronDown, Atom, Activity, Heart } from 'lucide-react';

const AnimatedCounter = ({ from, to, duration = 2.5, prefix = "", suffix = "" }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = prefix + Math.floor(value) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, inView, duration, prefix, suffix]);

  return <span ref={nodeRef}>{prefix}{from}{suffix}</span>;
};

const InstagramIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);
import amitPhoto from './assets/amit-lal.jpeg';
import ankitaPhoto from './assets/ankita-manya.jpeg';
import logoImage from './assets/logo-update.png';
import homePhoto from './assets/HOME.png';
import mukeshPhoto from './assets/mukesh-kumar.png';
import bipinPhoto from './assets/bipin-kumar-singh.png';
import top1Photo from './assets/top1.png';
import top2Photo from './assets/top2.png';
import amitPrajapatiPhoto from './assets/Amit Kumar Prajapati.png';
import ashishPhoto from './assets/Ashish Kumar Sahoo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Faculties', href: '#faculties' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 glass-effect shadow-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 sm:h-32 transition-all">
          <div className="flex-shrink-0 h-full py-1">
            <a href="#" className="flex items-center h-full pl-2">
              <img src={logoImage} alt="शिक्षा-Window Logo" className="h-full w-auto object-contain scale-150 sm:scale-[1.6] origin-left brightness-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <div className="relative group">
                <button className="flex items-center gap-2 border-2 border-sky-500/30 bg-sky-500/10 text-sky-300 px-5 py-2.5 rounded-xl font-bold hover:bg-sky-500/20 hover:border-sky-500 transition-all shadow-lg shadow-sky-500/5 cursor-pointer">
                  <BookOpen className="h-5 w-5 text-sky-400" />
                  All Courses
                  <ChevronDown className="h-4 w-4 text-sky-500 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                
                <div className="absolute top-full left-0 mt-3 w-[320px] bg-slate-900 rounded-2xl shadow-2xl shadow-black/50 border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-left scale-95 group-hover:scale-100 overflow-hidden backdrop-blur-xl">
                  <div className="p-3 grid gap-1">
                    <a href="#courses" className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-xl transition-all group/item">
                      <div className="bg-orange-500/20 p-2.5 rounded-xl text-orange-400 group-hover/item:bg-orange-500 group-hover/item:text-white group-hover/item:scale-110 transition-all">
                        <Atom className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-extrabold text-white text-lg group-hover/item:text-orange-400 transition-colors">IIT JEE</div>
                        <div className="text-xs text-slate-400 font-bold tracking-wide uppercase mt-0.5">Mains & Advanced</div>
                      </div>
                    </a>
                    
                    <a href="#courses" className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-xl transition-all group/item">
                      <div className="bg-emerald-500/20 p-2.5 rounded-xl text-emerald-400 group-hover/item:bg-emerald-500 group-hover/item:text-white group-hover/item:scale-110 transition-all">
                        <Activity className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-extrabold text-white text-lg group-hover/item:text-emerald-400 transition-colors">NEET</div>
                        <div className="text-xs text-slate-400 font-bold tracking-wide uppercase mt-0.5">Medical Entrance</div>
                      </div>
                    </a>
                    
                    <a href="#courses" className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-xl transition-all group/item">
                      <div className="bg-purple-500/20 p-2.5 rounded-xl text-purple-400 group-hover/item:bg-purple-500 group-hover/item:text-white group-hover/item:scale-110 transition-all">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-extrabold text-white text-lg group-hover/item:text-purple-400 transition-colors">Foundation 11-12</div>
                        <div className="text-xs text-slate-400 font-bold tracking-wide uppercase mt-0.5">Board & Competitive</div>
                      </div>
                    </a>
                    
                    <a href="#courses" className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-xl transition-all group/item">
                      <div className="bg-sky-500/20 p-2.5 rounded-xl text-sky-400 group-hover/item:bg-sky-500 group-hover/item:text-white group-hover/item:scale-110 transition-all">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-extrabold text-white text-lg group-hover/item:text-sky-400 transition-colors">Pre-Foundation 6-10</div>
                        <div className="text-xs text-slate-400 font-bold tracking-wide uppercase mt-0.5">Early Edge Prep</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-sky-400 px-3 py-2 rounded-md text-base font-bold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-sky-500/40 flex items-center gap-2">
                Get Free Counselling
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 text-slate-300 hover:text-sky-400 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect-dark border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-sky-400 hover:bg-white/5 block px-3 py-2 rounded-md text-base font-bold transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="w-full flex justify-center items-center gap-2 mt-4 bg-sky-500 hover:bg-sky-600 text-white px-5 py-3 rounded-xl text-base font-bold shadow-lg shadow-sky-500/30"
                onClick={() => setIsOpen(false)}
              >
                Get Free Counselling
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-transparent">
      {/* Background Orbs */}
      <div className="hidden md:block absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute -left-40 top-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-400/20 mb-8 text-sm text-sky-300 font-semibold shadow-inner"
            >
              <Star className="h-4 w-4 fill-sky-400 text-sky-400" />
              <span>You Can Trust Us, We Care About Your Future</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight mb-2 text-gradient leading-tight py-2"
            >
              शिक्षा-Window
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-2xl md:text-3xl font-bold text-white mb-8"
            >
              A window open for all
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10 max-w-lg"
            >
              <p className="text-xl text-emerald-400 font-bold mb-4 tracking-wide uppercase drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">
                CBSE | ICSE | JAC
              </p>
              <div className="space-y-2 text-slate-200 font-semibold text-lg border-l-4 border-sky-500 pl-4 py-3 bg-white/5 rounded-r-2xl backdrop-blur-sm border-r border-t border-b border-white/5">
                <p>JEE-MAINS | JEE - ADV. | NEET FOUNDATION <span className="text-slate-400 font-medium">(XI, XII)</span></p>
                <p>PRE - FOUNDATION <span className="text-slate-400 font-medium">(VI-X)</span></p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-sky-500/40 group">
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Counselling
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-white/30 skew-x-12 animate-shine z-0 pointer-events-none"></div>
              </a>
              <a href="#courses" className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white px-8 py-4 rounded-full text-lg font-bold transition-all backdrop-blur-sm">
                Explore Courses
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-sky-400 rounded-[2.5rem] rotate-3 opacity-10 scale-105 blur-2xl"></div>
            <div className="relative bg-slate-900/40 p-2 rounded-[2.5rem] shadow-2xl border border-white/10 backdrop-blur-sm">
              <img 
                src={homePhoto} 
                alt="Students studying" 
                className="w-full h-[500px] object-cover object-center rounded-[2rem] brightness-90"
              />
              <div className="absolute -bottom-6 -left-6 glass-effect p-6 rounded-2xl flex items-center gap-4 border border-white/20 shadow-2xl">
                <div className="bg-sky-500/20 p-3 rounded-full text-sky-400">
                  <Award className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Commitment</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const EDU_ICONS = ['📚','🎓','✏️','🔬','🏆','📐','🌟','🧮','📖','🎯'];

const FloatingIcon = ({ icon, style }) => (
  <div className="absolute text-2xl select-none pointer-events-none animate-bounce opacity-20" style={style}>{icon}</div>
);

const Scholarship = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(90);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const scholarshipAmount = Math.round(score / 3);

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => { setStep(1); setSubmitStatus(null); }, 400);
  };

  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    const formData = new FormData(e.target);
    const studentName = formData.get('student_name');
    const uniqueTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    formData.set('_subject', `Scholarship Application: ${studentName} | Score: ${score}% | Discount: ${scholarshipAmount}% | ${uniqueTime}`);
    formData.set('expected_score', `${score}% expected -> ${scholarshipAmount}% tuition discount`);
    try {
      const res = await fetch('https://formsubmit.co/ajax/shikshawindow01@gmail.com', {
        method: 'POST', headers: { 'Accept': 'application/json' }, body: formData,
      });
      setSubmitStatus(res.ok ? 'success' : 'error');
      if (res.ok) e.target.reset();
    } catch { setSubmitStatus('error'); }
    setIsSubmitting(false);
  };

  const inp = "w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30 transition-all font-medium text-sm backdrop-blur-sm";
  const lbl = "block text-xs font-bold text-sky-200 mb-1.5 uppercase tracking-wider";

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-2rem] md:mt-[-4rem] relative z-20 pb-16">
      <motion.button
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
        onClick={() => setIsModalOpen(true)}
        className="w-full relative group overflow-hidden rounded-[2rem] md:rounded-full p-[2px] cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-emerald-400 to-sky-400 animate-shine blur-[2px] opacity-80 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative bg-slate-900 hover:bg-slate-800 transition-colors px-6 py-5 md:px-10 md:py-4 rounded-[2rem] md:rounded-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
          <div className="flex items-center gap-4 relative z-10 w-full md:w-auto justify-center md:justify-start">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-sky-500 to-emerald-400 p-[2px] shrink-0 shadow-[0_0_20px_rgba(56,189,248,0.3)] group-hover:scale-110 transition-transform duration-500">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                <Award className="h-7 w-7 md:h-8 md:w-8 text-sky-400" />
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-lg md:text-xl font-extrabold text-white mb-0.5 font-heading">
                शिक्षा-Window <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">Scholarship</span>
              </h3>
              <p className="text-slate-400 text-xs md:text-sm font-medium">Click to calculate your potential fee discount up to 33%</p>
            </div>
          </div>
          <div className="shrink-0 relative z-10 w-full md:w-auto">
            <div className="w-full bg-gradient-to-r from-sky-500 to-emerald-500 text-slate-900 font-extrabold px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(56,189,248,0.2)] group-hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] group-hover:-translate-y-0.5">
              Calculate Now <ChevronRight className="h-5 w-5" />
            </div>
          </div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/90 md:backdrop-blur-md" onClick={closeModal} />

            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ type: 'spring', damping: 26, stiffness: 300 }}
              className="relative w-full max-w-2xl z-10 overflow-hidden flex flex-col max-h-[92vh] rounded-[2rem] shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)' }}
            >
              {/* Floating education icons */}
              {EDU_ICONS.map((icon, i) => (
                <FloatingIcon key={i} icon={icon} style={{
                  top: `${Math.random() * 80 + 5}%`,
                  left: `${Math.random() * 90 + 2}%`,
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: `${2 + i * 0.3}s`,
                  fontSize: `${16 + (i % 3) * 8}px`,
                }} />
              ))}

              {/* Glowing orbs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />

              {/* Premium Header */}
              <div className="relative shrink-0 px-5 sm:px-8 pt-7 pb-5 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-emerald-400 flex items-center justify-center shadow-lg shadow-sky-500/30">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-0.5">Step {step} of 2</p>
                      <h3 className="text-xl font-extrabold text-white">
                        {step === 1 ? '🎯 Scholarship Estimator' : '📋 Application Form'}
                      </h3>
                    </div>
                  </div>
                  <button onClick={closeModal} className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white/70 hover:text-white cursor-pointer">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                {/* Step bar */}
                <div className="flex gap-2 mt-5">
                  <div className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= 1 ? 'bg-gradient-to-r from-sky-400 to-blue-500' : 'bg-white/20'}`} />
                  <div className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= 2 ? 'bg-gradient-to-r from-emerald-400 to-teal-500' : 'bg-white/20'}`} />
                </div>
              </div>

              <div className="overflow-y-auto px-5 sm:px-8 py-6 relative z-10">
                {/* ── STEP 1 ── */}
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                    <p className="text-white/60 font-medium mb-6 text-sm">Drag the slider to calculate your scholarship discount based on your expected test score.</p>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-6 backdrop-blur-sm">
                      <div className="flex justify-between items-center mb-6">
                        <div className="text-center bg-sky-500/20 border border-sky-400/30 rounded-2xl p-4 flex-1 mr-3">
                          <div className="text-xs font-bold text-sky-300 uppercase tracking-widest mb-1">Your Score</div>
                          <div className="text-5xl font-black text-sky-400">{score}<span className="text-2xl">%</span></div>
                        </div>
                        <div className="text-white/30 text-2xl font-light">→</div>
                        <div className="text-center bg-emerald-500/20 border border-emerald-400/30 rounded-2xl p-4 flex-1 ml-3">
                          <div className="text-xs font-bold text-emerald-300 uppercase tracking-widest mb-1">Fee Discount</div>
                          <div className="text-5xl font-black text-emerald-400">{scholarshipAmount}<span className="text-2xl">%</span></div>
                        </div>
                      </div>
                      <input type="range" min="0" max="100" value={score}
                        onChange={(e) => setScore(Number(e.target.value))}
                        className="w-full h-3 rounded-lg appearance-none cursor-pointer accent-sky-400"
                        style={{ background: `linear-gradient(to right, #38bdf8 ${score}%, rgba(255,255,255,0.1) ${score}%)` }}
                      />
                      <div className="flex justify-between text-xs font-bold text-white/30 mt-2">
                        <span>0%</span><span>50%</span><span>100%</span>
                      </div>
                    </div>

                    {/* Scholarship tiers */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {[{label:'Bronze',min:50,max:66,color:'from-orange-400 to-yellow-500',disc:'≤22%'},
                        {label:'Silver',min:67,max:80,color:'from-slate-300 to-slate-400',disc:'≤27%'},
                        {label:'Gold',min:81,max:100,color:'from-yellow-400 to-amber-500',disc:'≤33%'}].map(t => (
                        <div key={t.label} className={`rounded-2xl p-3 text-center border ${score >= t.min ? 'border-white/30 bg-white/10' : 'border-white/10 bg-white/5 opacity-50'}`}>
                          <div className={`text-xs font-black uppercase bg-gradient-to-r ${t.color} bg-clip-text text-transparent`}>{t.label}</div>
                          <div className="text-white/50 text-[10px] mt-0.5">{t.min}%+ → {t.disc}</div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-sky-500/10 border border-sky-400/20 rounded-2xl p-4 mb-6 text-sm text-sky-200 font-semibold flex gap-3">
                      <BookOpen className="h-5 w-5 shrink-0 mt-0.5 text-sky-400" />
                      <p>Score <strong className="text-sky-300">{score}%</strong> on the test and unlock a <strong className="text-emerald-300">{scholarshipAmount}% flat discount</strong> on your total tuition fees!</p>
                    </div>

                    <button onClick={() => setStep(2)}
                      className="w-full relative overflow-hidden bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-extrabold py-4 rounded-2xl text-base transition-all shadow-lg shadow-sky-500/30 flex items-center justify-center gap-2 cursor-pointer group hover:shadow-sky-500/50">
                      <span className="relative z-10 flex items-center gap-2">Register For Test Now <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" /></span>
                      <div className="absolute top-0 -left-full w-1/2 h-full bg-white/20 skew-x-12 animate-shine" />
                    </button>
                  </motion.div>
                )}

                {/* ── STEP 2 ── */}
                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                    {submitStatus === 'success' ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', damping: 20 }}
                        className="text-center py-8"
                      >
                        {/* Animated graduation cap */}
                        <motion.div
                          animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
                          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                          className="text-8xl mb-6"
                        >🎓</motion.div>
                        <h4 className="text-3xl font-extrabold text-white mb-2">Congratulations! 🏆</h4>
                        <p className="text-white/60 font-medium mb-4 max-w-xs mx-auto">Your scholarship application has been received. Our academic counsellor will reach out shortly with test details.</p>
                        <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-2xl p-4 mb-6 inline-block">
                          <div className="text-emerald-300 text-sm font-bold">Expected Scholarship: <span className="text-emerald-400 text-xl">{scholarshipAmount}%</span> off fees</div>
                        </div>
                        <div className="flex justify-center gap-4 text-3xl mb-6 animate-bounce">📚 ✨ 🌟</div>
                        <button type="button" onClick={closeModal} className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-bold px-10 py-3 rounded-2xl cursor-pointer hover:shadow-lg hover:shadow-sky-500/30 transition-all">
                          Back to Website
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleApplicationSubmit}>
                        <input type="hidden" name="_captcha" value="false" />
                        <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-xl p-3 mb-5 flex items-center gap-2">
                          <Award className="h-4 w-4 text-emerald-400 shrink-0" />
                          <p className="text-emerald-300 text-xs font-bold">Your locked-in discount: <span className="text-emerald-200 text-base">{scholarshipAmount}%</span> off tuition (based on {score}% test score)</p>
                        </div>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div><label className={lbl}>Student's Full Name *</label><input name="student_name" required placeholder="e.g. Rahul Kumar" className={inp} /></div>
                            <div><label className={lbl}>Father's Name *</label><input name="father_name" required placeholder="e.g. Ramesh Kumar" className={inp} /></div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div><label className={lbl}>Mother's Name</label><input name="mother_name" placeholder="e.g. Sunita Devi" className={inp} /></div>
                            <div><label className={lbl}>Date of Birth *</label><input name="dob" type="date" required className={inp + ' [color-scheme:dark]'} /></div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div><label className={lbl}>Phone Number *</label><input name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" className={inp} /></div>
                            <div><label className={lbl}>WhatsApp Number</label><input name="whatsapp" type="tel" placeholder="+91 XXXXX XXXXX" className={inp} /></div>
                          </div>
                          <div><label className={lbl}>Email Address</label><input name="email" type="email" placeholder="student@email.com" className={inp} /></div>
                          <div><label className={lbl}>Full Address *</label><textarea name="address" required rows={2} placeholder="House No., Street, City, State, PIN" className={inp + ' resize-none'} /></div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className={lbl}>Last Qualification *</label>
                              <select name="last_qualification" required className={inp + ' [color-scheme:dark]'}>
                                <option value="">Select</option>
                                <option>Class 8 Pass</option><option>Class 9 Pass</option><option>Class 10 Pass</option>
                                <option>Class 11 Pass</option><option>Class 12 Pass</option><option>Graduation</option>
                              </select>
                            </div>
                            <div><label className={lbl}>Marks / Percentage *</label><input name="marks_percentage" required placeholder="e.g. 87% or 420/500" className={inp} /></div>
                          </div>
                          <div><label className={lbl}>School / College Name *</label><input name="school_college" required placeholder="Name of your last school or college" className={inp} /></div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className={lbl}>Course Interested In *</label>
                              <select name="interested_course" required className={inp + ' [color-scheme:dark]'}>
                                <option value="">Select</option>
                                <option>Pre Foundation (Class 6-10)</option>
                                <option>Foundation and JEE (Class 11-12)</option>
                                <option>Medical / NEET</option>
                              </select>
                            </div>
                            <div>
                              <label className={lbl}>How Did You Hear About Us?</label>
                              <select name="source" className={inp + ' [color-scheme:dark]'}>
                                <option value="">Select</option>
                                <option>Friend / Family</option><option>Instagram</option>
                                <option>Google Search</option><option>Newspaper</option><option>Other</option>
                              </select>
                            </div>
                          </div>
                          {submitStatus === 'error' && (
                            <div className="bg-red-500/20 text-red-300 border border-red-400/30 rounded-xl p-3 font-bold text-sm text-center">
                              ❌ Submission failed. Please try again or call us directly.
                            </div>
                          )}
                          <div className="flex gap-3 pt-2">
                            <button type="button" onClick={() => setStep(1)} className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 rounded-xl transition-all cursor-pointer text-sm border border-white/20">← Back</button>
                            <button type="submit" disabled={isSubmitting}
                              className={`flex-1 relative overflow-hidden bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-bold py-3.5 rounded-xl transition-all cursor-pointer text-sm shadow-lg ${isSubmitting ? 'opacity-70' : 'hover:shadow-sky-500/40'}`}>
                              {isSubmitting ? '⏳ Submitting...' : '🎓 Submit Application'}
                            </button>
                          </div>
                        </div>
                      </form>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const HomeTutoring = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const subjectsList = ['Mathematics', 'Science', 'Physics', 'Chemistry', 'Biology', 'English', 'SST', 'Computer Science', 'Hindi', 'All Subjects'];

  const toggleSubject = (sub) => {
    if (selectedSubjects.includes(sub)) {
      setSelectedSubjects(selectedSubjects.filter(s => s !== sub));
    } else {
      setSelectedSubjects([...selectedSubjects, sub]);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => { setSubmitStatus(null); setSelectedSubjects([]); }, 400);
  };

  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    if (selectedSubjects.length === 0) {
      alert("Please select at least one subject.");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    const formData = new FormData(e.target);
    const studentName = formData.get('student_name');
    const uniqueTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    
    formData.set('subjects_selected', selectedSubjects.join(', '));
    formData.set('_subject', `Home Tutoring Request: ${studentName} | ${uniqueTime}`);
    
    try {
      const res = await fetch('https://formsubmit.co/ajax/shikshawindow01@gmail.com', {
        method: 'POST', headers: { 'Accept': 'application/json' }, body: formData,
      });
      setSubmitStatus(res.ok ? 'success' : 'error');
      if (res.ok) {
        e.target.reset();
        setSelectedSubjects([]);
      }
    } catch { setSubmitStatus('error'); }
    setIsSubmitting(false);
  };

  const inp = "w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all font-medium text-sm backdrop-blur-sm";
  const lbl = "block text-xs font-bold text-amber-200 mb-1.5 uppercase tracking-wider";

  return (
    <div className="w-full relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="w-full relative group overflow-hidden rounded-[2rem] p-[2px] h-full flex flex-col"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 animate-shine blur-[2px] opacity-80 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative h-full bg-slate-900 px-6 py-8 rounded-[2rem] flex flex-col items-center justify-center gap-5 overflow-hidden border border-white/10 text-center">
          
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 p-[2px] shrink-0 shadow-[0_0_30px_rgba(245,158,11,0.3)] group-hover:scale-110 transition-transform duration-500 relative z-10">
            <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-amber-400" />
            </div>
          </div>

          <div className="relative z-10">
            <div className="inline-block bg-amber-500/20 text-amber-300 text-[10px] font-black px-3 py-1 rounded-full border border-amber-400/20 uppercase tracking-widest mb-3 shadow-inner">
              1-ON-1 GUIDANCE
            </div>
            <h3 className="text-3xl font-extrabold text-white mb-2 font-heading tracking-tight leading-tight">
              HOME <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">TUTORING</span>
            </h3>
            <p className="text-slate-300 text-sm font-medium max-w-[250px] mx-auto leading-relaxed">
              Expert teachers at your doorstep. Boost your scores today!
            </p>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="mt-2 w-full max-w-[220px] relative z-10 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-extrabold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] hover:-translate-y-1 cursor-pointer text-sm md:text-base group/btn"
          >
            APPLY NOW <ChevronRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/90 md:backdrop-blur-md" onClick={closeModal} />

            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ type: 'spring', damping: 26, stiffness: 300 }}
              className="relative w-full max-w-2xl z-10 overflow-hidden flex flex-col max-h-[92vh] rounded-[2rem] shadow-2xl border border-white/10"
              style={{ background: 'linear-gradient(135deg, #0f172a 0%, #3f1e1e 50%, #0f172a 100%)' }}
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none" />

              {/* Premium Header */}
              <div className="relative shrink-0 px-8 pt-7 pb-5 border-b border-white/10 bg-black/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-white font-heading">
                        Home Tutor Request
                      </h3>
                      <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mt-0.5">Step into success</p>
                    </div>
                  </div>
                  <button onClick={closeModal} className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white/70 hover:text-white cursor-pointer border border-white/10">
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="overflow-y-auto px-8 py-6 relative z-10 custom-scrollbar">
                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', damping: 20 }}
                    className="text-center py-10"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                      className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mb-6 shadow-[0_0_40px_rgba(245,158,11,0.4)]"
                    >
                      <Star className="h-12 w-12 text-white" />
                    </motion.div>
                    <h4 className="text-3xl font-extrabold text-white mb-4">Request Submitted! 🎉</h4>
                    <p className="text-white/70 font-medium mb-8 max-w-sm mx-auto text-lg">Thank you for your interest. Our academic coordinator will contact you shortly to arrange the perfect tutor for you.</p>
                    <button type="button" onClick={closeModal} className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-10 py-4 rounded-xl cursor-pointer hover:shadow-lg hover:shadow-amber-500/30 transition-all text-lg border border-orange-400/50">
                      Done
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleApplicationSubmit}>
                    <input type="hidden" name="_captcha" value="false" />
                    <div className="space-y-5">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div><label className={lbl}>Student's Full Name *</label><input name="student_name" required placeholder="e.g. Rahul Kumar" className={inp} /></div>
                        <div><label className={lbl}>Class / Grade *</label>
                          <select name="class" required className={inp + ' [color-scheme:dark] appearance-none'}>
                            <option value="">Select Class</option>
                            <option>Class 6</option><option>Class 7</option><option>Class 8</option>
                            <option>Class 9</option><option>Class 10</option><option>Class 11</option><option>Class 12</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div><label className={lbl}>Father's Name *</label><input name="father_name" required placeholder="e.g. Ramesh Kumar" className={inp} /></div>
                        <div><label className={lbl}>Mother's Name</label><input name="mother_name" placeholder="e.g. Sunita Devi" className={inp} /></div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div><label className={lbl}>Phone Number *</label><input name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" className={inp} /></div>
                        <div><label className={lbl}>Alternative Number</label><input name="alt_phone" type="tel" placeholder="+91 XXXXX XXXXX" className={inp} /></div>
                      </div>

                      <div><label className={lbl}>Complete Address *</label><textarea name="address" required rows={3} placeholder="House No., Street, Colony, City, PIN Code" className={inp + ' resize-none'} /></div>
                      
                      <div>
                        <label className={lbl + " mb-3"}>Select Subjects Needed *</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {subjectsList.map(sub => (
                            <button
                              key={sub}
                              type="button"
                              onClick={() => toggleSubject(sub)}
                              className={`py-2 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all border cursor-pointer ${selectedSubjects.includes(sub) ? 'bg-amber-500 text-slate-900 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]' : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:border-white/30'}`}
                            >
                              {sub}
                            </button>
                          ))}
                        </div>
                      </div>

                      {submitStatus === 'error' && (
                        <div className="bg-red-500/20 text-red-300 border border-red-400/30 rounded-xl p-3 font-bold text-sm text-center animate-pulse">
                          ❌ Submission failed. Please try again or call us directly.
                        </div>
                      )}

                      <div className="pt-4 border-t border-white/10">
                        <button type="submit" disabled={isSubmitting}
                          className={`w-full relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-600 text-white font-extrabold py-4 rounded-xl transition-all cursor-pointer text-lg shadow-lg border border-orange-400/30 ${isSubmitting ? 'opacity-70' : 'hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:-translate-y-0.5'}`}>
                          {isSubmitting ? '⏳ Submitting Request...' : '✅ SUBMIT REQUEST'}
                        </button>
                      </div>

                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      title: "Pre Foundation",
      grades: "Class 6 to 10",
      description: "Building a strong base in Science and Mathematics to prepare young minds for future competitive challenges.",
      icon: <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-white" />,
      gradient: "from-blue-400 to-sky-400",
      shadowColor: "shadow-sky-500/20",
      textColor: "text-sky-500",
      badgeBg: "bg-sky-50 text-sky-600 border-sky-100"
    },
    {
      title: "Foundation & JEE",
      grades: "Class 11 to 12",
      description: "Rigorous curriculum focusing on deep conceptual understanding for JEE Mains and Advanced preparation.",
      icon: <GraduationCap className="h-6 w-6 md:h-8 md:w-8 text-white" />,
      gradient: "from-orange-400 to-red-400",
      shadowColor: "shadow-orange-500/20",
      textColor: "text-orange-500",
      badgeBg: "bg-orange-50 text-orange-600 border-orange-100"
    },
    {
      title: "Medical / NEET",
      grades: "Class 11 to 12 & Droppers",
      description: "Expert guidance in Physics, Chemistry, and Biology to crack NEET and secure admission to top medical colleges.",
      icon: <Award className="h-6 w-6 md:h-8 md:w-8 text-white" />,
      gradient: "from-emerald-400 to-teal-400",
      shadowColor: "shadow-emerald-500/20",
      textColor: "text-emerald-500",
      badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-100"
    }
  ];

  return (
    <section id="courses" className="py-16 md:py-24 relative bg-transparent overflow-hidden">
      {/* Decorative background orb */}
      <div className="hidden md:block absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-sky-400 uppercase tracking-widest mb-2">Our Programs</h2>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white mb-4">Premium <span className="text-gradient">Courses</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium">Focused and structured learning pathways that help your child achieve top performance and career readiness.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white/5 md:md:backdrop-blur-md rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 relative overflow-hidden group transition-all duration-500 border border-white/10 shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-2 cursor-default`}
            >
              {/* Top Gradient Accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${course.gradient} transition-all duration-300 group-hover:h-2`}></div>
              
              {/* Background Decoration */}
              <div className={`absolute -right-12 -top-12 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br ${course.gradient} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6 md:mb-8">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center bg-gradient-to-br ${course.gradient} shadow-lg shadow-black/20 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    {course.icon}
                  </div>
                  <div className={`px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-black tracking-widest uppercase border border-white/10 bg-white/5 text-slate-300`}>
                    {course.grades}
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-extrabold mb-3 md:mb-4 text-white group-hover:text-sky-400 transition-colors">{course.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6 md:mb-8 font-medium text-sm md:text-base md:min-h-[80px]">
                  {course.description}
                </p>
                
                <div className="pt-6 border-t border-white/5">
                  <button 
                    onClick={() => setSelectedCourse(course)} 
                    className={`inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-slate-300 group/btn transition-colors focus:outline-none cursor-pointer w-full text-left`}
                  >
                    Explore Program
                    <span className="bg-white/5 p-2 rounded-full group-hover/btn:bg-white/10 group-hover/btn:shadow-lg transition-all duration-300">
                      <ChevronRight className={`h-4 w-4 text-sky-400 group-hover/btn:translate-x-1 transition-transform`} />
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div className="absolute inset-0 bg-slate-950/80 md:backdrop-blur-md" onClick={() => setSelectedCourse(null)}></div>
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-slate-900 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] border border-white/10"
            >
              {/* Modal Header */}
              <div className={`p-8 relative overflow-hidden bg-gradient-to-r ${selectedCourse.gradient}`}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-4 right-4 bg-black/20 hover:bg-black/30 p-2 rounded-full text-white transition-colors cursor-pointer z-50 focus:outline-none"
                >
                  <X className="h-6 w-6" />
                </button>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm shadow-inner flex items-center justify-center">
                    {selectedCourse.icon}
                  </div>
                  <div className="text-white">
                    <div className="text-sm font-bold opacity-90 uppercase tracking-widest mb-1">{selectedCourse.grades}</div>
                    <h3 className="text-3xl font-extrabold font-heading">{selectedCourse.title}</h3>
                  </div>
                </div>
              </div>
              
              {/* Modal Body */}
              <div className="p-8 overflow-y-auto bg-slate-900">
                <p className="text-slate-300 text-lg font-medium leading-relaxed mb-8">
                  {selectedCourse.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-sky-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-bold text-white">Comprehensive Material</div>
                      <div className="text-sm text-slate-400 font-medium mt-1">Regularly updated DPPs & Modules</div>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-start gap-3">
                    <Users className="h-5 w-5 text-orange-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-bold text-white">Small Batch Size</div>
                      <div className="text-sm text-slate-400 font-medium mt-1">Personalized attention to every student</div>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-start gap-3">
                    <Award className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-bold text-white">Weekly Mock Tests</div>
                      <div className="text-sm text-slate-400 font-medium mt-1">All-India level performance tracking</div>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-start gap-3">
                    <Activity className="h-5 w-5 text-purple-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-bold text-white">24/7 Doubt Clearing</div>
                      <div className="text-sm text-slate-400 font-medium mt-1">Dedicated faculty for query resolution</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                  <a 
                    href="#contact" 
                    onClick={() => setSelectedCourse(null)}
                    className="flex-1 text-center bg-white text-slate-900 font-bold py-4 rounded-xl transition-all cursor-pointer shadow-lg hover:bg-slate-200"
                  >
                    Request Callback
                  </a>
                  <a 
                    href="mailto:contact@shikshawindow.com" 
                    className="flex-1 text-center bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 rounded-xl transition-all cursor-pointer shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2"
                  >
                    <Mail className="h-5 w-5" /> Email Us
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative bg-transparent overflow-hidden">
      {/* Decorative Orbs */}
      <div className="hidden md:block absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-sky-400 uppercase tracking-widest mb-2">About Us</h2>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white mb-6">Welcome to <span className="text-gradient whitespace-nowrap">शिक्षा-Window</span></h2>
            <p className="text-slate-300 text-base sm:text-lg mb-4 leading-relaxed font-medium">
              <span className="font-bold text-sky-400">शिक्षा-Window</span> is a premier educational institute with over 16 years of proven excellence in academic coaching and student success. We take pride in consistently producing top achievers, including selections in IIT, NIT, NDA, and other prestigious institutions.
            </p>
            <p className="text-slate-300 text-base sm:text-lg mb-4 leading-relaxed font-medium">
              Our foundation is built on a passion for teaching. We are educators by choice, committed to delivering high-quality guidance, conceptual clarity, and result-oriented learning.
            </p>
            <p className="text-slate-300 text-base sm:text-lg mb-4 leading-relaxed font-medium">
              Beyond India, we also support and mentor students from the United States, the United Kingdom, Canada, and other countries, offering personalized academic guidance aligned with global standards.
            </p>
            <p className="text-slate-100 text-lg sm:text-xl mb-8 leading-relaxed font-bold italic border-l-4 border-sky-500 pl-4 py-2 bg-white/5 rounded-r-2xl border-t border-b border-r border-white/5">
              At शिक्षा-Window, we don’t just teach—we build futures.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center shadow-xl backdrop-blur-sm">
                <div className="text-4xl font-extrabold text-sky-400 mb-2"><AnimatedCounter from={0} to={16} suffix="+" /></div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Years Experience</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center shadow-xl backdrop-blur-sm">
                <div className="text-4xl font-extrabold text-emerald-400 mb-2"><AnimatedCounter from={0} to={1000} suffix="+" duration={3} /></div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Successful Students</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-sky-500/10 blur-[80px] rounded-full"></div>
            <div className="bg-white/5 p-8 rounded-3xl relative z-10 border border-white/10 shadow-2xl md:backdrop-blur-md">
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-[2rem] overflow-hidden mb-6 border-4 border-sky-500/30 bg-slate-800 flex items-center justify-center shadow-lg shadow-sky-500/20">
                  <img src={amitPhoto} alt="Amit Lal - Director" className="w-full h-full object-cover grayscale-[0.2] brightness-110" onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://ui-avatars.com/api/?name=Amit+Lal&background=0ea5e9&color=fff&size=256&font-size=0.33&bold=true";
                  }} />
                </div>
                <h3 className="text-3xl font-extrabold font-heading text-white mb-1">Amit Lal</h3>
                <p className="text-sky-400 font-bold mb-6 tracking-wide uppercase text-sm">Director & Founder</p>
                
                <div className="relative bg-white/5 p-6 rounded-2xl border border-white/10 w-full">
                  <Quote className="absolute -top-3 -left-3 h-8 w-8 text-sky-400/30 fill-sky-400/30" />
                  <p className="text-slate-200 font-medium italic relative z-10">
                    "You Can Trust Us, We Care About Your Future"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Faculties = () => {
  const faculties = [
    {
      name: "Amit Lal",
      role: "Maths Faculty & Director",
      experience: "16 Years",
      qualifications: [
        "B.Sc. & M.Sc. in Mathematics",
        "B.Ed. in Mathematics",
        "BSTET Qualified"
      ],
      highlights: [
        "Ex-Oxford PGT Faculty",
        "Ex-Saidon Mathematics Faculty",
        "Ex-Bright Future Faculty"
      ],
      image: amitPhoto,
      fallbackImage: "https://ui-avatars.com/api/?name=Amit+Lal&background=0ea5e9&color=fff&size=256&font-size=0.33&bold=true"
    },
    {
      name: "Ankita Manya",
      role: "Biology Faculty",
      experience: "6 Years",
      qualifications: [
        "B.Sc. & M.Sc. & B.Ed.",
        "CTET Qualified",
        "Teaching foreign students online"
      ],
      highlights: [],
      image: ankitaPhoto,
      fallbackImage: "https://ui-avatars.com/api/?name=Ankita+Manya&background=0ea5e9&color=fff&size=256&font-size=0.33&bold=true"
    },
    {
      name: "Mukesh Kr. Ranjan",
      role: "Physics Faculty",
      experience: "16 Years",
      qualifications: [
        "B.tech in Electrical Engineering",
        "GATE Qualified"
      ],
      highlights: [],
      image: mukeshPhoto,
      fallbackImage: "https://ui-avatars.com/api/?name=Mukesh+Ranjan&background=0ea5e9&color=fff&size=256&font-size=0.33&bold=true"
    },
    {
      name: "Dr. Bipin Kumar Singh",
      role: "Chemistry Faculty",
      experience: "9 Years",
      qualifications: [
        "Ph.D. in Chemistry (2025) from BIT",
        "Master of Science (M.Sc.) in Chemistry (2018) from BIT",
        "Bachelor of Education (B.Ed.) (2021)",
        "Bachelor of Science (B.Sc.) in Chemistry (2016)"
      ],
      highlights: [
        "7 newspaper published"
      ],
      image: bipinPhoto,
      fallbackImage: "https://ui-avatars.com/api/?name=Bipin+Singh&background=0ea5e9&color=fff&size=256&font-size=0.33&bold=true"
    },
    {
      name: "Amit Kumar Prajapati (Junior Wing)",
      role: "Computer Faculty",
      experience: "4 Years",
      qualifications: [
        "B.C.A. in Computer Applications (General), Dr. Shyama Prasad Mukherjee University, Ranchi"
      ],
      highlights: [
        "C Programming Language",
        "C++",
        "Data Structure",
        "HTML/CSS",
        "Frontend Development"
      ],
      image: amitPrajapatiPhoto,
      fallbackImage: "https://ui-avatars.com/api/?name=Amit+Prajapati&background=0ea5e9&color=fff&size=256&font-size=0.33&bold=true"
    }
  ];

  return (
    <section id="faculties" className="py-16 md:py-24 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-sky-400 uppercase tracking-widest mb-2">Our Mentors</h2>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white mb-4">Expert <span className="text-gradient">Faculties</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium">Learn from dedicated professionals with years of experience in their respective fields.</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 justify-center mx-auto">
          {faculties.map((faculty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-row bg-white/5 md:backdrop-blur-md rounded-[1.5rem] sm:rounded-[2.5rem] p-4 sm:p-8 relative overflow-hidden group transition-all duration-500 border border-white/10 shadow-2xl hover:shadow-sky-500/10 hover:border-sky-500/30 items-start gap-4 sm:gap-8"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-sky-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-24 h-24 sm:w-56 sm:h-56 shrink-0 rounded-2xl sm:rounded-[2rem] overflow-hidden border-2 sm:border-4 border-white/5 shadow-2xl bg-slate-800 relative group-hover:border-sky-500/30 group-hover:shadow-sky-500/20 transition-all duration-500">
                <div className="absolute inset-0 bg-sky-500/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500 z-10 pointer-events-none"></div>
                <img 
                  src={faculty.image} 
                  alt={faculty.name} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = faculty.fallbackImage;
                  }} 
                />
              </div>
              
              <div className="flex-1 w-full text-left flex flex-col min-w-0">
                <h3 className="text-lg sm:text-3xl font-extrabold mb-1 text-white group-hover:text-sky-400 transition-colors truncate">{faculty.name}</h3>
                <p className="text-sky-400 font-bold mb-3 sm:mb-6 tracking-wide uppercase text-[9px] sm:text-sm border-b border-white/10 pb-2 sm:pb-4 inline-block">{faculty.role}</p>
                
                <div className="flex flex-col gap-3 sm:gap-5 flex-1">
                  <div>
                    <div className="flex items-center justify-start gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                      <span className="text-[9px] sm:text-[11px] font-black text-slate-400 uppercase tracking-widest">Experience</span>
                    </div>
                    <p className="text-white font-extrabold text-xs sm:text-xl ml-4 sm:ml-6">{faculty.experience}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-start gap-1 sm:gap-2 mb-1 sm:mb-3">
                      <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 shrink-0" />
                      <span className="text-[9px] sm:text-[11px] font-black text-slate-400 uppercase tracking-widest">Qualifications</span>
                    </div>
                    <ul className="list-none text-[10px] sm:text-sm text-slate-300 font-medium space-y-1 sm:space-y-2 text-left bg-black/20 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/5 shadow-inner">
                      {faculty.qualifications.map((q, i) => (
                        <li key={i} className="flex items-start gap-1.5 sm:gap-2">
                          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-sky-400 shrink-0 mt-0.5" />
                          <span className="hover:text-white transition-colors leading-tight">{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {faculty.highlights.length > 0 && (
                    <div>
                      <div className="flex items-center justify-start gap-1 sm:gap-2 mb-1 sm:mb-3">
                        <Award className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 shrink-0" />
                        <span className="text-[9px] sm:text-[11px] font-black text-slate-400 uppercase tracking-widest">Highlights</span>
                      </div>
                      <ul className="list-none text-[10px] sm:text-sm text-slate-300 font-medium space-y-1 sm:space-y-2 text-left bg-black/20 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/5 shadow-inner">
                        {faculty.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-1.5 sm:gap-2">
                            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 shrink-0 mt-0.5" />
                            <span className="hover:text-white transition-colors leading-tight">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Achievements = () => {
  const stats = [
    { title: "Selection Rate", value: <AnimatedCounter from={0} to={85} suffix="%" />, icon: <Award className="h-6 w-6 md:h-8 md:w-8" /> },
    { title: "Top 100 Ranks", value: <AnimatedCounter from={0} to={24} suffix="+" />, icon: <Star className="h-6 w-6 md:h-8 md:w-8" /> },
    { title: "Expert Faculty", value: <AnimatedCounter from={0} to={15} suffix="+" />, icon: <Users className="h-6 w-6 md:h-8 md:w-8" /> },
  ];

  const toppers = [
    { name: "Saket Kr. Sahu", achievement: "95%tile", context: "JEE Mains", photo: "/SAKET.png" },
    { name: "Abhishek Kr. Mishra", achievement: "1st Topper", context: "Doranda College (2018), Currently Deputy Collector", photo: "/ABHISHEK.png" },
    { name: "Roshni Mahto", achievement: "97 Marks in Math", context: "Class 10th", photo: "/ROSHNI.png" },
    { name: "Akash Kumar Sahu", achievement: "99 Marks in Maths", context: "Class 12th Board", photo: top1Photo },
    { name: "Ankit Kumar", achievement: "1st Topper 2020", context: "St. John", photo: top2Photo },
    { name: "Mithun Mandal", achievement: "1st Topper", context: "Gossner College, Ranchi 2018", photo: null, fallbackImage: "https://ui-avatars.com/api/?name=Mithun+Mandal&background=0ea5e9&color=fff&size=256&font-size=0.33&bold=true" },
    { name: "Lakshmi Narayan Das", achievement: "2nd Topper", context: "Gossner College, Ranchi 2018", photo: null, fallbackImage: "https://ui-avatars.com/api/?name=Lakshmi+Narayan+Das&background=0ea5e9&color=fff&size=256&font-size=0.33&bold=true" },
    { name: "Vartika Kumari", achievement: "1st Topper", context: "Ursuline Inter College, 2018", photo: null, fallbackImage: "https://ui-avatars.com/api/?name=Vartika+Kumari&background=0ea5e9&color=fff&size=256&font-size=0.33&bold=true" },
    { name: "Khushi Kumari Mahto", achievement: "95 Marks", context: "Mathematics", photo: null, fallbackImage: "https://ui-avatars.com/api/?name=Khushi+Kumari+Mahto&background=0ea5e9&color=fff&size=256&font-size=0.33&bold=true" },
    { name: "Adil Raza", achievement: "1st Topper", context: "Doranda College, Ranchi 2023", photo: null, fallbackImage: "https://ui-avatars.com/api/?name=Adil+Raza&background=0ea5e9&color=fff&size=256&font-size=0.33&bold=true" }
  ];

  return (
    <section id="achievements" className="py-16 md:py-24 relative bg-transparent overflow-hidden">
      {/* Decorative background orbs */}
      <div className="hidden md:block absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
      <div className="hidden md:block absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-sky-400 uppercase tracking-widest mb-2">Excellence</h2>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white mb-4">Our <span className="text-gradient">Achievements</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium">A legacy of excellence and consistent results in top competitive examinations.</p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-3 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] text-center transition-all duration-500 group overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 hover:-translate-y-2 shadow-lg sm:shadow-2xl md:backdrop-blur-md"
            >
              {/* Internal Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="inline-flex items-center justify-center w-8 h-8 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-lg sm:rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 group-hover:border-sky-400/50 text-sky-400 mb-2 sm:mb-6 md:mb-8 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(56,189,248,0.2)] group-hover:scale-110">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-5xl md:text-6xl font-extrabold font-heading mb-1 sm:mb-2 md:mb-3 text-white group-hover:text-sky-400 transition-all duration-500">
                  {stat.value}
                </div>
                <div className="text-slate-400 group-hover:text-sky-400 font-bold uppercase tracking-tighter sm:tracking-widest md:tracking-[0.2em] text-[8px] sm:text-xs transition-colors duration-500 leading-tight">
                  {stat.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Toppers Section */}
        <div className="mt-24 border-t border-white/5 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold font-heading text-white mb-3">Our Shining <span className="text-gradient">Stars</span></h3>
            <p className="text-slate-400 font-medium text-lg">Meet the students who made us incredibly proud</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {toppers.map((topper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-5 sm:gap-6 bg-slate-900/40 border border-white/10 hover:border-sky-500/30 rounded-3xl p-4 sm:p-5 shadow-2xl transition-all duration-500 group md:backdrop-blur-md hover:-translate-y-1 hover:bg-slate-800/50"
              >
                <div className="shrink-0 relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-white/10 group-hover:border-sky-400/50 transition-colors duration-500 shadow-xl shadow-black/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10 pointer-events-none opacity-60 group-hover:opacity-0 transition-opacity"></div>
                  <img src={topper.photo || topper.fallbackImage} alt={topper.name} loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="inline-block bg-sky-500/10 text-sky-400 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-lg border border-sky-400/20 uppercase tracking-wider mb-3 backdrop-blur-sm">
                    {topper.context}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white mb-2 truncate group-hover:text-sky-300 transition-colors">{topper.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="bg-emerald-500/20 p-1.5 rounded-lg">
                      <Award className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
                    </div>
                    <p className="text-emerald-400 font-bold text-sm sm:text-base truncate">{topper.achievement}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { src: 'T1.mp4', name: 'Krishna', details: 'From NDA to PhD' },
    { src: 'T2.mp4', name: 'Sagar Kr. Mahto', details: 'Pursuing B.Tech in Aerospace Engineering from SRM University' },
    { src: 'T3.mp4', name: 'Abhishek Mishra', details: 'Proud Achiever' },
    { src: 'T4.mp4', name: 'Akash Kumar Sahu', details: 'Outstanding Performance' },
    { src: 'T5 updated.mp4', name: 'Saket Kr. Sahu', details: 'NIT Nagaland' },
    { src: 'T6 updated.mp4', name: 'Savrottam Bhagat', details: 'Proud Achiever' }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 relative bg-transparent overflow-hidden">
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-sky-400 uppercase tracking-widest mb-2">Student Voices</h2>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white mb-4">Hear From Our <span className="text-gradient">Achievers</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium">Real stories from real students whose lives and careers were transformed at शिक्षा-Window.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 p-4 sm:p-5 rounded-[2rem] sm:rounded-[2.5rem] shadow-xl sm:shadow-2xl border border-white/10 group hover:border-white/20 hover:-translate-y-2 transition-all duration-500 md:backdrop-blur-md"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 flex items-center justify-center mb-4 sm:mb-6 shadow-inner border border-white/5" style={{ aspectRatio: '16/9' }}>
                <video 
                  src={`./${testi.src}`}
                  controls
                  playsInline
                  preload="none"
                  loading="lazy"
                  className="w-full h-full object-contain brightness-110"
                />
              </div>
              <div className="px-2 sm:px-3 pb-1 sm:pb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">{testi.name}</h3>
                {testi.details && (
                  <p className="text-sky-400 font-extrabold tracking-wide uppercase text-[10px] sm:text-xs">{testi.details}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GalleryItem = ({ item, onClick }) => (
  <div onClick={() => onClick && onClick(item)} className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-500 bg-slate-900 aspect-video">
    {item.type === 'video' ? (
      <video src={item.src} autoPlay loop muted playsInline className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none" />
    ) : (
      <img src={item.src} alt={item.title} loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 pointer-events-none" />
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute bottom-0 left-0 p-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
      <p className="text-white font-bold text-sm drop-shadow">{item.title}</p>
    </div>
  </div>
);

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const galleryItems = [
    { src: './G2.png',   title: 'Campus Life',            type: 'image' },
    { src: './G7.mp4',   title: 'Interactive Classrooms', type: 'video' },
    { src: './G1.png',   title: 'Annual Events',          type: 'image' },
    { src: './G6.png',   title: 'Annual Events',          type: 'image' },
    { src: './G8.png',   title: 'Sports',                 type: 'image' },
    { src: './G9.png',   title: 'Award Ceremonies',       type: 'image' },
    { src: './G3.png',   title: 'Award Ceremonies',       type: 'image' },
    { src: './G4.png',   title: 'Award Ceremonies',       type: 'image' },
    { src: './G5.png',   title: 'Award Ceremonies',       type: 'image' },
    { src: './G10.mp4',  title: 'Highlights',             type: 'video' },
    { src: './G11.png',  title: 'Sports',                 type: 'image' },
    { src: './G12.png',  title: 'Ocassional',             type: 'image' },
  ];

  const preview = galleryItems.slice(0, 4);

  return (
    <section id="gallery" className="py-16 md:py-24 relative bg-transparent overflow-hidden">
      {/* Decorative orbs */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-sky-500/10 text-sky-400 font-bold text-xs px-5 py-2 rounded-full uppercase tracking-widest mb-4 border border-sky-400/20">Life At Institute</span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-white mb-4">Our <span className="text-gradient">Gallery</span></h2>
          <p className="text-slate-400 max-xl mx-auto font-medium text-lg">Glimpses of our vibrant learning environment and unforgettable moments.</p>
        </div>

        {/* Premium Gallery Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 md:backdrop-blur-md border border-white/10 rounded-[2.5rem] shadow-2xl p-6 md:p-8"
        >
          {/* 2x2 Preview Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {preview.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <GalleryItem item={item} onClick={setSelectedMedia} />
              </motion.div>
            ))}
          </div>

          {/* Fade-out hint + View More button */}
          <div className="text-center">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] shrink-0">+{galleryItems.length - preview.length} more captures</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowModal(true)}
              className="relative overflow-hidden inline-flex items-center gap-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold px-10 py-4 rounded-full shadow-xl shadow-sky-500/20 hover:shadow-sky-500/40 transition-shadow text-lg group cursor-pointer"
            >
              <span className="relative z-10">Explore Full Gallery</span>
              <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-white/20 skew-x-12 animate-shine z-0 pointer-events-none" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Full Gallery Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-lg"
              onClick={() => setShowModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 26, stiffness: 280 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden z-10 flex flex-col border border-white/10"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 shrink-0 bg-slate-900/50">
                <div>
                  <h3 className="text-2xl font-extrabold text-white">Shiksha Gallery</h3>
                  <p className="text-slate-400 text-sm font-medium">{galleryItems.length} photos & videos</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-pointer text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Modal Grid */}
              <div className="overflow-y-auto p-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <GalleryItem item={item} onClick={setSelectedMedia} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl"
              onClick={() => setSelectedMedia(null)}
            />
            
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer text-white z-[210] shadow-lg md:backdrop-blur-md"
            >
              <X className="h-6 w-6" />
            </button>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col items-center justify-center pointer-events-none"
            >
              {selectedMedia.type === 'video' ? (
                <video src={selectedMedia.src} autoPlay controls className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl object-contain bg-black/50 pointer-events-auto" />
              ) : (
                <img src={selectedMedia.src} alt={selectedMedia.title} className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl object-contain bg-black/50 pointer-events-auto" />
              )}
              <div className="mt-4 text-center pointer-events-auto">
                <p className="text-white font-bold text-xl tracking-wide">{selectedMedia.title}</p>
                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sky-400 text-xs font-bold uppercase tracking-widest mt-2">{selectedMedia.type}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    const formData = new FormData(e.target);
    const studentName = formData.get('name');
    const uniqueTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    formData.set('_subject', `New Admission Inquiry: ${studentName} - ${uniqueTime}`);
    try {
      const response = await fetch('https://formsubmit.co/ajax/shikshawindow01@gmail.com', {
        method: 'POST', headers: { 'Accept': 'application/json' }, body: formData,
      });
      if (response.ok) { setSubmitStatus('success'); e.target.reset(); }
      else setSubmitStatus('error');
    } catch { setSubmitStatus('error'); }
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 6000);
  };

  const contactCards = [
    {
      icon: <Phone className="h-6 w-6" />,
      label: 'Call Us Directly',
      value: '+91 87895 45506',
      href: 'tel:+918789545506',
      gradient: 'from-sky-500 to-blue-600',
      glow: 'shadow-sky-500/30',
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email Us',
      value: 'shikshawindow01@gmail.com',
      href: 'mailto:shikshawindow01@gmail.com',
      gradient: 'from-violet-500 to-purple-600',
      glow: 'shadow-violet-500/30',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: 'Visit Us',
      value: '2nd Floor, M.M. Market, BIT More, Mesra, Ranchi',
      href: null,
      gradient: 'from-emerald-500 to-teal-600',
      glow: 'shadow-emerald-500/30',
    },
    {
      icon: <InstagramIcon className="h-6 w-6" />,
      label: 'Follow on Instagram',
      value: '@shiksha_window',
      href: 'https://www.instagram.com/shiksha_window/',
      gradient: 'from-pink-500 via-rose-500 to-orange-400',
      glow: 'shadow-pink-500/30',
    },
    {
      icon: <YoutubeIcon className="h-6 w-6" />,
      label: 'Watch on YouTube',
      value: 'Shiksha Window',
      href: 'https://www.youtube.com/@amitlal436',
      gradient: 'from-red-500 to-rose-700',
      glow: 'shadow-red-500/30',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0f172a 100%)' }}>
      {/* Decorative orbs */}
      <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="hidden md:block absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-sky-500/20 text-sky-300 font-bold text-xs px-4 py-2 rounded-full uppercase tracking-widest mb-4 border border-sky-400/20">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-white mb-4">
            Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">Free Counselling</span>
          </h2>
          <p className="text-white/50 text-lg font-medium max-w-xl mx-auto">
            Take the first step towards a bright future. Our academic experts are here to guide you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT — Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {contactCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-5 flex items-center gap-5 transition-all duration-300 cursor-default overflow-hidden"
                onClick={card.href ? () => window.open(card.href, card.href.startsWith('http') ? '_blank' : '_self') : undefined}
                style={{ cursor: card.href ? 'pointer' : 'default' }}
              >
                {/* glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-2xl`} />
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shrink-0 text-white shadow-lg ${card.glow} group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-0.5">{card.label}</p>
                  <p className="text-white font-bold text-base truncate group-hover:text-sky-300 transition-colors">{card.value}</p>
                </div>
                {card.href && <ChevronRight className="h-5 w-5 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all shrink-0" />}
              </motion.div>
            ))}

          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 md:p-10 overflow-hidden">
              {/* Card glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-sky-400/10 blur-[60px] rounded-full pointer-events-none" />

              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <motion.div
                    animate={{ y: [-8, 8, -8], rotate: [-3, 3, -3] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                    className="text-7xl mb-6"
                  >📞</motion.div>
                  <h4 className="text-2xl font-extrabold text-white mb-2">Request Received! 🎉</h4>
                  <p className="text-white/50 font-medium mb-6">We'll call you back within 24 hours. Get ready to unlock your bright future!</p>
                  <div className="flex justify-center gap-3 text-3xl animate-bounce">📚 🌟 🎯</div>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-8 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg shadow-sky-500/30">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-white">Request a Callback</h3>
                      <p className="text-white/40 text-xs font-medium">We respond within 24 hours</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="relative z-10">
                    <input type="hidden" name="_captcha" value="false" />
                    <div className="space-y-5">
                      <div>
                        <label className="block text-xs font-bold text-sky-300/80 mb-2 uppercase tracking-widest">Student's Name *</label>
                        <input type="text" name="name" required
                          className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-white/25 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all font-medium text-sm backdrop-blur-sm"
                          style={{ background: 'rgba(255,255,255,0.06)' }}
                          placeholder="Enter full name" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-sky-300/80 mb-2 uppercase tracking-widest">Phone Number *</label>
                        <input type="tel" name="phone" required
                          className="w-full border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-white/25 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all font-medium text-sm"
                          style={{ background: 'rgba(255,255,255,0.06)' }}
                          placeholder="+91 XXXXX XXXXX" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-sky-300/80 mb-2 uppercase tracking-widest">Interested Course *</label>
                        <div className="relative">
                          <select name="course" required
                            className="w-full border border-white/15 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all font-medium text-sm appearance-none [color-scheme:dark]"
                            style={{ background: 'rgba(255,255,255,0.06)' }}>
                            <option value="">Select a course</option>
                            <option value="Pre Foundation (6-10)">Pre Foundation (6–10)</option>
                            <option value="Foundation & JEE (11-12)">Foundation &amp; JEE (11–12)</option>
                            <option value="Medical / NEET">Medical / NEET</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none" />
                        </div>
                      </div>

                      {submitStatus === 'error' && (
                        <div className="bg-red-500/20 text-red-300 border border-red-400/30 rounded-xl p-3 font-bold text-sm text-center">
                          ❌ Failed to send. Please try again or call us directly.
                        </div>
                      )}

                      <button type="submit" disabled={isSubmitting}
                        className={`w-full relative overflow-hidden font-extrabold py-4 rounded-xl text-base transition-all cursor-pointer flex justify-center items-center gap-2 shadow-xl ${isSubmitting ? 'bg-sky-600/50 text-white/60' : 'bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:shadow-sky-500/40 hover:-translate-y-0.5'}`}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {isSubmitting ? '⏳ Sending...' : (<><Phone className="h-5 w-5" /> Submit Request</>)}
                        </span>
                        {!isSubmitting && <div className="absolute top-0 -left-full w-1/2 h-full bg-white/20 skew-x-12 animate-shine" />}
                      </button>

                      <p className="text-center text-white/25 text-xs font-medium">
                        🔒 Your information is 100% safe and private
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map & Home Tutoring Banner Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-[2rem] overflow-hidden border border-white/10 shadow-xl flex flex-col min-h-[300px]"
          >
            <div className="bg-white/5 px-6 py-4 flex items-center gap-3 border-b border-white/10 shrink-0">
              <MapPin className="h-5 w-5 text-emerald-400" />
              <span className="text-base font-bold text-white">Find Us on Map</span>
            </div>
            <iframe
              title="Shiksha Window Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.056!2d85.4398!3d23.4128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBIT+Mesra%2C+Ranchi%2C+Jharkhand!5e0!3m2!1sen!2sin!4v1600000000000"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg)', flexGrow: 1 }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <div className="flex items-center h-full">
            <HomeTutoring />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950/50 py-12 border-t border-white/5 relative overflow-hidden backdrop-blur-sm">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center">
            <img src={logoImage} alt="शिक्षा-Window Logo" className="h-24 sm:h-28 w-auto object-contain brightness-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] opacity-90 hover:opacity-100 transition-all scale-150 origin-left" />
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-8">
              <a href="https://www.instagram.com/shiksha_window/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-all hover:scale-110 p-2 bg-white/5 rounded-full border border-white/5">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-all hover:scale-110 p-2 bg-white/5 rounded-full border border-white/5">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <div className="flex gap-8 text-slate-500 text-sm font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-slate-400 font-bold tracking-wide">
              &copy; {new Date().getFullYear()} <span className="text-sky-400">शिक्षा-Window</span>
            </p>
            <p className="text-slate-500 text-[11px] font-bold mt-2 flex items-center justify-center md:justify-end gap-1.5 group">
              Made with <span className="text-rose-500 animate-pulse">❤️</span> by <span className="text-white group-hover:text-sky-400 transition-colors">Kartavaya Suryavanshi <span className="text-slate-400 font-normal text-[10px] sm:text-xs block sm:inline mt-1 sm:mt-0">(A former student of Shiksha Window)</span></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const CountdownTimer = () => {
  // Target: next batch start — 6 days from May 4, 2026
  const TARGET = new Date('2026-05-10T00:00:00');

  const calc = () => {
    const diff = Math.max(0, TARGET - Date.now());
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };

  const [time, setTime] = useState(calc);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!visible) return null;

  const Box = ({ v, label }) => (
    <div className="flex flex-col items-center">
      <div className="text-xl md:text-2xl font-black text-white tabular-nums w-10 text-center">{String(v).padStart(2,'0')}</div>
      <div className="text-[9px] font-bold text-sky-300 uppercase tracking-widest">{label}</div>
    </div>
  );

  return (
    <motion.div
      initial={{ x: 120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 24, delay: 2 }}
      className="fixed right-4 bottom-24 z-50"
    >
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-sky-500/30 rounded-2xl p-4 shadow-2xl shadow-sky-900/30 min-w-[190px]">
        <button
          onClick={() => setVisible(false)}
          className="absolute -top-2 -right-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-full p-0.5 cursor-pointer transition-colors"
        >
          <X className="h-3.5 w-3.5" />
        </button>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          <p className="text-xs font-bold text-sky-300 uppercase tracking-widest">Next Batch Starts In</p>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <Box v={time.days} label="Days" />
          <span className="text-sky-400 font-black text-lg mb-1">:</span>
          <Box v={time.hours} label="Hrs" />
          <span className="text-sky-400 font-black text-lg mb-1">:</span>
          <Box v={time.minutes} label="Min" />
          <span className="text-sky-400 font-black text-lg mb-1">:</span>
          <Box v={time.seconds} label="Sec" />
        </div>
        <a href="#contact" className="mt-3 block w-full bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold text-center py-2 rounded-xl transition-colors">
          Reserve My Seat →
        </a>
      </div>
    </motion.div>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: "Do you provide trial or demo classes before admission?",
      a: "Yes! We offer up to 3 days of free demo classes so students can experience our teaching methodology before making a commitment.",
      color: "border-sky-500", bg: "bg-sky-50", dot: "bg-sky-500" },
    { q: "What is the average batch size for IIT JEE and NEET?",
      a: "We maintain an optimal batch size of 30–40 students so every student receives personalized attention and effective doubt-clearing sessions.",
      color: "border-emerald-500", bg: "bg-emerald-50", dot: "bg-emerald-500" },
    { q: "Do you provide hostel and transport facilities?",
      a: "Yes, we assist outstation students in finding safe affiliated hostel accommodations nearby, and we have tie-ups for local transport services.",
      color: "border-violet-500", bg: "bg-violet-50", dot: "bg-violet-500" },
    { q: "How do you track and report student performance to parents?",
      a: "We conduct weekly All-India level mock tests. Detailed performance reports and attendance are shared with parents via SMS and PTMs.",
      color: "border-orange-500", bg: "bg-orange-50", dot: "bg-orange-500" },
    { q: "Are study materials and test series included in the fee?",
      a: "Absolutely! Our comprehensive study modules, DPPs (Daily Practice Problems), and complete test series are all included in the course structure.",
      color: "border-pink-500", bg: "bg-pink-50", dot: "bg-pink-500" },
  ];

  return (
    <section id="faqs" className="py-16 md:py-24 relative bg-transparent overflow-hidden">
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-sky-500/10 text-sky-400 font-bold text-xs px-5 py-2 rounded-full uppercase tracking-widest mb-4 border border-sky-400/20">Have Questions?</span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className="text-slate-400 font-medium text-lg max-w-xl mx-auto">Everything you need to know about admissions, classes, and facilities.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`rounded-xl sm:rounded-2xl border-l-4 overflow-hidden transition-all duration-300 shadow-md sm:shadow-xl ${
                openIndex === i
                  ? `${faq.color} bg-white/10 md:backdrop-blur-md`
                  : 'border-l-white/10 bg-white/5 hover:border-l-sky-500/50'
              } border border-y-white/5 border-r-white/5`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full text-left px-4 py-4 sm:px-6 sm:py-6 flex items-center gap-3 sm:gap-4 focus:outline-none cursor-pointer group"
              >
                <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full shrink-0 transition-all duration-300 ${openIndex === i ? faq.dot : 'bg-slate-600 shadow-[0_0_10px_rgba(255,255,255,0.1)]'}`} />
                <span className={`font-bold text-sm sm:text-base md:text-lg flex-1 transition-colors ${openIndex === i ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{faq.q}</span>
                <ChevronDown className={`h-5 w-5 sm:h-6 sm:w-6 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-sky-400' : 'text-slate-500'}`} />
              </button>
              <div className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-64 pb-4 sm:pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 sm:pl-6 border-l border-white/10 py-1 sm:py-2">
                  <p className="text-slate-400 text-xs sm:text-sm md:text-base font-medium leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnnouncementTicker = () => {
  return (
    <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600 text-white py-2.5 overflow-hidden relative z-[60]">
      <div className="animate-marquee flex items-center gap-12 cursor-default">
        <span className="font-bold text-sm tracking-wide shrink-0">⭐ Admissions Open for 2026-27</span>
        <span className="text-sky-300 shrink-0">•</span>
        <span className="font-bold text-sm tracking-wide shrink-0">🚀 Join the Legacy of 1000+ Selections</span>
        <span className="text-sky-300 shrink-0">•</span>
        <span className="font-bold text-sm tracking-wide shrink-0">🏆 Up to 33% Scholarship Available</span>
        <span className="text-sky-300 shrink-0">•</span>
        <span className="font-bold text-sm tracking-wide shrink-0">⚡ Limited Seats Available - Enroll Now!</span>
        
        <span className="text-sky-300 shrink-0">•</span>
        <span className="font-bold text-sm tracking-wide shrink-0">⭐ Admissions Open for 2026-27</span>
        <span className="text-sky-300 shrink-0">•</span>
        <span className="font-bold text-sm tracking-wide shrink-0">🚀 Join the Legacy of 1000+ Selections</span>
        <span className="text-sky-300 shrink-0">•</span>
        <span className="font-bold text-sm tracking-wide shrink-0">🏆 Up to 33% Scholarship Available</span>
        <span className="text-sky-300 shrink-0">•</span>
        <span className="font-bold text-sm tracking-wide shrink-0">⚡ Limited Seats Available - Enroll Now!</span>
      </div>
    </div>
  );
};

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex flex-col items-center"
      >
        <img src={logoImage} alt="Loading..." className="h-28 w-auto brightness-110 drop-shadow-[0_0_15px_rgba(14,165,233,0.3)] mb-8" />
        <div className="w-48 h-1.5 bg-white/5 rounded-full overflow-hidden relative border border-white/5 shadow-inner">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sky-400 font-bold text-[10px] uppercase tracking-[0.3em] mt-4 animate-pulse"
        >
          Initializing Excellence
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const Counsellor = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950">
      {/* Background Ambience */}
      <div className="hidden md:block absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-[100%] pointer-events-none" />
      <div className="hidden md:block absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/10 blur-[150px] rounded-[100%] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-overlay"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 font-bold text-xs px-4 py-2 rounded-full uppercase tracking-widest mb-4 border border-purple-500/20">
            <Heart className="h-4 w-4" /> Student Support
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white mb-4">
            Mental <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">Well-being</span>
          </h2>
          <p className="text-slate-400 font-medium text-lg max-w-2xl mx-auto">
            A healthy mind is the key to academic excellence. We provide dedicated counseling to help students navigate stress and focus on their goals.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/50 border border-white/10 rounded-[2rem] sm:rounded-[3rem] p-5 sm:p-10 shadow-2xl md:backdrop-blur-xl relative group overflow-hidden"
        >
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Image Section */}
            <div className="md:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-sky-500 rounded-2xl sm:rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative aspect-[4/5] rounded-2xl sm:rounded-[2.5rem] overflow-hidden border border-white/20 shadow-2xl bg-slate-800">
                <img 
                  src={ashishPhoto} 
                  alt="Ashish Kumar Sahoo" 
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="bg-white/10 md:backdrop-blur-md border border-white/20 px-3 py-2 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl text-center">
                    <h3 className="text-white font-extrabold text-lg sm:text-xl mb-0.5 sm:mb-1">Ashish Kumar Sahoo</h3>
                    <p className="text-purple-300 font-bold text-[11px] sm:text-sm">Student Counsellor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:col-span-7">
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white/5 border border-white/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl md:backdrop-blur-sm shadow-inner flex-1 min-w-[200px]">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-500/20 p-2 sm:p-2.5 rounded-xl">
                      <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Qualifications</p>
                      <p className="text-white font-bold text-xs sm:text-sm leading-tight mt-1">Student Counsellor</p>
                      <p className="text-white font-bold text-xs sm:text-sm leading-tight mt-1">Post 🎓 Graduate In Psychology</p>
                      <p className="text-white font-bold text-xs sm:text-sm leading-tight mt-1">Pursuing M.phill (RINPAS)</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 border border-white/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl md:backdrop-blur-sm shadow-inner flex-1 min-w-[150px]">
                  <div className="flex items-center gap-3">
                    <div className="bg-sky-500/20 p-2 sm:p-2.5 rounded-xl">
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 text-sky-400" />
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] text-slate-400 font-black uppercase tracking-widest">Experience</p>
                      <p className="text-white font-bold text-sm sm:text-base">5 Years</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6 border-l-4 border-purple-500 pl-4 sm:pl-5 py-2 bg-gradient-to-r from-purple-500/10 to-transparent rounded-r-2xl">
                <p className="text-lg md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-300 italic tracking-wide">
                  "Mental health should be priority"
                </p>
              </div>

              <h4 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 sm:mb-6 font-heading leading-tight">
                Empowering Students to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">Overcome Challenges</span>
              </h4>
              
              <div className="space-y-4 text-slate-300 font-medium text-sm sm:text-lg leading-relaxed mb-8 text-left">
                <p>
                  At Shiksha Window, we understand that competitive exam preparation can be overwhelming. Ashish Kumar Sahoo, our expert Student Counsellor, is dedicated to supporting the psychological and emotional well-being of our students.
                </p>
                <p>
                  Through one-on-one sessions, motivation, and mental health strategies, he helps students manage exam anxiety, build unwavering focus, and maintain a positive mindset, ensuring they are mentally prepared to achieve top ranks.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-2xl flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shrink-0"></div>
                  <span className="text-purple-300 font-bold text-sm">Stress Management</span>
                </div>
                <div className="bg-sky-500/10 border border-sky-500/20 p-4 rounded-2xl flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shrink-0"></div>
                  <span className="text-sky-300 font-bold text-sm">Focus Enhancement</span>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></div>
                  <span className="text-emerald-300 font-bold text-sm">Career Guidance</span>
                </div>
                <div className="bg-pink-500/10 border border-pink-500/20 p-4 rounded-2xl flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse shrink-0"></div>
                  <span className="text-pink-300 font-bold text-sm">Emotional Support</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SaveSoil = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-[100%] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-emerald-900/20 to-slate-900/60 border border-emerald-500/20 hover:border-emerald-500/40 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_50px_rgba(16,185,129,0.05)] backdrop-blur-xl relative overflow-hidden group transition-all duration-500"
        >
          {/* Subtle glow effects */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-emerald-400/20 transition-colors duration-700" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-400/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-sky-400/20 transition-colors duration-700" />
          
          <div className="inline-block bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full mb-6 relative z-10">
            <p className="text-emerald-400 text-xs font-black uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
              Social Message
            </p>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 mb-8 font-heading tracking-tight leading-tight relative z-10 drop-shadow-lg">
            "Save Soil, Save Earth"
          </h2>
          
          <div className="space-y-4 text-slate-300 text-sm md:text-base font-medium leading-relaxed max-w-3xl mx-auto text-center relative z-10">
            <p>
              मिट्टी सिर्फ ज़मीन नहीं, बल्कि जीवन की सबसे बड़ी नींव है। 
              लगातार प्रदूषण, पेड़ों की कटाई और रसायनों के अत्यधिक उपयोग से हमारी मिट्टी अपनी उर्वरता खोती जा रही है।
            </p>
            <p>
              यदि मिट्टी कमजोर होगी, तो खेती, भोजन और आने वाली पीढ़ियों का भविष्य भी खतरे में पड़ जाएगा। 
              आज जरूरत है कि हम मिट्टी को बचाने के लिए जागरूक बनें और प्रकृति के प्रति अपनी जिम्मेदारी निभाएँ।
            </p>
            <p className="text-emerald-400 font-extrabold text-base md:text-lg pt-4 pb-2 border-t border-white/5 mt-4 shadow-sm">
              क्योंकि स्वस्थ मिट्टी ही एक सुरक्षित और हरी-भरी धरती का आधार है। 🌍
            </p>
          </div>
          
          <div className="mt-8 flex justify-center md:justify-end border-t border-white/5 pt-6 relative z-10">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors px-6 py-3 rounded-full shadow-lg cursor-default">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 p-[2px] shadow-lg shadow-emerald-500/20">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AL</span>
                </div>
              </div>
              <span className="text-white font-extrabold text-sm tracking-wide">
                - अमित लाल
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen selection:bg-sky-500/30 font-sans relative overflow-x-hidden w-full">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400 z-[100] origin-left"
        style={{ scaleX }}
      />
      <AnimatePresence>
        {isLoading && <PageLoader />}
      </AnimatePresence>
      <AnnouncementTicker />
      <Navbar />
      <CountdownTimer />
      <main>
        <Hero />
        <Scholarship />
        <Courses />
        <About />
        <Faculties />
        <Counsellor />
        <Achievements />
        <Testimonials />
        <Gallery />
        <FAQs />
        <Contact />
        <SaveSoil />
      </main>
      <Footer />
    </div>
  );
}

export default App;
