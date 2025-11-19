import { useState } from "react";
import { motion } from "framer-motion";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Career Tips", "Country Guides", "Success Stories", "Immigration", "Language Learning"];

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Tips for Nurses Moving to Germany",
      category: "Country Guides",
      excerpt: "Planning to work as a nurse in Germany? Here are the top 10 things you need to know before making the move, from language requirements to cultural expectations.",
      image: "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?w=800&q=80",
      author: "Sarah Mitchell",
      date: "November 10, 2025",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "How I Became a Nurse in Japan: Maria's Success Story",
      category: "Success Stories",
      excerpt: "Maria shares her inspiring journey from the Philippines to becoming a successful nurse in Tokyo, including challenges overcome and lessons learned along the way.",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
      author: "Maria Santos",
      date: "November 5, 2025",
      readTime: "10 min read"
    },
    {
      id: 3,
      title: "Understanding the German Nursing License Recognition Process",
      category: "Immigration",
      excerpt: "A comprehensive guide to getting your nursing credentials recognized in Germany, including required documents, timeline, and common pitfalls to avoid.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      author: "Michael Chen",
      date: "October 28, 2025",
      readTime: "12 min read"
    },
    {
      id: 4,
      title: "Mastering Medical German: Your Complete Language Guide",
      category: "Language Learning",
      excerpt: "Learn essential medical German vocabulary, phrases, and communication tips to excel in your nursing career in Germany.",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
      author: "Emma Williams",
      date: "October 22, 2025",
      readTime: "15 min read"
    },
    {
      id: 5,
      title: "Interview Success: Top Questions Asked by International Employers",
      category: "Career Tips",
      excerpt: "Prepare for your international nursing interview with these commonly asked questions and expert tips on how to answer them effectively.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      author: "Sarah Mitchell",
      date: "October 15, 2025",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Living in Tokyo: A Nurse's Guide to Daily Life in Japan",
      category: "Country Guides",
      excerpt: "From housing and transportation to shopping and social life, discover what it's really like to live and work as a nurse in Japan's vibrant capital.",
      image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800&q=80",
      author: "Yuki Tanaka",
      date: "October 8, 2025",
      readTime: "11 min read"
    },
    {
      id: 7,
      title: "From Application to Arrival: Your Visa Journey Timeline",
      category: "Immigration",
      excerpt: "Understand the complete visa application process for nursing positions abroad, including realistic timelines and what to expect at each stage.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      author: "Michael Chen",
      date: "September 30, 2025",
      readTime: "9 min read"
    },
    {
      id: 8,
      title: "Cultural Adaptation: Thriving as an International Nurse",
      category: "Career Tips",
      excerpt: "Navigate cultural differences with confidence and build meaningful relationships in your new workplace and community.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
      author: "Emma Williams",
      date: "September 25, 2025",
      readTime: "10 min read"
    },
    {
      id: 9,
      title: "John's Journey: From ICU Nurse in India to Germany",
      category: "Success Stories",
      excerpt: "Follow John's incredible transformation as he transitioned from working in an Indian ICU to becoming a senior nurse in a German hospital.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
      author: "John Patel",
      date: "September 18, 2025",
      readTime: "8 min read"
    },
    {
      id: 10,
      title: "Japanese Language Learning: JLPT N3 Study Plan for Nurses",
      category: "Language Learning",
      excerpt: "A structured 6-month study plan to help you pass the JLPT N3 exam and meet language requirements for nursing in Japan.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      author: "Yuki Tanaka",
      date: "September 12, 2025",
      readTime: "14 min read"
    },
    {
      id: 11,
      title: "Salary Expectations: What Nurses Really Earn Abroad",
      category: "Career Tips",
      excerpt: "A transparent breakdown of nursing salaries in Germany, Japan, and other popular destinations, including taxes, benefits, and cost of living comparisons.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
      author: "Sarah Mitchell",
      date: "September 5, 2025",
      readTime: "10 min read"
    },
    {
      id: 12,
      title: "Preparing Your Family for International Relocation",
      category: "Country Guides",
      excerpt: "Moving abroad with family? Here's how to prepare your spouse and children for a smooth transition to life in a new country.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
      author: "Michael Chen",
      date: "August 28, 2025",
      readTime: "12 min read"
    }
  ];

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = blogPosts[0];

  // Animation Presets
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="bg-gradient-to-r from-[#008092] to-[#00356e] text-white pt-24 pb-16 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">YOU&GLOBE Blog</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Expert insights, success stories, and practical guides for your international nursing career
          </p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* FEATURED POST */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Article</h2>

          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl"
          >
            <div className="grid md:grid-cols-2">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover min-h-[300px]"
              />

              <div className="p-8">
                <span className="inline-block bg-[#008092]/10 text-[#008092] px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {featuredPost.category}
                </span>

                <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-[#008092] cursor-pointer transition-colors">
                  {featuredPost.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{featuredPost.author}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredPost.date}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <button className="bg-[#008092] text-white px-6 py-2 rounded-lg hover:bg-[#00356e] transition-colors">
                  Read More
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CATEGORY FILTER */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap gap-3"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={fadeUp}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-[#008092] text-white"
                  : "bg-white text-gray-700 hover:bg-[#9eed00]/20 hover:text-[#00356e] border border-gray-300"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* BLOG GRID */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.slice(1).map((post) => (
            <motion.div
              key={post.id}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-[#008092]/10 text-[#008092] px-3 py-1 rounded-full text-xs font-medium mb-3">
                  {post.category}
                </span>

                <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-[#008092] line-clamp-2 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <div className="text-sm text-gray-500">
                  {post.date}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* NEWSLETTER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#008092] to-[#00356e] rounded-lg shadow-lg p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest articles, career tips, and opportunities delivered to your inbox
          </p>

          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#9eed00]"
            />
            <button className="bg-[#9eed00] text-[#00356e] font-semibold px-6 py-3 rounded-lg hover:bg-[#8dd500] transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}