'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Testimonial type definition
type Testimonial = {
  id: string;
  name: string;
  role: string;
  location: string;
  image: string;
  quote: string;
  rating: number;
  date: string;
  service: string;
  featured?: boolean;
};

// Video testimonial type
type VideoTestimonial = {
  id: string;
  name: string;
  role: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  featured?: boolean;
};

export default function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'commercial'>('all');
  const [expandedTestimonial, setExpandedTestimonial] = useState<string | null>(null);

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 'testimonial-1',
      name: 'Sarah Johnson',
      role: 'Homeowner',
      location: 'Lakeside Neighborhood',
      image: '/services/sc_1.png',
      quote: 'I couldn&apos;t believe the difference! My house looks like it was just painted, but it was just a thorough cleaning. The team was professional, on time, and did an amazing job. My neighbors have been stopping to ask who did the work. I&apos;ll definitely be using PressureWash Pro for regular maintenance from now on.',
      rating: 5,
      date: 'June 15, 2025',
      service: 'House Washing',
      featured: true
    },
    {
      id: 'testimonial-2',
      name: 'Michael Rodriguez',
      role: 'Business Owner',
      location: 'Downtown District',
      image: '/services/sc_2.png',
      quote: 'As a restaurant owner, first impressions are everything. PressureWash Pro cleaned our patio, walkways, and exterior, making everything look brand new. The difference was night and day! They worked after hours to avoid disrupting our business, and the results have actually increased our foot traffic. Highly recommend their commercial services.',
      rating: 5,
      date: 'July 3, 2025',
      service: 'Commercial Cleaning',
      featured: true
    },
    {
      id: 'testimonial-3',
      name: 'Jennifer Williams',
      role: 'Property Manager',
      location: 'Westside Apartments',
      image: '/services/sc_7.png',
      quote: 'Managing multiple properties means I need reliable service providers. PressureWash Pro has been our go-to for all our exterior cleaning needs for the past 3 years. They&apos;re always professional, thorough, and provide excellent value. Our properties look well-maintained year-round thanks to their regular service.',
      rating: 5,
      date: 'May 22, 2025',
      service: 'Commercial Cleaning'
    },
    {
      id: 'testimonial-4',
      name: 'David Chen',
      role: 'Homeowner',
      location: 'Sunny Acres Development',
      image: '/services/sc_3.png',
      quote: 'Our energy production increased by 25% after PressureWash Pro cleaned our solar panels! I had no idea how much dirt was affecting our system&apos;s performance. The team was knowledgeable about the proper techniques for cleaning solar panels without causing damage. Great service at a fair price.',
      rating: 5,
      date: 'August 10, 2023',
      service: 'Solar Panel Cleaning'
    },
    {
      id: 'testimonial-5',
      name: 'Amanda Peterson',
      role: 'Homeowner',
      location: 'Oak Hills Estate',
      image: '/services/sc_6.png',
      quote: 'The driveway looks brand new! I didn&apos;t think those oil stains would ever come out, but your team made it happen. The concrete looks like it was just poured. Your attention to detail and thoroughness exceeded my expectations. I&apos;ve already recommended you to several neighbors.',
      rating: 5,
      date: 'April 18, 2025',
      service: 'Driveway Cleaning'
    },
    {
      id: 'testimonial-6',
      name: 'Robert Thompson',
      role: 'HOA President',
      location: 'Riverside Community',
      image: '/services/sc_8.png',
      quote: 'We hired PressureWash Pro to clean all the common areas in our community, including sidewalks, entrance features, and community buildings. The transformation was remarkable. They were able to handle our large project efficiently and with minimal disruption to residents. We&apos;ve now set up a quarterly maintenance schedule.',
      rating: 5,
      date: 'March 5, 2025',
      service: 'Commercial Cleaning'
    }
  ];

  // Video testimonials data
  const videoTestimonials: VideoTestimonial[] = [
    {
      id: 'video-1',
      name: 'The Andersons',
      role: 'Homeowners',
      thumbnail: '/services/sc_4.png',
      videoUrl: 'https://www.youtube.com/embed/your-video-id-1',
      duration: '1:45',
      featured: true
    },
    {
      id: 'video-2',
      name: 'Cornerstone Office Complex',
      role: 'Commercial Client',
      thumbnail: '/services/sc_5.png',
      videoUrl: 'https://www.youtube.com/embed/your-video-id-2',
      duration: '2:12'
    }
  ];

  // Filter testimonials based on active filter
  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => 
        activeFilter === 'commercial' 
          ? testimonial.service.toLowerCase().includes('commercial') 
          : !testimonial.service.toLowerCase().includes('commercial')
      );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <main className="min-h-screen pt-20">
      
      {/* Header Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Testimonials</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. See what our satisfied customers have to say about our pressure washing services.
          </p>
        </div>
      </section>

      {/* Featured Testimonials Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Featured Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.filter(t => t.featured).map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-xl p-8 shadow-md"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role} • {testimonial.location}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">&quot;{testimonial.quote}&quot;</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{testimonial.service}</span>
                  <span>{testimonial.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Video Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {videoTestimonials.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <div className="relative h-64">
                  <Image
                    src={video.thumbnail}
                    alt={`${video.name} video testimonial`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer transform transition hover:scale-110">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-1">{video.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{video.role}</p>
                  <a 
                    href={video.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:text-blue-800 transition flex items-center"
                  >
                    Watch full video
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">All Customer Reviews</h2>
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg overflow-hidden">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-6 py-3 font-medium text-lg ${
                  activeFilter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition`}
              >
                All Reviews
              </button>
              <button
                onClick={() => setActiveFilter('residential')}
                className={`px-6 py-3 font-medium text-lg ${
                  activeFilter === 'residential'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition`}
              >
                Residential
              </button>
              <button
                onClick={() => setActiveFilter('commercial')}
                className={`px-6 py-3 font-medium text-lg ${
                  activeFilter === 'commercial'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition`}
              >
                Commercial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role} • {testimonial.location}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 italic mb-4">
                  {expandedTestimonial === testimonial.id 
                    ? testimonial.quote 
                    : `${testimonial.quote.substring(0, 150)}${testimonial.quote.length > 150 ? '...' : ''}`}
                </p>
                
                {testimonial.quote.length > 150 && (
                  <button 
                    onClick={() => setExpandedTestimonial(
                      expandedTestimonial === testimonial.id ? null : testimonial.id
                    )}
                    className="text-blue-600 text-sm font-medium hover:text-blue-800 transition"
                  >
                    {expandedTestimonial === testimonial.id ? 'Read less' : 'Read more'}
                  </button>
                )}
                
                <div className="flex justify-between items-center mt-4 text-xs text-gray-500 pt-4 border-t border-gray-200">
                  <span>{testimonial.service}</span>
                  <span>{testimonial.date}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No testimonials found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Had a Great Experience?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            We appreciate your feedback! If you&apos;ve used our services, please consider leaving a review to help others learn about your experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.google.com/business" // Replace with your Google Business link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
              </svg>
              Review on Google
            </a>
            <a
              href="https://www.facebook.com" // Replace with your Facebook page
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1877F2] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#166FE5] transition shadow flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Review on Facebook
            </a>
            <a
              href="https://www.yelp.com" // Replace with your Yelp page
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D32323] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#AF1D1D] transition shadow flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.16 12.594l-4.995 1.933c-.362.138-.655.408-.792.77s-.122.77.07 1.11c.183.338.516.576.9.64l5.216.885c.23.04.465.016.683-.07.217-.084.407-.226.55-.413.143-.186.24-.407.282-.642.04-.236.03-.477-.032-.708-.062-.23-.175-.44-.33-.614-.155-.175-.35-.307-.57-.39zm-8.546 6.428c.157-.33.186-.71.08-1.06-.106-.35-.356-.64-.69-.8l-4.572-2.26c-.217-.107-.462-.152-.706-.13-.245.02-.48.103-.683.24-.202.135-.368.32-.48.535-.113.217-.168.46-.16.704.01.244.08.482.204.69.124.21.304.38.52.49l5.133 2.18c.218.093.456.124.69.09.235-.035.456-.132.645-.28l.02-.02c.055-.047.108-.097.157-.15.157-.173.27-.383.336-.61.01-.02.01-.03.02-.05.01-.02.01-.04.02-.06l-.01.01zm-.32-13.05c-.186-.11-.396-.17-.61-.174-.215-.004-.427.047-.617.15l-.02.01c-.055.03-.108.064-.157.102-.177.14-.316.328-.403.544-.01.02-.01.03-.02.05-.01.02-.01.04-.02.06l.01-.01c-.157.33-.186.71-.08 1.06.106.35.356.64.69.8l4.583 2.26c.217.107.462.152.706.13.245-.02.48-.103.683-.24.202-.135.368-.32.48-.535.113-.217.168-.46.16-.704-.01-.244-.08-.482-.204-.69l.02.01.01-.01zm-2.61 9.06l-5.216-.885c-.23-.04-.465-.016-.683.07-.217.084-.407.226-.55.413-.143.186-.24.407-.282.642-.04.236-.03.477.032.708.062.23.175.44.33.614.155.175.35.307.57.39l4.995 1.933c.362.138.655.408.792.77s.122.77-.07 1.11c-.183.338-.516.576-.9.64l.01-.01c-.218.093-.456.124-.69.09-.235-.035-.456-.132-.645-.28l-.02-.02c-.055-.047-.108-.097-.157-.15-.157-.173-.27-.383-.336-.61-.01-.02-.01-.03-.02-.05-.01-.02-.01-.04-.02-.06l.01.01c-.157-.33-.186-.71-.08-1.06.106-.35.356-.64.69-.8l.01-.01c.217-.107.462-.152.706-.13.245.02.48.103.683.24.202.135.368.32.48.535.113.217.168.46.16.704-.01.244-.08.482-.204.69-.124.21-.304.38-.52.49l.01-.01c.218.093.456.124.69.09.235-.035.456-.132.645-.28l.02-.02c.055-.047.108-.097.157-.15.157-.173.27-.383.336-.61.01-.02.01-.03.02-.05.01-.02.01-.04.02-.06l-.01.01c.157-.33.186-.71.08-1.06-.106-.35-.356-.64-.69-.8z"/>
              </svg>
              Review on Yelp
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Our Service Yourself?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a free, no-obligation quote and see the difference professional pressure washing can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition shadow-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/contact"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}