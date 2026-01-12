"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2, Star, ArrowRight, PlayCircle } from "lucide-react";
import { useState } from "react";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Landing() {
  return (
    <main className="pt-20 md:pt-28 space-y-24 md:space-y-40 bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-700">

      {/* ================= HERO ================= */}
      <section
        id="hero"
        className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center"
      >
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
            ✨ India's Top Rated Institute
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
            MOST TRUSTED{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              TRADING INSTITUTE
            </span> IN INDIA
          </motion.h1>

          <motion.p variants={fadeUp} className="text-slate-600 mb-10 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Learn from professional traders with verified P&L, back-tested
            strategies and real market exposure. Trusted by 10,000+ traders
            across India.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="group relative bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-indigo-300 active:scale-95 flex items-center justify-center gap-2">
              JOIN NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 border-2 border-slate-200 bg-white px-8 py-4 rounded-xl font-bold transition-all hover:border-indigo-600 hover:text-indigo-600">
              <PlayCircle className="w-5 h-5" /> Free Masterclass
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 lg:order-2"
        >
          <div className="absolute -inset-4 bg-indigo-100/50 rounded-3xl blur-2xl -z-10 animate-pulse" />
          <img
            src="/images/founder.png"
            alt="Ganesh Kadam - Founder"
            className="w-full h-[320px] md:h-[500px] object-cover rounded-[2.5rem] border-8 border-white shadow-2xl"
          />
          <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 hidden md:block">
            <div className="flex items-center gap-3">
              <div className="bg-green-500 w-3 h-3 rounded-full animate-ping" />
              <p className="text-sm font-bold text-slate-800">Live Trading Now</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= TRUST STATS ================= */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            ["10,000+", "Traders Trained"],
            ["10+ Years", "Market Experience"],
            ["Verified", "P&L Proof"],
            ["NSE", "Recognized"],
          ].map(([v, l], i) => (
            <motion.div 
              key={l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-slate-100 rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all hover:-translate-y-1"
            >
              <div className="text-3xl md:text-4xl font-black text-indigo-600 mb-2 group-hover:scale-110 transition-transform">{v}</div>
              <div className="text-sm md:text-base font-medium text-slate-500 uppercase tracking-wider">{l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="/images/founder.png"
            alt="Ganesh Kadam - Founder"
            className="w-full h-[350px] md:h-[550px] object-cover rounded-[2rem] shadow-2xl relative z-10"
          />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-violet-600/10 rounded-full blur-3xl" />
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="w-16 h-1 bg-indigo-600 mb-6 rounded-full" />
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            MR. GANESH KADAM
          </h2>
          <p className="text-indigo-600 text-xl mb-8 font-semibold tracking-tight">
            Founder – Indian Traders Academy
          </p>
          <p className="text-slate-600 leading-relaxed text-lg md:text-xl mb-8">
            10+ years of experience in Stocks, Options & Commodities. Managed
            multi-crore portfolios, NSE recognized, and creator of
            ultra-low-drawdown trading systems.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Expert Mentor", "Portfolio Manager", "Strategy Creator", "NSE Certified"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle2 className="text-indigo-600 w-5 h-5" /> {item}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= FREE MASTERCLASS ================= */}
       {/* ================= FREE MASTERCLASS ================= */}
      <section id="webinar" className="bg-indigo-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-16">

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              "ट्रेडिंग शिकायचं आहे, पण कळत नाही कुठून सुरुवात करावी?"
            </h2>

            <p className="text-indigo-600 font-semibold text-lg">
              FREE MASTERCLASS
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-6 text-slate-600 text-sm">
              <span>✔ Professional Mentors</span>
              <span>✔ Profitable Strategies</span>
              <span>✔ Live Market Examples</span>
            </div>

            <button className="mt-8 bg-indigo-600 text-white px-10 py-4 rounded-xl font-semibold shadow-lg">
              BOOK MY VIP SEAT NOW
            </button>
          </motion.div>

          {/* Countdown */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {["DAYS", "HOURS", "MINUTES", "SECONDS"].map((l) => (
              <div key={l} className="bg-white border border-indigo-200 rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-indigo-600">00</div>
                <div className="text-xs text-slate-500 mt-1">{l}</div>
              </div>
            ))}
          </div>

          {/* Who Can Join */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">
              Who can join this MASTERCLASS?
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                ["Beginners", "No prior market knowledge required"],
                ["Investors", "Convert investing into trading"],
                ["Loss-Making Traders", "Fix mistakes & regain confidence"],
                ["Students & Professionals", "Fits busy schedules"],
              ].map(([t, d]) => (
                <div key={t} className="bg-white border border-indigo-200 rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">{t}</h4>
                  <p className="text-slate-600 text-sm">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ================= COURSES ================= */}
      <section id="courses" className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Elite Training Programs</h2>
          <p className="text-slate-500 text-lg">Structured learning paths for every level of expertise</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ["Certified Pro Trader", "₹1,20,000", "Bestseller"],
            ["Algo Trading Mastery", "₹51,000", null],
            ["Advance Trading Mastery", "₹30,000", null],
            ["Live Trading Program", "₹1,999", "Popular"],
          ].map(([title, price, tag]) => (
            <div key={title} className="relative group bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm hover:shadow-2xl transition-all flex flex-col justify-between">
              {tag && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-black uppercase px-4 py-1 rounded-full">
                  {tag}
                </span>
              )}
              <div>
                <h3 className="text-xl font-bold mb-4 text-slate-800 leading-tight">{title}</h3>
                <p className="text-3xl font-black text-indigo-600 mb-8">{price}</p>
              </div>
              <button className="w-full py-4 rounded-xl font-bold bg-slate-50 text-indigo-600 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= NISM ================= */}
      <section id="nism" className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              NISM Certification Exams
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {["Paper 4", "Paper 3", "Paper 2", "Series 8"].map((p) => (
                <div key={p} className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-6 hover:bg-white/10 transition-all">
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold text-indigo-300">NISM – SERIES 8 – {p}</h3>
                    <p className="text-slate-400 font-medium mt-1">Duration: 60 min | Passing: 60%</p>
                  </div>
                  <button className="whitespace-nowrap bg-indigo-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-400 transition-colors">
                    Register
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 blur-[120px] -z-0" />
        </div>
      </section>

      {/* ================= MEMBERSHIP ================= */}
      <section id="membership" className="bg-slate-50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Membership Plans</h2>
            <p className="text-slate-500 text-lg">Join our exclusive community of consistent traders</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Millionaire Mind Gym", "₹999", "month"],
              ["Online Live Trading", "₹2,299", "month"],
              ["Offline Trading Floor", "₹4,999", "month"],
            ].map(([title, price, dur]) => (
              <div key={title} className="bg-white border-2 border-transparent hover:border-indigo-600 rounded-[2.5rem] p-10 shadow-xl transition-all group">
                <h3 className="font-bold text-2xl mb-4 text-slate-800">{title}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black text-indigo-600">{price}</span>
                  <span className="text-slate-400 font-semibold">/ {dur}</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {["Daily Market Analysis", "Live Q&A Sessions", "Exclusive Community Access"].map(f => (
                    <li key={f} className="flex items-center gap-3 text-slate-600 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 rounded-2xl bg-indigo-600 text-white font-black shadow-lg shadow-indigo-200 group-hover:scale-105 transition-all">
                  JOIN NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section id="gallery" className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Vibrant Community</h2>
            <p className="text-slate-400 text-lg">Glimpses of our trading workshops, seminars & events</p>
          </div>

          <div className="relative">
            <motion.div
              className="flex gap-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-8 shrink-0">
                  {["gallary1.png", "gallary2.png", "gallary1.png", "gallary2.png"].map((img, idx) => (
                    <img
                      key={idx}
                      src={`/images/${img}`}
                      alt="ITA Trading Workshop"
                      className="w-[300px] md:w-[450px] h-[300px] md:h-[400px] object-cover rounded-[2rem] shadow-2xl transition-all duration-500"
                    />
                  ))}
                </div>
              ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-20" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-20" />
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq" className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Common Questions</h2>
            <p className="text-slate-500">Everything you need to know about our trading courses</p>
          </div>

          <div className="space-y-4">
            {[
              ["Do I need prior trading experience?", "No, our courses are designed for both beginners and experienced traders. We start with the fundamentals and gradually progress to advanced strategies."],
              ["How much capital do I need to start?", "We recommend starting with at least ₹25,000, but our risk management strategies are designed to work with any capital size."],
              ["Do you offer refunds?", "Yes, 48 hr money back guarantee. After that fees are non refundable."],
              ["How soon can I expect results?", "Results vary, but most students start seeing consistent profits within 2-3 months of dedicated practice."],
              ["Can I trade part-time?", "Absolutely! Many of our students started as part-time traders while working full-time jobs."],
              ["How is the course delivered?", "Through our custom learning platform with video lessons, live sessions, and a mobile app."]
            ].map(([q, a]) => (
              <FAQItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= SUCCESS STORIES ================= */}
      <section className="py-32 bg-indigo-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-20 underline decoration-indigo-200 underline-offset-8">
            SUCCESS STORIES
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Amazing insightful workshop. Would definitely recommend for anyone interested in trading.",
              "Magic Set-up Rocks, Best Set-up ever. Amazing Accuracy, Most trusted institute in stock market.",
              "This institute truly bridges the gap between theory and practice. Live market sessions were amazing."
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-indigo-500/5 relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-indigo-500 text-indigo-500" />)}
                </div>
                <p className="text-slate-700 text-lg italic mb-8 leading-relaxed">“{t}”</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">S{i+1}</div>
                  <div>
                    <p className="font-bold text-slate-900">Verified Student</p>
                    <p className="text-sm text-slate-400">Trading Course Graduate</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-24 mx-4 md:mx-6 mb-12">
        <div className="max-w-7xl mx-auto bg-indigo-600 rounded-[3rem] py-20 px-6 md:px-12 text-center overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-black mb-8 text-white leading-tight">
              READY TO TRANSFORM YOUR <br className="hidden md:block"/> TRADING JOURNEY?
            </h2>
            <button className="bg-white text-indigo-600 hover:bg-slate-50 px-12 py-5 rounded-2xl font-black text-xl shadow-2xl transition-all hover:scale-105 active:scale-95">
              START YOUR JOURNEY TODAY
            </button>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
      </section>

    </main>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-6 text-left group"
      >
        <span className="font-bold text-lg md:text-xl text-slate-800 group-hover:text-indigo-600 transition-colors">{q}</span>
        <div className={`p-2 rounded-lg transition-all ${open ? "bg-indigo-600 text-white rotate-180" : "bg-slate-50 text-slate-400"}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-slate-500 text-lg leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}