import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiChevronDown, HiChevronRight } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [subActive, setSubActive] = useState(null);

  const services = [
    { name: "Profile Screening", path: "profile-screening" },
    { name: "Interview Support", path: "interview-support" },
    { name: "Language & Training Support", path: "language-training-support" },
    { name: "Cultural Workshop", path: "cultural-workshop" },
    { name: "Relocation Support", path: "relocation-support" },
    { name: "Visa & Immigration Support", path: "visa-immigration-support" },
    { name: "Scholarship", path: "scholarship" },
  ];

  const jobRoles = [
    "Registered Nurse (RN)",
    "Clinical Nurse Specialist",
    "ICU Nurse",
    "Surgical Nurse",
    "Pediatric Nurse",
    "Elderly Care Nurse",
    "Home Care Nurse",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-white via-[#D8F3DC]/20 to-white shadow-lg z-50 h-20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="YOU&GLOBE Logo"
            className="h-14 w-14 object-contain rounded-md"
          />
          <div className="flex flex-col ">
            <span className="text-3xl ml-5  font-bold text-[#0A2463] tracking-tight" style={{ fontFamily: "'Playfair Display', Lucida Handwriting" }}>
              YOU<span style={{ fontFamily: "'Playfair Display', Candara" }} className="text-4xl text-[#2b8e22] ml-1 ">&</span><span className="text-[#1e92a2]">GLOBE</span>
            </span>
            <span className="text-xs text-gray-600 italic ml-5 " style={{ fontFamily: "'Playfair Display', Segoe Script" }}>
              Building Bridges Between You and Globe
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <li>
            <Link to="/" className="hover:text-[#3E92CC] transition">Home</Link>
          </li>

          {/* SERVICES DROPDOWN */}
          <li
            className="relative"
            onMouseEnter={() => setActive("services")}
            onMouseLeave={() => setActive(null)}
          >
            <button className="flex items-center gap-1 hover:text-[#3E92CC]">
              Services <HiChevronDown />
            </button>

            <AnimatePresence>
              {active === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg border border-[#3E92CC]/20 p-2"
                >
                  {services.map((item, i) => (
                    <Link
                      key={i}
                      to={`/services/${item.path}`}
                      className="block px-4 py-2 rounded-md hover:bg-[#D8F3DC] hover:text-[#0A2463] transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* JOBS DROPDOWN */}
          <li
            className="relative"
            onMouseEnter={() => setActive("jobs")}
            onMouseLeave={() => {
              setActive(null);
              setSubActive(null);
            }}
          >
            <button className="flex items-center gap-1 hover:text-[#3E92CC]">
              Jobs <HiChevronDown />
            </button>

            <AnimatePresence>
              {active === "jobs" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg border border-[#3E92CC]/20 p-2"
                >
                  {/* LOCATION */}
                  <div
                    className="flex justify-between items-center px-4 py-2 hover:bg-[#D8F3DC] hover:text-[#0A2463] rounded-md cursor-pointer transition"
                    onMouseEnter={() => setSubActive("location")}
                  >
                    <span>Location Based</span>
                    <HiChevronRight />
                  </div>

                  {/* ROLES */}
                  <div
                    className="flex justify-between items-center px-4 py-2 hover:bg-[#D8F3DC] hover:text-[#0A2463] rounded-md cursor-pointer transition"
                    onMouseEnter={() => setSubActive("roles")}
                  >
                    <span>Role Based</span>
                    <HiChevronRight />
                  </div>

                  {/* SUBMENU: LOCATION */}
                  <AnimatePresence>
                    {subActive === "location" && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="absolute top-0 left-full ml-2 w-48 bg-white border border-[#3E92CC]/20 rounded-lg shadow-lg p-2"
                      >
                        <Link to="/jobs/germany" className="block px-4 py-2 hover:bg-[#D8F3DC] hover:text-[#0A2463] rounded-md transition">
                          Germany
                        </Link>
                        <Link to="/jobs/japan" className="block px-4 py-2 hover:bg-[#D8F3DC] hover:text-[#0A2463] rounded-md transition">
                          Japan
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* SUBMENU: ROLES */}
                  <AnimatePresence>
                    {subActive === "roles" && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="absolute top-0 left-full ml-2 w-56 bg-white border border-[#3E92CC]/20 rounded-lg shadow-lg p-2"
                      >
                        {jobRoles.map((role, i) => (
                          <Link
                            key={i}
                            to={`/jobs/${role.toLowerCase().replace(/ /g, "-")}`}
                            className="block px-4 py-2 hover:bg-[#D8F3DC] hover:text-[#0A2463] rounded-md transition"
                          >
                            {role}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li><Link to="/blog" className="hover:text-[#3E92CC] transition">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-[#3E92CC] transition">Contact Us</Link></li>
          <li><Link to="/about" className="hover:text-[#3E92CC] transition">About Us</Link></li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-3xl text-[#0A2463]" onClick={() => setOpen(true)}>
          <HiMenu />
        </button>
      </div>

      {/* MOBILE SLIDE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed top-0 right-0 w-72 h-full  shadow-2xl p-6 z-50"
          >
            <button className="text-3xl mb-6 text-[#0A2463]" onClick={() => setOpen(false)}>
              <HiX />
            </button>

            {/* Links */}
            <div className="flex flex-col gap-6 text-lg p-3 text-gray-700 bg-white">
              <Link to="/" onClick={() => setOpen(false)} className="hover:text-[#3E92CC]">Home</Link>

              {/* Mobile Services */}
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center hover:text-[#3E92CC]">
                  Services <HiChevronDown className="group-open:rotate-180 transition" />
                </summary>
                <div className="pl-4 mt-2 flex flex-col gap-2">
                  {services.map((item, i) => (
                    <Link
                      key={i}
                      to={`/services/${item.path}`}
                      onClick={() => setOpen(false)}
                      className="text-gray-600 hover:text-[#3E92CC]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </details>

              {/* Mobile Jobs */}
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center hover:text-[#3E92CC]">
                  Jobs <HiChevronDown className="group-open:rotate-180 transition" />
                </summary>

                <div className="pl-4 mt-2">
                  <p className="font-semibold mt-2 text-[#0A2463]">Location Based</p>
                  <div className="pl-3 flex flex-col gap-2">
                    <Link to="/jobs/germany" onClick={() => setOpen(false)} className="hover:text-[#3E92CC]">Germany</Link>
                    <Link to="/jobs/japan" onClick={() => setOpen(false)} className="hover:text-[#3E92CC]">Japan</Link>
                  </div>

                  <p className="font-semibold mt-4 text-[#0A2463]">Role Based</p>
                  <div className="pl-3 flex flex-col gap-2">
                    {jobRoles.map((role, i) => (
                      <Link
                        key={i}
                        to={`/jobs/${role.toLowerCase().replace(/ /g, "-")}`}
                        onClick={() => setOpen(false)}
                        className="hover:text-[#3E92CC]"
                      >
                        {role}
                      </Link>
                    ))}
                  </div>
                </div>
              </details>

              <Link to="/blog" onClick={() => setOpen(false)} className="hover:text-[#3E92CC]">Blog</Link>
              <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-[#3E92CC]">Contact Us</Link>
              <Link to="/about" onClick={() => setOpen(false)} className="hover:text-[#3E92CC]">About Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}