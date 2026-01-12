import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "All Courses", id: "courses" },
  { label: "NISM", id: "nism" },
  { label: "Free Webinar", id: "webinar" },
  { label: "Membership", id: "membership" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          fixed top-4 left-1/2 -translate-x-1/2 z-50
          hidden md:flex items-center gap-6
          bg-white rounded-full
          px-7 py-3
          shadow-md border border-gray-200
        "
      >
        {/* Logo */}
        <span
          onClick={() => scrollToSection("hero")}
          className="font-bold tracking-wide cursor-pointer text-indigo-600"
        >
          ITA
        </span>

        {/* Links */}
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="
              text-sm font-medium text-gray-700
              hover:text-indigo-600 transition
            "
          >
            {item.label}
          </button>
        ))}

        {/* CTA */}
        <button
          className="
            bg-indigo-600 text-white
            px-4 py-1.5 rounded-full
            text-sm font-semibold
            hover:bg-indigo-700 transition
          "
        >
          Inquiry
        </button>

        <button
          className="
            border border-gray-300
            px-4 py-1.5 rounded-full
            text-sm text-gray-700
            hover:bg-gray-100 transition
          "
        >
          Login
        </button>
      </motion.nav>

      {/* ================= MOBILE NAV ================= */}
      <div className="fixed top-4 left-4 right-4 z-50 md:hidden">
        <div
          className="
            flex items-center justify-between
            bg-white rounded-xl
            px-4 py-3
            shadow-md border border-gray-200
          "
        >
          <span
            onClick={() => scrollToSection("hero")}
            className="font-bold text-indigo-600"
          >
            ITA
          </span>

          <button onClick={() => setOpen(!open)} className="text-gray-700">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="
                mt-2 bg-white rounded-xl
                shadow-lg border border-gray-200
                overflow-hidden
              "
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="
                    w-full text-left
                    px-4 py-3
                    text-sm text-gray-700
                    hover:bg-gray-100
                    border-b last:border-b-0
                  "
                >
                  {item.label}
                </button>
              ))}

              <div className="p-4 space-y-2">
                <button
                  className="
                    w-full bg-indigo-600 text-white
                    py-2 rounded-lg font-semibold
                    hover:bg-indigo-700
                  "
                >
                  Inquiry
                </button>
                <button
                  className="
                    w-full border border-gray-300
                    py-2 rounded-lg
                    text-gray-700
                    hover:bg-gray-100
                  "
                >
                  Login
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
