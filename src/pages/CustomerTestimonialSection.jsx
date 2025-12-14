import React from 'react';
import {  Star } from 'lucide-react'; // Assuming you use lucide-react for icons

// Mock Data for Testimonials
const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    city: 'Kathmandu',
    rating: 5,
    quote: "The Signature Thali is truly a taste of home! The flavors are authentic and the portions are generous. Every dish was perfectly spiced. Highly recommended for anyone craving real Nepali food.",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=80&q=80',
  },
  {
    id: 2,
    name: 'Ajeet Gurung',
    city: 'Pokhara',
    rating: 5,
    quote: "I ordered the Chaumin and Coca-Cola combo, and it was delicious! Fast delivery and the noodles were fresh and piping hot. Best place for a quick, satisfying meal in the area.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=80&q=80',
  },
  {
    id: 3,
    name: 'Maya Tamang',
    city: 'Lalitpur',
    rating: 4,
    quote: "Great service and ambiance. We booked a table for a family dinner, and everyone loved the variety of momos. The staff were very friendly and attentive. Will definitely be back!",
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=80&q=80',
  },
];

const CustomerTestimonialSection = () => {
    // Simple state for a manual carousel/slider (if you wish to implement)
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };


    // Helper component for rating stars
    const StarRating = ({ rating }) => (
        <div className="flex items-center space-x-0.5">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`w-5 h-5 transition-colors duration-200 ${
                        i < rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'
                    }`}
                    fill={i < rating ? 'currentColor' : 'none'}
                    strokeWidth={i < rating ? 0 : 2}
                />
            ))}
        </div>
    );

    return (
        <section id="testimonials" className="py-20 md:py-32 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-sm font-semibold uppercase text-red-600 tracking-widest mb-2">
                        Trusted by Food Lovers
                    </h2>
                    <p className="text-3xl md:text-4xl font-extrabold text-gray-800">
                        What Our Top Customers Say
                    </p>
                </div>

                {/* Testimonial Grid/Carousel Area */}
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div 
                                key={testimonial.id} 
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl 
                                transform hover:scale-[1.02] transition duration-300 border-t-4 border-red-600"
                            >
                                {/* Quote Icon */}
                                <svg className="w-8 h-8 text-red-500 mb-4 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7 11.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm10 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM7 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm10 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM7 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm10 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"/>
                                </svg>
                                
                                {/* Quote */}
                                <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                
                                {/* Customer Info */}
                                <div className="flex items-center pt-4 border-t border-gray-100">
                                    <img 
                                        src={testimonial.avatar} 
                                        alt={testimonial.name} 
                                        className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-red-300"
                                    />
                                    <div>
                                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.city}</p>
                                    </div>
                                    <div className="ml-auto">
                                        <StarRating rating={testimonial.rating} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Optional Carousel Controls - Uncomment if using a true carousel */}
                    {/* <button 
                        onClick={prevTestimonial}
                        className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 p-3 
                                   bg-white rounded-full shadow-lg text-red-600 hover:bg-red-50 transition"
                        aria-label="Previous Testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                        onClick={nextTestimonial}
                        className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 p-3 
                                   bg-white rounded-full shadow-lg text-red-600 hover:bg-red-50 transition"
                        aria-label="Next Testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button> */}
                </div>
                
                {/* Call to Action */}
                <div className="text-center mt-16">
                    <a 
                        href="#menu-section"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base 
                                   font-medium rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 
                                   transition duration-300"
                    >
                        Explore the Menu that Everyone is Loving
                    </a>
                </div>

            </div>
        </section>
    );
};

export default CustomerTestimonialSection;