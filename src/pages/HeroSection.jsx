import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Award, Clock, Users, ChevronRight, Sparkles, ChefHat, Star, Menu } from 'lucide-react';

const HeroSection = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const heroImages = [
    {
      type: 'image',
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1600&q=80&auto=format&fit=crop",
      title: "Signature Thali",
      subtitle: "Traditional Nepali Platter"
    },
    {
      type: 'image',
      src: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?w=1600&q=80&auto=format&fit=crop",
      title: "Chaumin & Cola",
      subtitle: "Perfect Combination"
    },
    {
      type: 'image',
      src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1600&q=80&auto=format&fit=crop",
      title: "Fresh Ingredients",
      subtitle: "Daily Market Selection"
    }
  ];

  const stats = [
    { icon: <Award className="w-5 h-5" />, value: "12+", label: "Years Excellence" },
    { icon: <Star className="w-5 h-5" />, value: "4.9/5", label: "Customer Rating" },
    { icon: <Users className="w-5 h-5" />, value: "50K+", label: "Happy Customers" },
    { icon: <Clock className="w-5 h-5" />, value: "15-30", label: "Min Delivery" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-amber-950">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-500/20 rounded-full"
            initial={{ x: Math.random() * 100 + 'vw', y: Math.random() * 100 + 'vh' }}
            animate={{
              x: [null, Math.random() * 100 + 'vw'],
              y: [null, Math.random() * 100 + 'vh']
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Animated Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-900/30 to-red-900/30 backdrop-blur-sm border border-amber-700/30 mb-8"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-200 tracking-wider">
                SINCE 2010 • AUTHENTIC NEPALI CUISINE
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white mb-2">Where Tradition</span>
              <span className="block relative">
                <span className="relative z-10 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Meets Taste
                </span>
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute bottom-2 left-0 h-4 bg-gradient-to-r from-amber-500/20 to-red-500/20 -z-0"
                />
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Experience the soul of Nepali cuisine at 4G Food Plazza. From our legendary 
              <span className="text-amber-300 font-semibold"> Signature Thali </span> 
              to the perfect pairing of 
              <span className="text-amber-300 font-semibold"> Chaumin with Coca-Cola</span>, 
              every dish tells a story of tradition and flavor.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 
                  rounded-2xl font-bold text-lg text-gray-900 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Explore Our Menu
                  <ChevronRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-10 py-5 bg-gradient-to-r from-gray-800 to-gray-900 
                  rounded-2xl font-bold text-lg text-white border border-gray-700 
                  backdrop-blur-sm hover:border-amber-500/50 transition-colors"
              >
                <span className="flex items-center justify-center gap-3">
                  <ChefHat className="w-5 h-5" />
                  Book Experience
                </span>
              </motion.button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 
                    rounded-xl backdrop-blur-sm border border-gray-700/50 
                    hover:border-amber-500/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <div className="text-amber-400">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                  </div>
                  <div className="text-xs text-gray-400 text-center lg:text-left">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Hero Image/Video */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden">
              {/* Animated Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 
                rounded-3xl opacity-50 blur-xl animate-pulse"></div>
              
              {/* Image Slider */}
              <div className="relative aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden 
                bg-gradient-to-br from-gray-900 to-gray-950">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={heroImages[activeImage].src}
                      alt={heroImages[activeImage].title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-gray-950/30" />
                    
                    {/* Image Title */}
                    <div className="absolute bottom-8 left-8 right-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-white"
                      >
                        <div className="text-2xl font-bold mb-1">{heroImages[activeImage].title}</div>
                        <div className="text-amber-300">{heroImages[activeImage].subtitle}</div>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Slider Controls */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeImage === index 
                          ? 'w-8 bg-amber-400' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-500 
                  rounded-2xl p-4 shadow-2xl rotate-12"
              >
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">₹249</div>
                  <div className="text-sm font-medium">Chaumin Combo</div>
                  <div className="text-xs opacity-90 mt-1">Special Offer</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-br from-red-600 to-pink-600 
                  rounded-full p-4 shadow-2xl flex items-center justify-center"
              >
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">30 min</div>
                  <div className="text-xs">Guaranteed</div>
                  <Clock className="w-4 h-4 mx-auto mt-1" />
                </div>
              </motion.div>
            </div>

            {/* Decorative Food Elements */}
            <div className="absolute -z-10 -top-10 -left-10 w-40 h-40">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-full h-full border-2 border-dashed border-amber-500/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Featured Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 
            rounded-2xl backdrop-blur-sm border border-gray-700/50">
            <Star className="w-5 h-5 text-amber-400" />
            <span className="text-lg text-gray-300">
              Featured in <span className="text-white font-semibold">Food Network Asia</span> • 
              Winner of <span className="text-white font-semibold">"Best Nepali Restaurant 2023"</span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="p-3 rounded-full bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700"
        >
          <ChevronRight className="w-6 h-6 text-amber-400 transform rotate-90" />
        </motion.button>
      </motion.div>

      {/* Ambient Light Effect */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-red-500/10 
        rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-gradient-to-l from-orange-500/10 to-pink-500/10 
        rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;