"use client";

import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, User, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Courses", id: "courses" },
  { label: "NISM", id: "nism" },
  { label: "Webinar", id: "webinar" },
  { label: "Membership", id: "membership" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();
  // Smooth scroll progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handle background change on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FIXED: Removed TypeScript ": string" type annotation
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // Account for fixed nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setOpen(false);
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* ================= DESKTOP NAV ================= */}
      <div className="fixed top-6 left-0 right-0 z-50 hidden md:block px-6">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`
            max-w-5xl mx-auto flex items-center justify-between
            rounded-full px-8 py-3 transition-all duration-300
            ${scrolled 
              ? "bg-white/80 backdrop-blur-lg shadow-xl border border-white/20 py-2" 
              : "bg-white shadow-md border border-gray-100"}
          `}
        >
          {/* Logo */}
          <div 
            onClick={() => scrollToSection("hero")}
            className="group flex items-center gap-2 cursor-pointer"
          >
            <div className="bg-indigo-600 p-1.5 rounded-lg group-hover:rotate-12 ">
              <span className="text-white font-black text-xs">ITA</span>
            </div>
            <span className="font-black tracking-tighter text-xl text-slate-800 group-hover:text-indigo-600 transition-colors">
              INDIAN TRADERS
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA Group */}
          <div className="flex items-center gap-3">
            {/* <button className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:bg-slate-100 px-4 py-2 rounded-full transition-all">
              <User size={16} /> Login
            </button> */}
            <button onClick={() => navigate("/contact")}
             className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all active:scale-95 flex items-center gap-2">
              Inquiry <MessageCircle size={16} />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* ================= MOBILE NAV ================= */}
      <div className="fixed top-4 left-4 right-4 z-50 md:hidden">
        <div className={`
          flex items-center justify-between rounded-2xl px-5 py-4
          transition-all duration-300 border
          ${scrolled ? "bg-white/90 backdrop-blur-md shadow-lg border-white/20" : "bg-white border-gray-100 shadow-sm"}
        `}>
          <div onClick={() => scrollToSection("hero")} className="flex items-center gap-2">
            <div className="bg-indigo-600 px-2 py-1 rounded-md text-white font-black text-[10px]">ITA</div>
            <span className="font-black text-slate-800 tracking-tight">INDIAN TRADERS</span>
          </div>

          <button 
            onClick={() => setOpen(!open)} 
            className={`p-2 rounded-xl transition-colors ${open ? "bg-indigo-50 text-indigo-600" : "text-slate-600"}`}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="mt-3 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            >
              <div className="p-2 space-y-1">
                {navItems.map((item, i) => (
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center justify-between px-6 py-4 rounded-2xl hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 transition-all group"
                  >
                    <span className="font-bold text-lg">{item.label}</span>
                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </motion.button>
                ))}
              </div>

              <div className="p-4 bg-slate-50 grid grid-cols-2 gap-3">
                {/* <button className="flex items-center justify-center gap-2 py-4 bg-white border border-gray-200 rounded-2xl font-bold text-slate-700 shadow-sm">
                  <User size={18} /> Login
                </button> */}
                <button onClick={() => navigate("/contact")}
                 className="flex items-center justify-center gap-2 py-4 bg-indigo-600 rounded-2xl font-bold text-white shadow-lg shadow-indigo-100">
                  Inquiry <MessageCircle size={18} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Overlay for mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}