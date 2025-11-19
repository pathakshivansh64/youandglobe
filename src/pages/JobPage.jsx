import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const theme = {
  primary: "#008092",
  dark: "#00356e",
  accent: "#9eed00"
};


const jobsData = {
  // Location Based Jobs
  "germany": {
    title: "Nursing Jobs in Germany",
    subtitle: "Join Germany's World-Class Healthcare System",
    description: "Germany offers exceptional opportunities for international nurses with competitive salaries, excellent work-life balance, and a high standard of living. The German healthcare system is renowned for its quality, and there is a growing demand for qualified nursing professionals across the country.",
    overview: "Germany's aging population and expanding healthcare sector have created significant opportunities for skilled nurses. With over 1,900 hospitals and numerous care facilities, the demand for qualified nursing staff continues to grow. International nurses are welcomed and supported through structured integration programs.",
    requirements: [
      "Recognized nursing qualification (minimum 3 years training)",
      "German language proficiency (B2 level minimum)",
      "Recognition of foreign nursing qualifications (Anerkennung)",
      "Valid work visa and residence permit",
      "Clean criminal record and health certificate"
    ],
    benefits: [
      "Competitive salaries ranging from €2,800 to €4,500 per month",
      "Comprehensive social security and health insurance",
      "30 days annual paid vacation",
      "Professional development and training opportunities",
      "Family reunification options",
      "Permanent residence pathway after 5 years",
      "High quality of life and excellent public services"
    ],
    positions: [
      {
        role: "General Ward Nurse",
        salary: "€2,800 - €3,500/month",
        description: "Provide patient care in general hospital wards, medication administration, and patient monitoring."
      },
      {
        role: "ICU Nurse",
        salary: "€3,500 - €4,500/month",
        description: "Specialized care for critically ill patients in intensive care units with advanced monitoring systems."
      },
      {
        role: "Elderly Care Nurse (Altenpfleger)",
        salary: "€2,600 - €3,400/month",
        description: "Provide compassionate care for elderly patients in nursing homes and geriatric facilities."
      },
      {
        role: "Surgical Nurse",
        salary: "€3,200 - €4,200/month",
        description: "Assist in surgical procedures, pre and post-operative care in state-of-the-art operating theaters."
      }
    ],
    image1: "https://www.learngermanonline.org/wp-content/uploads/2024/08/nursing-jobs.jpg",
    image2: "https://cdn.prod.website-files.com/6597f217b38746008480455c/68a2d50391306730b68a8e1e_growing-demand-international-nurses-germany.jpg.jpg"
  },
  "japan": {
    title: "Nursing Jobs in Japan",
    subtitle: "Experience Healthcare Excellence in the Land of the Rising Sun",
    description: "Japan offers unique opportunities for international nurses to work in one of the world's most advanced healthcare systems. With a rapidly aging population, Japan is actively recruiting qualified nurses from abroad, offering competitive packages and a chance to experience rich Japanese culture.",
    overview: "Japan's healthcare system is ranked among the best globally, with cutting-edge technology and patient-centered care. The country faces a severe nursing shortage with over 60,000 vacant positions annually. International nurses are welcomed through the EPA program and other initiatives, with comprehensive language and cultural training provided.",
    requirements: [
      "Nursing diploma or degree from recognized institution",
      "Minimum 3 years of clinical experience",
      "Japanese language proficiency (N3-N2 level for daily work)",
      "Pass the Japanese National Nursing Examination",
      "Valid work visa (Specified Skilled Worker or EPA)",
      "Medical examination and background verification"
    ],
    benefits: [
      "Competitive salaries from ¥250,000 to ¥400,000 per month",
      "Comprehensive health and social insurance",
      "Housing assistance or company accommodation",
      "Language training and cultural orientation programs",
      "Annual bonuses (typically 2-4 months salary)",
      "Paid vacation (minimum 10 days, increasing with tenure)",
      "Path to permanent residence",
      "Experience unique Japanese culture and hospitality"
    ],
    positions: [
      {
        role: "General Hospital Nurse",
        salary: "¥250,000 - ¥320,000/month",
        description: "Provide comprehensive patient care in hospital wards with focus on patient comfort and recovery."
      },
      {
        role: "Elderly Care Nurse (Kaigo Fukushishi)",
        salary: "¥230,000 - ¥300,000/month",
        description: "Specialized care for elderly patients in nursing homes and care facilities, highly valued role in aging society."
      },
      {
        role: "ICU/Emergency Nurse",
        salary: "¥300,000 - ¥400,000/month",
        description: "Critical care nursing in advanced medical facilities with state-of-the-art equipment and technology."
      },
      {
        role: "Pediatric Nurse",
        salary: "¥270,000 - ¥350,000/month",
        description: "Specialized care for children in hospitals and pediatric clinics with family-centered care approach."
      }
    ],
    image1: "https://tuyendung.namtrieu.com.vn/public/uploads/images/image-20180920112303-3.jpeg",
    image2: "https://hrinternational.in/blog/wp-content/uploads/2025/09/Nursing-Recruitment-Agencies-scaled.jpg"
  },
   "malta": {
    title: "Nursing Jobs in Malta",
    subtitle: "Your Gateway to European Healthcare in the Mediterranean",
    description: "Malta offers an exceptional blend of Mediterranean lifestyle and European healthcare standards for international nurses. As an English-speaking EU member state with beautiful weather and rich history, Malta provides attractive opportunities for nurses seeking to work in Europe while enjoying a high quality of life in a stunning island setting.",
    overview: "Malta's healthcare system combines British and European influences, offering familiar practices for English-speaking nurses. The country faces a significant nursing shortage, making it easier for qualified international nurses to secure positions. With its strategic location, Malta serves as an excellent stepping stone for nursing careers throughout Europe, offering EU work rights and a welcoming multicultural environment.",
    requirements: [
      "Recognized nursing qualification (BSc or diploma in nursing)",
      "Minimum 2 years of post-qualification clinical experience",
      "English language proficiency (native or C1 level)",
      "Registration with the Council for Nurses and Midwives of Malta",
      "EU/EEA citizenship or valid work permit",
      "Criminal conduct certificate and health clearance",
      "Professional indemnity insurance"
    ],
    benefits: [
      "Competitive salaries ranging from €1,800 to €3,200 per month",
      "EU work rights and freedom of movement",
      "English-speaking work environment",
      "Mediterranean climate with 300+ days of sunshine",
      "Comprehensive healthcare and social benefits",
      "Tax advantages and attractive expat packages",
      "Professional development and EU-recognized certifications",
      "Low cost of living compared to other EU countries",
      "Rich cultural heritage and vibrant expat community",
      "Easy access to travel across Europe and North Africa"
    ],
    positions: [
      {
        role: "Staff Nurse - General Medicine",
        salary: "€1,800 - €2,400/month",
        description: "Provide comprehensive nursing care in medical wards of Malta's main hospitals and healthcare facilities."
      },
      {
        role: "ICU/Critical Care Nurse",
        salary: "€2,400 - €3,200/month",
        description: "Specialized critical care in modern intensive care units with advanced life support systems."
      },
      {
        role: "Theatre Nurse",
        salary: "€2,200 - €2,900/month",
        description: "Perioperative nursing in surgical theaters, assisting with diverse surgical procedures."
      },
      {
        role: "Community Nurse",
        salary: "€1,900 - €2,500/month",
        description: "Home-based nursing care and health promotion in Malta's close-knit communities."
      },
      {
        role: "Elderly Care Nurse",
        salary: "€1,800 - €2,400/month",
        description: "Geriatric nursing in residential care homes and specialized elderly care facilities."
      },
      {
        role: "Private Healthcare Nurse",
        salary: "€2,200 - €3,000/month",
        description: "Work in Malta's growing private healthcare sector serving international patients and residents."
      }
    ],
    image1: "https://www.manglishworld.com/_next/image?url=%2Fconfident-malta-doctor.jpg&w=3840&q=75",
    image2: "https://mwtstudyabroad.com/wp-content/uploads/2025/10/nursing-in-malta-for-indian-students-1024x550.webp"
  },
  
  
  // Role Based Jobs
  "registered-nurse-(rn)": {
    title: "Registered Nurse (RN) Positions",
    subtitle: "Core Nursing Roles Across International Healthcare Facilities",
    description: "Registered Nurses form the backbone of healthcare systems worldwide. As an RN working internationally, you'll provide direct patient care, coordinate with healthcare teams, and ensure the highest standards of patient safety and comfort. These positions are available across multiple countries and healthcare settings.",
    overview: "Registered Nurses are in high demand globally, particularly in developed countries facing nursing shortages. RN positions offer diverse opportunities in hospitals, clinics, and community health settings. International RN roles typically require nursing licensure, language proficiency, and cultural adaptability.",
    requirements: [
      "Valid nursing license/registration from home country",
      "Bachelor's or diploma in nursing (BSN preferred)",
      "Minimum 1-2 years clinical experience",
      "Language proficiency in destination country",
      "BLS/ACLS certification",
      "Ability to obtain nursing license in destination country"
    ],
    benefits: [
      "Competitive international salaries",
      "Professional development opportunities",
      "Exposure to advanced healthcare practices",
      "International career advancement",
      "Comprehensive benefits packages",
      "Cultural exchange experiences",
      "Potential for permanent migration"
    ],
    positions: [
      {
        role: "Medical-Surgical RN",
        salary: "Competitive based on country",
        description: "Provide care for patients with various medical conditions and surgical procedures in hospital settings."
      },
      {
        role: "Emergency Room RN",
        salary: "Premium rates for specialized skill",
        description: "Fast-paced environment providing immediate care for acute illnesses and injuries."
      },
      {
        role: "Community Health RN",
        salary: "Market competitive",
        description: "Work in community settings providing preventive care, health education, and patient follow-up."
      },
      {
        role: "Rehabilitation RN",
        salary: "Competitive with benefits",
        description: "Help patients recover from injuries, surgeries, or illnesses through specialized rehabilitation programs."
      }
    ],
    image1: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80"
  },
  "clinical-nurse-specialist": {
    title: "Clinical Nurse Specialist Positions",
    subtitle: "Advanced Practice Nursing in Specialized Healthcare Areas",
    description: "Clinical Nurse Specialists (CNS) are advanced practice registered nurses who provide expert clinical knowledge in specific healthcare areas. These highly specialized roles combine clinical practice, education, research, and leadership to improve patient outcomes and healthcare delivery systems internationally.",
    overview: "CNS positions are available in leading hospitals and healthcare institutions worldwide. These roles require advanced education, specialized certification, and extensive clinical experience. CNS professionals work autonomously and collaboratively to develop protocols, mentor staff, and drive quality improvement initiatives.",
    requirements: [
      "Master's degree in nursing (MSN) or higher",
      "CNS certification in specialty area",
      "Minimum 3-5 years clinical experience in specialty",
      "Advanced language proficiency",
      "Strong research and analytical skills",
      "Leadership and teaching abilities"
    ],
    benefits: [
      "Premium compensation packages",
      "Leadership and autonomy in practice",
      "Research and publication opportunities",
      "International recognition and networking",
      "Continuing education support",
      "Career progression to senior clinical roles",
      "Influence on healthcare policy and practice"
    ],
    positions: [
      {
        role: "Oncology CNS",
        salary: "Premium specialist rates",
        description: "Specialize in cancer care, treatment protocols, and patient/family support through cancer journey."
      },
      {
        role: "Cardiac CNS",
        salary: "High compensation for expertise",
        description: "Expert in cardiovascular care, cardiac rehabilitation, and heart failure management programs."
      },
      {
        role: "Psychiatric CNS",
        salary: "Competitive specialist salary",
        description: "Advanced mental health care, therapy, medication management, and psychiatric consultations."
      },
      {
        role: "Neonatal CNS",
        salary: "Premium neonatal rates",
        description: "Specialized care for critically ill newborns in NICU settings with family-centered approach."
      }
    ],
    image1: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80"
  },
  "icu-nurse": {
    title: "ICU Nurse Positions",
    subtitle: "Critical Care Nursing in State-of-the-Art Facilities",
    description: "ICU Nurses provide specialized care for critically ill patients requiring intensive monitoring and advanced life support. These high-demand positions are available in leading hospitals worldwide, offering opportunities to work with cutting-edge medical technology and multidisciplinary teams.",
    overview: "Intensive Care Unit nurses are among the most sought-after healthcare professionals globally. The role demands expert clinical skills, quick decision-making, and the ability to work under pressure. International ICU positions offer excellent compensation and professional growth in advanced healthcare environments.",
    requirements: [
      "Valid RN license with ICU specialization",
      "BLS, ACLS, and PALS certifications",
      "Minimum 2 years ICU experience",
      "Advanced assessment and critical thinking skills",
      "Proficiency with ICU equipment and monitoring systems",
      "Strong communication skills in target language"
    ],
    benefits: [
      "Higher than average nursing salaries",
      "Shift differentials and premium pay",
      "Advanced training in critical care",
      "Work with latest medical technology",
      "Highly respected and valued position",
      "Strong career advancement opportunities",
      "International certification recognition"
    ],
    positions: [
      {
        role: "Medical ICU Nurse",
        salary: "Premium ICU rates",
        description: "Care for critically ill medical patients with complex conditions requiring intensive monitoring."
      },
      {
        role: "Surgical ICU Nurse",
        salary: "High specialized compensation",
        description: "Post-operative critical care for complex surgical patients requiring advanced hemodynamic support."
      },
      {
        role: "Cardiac ICU Nurse",
        salary: "Premium cardiac care rates",
        description: "Specialized care for patients with critical cardiac conditions, post-cardiac surgery, and LVAD."
      },
      {
        role: "Neuro ICU Nurse",
        salary: "Premium neuro specialty pay",
        description: "Expert care for patients with critical neurological conditions, stroke, and traumatic brain injury."
      }
    ],
    image1: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80"
  },
  "surgical-nurse": {
    title: "Surgical Nurse Positions",
    subtitle: "Perioperative Nursing Excellence Worldwide",
    description: "Surgical Nurses, also known as Perioperative or Operating Room Nurses, play a crucial role in surgical teams across international healthcare facilities. These specialized positions involve pre-operative preparation, intra-operative assistance, and post-operative care in advanced surgical environments.",
    overview: "Surgical nursing is a highly specialized field with excellent international opportunities. Surgical nurses work in operating theaters, day surgery units, and specialized surgical departments. The role requires technical expertise, attention to detail, and the ability to work effectively in high-pressure environments.",
    requirements: [
      "Valid RN license with surgical/perioperative certification",
      "Perioperative nursing certification (CNOR preferred)",
      "Minimum 1-3 years surgical nursing experience",
      "Knowledge of surgical instruments and procedures",
      "Sterile technique expertise",
      "Ability to work in fast-paced surgical environment"
    ],
    benefits: [
      "Competitive surgical specialty salaries",
      "Regular weekday schedules (limited on-call)",
      "Advanced surgical training opportunities",
      "Work with renowned surgeons and specialists",
      "Access to cutting-edge surgical technology",
      "Specialization in various surgical fields",
      "Strong international career mobility"
    ],
    positions: [
      {
        role: "Operating Room Nurse",
        salary: "Premium OR rates",
        description: "Scrub and circulating nurse roles in general and specialized surgical procedures."
      },
      {
        role: "Pre-Operative Nurse",
        salary: "Competitive surgical rates",
        description: "Prepare patients for surgery, conduct assessments, and provide pre-operative education and care."
      },
      {
        role: "Post-Anesthesia Care Nurse",
        salary: "PACU specialty pay",
        description: "Monitor and care for patients in recovery from anesthesia with close vital sign monitoring."
      },
      {
        role: "Minimally Invasive Surgery Nurse",
        salary: "High-tech specialty compensation",
        description: "Assist in laparoscopic and robotic surgeries using advanced technological equipment."
      }
    ],
    image1: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80"
  },
  "pediatric-nurse": {
    title: "Pediatric Nurse Positions",
    subtitle: "Caring for Children in International Healthcare Settings",
    description: "Pediatric Nurses specialize in providing healthcare to infants, children, and adolescents in various international settings. These rewarding positions combine clinical expertise with compassionate care for young patients and support for their families during healthcare experiences.",
    overview: "Pediatric nursing is a specialized field with growing international demand. Pediatric nurses work in children's hospitals, pediatric units, outpatient clinics, and community health settings. The role requires specialized knowledge of child development, family-centered care, and the ability to communicate effectively with children of all ages.",
    requirements: [
      "Valid RN license with pediatric nursing certification",
      "Pediatric Advanced Life Support (PALS) certification",
      "Minimum 1-2 years pediatric nursing experience",
      "Knowledge of child development and family dynamics",
      "Excellent communication skills with children and families",
      "Language proficiency suitable for destination country"
    ],
    benefits: [
      "Rewarding work with children and families",
      "Competitive pediatric specialty salaries",
      "Specialized pediatric training programs",
      "Family-friendly work environments",
      "Diverse subspecialty opportunities",
      "Strong job security and demand",
      "International pediatric nursing networks"
    ],
    positions: [
      {
        role: "Pediatric Ward Nurse",
        salary: "Competitive pediatric rates",
        description: "General pediatric care for children with various medical conditions in hospital ward settings."
      },
      {
        role: "Neonatal Nurse (NICU)",
        salary: "Premium neonatal specialty pay",
        description: "Specialized care for premature and critically ill newborns in neonatal intensive care units."
      },
      {
        role: "Pediatric Emergency Nurse",
        salary: "Emergency specialty rates",
        description: "Provide urgent care for children with acute illnesses and injuries in pediatric emergency departments."
      },
      {
        role: "Pediatric Oncology Nurse",
        salary: "High specialty compensation",
        description: "Specialized care for children with cancer, including chemotherapy administration and supportive care."
      }
    ],
    image1: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&q=80"
  },
  "elderly-care-nurse": {
    title: "Elderly Care Nurse Positions",
    subtitle: "Geriatric Nursing in Aging Societies",
    description: "Elderly Care Nurses, also known as Geriatric Nurses, specialize in caring for the aging population in various international healthcare settings. With global populations aging rapidly, these positions are in extremely high demand, particularly in developed countries like Germany and Japan.",
    overview: "Geriatric nursing is one of the fastest-growing specialties worldwide. Elderly care nurses work in nursing homes, assisted living facilities, hospitals, and home care settings. The role requires understanding of age-related conditions, compassionate care, and the ability to support both patients and their families through the aging process.",
    requirements: [
      "Valid RN license with geriatric certification (preferred)",
      "Understanding of age-related health conditions",
      "Experience in elderly care or long-term care settings",
      "Patience and compassionate communication skills",
      "Knowledge of dementia care and end-of-life care",
      "Cultural sensitivity for elderly care practices"
    ],
    benefits: [
      "High demand with excellent job security",
      "Competitive salaries in aging societies",
      "Meaningful long-term patient relationships",
      "Less acute stress than hospital settings",
      "Regular schedules with better work-life balance",
      "Specialized geriatric training opportunities",
      "Growing field with career advancement options"
    ],
    positions: [
      {
        role: "Nursing Home Nurse",
        salary: "Competitive long-term care rates",
        description: "Provide comprehensive care for elderly residents in skilled nursing and residential facilities."
      },
      {
        role: "Dementia Care Specialist",
        salary: "Specialty dementia care compensation",
        description: "Specialized care for patients with Alzheimer's and other forms of dementia with behavioral management."
      },
      {
        role: "Geriatric Hospital Nurse",
        salary: "Hospital-based geriatric rates",
        description: "Acute care for elderly patients in geriatric hospital units with complex medical conditions."
      },
      {
        role: "Palliative Care Nurse",
        salary: "Premium end-of-life care rates",
        description: "Compassionate end-of-life care focusing on comfort, dignity, and family support."
      }
    ],
    image1: "https://images.unsplash.com/photo-1576765607924-3f7b8410a787?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1559839914-17aae19cec71?w=800&q=80"
  },
  "home-care-nurse": {
    title: "Home Care Nurse Positions",
    subtitle: "Community-Based Nursing in Patient Homes",
    description: "Home Care Nurses provide professional healthcare services in patients' homes, offering a flexible and rewarding nursing career path. These positions are increasingly popular internationally as healthcare systems shift toward community-based care and patients prefer recovering in familiar environments.",
    overview: "Home care nursing offers unique opportunities for independent practice and close patient relationships. Home care nurses work with diverse patient populations, from post-surgical recovery to chronic disease management and elderly care. The role requires clinical expertise, excellent assessment skills, and the ability to work autonomously.",
    requirements: [
      "Valid RN license with home care experience",
      "Minimum 2-3 years clinical nursing experience",
      "Strong assessment and independent decision-making skills",
      "Valid driver's license (in most countries)",
      "Excellent communication and teaching abilities",
      "Cultural competency for home-based care"
    ],
    benefits: [
      "Flexible and autonomous work environment",
      "Competitive salaries with travel allowances",
      "One-on-one patient care relationships",
      "Variety in daily work and patient conditions",
      "Work-life balance with scheduled visits",
      "Growing demand for home healthcare services",
      "Opportunity for specialized home care certifications"
    ],
    positions: [
      {
        role: "General Home Care Nurse",
        salary: "Competitive with mileage reimbursement",
        description: "Provide nursing care, wound care, medication management, and health education in patients' homes."
      },
      {
        role: "Post-Operative Home Care Nurse",
        salary: "Premium post-surgical rates",
        description: "Specialized post-surgical care and monitoring for patients recovering at home from procedures."
      },
      {
        role: "Chronic Disease Management Nurse",
        salary: "Competitive chronic care rates",
        description: "Ongoing care and education for patients with chronic conditions like diabetes, heart failure, and COPD."
      },
      {
        role: "Hospice Home Care Nurse",
        salary: "Premium hospice care compensation",
        description: "Compassionate end-of-life care in home settings, providing comfort and family support."
      }
    ],
    image1: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80"
  }
}; 

export default function JobPage() {
  const { job } = useParams();
  const jobData = jobsData[job];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [job]);

  if (!jobData) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Job Not Found</h1>
          <p className="text-gray-600">The job you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#f6f9fb" }}>

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="pt-24 pb-16 px-6 text-white"
        style={{
          background: `linear-gradient(135deg, ${theme.primary}, ${theme.dark})`
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{jobData.title}</h1>
          <p className="text-xl opacity-90">{jobData.subtitle}</p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* DESCRIPTION + OVERVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-md p-8 mb-12"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {jobData.description}
          </p>

          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Overview
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {jobData.overview}
            </p>
          </div>
        </motion.div>

        {/* IMAGE 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <img
            src={jobData.image1}
            alt={jobData.title}
            className="w-full h-96 object-contain rounded-xl shadow-lg"
          />
        </motion.div>

        {/* REQUIREMENTS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Requirements
          </h2>

          <ul className="space-y-3">
            {jobData.requirements.map((req, idx) => (
              <li key={idx} className="flex items-start">
                <span
                  className="mr-3 text-2xl font-bold"
                  style={{ color: theme.primary }}
                >
                  •
                </span>
                <span className="text-gray-700 text-lg">{req}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* JOB POSITIONS */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-800 mb-8"
          >
            Available Positions
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {jobData.positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 border-l-4 hover:shadow-xl transition"
                style={{ borderColor: theme.primary }}
              >
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: theme.primary }}
                >
                  {position.role}
                </h3>

                <p className="text-gray-500 font-medium mb-3">
                  {position.salary}
                </p>

                <p className="text-gray-600 leading-relaxed">
                  {position.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* IMAGE 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <img
            src={jobData.image2}
            alt="More"
            className="w-full h-96 object-contain rounded-xl shadow-lg"
          />
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Benefits & Advantages
          </h2>

          <ul className="space-y-3">
            {jobData.benefits.map((b, index) => (
              <li key={index} className="flex items-start">
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
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>

          <p className="text-xl opacity-90 mb-6">
            Take the first step toward your international nursing career today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block font-semibold px-10 py-3 rounded-lg shadow-md hover:opacity-90 transition"
              style={{ background: theme.accent, color: "#00356e" }}
            >
              Apply Now
            </a>

            <a
              href="/services/profile-screening"
              className="inline-block font-semibold px-10 py-3 rounded-lg border hover:bg-white transition"
              style={{
                borderColor: theme.accent,
                color: theme.accent
              }}
            >
              Learn About Our Services
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
