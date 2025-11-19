import React from "react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Shivangi Pathak",
      role: "Founder & CEO",
      image:
        "/founder.jpg",
      bio: "Healthcare leader with 5+ years of experience in global nursing recruitment.",
    },
    {
      name: "Ashish Sinha",
      role: "Director",
      image:
        "/Director.png",
      bio: "Responsible for charting the company's growth trajectory and forging key partnerships.",
    },
    {
      name: "Shikha Varshney",
      role: "Head of Operations",
      image:
        "/headofoperations.jpg",
      bio: "Responsible for optimizing operational workflows across all screening, training, and placement departments.",
    },
    {
      name: "Shivansh Pathak",
      role: "CTO",
      image:
        "/COT.png",
      bio: "Responsible for the technical architecture of YOU&GLOBE's digital platforms.",
    },
  ];

  const values = [
    {
      title: "Integrity",
      description:
        "Ethical recruitment practices with full transparency at every step.",
      icon: "🛡️",
    },
    {
      title: "Compassion",
      description:
        "Our process is designed to support candidates emotionally & professionally.",
      icon: "💙",
    },
    {
      title: "Excellence",
      description:
        "We maintain world-class standards in placement, training & support.",
      icon: "⭐",
    },
    {
      title: "Global Vision",
      description:
        "We prepare nurses to excel in multicultural environments across the world.",
      icon: "🌍",
    },
  ];

  

 

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* HERO */}
      <header
        className="relative bg-cover bg-center pt-24 pb-20"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/medium-shot-smiley-nurse-outdoors_23-2149645830.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#00356e]/85"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
          <h1 data-aos="fade-down" className="text-4xl md:text-5xl font-extrabold mb-4">
            About YOU&GLOBE
          </h1>
          <p data-aos="fade-up" data-aos-delay="120" className="max-w-3xl mx-auto text-lg md:text-xl text-[#bfeaf0]">
            We connect skilled nurses with reputable healthcare employers abroad — with integrity, training and full relocation support.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 -mt-12">
        {/* Founder + CTA */}
        <section data-aos="fade-up" className="bg-white rounded-xl shadow-lg p-6 md:p-10 mb-10">
          <div className="md:flex md:items-center gap-8">
            <img
              src="/founder.jpg"
              alt="Founder"
              className="w-48 h-48 rounded-xl object-cover shadow-md mx-auto md:mx-0"
            />
            <div className="mt-6 md:mt-0">
              <h2 className="text-2xl font-bold text-[#00356e]">A message from our Founder</h2>
              <p className="text-gray-700 mt-3">
                At YOU&GLOBE we believe every nurse deserves a fair opportunity to
                grow — no misinformation, no hidden fees, just clear guidance.
                We work closely with international partners to prepare nurses
                technically and culturally so they thrive abroad.
              </p>

              <blockquote className="mt-4 border-l-4 border-[#008092] pl-4 text-gray-600 italic">
                “Our promise: professional support, honest guidance, lifelong impact.”
              </blockquote>

              <div className="mt-6 flex gap-3">
                <a
                  href="/contact"
                  className="inline-block px-6 py-3 rounded-lg bg-[#008092] text-white font-medium hover:bg-[#00356e] transition"
                >
                  Book a Free Consultation
                </a>
                <a
                  href="/services/profile-screening"
                  className="inline-block px-6 py-3 rounded-lg border border-[#008092] text-[#008092] hover:bg-[#008092] hover:text-white transition"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-10">
          <h3 data-aos="fade-up" className="text-2xl font-bold text-[#00356e] mb-6 text-center">Our Core Values</h3>
          <div data-aos="fade-up" data-aos-delay="80" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white shadow rounded-lg p-6 text-center hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay={i*80}>
                <div className="text-4xl mb-3">{v.icon}</div>
                <h4 className="font-semibold text-lg text-[#00356e]">{v.title}</h4>
                <p className="text-gray-600 mt-2">{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="mb-10">
          <div data-aos="fade-right" className="bg-[#f7fdfc] rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-[#00356e]">Our Story</h3>
              <p className="text-gray-700 mt-4">
                YOU&GLOBE started to solve a real problem: nurses were leaving with
                false promises or poor preparation. We built a transparent process
                — screening, training (language & clinical), interview coaching,
                and end-to-end relocation support.
              </p>
              <p className="text-gray-700 mt-3">
                Partnerships with hospitals and training centers in Germany and Japan
                allow us to match skills to demand and fast-track placements.
              </p>
            </div>

            <div className="md:w-1/2">
              <img
                src="/story.png"
                alt="Team"
                className="w-full h-56 object-cover rounded-lg shadow"
                data-aos="zoom-in"
              />
            </div>
          </div>
        </section>

        

       

        {/* Team */}
        <section className="mb-10">
          <h3 data-aos="fade-up" className="text-2xl font-bold text-[#00356e] mb-6 text-center">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((m, i) => (
              <article key={i} data-aos="fade-up" data-aos-delay={i * 80} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                <img src={m.image} alt={m.name} className="w-full h-56 object-contain" />
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-[#00356e]">{m.name}</h4>
                  <p className="text-[#008092] font-medium mt-1">{m.role}</p>
                  <p className="text-gray-600 mt-3 text-sm">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

       

        {/* Stats */}
        <section className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "350+", label: "Placements" },
              { number: "70+", label: "Partner Hospitals" },
              { number: "5+", label: "Countries" },
              { number: "95%", label: "Visa Success" },
            ].map((s, idx) => (
              <div key={idx} data-aos="zoom-in" className="rounded-xl p-6 text-center" style={{ background: "linear-gradient(135deg,#008092,#00356e)" }}>
                <div className="text-3xl md:text-4xl font-bold text-white">{s.number}</div>
                <div className="text-teal-100 text-sm text-white/90 mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16">
          <div data-aos="fade-up" className="bg-[#008092] rounded-xl p-8 md:p-12 text-center text-white shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your international journey?</h3>
            <p className="max-w-3xl mx-auto text-[#e8fff6] mb-6">
              Book a free consultation and let our team match you with the right opportunity, guide your exams and support relocation every step of the way.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a href="/contact" className="px-6 py-3 rounded-lg bg-white text-[#008092] font-semibold hover:bg-gray-100 transition">Contact Us</a>
              <a href="/services/profile-screening" className="px-6 py-3 rounded-lg border border-white text-white hover:bg-white/10 transition">See Services</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
