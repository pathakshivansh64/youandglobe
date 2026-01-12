import React from "react";

export default function TermsPage() {
  const sections = [
    {
      title: "About Our Services",
      icon: "🏥",
      content: [
        "YOU&GLOBE is a nurse recruitment and consultancy agency that assists qualified nursing professionals with:",
        "• Career guidance and eligibility assessment",
        "• Interview coordination with overseas employers",
        "• Documentation guidance",
        "• Language training coordination",
        "• Visa and migration process guidance (through authorized partners)",
        "• Placement assistance in Germany and Japan",
        "",
        "We act as a facilitator and intermediary between candidates and foreign employers. Final hiring decisions rest solely with the employer abroad."
      ]
    },
    {
      title: "Eligibility",
      icon: "✅",
      content: [
        "To use our services, you must:",
        "• Be at least 18 years of age",
        "• Be legally eligible to work as a nurse in your home country",
        "• Provide accurate, complete, and truthful information",
        "• Meet the professional and educational requirements set by foreign authorities and employers",
        "",
        "We reserve the right to reject or discontinue services if eligibility criteria are not met."
      ]
    },
    {
      title: "Candidate Responsibilities",
      icon: "📋",
      content: [
        "By using our services, you agree to:",
        "• Provide genuine and verifiable documents (education, experience, licenses, identity, etc.)",
        "• Attend interviews, training sessions, and exams as scheduled",
        "• Comply with immigration, licensing, and employment laws of the destination country",
        "• Maintain professional conduct throughout the recruitment process",
        "• Inform us promptly of any changes in personal, professional, or legal status",
        "",
        "Submission of false or misleading information may result in immediate termination of services without refund."
      ]
    },
    {
      title: "No Guarantee of Employment or Visa",
      icon: "⚠️",
      content: [
        "While we strive to assist candidates to the best of our ability:",
        "• We do not guarantee job placement, interview selection, visa approval, work permit approval, or licensure recognition",
        "• Employment offers are subject to employer decisions, regulatory approvals, and foreign government authorities",
        "• Visa and migration approvals are solely at the discretion of the respective embassies and immigration authorities"
      ]
    },
    {
      title: "Fees and Payments",
      icon: "💳",
      content: [
        "• Fees, if applicable, will be clearly communicated before enrollment",
        "• All payments must be made as per the agreed schedule",
        "• Fees paid for registration, documentation review, training, or consultation are non-refundable, unless explicitly stated otherwise in writing",
        "• Government fees, embassy fees, language exam fees, and third-party charges are not controlled by us and are non-refundable",
        "• We reserve the right to revise our fee structure with prior notice"
      ]
    },
    {
      title: "Training and Language Requirements",
      icon: "📚",
      content: [
        "• Certain destinations may require language proficiency (e.g., German or Japanese language levels)",
        "• Training timelines may vary depending on candidate progress",
        "• Examination results are controlled by external institutions",
        "• Failure to clear required exams may delay or stop the recruitment process"
      ]
    },
    {
      title: "Employer Contracts and Employment Terms",
      icon: "📝",
      content: [
        "• Employment contracts are issued directly by overseas employers",
        "• We are not a party to the employment contract",
        "• Salary, benefits, working hours, accommodation, and employment conditions are governed by the employer and local labor laws",
        "• Any disputes arising after employment must be resolved between the candidate and the employer"
      ]
    },
    {
      title: "Website Use",
      icon: "🌐",
      content: [
        "You agree not to:",
        "• Use the website for unlawful purposes",
        "• Attempt to gain unauthorized access to systems or data",
        "• Copy, modify, or distribute website content without permission",
        "• Upload viruses, malware, or harmful code",
        "",
        "We reserve the right to suspend or terminate access to the website at any time."
      ]
    },
    {
      title: "Intellectual Property",
      icon: "©️",
      content: [
        "All content on this website, including text, logos, graphics, images, and design, is the intellectual property of YOU&GLOBE and may not be reproduced without written consent."
      ]
    },
    {
      title: "Privacy and Data Protection",
      icon: "🔒",
      content: [
        "Your personal data is collected and processed in accordance with our Privacy Policy.",
        "",
        "By using our services, you consent to:",
        "• Storage and processing of personal data",
        "• Sharing of information with foreign employers, language institutes, regulatory bodies, and immigration partners as required",
        "",
        "We take reasonable measures to protect your data but cannot guarantee absolute security."
      ]
    },
    {
      title: "Limitation of Liability",
      icon: "⚖️",
      content: [
        "To the maximum extent permitted by law:",
        "• We shall not be liable for job rejection, visa refusal, exam failure, employer withdrawal, or changes in foreign laws",
        "• We are not responsible for delays caused by third parties, government authorities, or force majeure events",
        "• Our total liability, if any, shall not exceed the fees paid to us for our services"
      ]
    }
  ];

  const values = [
    {
      title: "Transparency",
      description:
        "Clear communication about fees, processes, and expectations at every step.",
      icon: "🛡️",
    },
    {
      title: "Fair Process",
      description:
        "Equal opportunity for all eligible nursing professionals worldwide.",
      icon: "💙",
    },
    {
      title: "Professional Support",
      description:
        "Comprehensive guidance throughout your international career journey.",
      icon: "⭐",
    },
    {
      title: "Ethical Standards",
      description:
        "Full compliance with international recruitment best practices.",
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
            "url('https://img.freepik.com/free-photo/business-people-shaking-hands-together_53876-13391.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#00356e]/85"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
          <h1 data-aos="fade-down" className="text-4xl md:text-5xl font-extrabold mb-4">
            Terms and Conditions
          </h1>
          <p data-aos="fade-up" data-aos-delay="120" className="max-w-3xl mx-auto text-lg md:text-xl text-[#bfeaf0]">
            Clear guidelines for a transparent and professional recruitment journey with YOU&GLOBE
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 -mt-12">
        {/* Introduction with Image */}
        <section data-aos="fade-up" className="bg-white rounded-xl shadow-lg p-6 md:p-10 mb-10">
          <div className="md:flex md:items-center gap-8">
            <img
              src="https://www.cookieyes.com/wp-content/uploads/2024/04/Privacy-Policy-vs-terms.png"
              alt="Agreement"
              className="w-48 h-48 rounded-xl object-cover shadow-md mx-auto md:mx-0"
            />
            <div className="mt-6 md:mt-0">
              <h2 className="text-2xl font-bold text-[#00356e]">Welcome to YOU&GLOBE</h2>
              <p className="text-gray-700 mt-3">
                These Terms and Conditions ("Terms") govern your use of our website{" "}
                <span className="text-[#008092] font-medium">www.youandglobe.com</span> and our nurse recruitment and placement services for overseas employment, particularly in Germany and Japan.
              </p>

              <blockquote className="mt-4 border-l-4 border-[#008092] pl-4 text-gray-600 italic">
                "By accessing our website or using our services, you agree to be bound by these Terms."
              </blockquote>

              <div className="mt-6 flex gap-3">
                <a
                  href="/contact"
                  className="inline-block px-6 py-3 rounded-lg bg-[#008092] text-white font-medium hover:bg-[#00356e] transition"
                >
                  Have Questions?
                </a>
                <a
                  href="/about"
                  className="inline-block px-6 py-3 rounded-lg border border-[#008092] text-[#008092] hover:bg-[#008092] hover:text-white transition"
                >
                  About Us
                </a>
              </div>
            </div>
          </div>
        </section>



        {/* Important Notice with Image */}
        <section className="mb-10">
          <div data-aos="fade-right" className="bg-[#f7fdfc] rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-[#00356e]">Please Read Carefully</h3>
              <p className="text-gray-700 mt-4">
                These terms are designed to protect both you and YOU&GLOBE, ensuring a transparent and professional recruitment process. We believe in complete honesty and clarity at every step of your journey.
              </p>
              <p className="text-gray-700 mt-3">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you have any questions, our team is here to help clarify before you proceed.
              </p>
            </div>

            <div className="md:w-1/2">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/009/268/574/small_2x/terms-and-conditions-legal-concept-design-man-checking-form-and-agree-with-the-terms-and-conditions-vector.jpg"
                alt="Legal Agreement"
                className="w-full h-56 object-cover rounded-lg shadow"
                data-aos="zoom-in"
              />
            </div>
          </div>
        </section>

        {/* Detailed Terms Sections */}
        <section className="mb-10">
          <h3 data-aos="fade-up" className="text-2xl font-bold text-[#00356e] mb-6 text-center">
            Detailed Terms & Conditions
          </h3>
          <div className="space-y-6">
            {sections.map((section, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 40}
                className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{section.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-xl text-[#00356e] mb-3">
                      {i + 1}. {section.title}
                    </h4>
                    <div className="text-gray-700 space-y-2">
                      {section.content.map((line, idx) => (
                        <p key={idx} className={line === "" ? "h-2" : ""}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Stats */}
        <section className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "📄", label: "Transparent Terms" },
              { icon: "🤝", label: "Fair Practices" },
              { icon: "🔐", label: "Data Protected" },
              { icon: "✅", label: "Legal Compliance" },
            ].map((s, idx) => (
              <div key={idx} data-aos="zoom-in" className="rounded-xl p-6 text-center" style={{ background: "linear-gradient(135deg,#008092,#00356e)" }}>
                <div className="text-3xl md:text-4xl mb-2">{s.icon}</div>
                <div className="text-white font-medium mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Final Notice with Image */}
        <section className="mb-10">
          <div data-aos="fade-left" className="bg-[#f7fdfc] rounded-xl p-6 md:p-10 flex flex-col md:flex-row-reverse items-center gap-6">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-[#00356e]">Your Agreement Matters</h3>
              <p className="text-gray-700 mt-4">
                These terms ensure that both YOU&GLOBE and our candidates are protected throughout the recruitment process. We maintain the highest ethical standards in international healthcare recruitment.
              </p>
              <p className="text-gray-700 mt-3">
                Last Updated: January 2025. We may update these terms periodically to reflect changes in our services or legal requirements. Continued use of our services constitutes acceptance of any updated terms.
              </p>
            </div>

            <div className="md:w-1/2">
              <img
                src="https://www.weiner.law/wp-content/uploads/2025/09/prenuptial-agreement.jpg"
                alt="Professional Agreement"
                className="w-full h-56 object-cover rounded-lg shadow"
                data-aos="zoom-in"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16">
          <div data-aos="fade-up" className="bg-[#008092] rounded-xl p-8 md:p-12 text-center text-white shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Questions About Our Terms?</h3>
            <p className="max-w-3xl mx-auto text-[#e8fff6] mb-6">
              Our team is here to help clarify any questions you have about our terms and conditions. We believe in complete transparency throughout your journey with us.
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