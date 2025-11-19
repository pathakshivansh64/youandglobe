import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const theme = {
  primary: "#008092",
  dark: "#00356e",
  accent: "#9eed00"
};

const servicesData = {
  "profile-screening": {
    title: "Profile Screening",
    subtitle: "Comprehensive Candidate Evaluation for Global Opportunities",
    description: "Our expert profile screening service ensures that your qualifications, experience, and credentials meet international standards. We meticulously review your professional background, certifications, and work history to present you as the ideal candidate for overseas employment opportunities.",
    features: [
      {
        title: "Document Verification",
        text: "Thorough verification of all educational certificates, professional licenses, and work experience documents to ensure authenticity and compliance with international standards."
      },
      {
        title: "Skills Assessment",
        text: "Comprehensive evaluation of your technical skills, soft skills, and competencies to match you with the right opportunities that align with your expertise."
      },
      {
        title: "Background Check",
        text: "Professional background verification including employment history, references, and credential validation to build employer confidence."
      },
      {
        title: "Profile Optimization",
        text: "Strategic enhancement of your professional profile to highlight your strengths and make you stand out in the competitive international job market."
      }
    ],
    benefits: [
      "Increased chances of selection by international employers",
      "Fast-track application processing",
      "Professional presentation of credentials",
      "Compliance with international hiring standards",
      "Expert guidance throughout the screening process"
    ],
    image1: "https://www.shutterstock.com/image-photo/digital-resume-screening-by-hr-600nw-2603713241.jpg",
    image2: "https://www.shutterstock.com/image-vector/two-people-evaluating-resume-large-260nw-2613213655.jpg"
  },
  "interview-support": {
    title: "Interview Support",
    subtitle: "Expert Guidance for International Interview Success",
    description: "Navigate international job interviews with confidence through our comprehensive interview preparation and support services. We provide personalized coaching, mock interviews, and cultural insights to help you excel in interviews with employers from Germany, Japan, and other countries.",
    features: [
      {
        title: "Mock Interview Sessions",
        text: "Realistic practice interviews conducted by industry experts who simulate actual interview scenarios, helping you build confidence and refine your responses."
      },
      {
        title: "Cultural Communication Training",
        text: "Learn the nuances of professional communication in different cultures, including appropriate body language, etiquette, and conversation styles."
      },
      {
        title: "Technical Interview Prep",
        text: "Specialized preparation for role-specific technical questions, case studies, and problem-solving scenarios common in international healthcare interviews."
      },
      {
        title: "Q&A Strategy Development",
        text: "Develop compelling answers to common and challenging interview questions, highlighting your unique value proposition to international employers."
      }
    ],
    benefits: [
      "Boost confidence before actual interviews",
      "Understand cultural expectations and norms",
      "Receive constructive feedback and improvement tips",
      "Practice with real interview scenarios",
      "Learn effective storytelling techniques"
    ],
    image1: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    image2: "https://media.istockphoto.com/id/1349473705/vector/job-interviews-concept.jpg?s=612x612&w=0&k=20&c=xDC8tinola1i-S2xEXUl2dJaJfq6kBgVU9okAMT_d8Y="
  },
  "language-training-support": {
    title: "Language & Training Support",
    subtitle: "Master Languages for Global Healthcare Careers",
    description: "Language proficiency is crucial for success in international healthcare positions. Our comprehensive language training programs focus on German, Japanese, and English, with specialized medical terminology and workplace communication skills to ensure you can effectively communicate with patients and colleagues.",
    features: [
      {
        title: "Medical Language Training",
        text: "Specialized courses covering healthcare-specific vocabulary, patient communication, medical documentation, and clinical terminology in your target language."
      },
      {
        title: "Certification Preparation",
        text: "Structured preparation for language proficiency tests required for nursing licenses abroad, including JLPT for Japan and Goethe-Zertifikat for Germany."
      },
      {
        title: "Conversational Practice",
        text: "Interactive sessions with native speakers focusing on real-world healthcare scenarios, patient interactions, and professional workplace conversations."
      },
      {
        title: "Cultural Context Learning",
        text: "Understanding language in its cultural context, including professional etiquette, formal vs. informal communication, and workplace customs."
      }
    ],
    benefits: [
      "Achieve required language proficiency levels",
      "Communicate effectively with patients and colleagues",
      "Pass language certification exams",
      "Build confidence in professional settings",
      "Accelerate your career progression abroad"
    ],
    image1: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    image2: "https://www.knowledgewave.com/hubfs/Business%20Team%20Discussing%20Training.jpeg"
  },
  "cultural-workshop": {
    title: "Cultural Workshop",
    subtitle: "Navigate New Cultures with Confidence",
    description: "Successfully adapting to a new country requires more than just language skills. Our cultural workshops provide deep insights into the social norms, workplace etiquette, and daily life practices of your destination country, helping you integrate smoothly into your new environment both professionally and personally.",
    features: [
      {
        title: "Workplace Culture Training",
        text: "Understand professional hierarchies, communication styles, meeting etiquette, and workplace expectations specific to healthcare settings in your destination country."
      },
      {
        title: "Social Integration Skills",
        text: "Learn about social customs, dining etiquette, public behavior norms, and how to build meaningful relationships in your new community."
      },
      {
        title: "Healthcare System Overview",
        text: "Comprehensive understanding of how healthcare systems operate in your destination country, including protocols, patient care standards, and professional responsibilities."
      },
      {
        title: "Cultural Sensitivity Training",
        text: "Develop awareness of cultural differences in patient care, family involvement, end-of-life decisions, and communication preferences across diverse populations."
      }
    ],
    benefits: [
      "Avoid cultural misunderstandings and faux pas",
      "Build stronger relationships with colleagues and patients",
      "Adapt quickly to your new environment",
      "Reduce culture shock and homesickness",
      "Enhance your professional reputation"
    ],
    image1: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
  },
  "relocation-support": {
    title: "Relocation Support",
    subtitle: "Seamless Transition to Your New Home",
    description: "Relocating to a new country involves numerous logistical challenges. Our comprehensive relocation support services handle everything from housing arrangements to local registration, ensuring your move is stress-free and you can focus on starting your new career with peace of mind.",
    features: [
      {
        title: "Housing Assistance",
        text: "Help finding suitable accommodation near your workplace, understanding rental agreements, and navigating the local housing market with expert guidance."
      },
      {
        title: "Airport Pickup & Settlement",
        text: "Arrange airport reception, temporary accommodation, and assist with initial settlement tasks during your first days in the new country."
      },
      {
        title: "Local Registration Support",
        text: "Guidance through mandatory registration processes, obtaining residence permits, opening bank accounts, and setting up essential services."
      },
      {
        title: "Orientation Services",
        text: "Comprehensive city tours, introduction to public transportation, shopping areas, healthcare facilities, and other essential locations for daily living."
      }
    ],
    benefits: [
      "Smooth and organized relocation process",
      "Save time and avoid common pitfalls",
      "Expert assistance with bureaucratic procedures",
      "Quick settlement and integration",
      "Ongoing support during adjustment period"
    ],
    image1: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
  },
  "visa-immigration-support": {
    title: "Visa & Immigration Support",
    subtitle: "Expert Navigation Through Immigration Procedures",
    description: "Immigration and visa processes can be complex and overwhelming. Our experienced immigration consultants provide end-to-end support for visa applications, work permits, and legal documentation, ensuring compliance with all requirements and maximizing your chances of approval.",
    features: [
      {
        title: "Visa Application Assistance",
        text: "Complete support for work visa applications including document preparation, form filling, appointment scheduling, and submission guidance for various countries."
      },
      {
        title: "Document Preparation",
        text: "Expert help in gathering, translating, and authenticating all required documents such as educational certificates, experience letters, and medical reports."
      },
      {
        title: "Legal Compliance Guidance",
        text: "Ensure all your documents and applications meet the legal requirements of immigration authorities, reducing the risk of rejection or delays."
      },
      {
        title: "Work Permit Processing",
        text: "Assistance with obtaining necessary work permits, professional licenses, and authorization to practice nursing in your destination country."
      }
    ],
    benefits: [
      "Higher visa approval rates",
      "Reduced processing time and stress",
      "Expert knowledge of immigration laws",
      "Proper documentation and compliance",
      "Support throughout the entire process"
    ],
    image1: "https://t4.ftcdn.net/jpg/05/51/49/59/360_F_551495969_ESd1EApXbrzzF8hdnLkqbws47FGb8BW4.jpg",
    image2: "https://l450v.alamy.com/450v/2prybk4/immigration-template-hand-drawn-cartoon-flat-illustration-of-document-with-visa-and-passport-for-moving-to-another-country-2prybk4.jpg"
  },
  "scholarship": {
    title: "Scholarship",
    subtitle: "Financial Support for Your International Career Journey",
    description: "We believe financial constraints shouldn't stop talented healthcare professionals from pursuing international opportunities. Our scholarship program and financial assistance services help you find funding options, grants, and financial support to cover training, certification, and relocation costs.",
    features: [
      {
        title: "Scholarship Database Access",
        text: "Access to comprehensive database of scholarships, grants, and financial aid opportunities specifically for healthcare professionals seeking international careers."
      },
      {
        title: "Application Assistance",
        text: "Expert guidance in preparing scholarship applications, writing compelling essays, and presenting your case effectively to increase approval chances."
      },
      {
        title: "Employer Sponsorship Programs",
        text: "Connect with employers offering training sponsorships, certification funding, and relocation assistance as part of their recruitment packages."
      },
      {
        title: "Financial Planning Guidance",
        text: "Personalized financial planning to help you budget for training, examinations, travel, and initial settlement expenses in your destination country."
      }
    ],
    benefits: [
      "Reduce financial burden of international migration",
      "Access exclusive funding opportunities",
      "Expert application support",
      "Connect with sponsoring employers",
      "Achieve your dreams without financial stress"
    ],
    image1: "https://png.pngtree.com/thumb_back/fh260/background/20250423/pngtree-education-savings-and-scholarship-concept-image_17212092.jpg",
    image2: "https://media.istockphoto.com/id/1292319470/vector/graduate-celebration-concept-with-happy-woman-student.jpg?s=612x612&w=0&k=20&c=GaquoRdHenlYlsZozt-1XFZUcfjLWatbeb14wdZpnPI="
  }
}; 

export default function ServicePage() {
  const { service } = useParams();
  const serviceData = servicesData[service];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  if (!serviceData) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600">The service you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#f7f9fa" }}>
      
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="pt-24 pb-16 px-6 text-white"
        style={{
          background: `linear-gradient(135deg, ${theme.primary}, ${theme.dark})`
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{serviceData.title}</h1>
          <p className="text-xl opacity-90">{serviceData.subtitle}</p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            {serviceData.description}
          </p>
        </motion.div>

        {/* IMAGE 1 - Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0,128,146,0.25)" }}
          className="mb-12 perspective-1000"
        >
          <img
            src={serviceData.image1}
            alt={serviceData.title}
            className="w-full h-96 object-contain rounded-xl shadow-xl"
          />
        </motion.div>

        {/* FEATURES */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-800 mb-8"
          >
            Our Services Include
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {serviceData.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all border-l-4"
                style={{ borderColor: theme.primary }}
              >
                <h3 className="text-xl font-semibold mb-3" style={{ color: theme.primary }}>
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* IMAGE 2 - Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          whileHover={{ 
            scale: 1.02, 
            rotateZ: 1,
            boxShadow: "0 25px 50px -12px rgba(158,237,0,0.25)" 
          }}
          className="mb-12"
        >
          <img
            src={serviceData.image2}
            alt="more"
            className="w-full h-96 object-contain rounded-xl shadow-xl"
          />
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Key Benefits</h2>

          <ul className="space-y-3">
            {serviceData.benefits.map((b, i) => (
              <li key={i} className="flex items-start">
                <span
                  className="mr-3 text-xl font-bold"
                  style={{ color: theme.accent }}
                >
                  ✓
                </span>
                <span className="text-gray-700 text-lg">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl shadow-lg p-10 text-center"
          style={{
            background: `linear-gradient(135deg, ${theme.primary}, ${theme.dark})`,
            color: "white"
          }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 mb-6">
            Contact us today to learn more about our{" "}
            {serviceData.title.toLowerCase()} services.
          </p>

          <a
            href="/contact"
            className="inline-block font-semibold px-10 py-3 rounded-lg shadow-md hover:opacity-90 transition"
            style={{ background: theme.accent, color: "#00356e" }}
          >
            Contact Us Now
          </a>
        </motion.div>

      </div>
    </div>
  );
}