"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <main className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">

        {/* ================= LEFT INFO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-indigo-600">Touch</span>
          </h1>

          <p className="text-slate-600 mb-8">
            Have questions about courses, webinars, or membership?
            Our team is here to help you start your trading journey.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <Phone className="text-indigo-600" />
              <span className="text-slate-700 font-medium">
                +91 73507 67410
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-indigo-600" />
              <span className="text-slate-700 font-medium">
                support@indiantradersacademy.in
              </span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-indigo-600" />
              <span className="text-slate-700 font-medium">
                Pune, Maharashtra, India
              </span>
            </div>
          </div>
        </motion.div>

        {/* ================= FORM ================= */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-md border border-indigo-200 p-8 space-y-5"
        >
          <h2 className="text-xl font-bold mb-2">
            Send us a message
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Submit Inquiry
          </button>
        </motion.form>
      </div>
    </main>
  );
}
