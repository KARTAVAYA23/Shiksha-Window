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
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0f172a 100%)' }}>
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
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

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-2xl overflow-hidden border border-white/10 shadow-xl"
            >
              <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span className="text-sm font-bold text-white/70">Find Us on Map</span>
              </div>
              <iframe
                title="Shiksha Window Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.056!2d85.4398!3d23.4128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBIT+Mesra%2C+Ranchi%2C+Jharkhand!5e0!3m2!1sen!2sin!4v1600000000000"
                width="100%" height="200"
                style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
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
      </div>
    </section>
  );
};
