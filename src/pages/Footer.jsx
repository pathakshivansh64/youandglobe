import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0A2463] via-[#1a3a6e] to-[#3E92CC] pt-16 pb-8 text-gray-300 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#52B788] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FB8500] rounded-full opacity-5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12 relative z-10">

        {/* Column 1: Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">YOU&GLOBE</h2>
          <p className="text-gray-300 leading-relaxed">
            Connecting skilled nurses to global healthcare opportunities.  
            We guide you through every step of your international career journey.
          </p>
        </motion.div>

        {/* Column 2: Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Services", "Jobs", "Blog", "About", "Contact"].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-[#52B788] transition-colors"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Column 3: Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-[#52B788] mt-1">📍</span>
              <span>Bangalore, India</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#52B788] mt-1">📞</span>
              <span>+91 9258319297</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#52B788] mt-1">✉️</span>
              <span>shivangi@youandglobe.com</span>
            </li>
          </ul>
        </motion.div>

        {/* Column 4: Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white/10 backdrop-blur-sm hover:bg-[#52B788] border border-white/20 p-3 rounded-full text-white transition-all"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-12 pt-6 text-center text-gray-400 text-sm border-t border-white/10 relative z-10"
      >
        © {new Date().getFullYear()} YOU&GLOBE. All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;