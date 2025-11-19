import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const services = [
    {
      title: "Profile Screening",
      desc: "Comprehensive candidate screening with background checks and qualification verification to ensure quality placements."
    },
    {
      title: "Interview Support",
      desc: "Get personalized coaching and mock interviews to help you perform your best with global healthcare recruiters."
    },
    {
      title: "Language & Training Support",
      desc: "Expert training for German (B1/B2), Japanese (N4/N3), and advanced English communication skills."
    },
    {
      title: "Cultural Workshop",
      desc: "Pre-departure orientation and cultural training to help you adapt to workplace expectations in your destination country."
    },
    {
      title: "Relocation Support",
      desc: "Complete relocation assistance including accommodation, airport pickup coordination, and settling-in support."
    },
    {
      title: "Visa & Immigration Support",
      desc: "Expert guidance through complete visa, compliance, and documentation processes to ensure smooth transitions."
    },
    {
      title: "Permanent Recruitment",
      desc: "Access to our database of 100,000+ registered healthcare professionals for fast and efficient permanent hiring."
    },
    {
      title: "Temporary Staffing",
      desc: "Quick and cost-effective specialist role fulfillment with our dedicated locum placement team."
    }
  ];

  const strengths = [
    {
      icon: "🌍",
      title: "Global Expertise",
      desc: "Specialized in healthcare recruitment for Germany, Malta, and Japan with proven track record."
    },
    {
      icon: "⚡",
      title: "Streamlined Process",
      desc: "Efficient recruitment ensuring quality, compliance, and quick turnaround times."
    },
    {
      icon: "👥",
      title: "Experienced Team",
      desc: "Dedicated professionals experienced in healthcare staffing and international documentation."
    },
    {
      icon: "🤝",
      title: "End-to-End Support",
      desc: "Comprehensive assistance from candidate screening to visa approval and relocation."
    }
  ];

  const domains = [
    "Registered Nurses (RN)",
    "Clinical Nurse Specialists",
    "ICU & Emergency Nurses",
    "Surgical & Operating Room Nurses",
    "Pediatric Nurses",
    "Elderly Care Nurses",
    "Home Care Nurses",
    "Allied Health Professionals"
  ];

  const testimonials = [
    {
      name: "Maria Thomas",
      text: "YOU&GLOBE guided me through the entire UK process. I'm now working in an NHS hospital!",
      img: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Anjali Nair",
      text: "Their language training and support helped me secure my dream job in Germany!",
      img: "https://randomuser.me/api/portraits/women/69.jpg"
    },
    {
      name: "Grace Mathew",
      text: "From documentation to interviews, everything was professionally managed.",
      img: "https://randomuser.me/api/portraits/women/67.jpg"
    },
    {
      name: "Rebecca Jose",
      text: "Japan felt impossible — but YOU&GLOBE made it happen with their expert guidance!",
      img: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "Priya Menon",
      text: "Highly recommend their transparent process and supportive team.",
      img: "https://randomuser.me/api/portraits/women/70.jpg"
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#D8F3DC] via-white to-[#3E92CC]/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* LEFT SIDE - Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Animated Heading - Word by Word */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-[#0A2463]">
                {[
                  "Empowering",
                  "Healthcare",
                  "Professionals",
                  "for",
                  "Global",
                  "Careers"
                ].map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2,
                      ease: "easeOut"
                    }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed"
              >
                Connecting skilled Indian nurses and healthcare professionals with rewarding opportunities in <span className="font-semibold text-[#3E92CC]">Germany, Malta, and Japan</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="bg-[#FB8500] text-white px-8 py-4 rounded-full font-bold hover:bg-[#e67700] transition shadow-lg text-center"
                >
                  Start Your Journey
                </Link>
                <Link
                  to="/about"
                  className="bg-transparent border-2 border-[#0A2463] text-[#0A2463] px-8 py-4 rounded-full font-semibold hover:bg-[#0A2463] hover:text-white transition text-center"
                >
                  Learn More
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                className="mt-12 grid grid-cols-3 gap-6"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#3E92CC]">200+</div>
                  <div className="text-sm text-gray-600">Placements</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#3E92CC]">50+</div>
                  <div className="text-sm text-gray-600">Hospitals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#3E92CC]">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE - Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Image */}
                <img
                  src="https://www.howtobecomejob.com/wp-content/uploads/2021/03/how-to-become-a-travel-nurse-999x640.jpg"
                  alt="International Nursing Opportunities"
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                />
                
                {/* Floating Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border-t-4 border-[#52B788]"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-[#52B788] text-white p-4 rounded-full">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 5.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-[#0A2463] text-xl">10,000+</div>
                      <div className="text-sm text-gray-600">Registered Professionals</div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FB8500] rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#3E92CC] rounded-full opacity-20 blur-3xl"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW SECTION */}
      <section className="bg-gradient-to-r from-[#0A2463] to-[#3E92CC] py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Company Overview
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
              <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
                <span className="font-bold text-[#52B788]">You & Globe Private Limited</span> is a Bangalore-based healthcare recruitment company dedicated to connecting skilled Indian nurses and healthcare professionals with rewarding opportunities in <span className="font-semibold">Germany, Malta, and Japan</span>.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                We specialize in bridging global healthcare talent gaps by offering flexible and compliant recruitment solutions tailored to the unique needs of hospitals and medical institutions overseas. With access to a database of over <span className="font-semibold text-[#52B788]">10,000 registered medical professionals</span>, we ensure fast, efficient, and quality placements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR STRENGTHS */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-14 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Strengths
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, i) => (
              <motion.div
                key={i}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-[#D8F3DC] to-[#3E92CC]/10 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{strength.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#0A2463]">{strength.title}</h3>
                <p className="text-gray-600 text-sm">{strength.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-[#D8F3DC]/30 py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each client's staffing requirement is unique, so we provide tailored recruitment solutions to meet every need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all cursor-pointer border-t-4 border-[#3E92CC]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3 text-[#3E92CC]">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DOMAIN EXPERTISE */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-6 text-[#0A2463]">
              Our Domain Expertise
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
              We recruit across a wide range of healthcare specialties including nurses, doctors, and allied health professionals
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {domains.map((domain, i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-br from-[#D8F3DC] to-white border-2 border-[#3E92CC]/20 text-[#0A2463] p-5 rounded-xl text-center font-semibold hover:border-[#3E92CC] hover:shadow-lg hover:scale-105 transition-all"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-[#52B788] text-xl">✓</span>
                    <span>{domain}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUALITY ASSURANCE */}
      <section className="bg-gradient-to-br from-[#D8F3DC] via-white to-[#3E92CC]/10 py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-[#0A2463]">Quality Assurance</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
              We maintain the highest standards in candidate screening and placement processes
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Screening", desc: "Comprehensive candidate background checks", icon: "🔍" },
                { title: "Verification", desc: "Professional qualifications & clinical experience", icon: "✓" },
                { title: "Clearances", desc: "Medical and police clearances per regulations", icon: "📋" },
                { title: "Coordination", desc: "Complete visa documentation & travel support", icon: "🌐" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-t-4 border-[#3E92CC]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-[#3E92CC]">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      
      {/* CTA SECTION */}
      <section className="bg-white py-20 px-6 md:px-16">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-gradient-to-br from-[#D8F3DC] via-white to-[#3E92CC]/10 rounded-3xl p-12 md:p-16 shadow-2xl border-2 border-[#3E92CC]/20 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3E92CC] rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#52B788] rounded-full opacity-10 blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#0A2463]">
                Ready to Start Your Global Healthcare Career?
              </h2>
              <p className="text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
                Join thousands of healthcare professionals who have trusted YOU&GLOBE to achieve their international career dreams
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-[#FB8500] text-white px-10 py-4 rounded-full font-bold hover:bg-[#e67700] transition shadow-lg text-lg"
                >
                  Contact Us Today
                </Link>
                <Link
                  to="/services/profile-screening"
                  className="bg-[#3E92CC] text-white px-10 py-4 rounded-full font-bold hover:bg-[#0A2463] transition shadow-lg text-lg"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}