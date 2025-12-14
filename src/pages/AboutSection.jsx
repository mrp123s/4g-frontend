import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChefHat, 
  Heart, 
  Zap, 
  Award, 
  Users, 
  Clock, 
  Star, 
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Quote,
  Sparkles,
  Leaf,
  Shield,
  Calendar,
  ArrowRight
} from 'lucide-react';

const AboutSection = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

  const milestones = [
    { year: "2010", title: "Founded: Family Legacy", description: "4G Food Plazza was born from a passion for Nepali home cooking." },
    { year: "2014", title: "Menu Expansion & Growth", description: "Added regional specialties and expanded our kitchen facilities." },
    { year: "2018", title: "Local Media Recognition", description: "Featured in local food publications for authentic flavors." },
    { year: "2023", title: "50K+ Happy Customers", description: "A major milestone reached, serving delicious food to our growing community." },
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion First",
      description: "Every dish is prepared with genuine love and care.",
      color: "from-red-500/5 to-red-600/5",
      iconColor: "text-red-600"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Fresh Ingredients",
      description: "Daily sourced from local farmers and ethical markets.",
      color: "from-green-500/5 to-emerald-600/5",
      iconColor: "text-green-600"
    },
    {
      icon: <ChefHat className="w-6 h-6" />,
      title: "Authentic Recipes",
      description: "Traditional methods passed down through generations.",
      color: "from-amber-500/5 to-orange-600/5",
      iconColor: "text-amber-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Promise",
      description: "Highest standards of hygiene and taste excellence.",
      color: "from-blue-500/5 to-indigo-600/5",
      iconColor: "text-blue-600"
    },
  ];

  const stats = [
    { icon: <Users className="w-5 h-5" />, value: "50K+", label: "Happy Customers", delay: 0 },
    { icon: <Award className="w-5 h-5" />, value: "15+", label: "Years Experience", delay: 0.1 },
    { icon: <Star className="w-5 h-5" />, value: "4.9", label: "Average Rating", delay: 0.2 },
    { icon: <Clock className="w-5 h-5" />, value: "15-30", label: "Min Delivery", delay: 0.3 },
  ];

  const statVariants = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, boxShadow: "0 10px 15px -3px rgba(239, 68, 68, 0.1), 0 4px 6px -2px rgba(239, 68, 68, 0.05)" }
  };
  
  const valueVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    hover: { y: -5, scale: 1.02, boxShadow: "0 15px 25px -5px rgba(249, 115, 22, 0.15)" }
  };

  return (
    <section id="about-us" className="relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-60 -right-60 w-[500px] h-[500px] bg-red-50 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute -bottom-60 -left-60 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[100px] opacity-30"></div>
      </div>

      <div className="relative container mx-auto px-4 py-24 md:py-40">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-50 
            rounded-full border border-red-200 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-red-500" />
            <span className="text-sm font-semibold text-red-700 tracking-wider">
              OUR STORY & PASSION
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
            More Than Just
            <span className="block mt-4">
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 
                  bg-clip-text text-transparent leading-none">
                  A Restaurant.
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-red-200/50 rounded-full -z-0"></div>
              </span>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4">
            We are a family, a tradition, and a celebration of Nepali culinary heritage. 
            Every dish we serve carries the warmth of our home kitchen.
          </p>
        </motion.div>

        {/* Stats Section - Moved up for prominence */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                initial="initial"
                whileInView="whileInView"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: stat.delay, duration: 0.3 }}
                onHoverStart={() => setHoveredStat(index)}
                onHoverEnd={() => setHoveredStat(null)}
                className={`p-6 md:p-8 bg-white rounded-3xl 
                  border border-gray-100 shadow-lg cursor-pointer transition-all duration-300`}
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className={`p-3 rounded-xl ${hoveredStat === index ? 'bg-red-500' : 'bg-red-50'} transition-colors duration-300`}>
                    <div className={hoveredStat === index ? 'text-white' : 'text-red-600'}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-extrabold text-gray-900">{stat.value}</div>
                </div>
                <div className="text-center text-sm uppercase font-medium tracking-wide text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Left Column - Story & Milestones */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-12"
          >
            {/* Quote Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative p-8 md:p-10 bg-gradient-to-br from-red-50 to-orange-50 
                rounded-3xl border border-red-200 shadow-xl"
            >
              <Quote className="absolute top-6 left-6 w-10 h-10 text-red-400/50" />
              <p className="text-xl italic text-gray-700 leading-relaxed pt-2">
                "We believe that food is more than just nourishment—it's a memory, 
                a tradition, and a way to bring people together. Our recipes are 
                stories told through flavors."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-orange-400"></div>
                <div>
                  <div className="font-bold text-gray-900">Mr. Shyam Pant</div>
                  <div className="text-sm text-red-600 font-medium">
                    Founder & Head Chef
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Milestones Timeline */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900">Our Journey Through the Years</h3>
              <div className="relative border-l-4 border-red-300 ml-8 pl-8 space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-10 top-0 w-5 h-5 bg-white border-4 border-red-500 rounded-full"></div>
                    <div className="p-4 bg-white/70 rounded-xl transition-colors hover:bg-white shadow-md">
                      <div className="font-bold text-red-600 uppercase tracking-wider text-sm mb-1">{milestone.year}</div>
                      <h5 className="font-bold text-xl text-gray-900 mb-1">{milestone.title}</h5>
                      <p className="text-gray-600 text-base">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image & Values */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-12"
          >
            {/* Main Image (Using a placeholder image and better styling) */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-4 border-white">
              <div className="aspect-[4/5] bg-gray-200">
                {/* Replace with a real image URL or imported image later */}
                <img 
                    src="https://picsum.photos/id/1080/800/1000" 
                    alt="Delicious Nepali Food Platter"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6">
                <div className="px-5 py-2 bg-gradient-to-r from-red-600 to-orange-500 
                  text-white rounded-full font-bold shadow-xl text-sm">
                  Home of Nepali Taste
                </div>
              </div>
            </div>

            {/* Core Values Section */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h3>
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={valueVariants}
                    initial="initial"
                    whileInView="whileInView"
                    whileHover="hover"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className={`p-6 bg-white rounded-2xl border border-gray-100 shadow-md 
                      transition-all duration-300 cursor-pointer`}
                  >
                    <div className={`p-3 rounded-xl bg-gray-50 w-fit mb-4 ${value.iconColor}`}>
                      {value.icon}
                    </div>
                    <h5 className="font-bold text-lg text-gray-900 mb-1">{value.title}</h5>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Founder Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-red-50 rounded-3xl blur-2xl opacity-50"></div>
          
          <div className="relative bg-white rounded-3xl border border-red-200 p-8 md:p-16 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Founder Image (Enhanced Styling) */}
              <div className="lg:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-56 h-56 rounded-full overflow-hidden 
                    border-[6px] border-white shadow-2xl 
                      bg-gradient-to-r from-red-500 to-orange-400">
                    <div className="w-full h-full flex items-center justify-center text-white">
                        {/* Replace with actual founder image if available */}
                      <ChefHat className="w-20 h-20 opacity-70" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Bio */}
              <div className="lg:w-2/3 text-center lg:text-left space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 
                    rounded-full mb-4">
                    <Award className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-bold text-red-700">MEET OUR FOUNDER</span>
                  </div>
                  <h4 className="text-4xl font-extrabold text-gray-900 mb-2">
                    Mr. Shyam Pant
                  </h4>
                  <p className="text-lg text-orange-600 font-semibold mb-4">Head Chef & Visionary</p>
                  
                  <p className="text-gray-600 leading-relaxed max-w-xl lg:max-w-none">
                    With over 20 years of culinary experience, Shyam Pant Ji brings traditional 
                    Nepali cooking techniques to modern dining. His dedication to authenticity 
                    and quality has made 4G Food Plazza a landmark for genuine Nepali cuisine.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 
                    text-white rounded-full font-bold shadow-xl 
                    transition-all duration-300 hover:scale-105">
                    Visit Our Kitchen <ArrowRight className="w-5 h-5 ml-1" />
                  </button>
                  <button className="px-8 py-3 bg-white border-2 border-red-600 text-red-600 
                    rounded-full font-bold hover:bg-red-50 transition-colors hover:border-red-700">
                    Contact Chef
                  </button>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 justify-center lg:justify-start pt-2">
                  {[Instagram, Facebook, Twitter].map((Icon, index) => (
                    <a 
                        key={index} 
                        href={`#social-${index}`}
                        className="p-3 rounded-full bg-gray-100 text-gray-600 
                      hover:bg-red-500 hover:text-white transition-all duration-300"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Location CTA - Final Touch */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-24"
        >
          <a 
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 
                    text-white rounded-full border-4 border-white font-bold text-lg shadow-2xl 
                    transition-all duration-300 hover:scale-[1.03]"
            >
            <MapPin className="w-5 h-5 text-white" />
            <span>
              Find us in <span className="font-extrabold tracking-wide">Kathmandu, Nepal</span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;