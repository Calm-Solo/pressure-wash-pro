'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Project type definition
type Project = {
  id: string;
  title: string;
  category: 'residential' | 'commercial';
  description: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'commercial'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Portfolio projects data
  const projects: Project[] = [
    {
      id: 'house-siding-1',
      title: 'House Siding Restoration',
      category: 'residential',
      description: 'Complete exterior cleaning of vinyl siding with significant mold and mildew buildup. The home was transformed from a dull, green-tinted exterior to a bright, clean appearance that looked like new.',
      location: 'Lakeside Neighborhood',
      beforeImage: '/portfolio/house-before.jpg',
      afterImage: '/portfolio/house-after.jpg',
      testimonial: {
        quote: 'I couldn\'t believe the difference! My house looks like it was just painted, but it was just a thorough cleaning. Neighbors have been stopping to ask who did the work.',
        author: 'Sarah Johnson',
        role: 'Homeowner'
      }
    },
    {
      id: 'driveway-1',
      title: 'Driveway & Walkway Cleaning',
      category: 'residential',
      description: 'Heavy oil stains and years of dirt buildup on concrete driveway and walkways. We used specialized cleaning solutions to break down the oil before pressure washing.',
      location: 'Oak Hills Estate',
      beforeImage: '/portfolio/driveway-before.jpg',
      afterImage: '/portfolio/driveway-after.jpg',
      testimonial: {
        quote: 'The driveway looks brand new! I didn\'t think those oil stains would ever come out, but your team made it happen.',
        author: 'Michael Rodriguez',
        role: 'Homeowner'
      }
    },
    {
      id: 'deck-restoration-1',
      title: 'Wooden Deck Restoration',
      category: 'residential',
      description: 'Weather-worn wooden deck with graying boards and algae growth. We cleaned, brightened, and sealed the deck to restore its natural beauty and protect it from future damage.',
      location: 'Riverside Community',
      beforeImage: '/portfolio/deck-before.jpg',
      afterImage: '/portfolio/deck-after.jpg'
    },
    {
      id: 'commercial-plaza-1',
      title: 'Shopping Plaza Cleaning',
      category: 'commercial',
      description: 'Complete exterior cleaning of a strip mall including sidewalks, parking lot, and storefront areas. Removed gum, stains, and built-up grime to improve the shopping experience.',
      location: 'Downtown Shopping District',
      beforeImage: '/portfolio/plaza-before.jpg',
      afterImage: '/portfolio/plaza-after.jpg',
      testimonial: {
        quote: 'Our foot traffic increased noticeably after the cleaning. The property looks well-maintained and inviting now.',
        author: 'Jennifer Williams',
        role: 'Property Manager'
      }
    },
    {
      id: 'restaurant-patio-1',
      title: 'Restaurant Patio Renovation',
      category: 'commercial',
      description: 'Deep cleaning of outdoor dining area with stone pavers and concrete. Removed food stains, grease, and environmental buildup to create a more appealing dining atmosphere.',
      location: 'Waterfront District',
      beforeImage: '/portfolio/patio-before.jpg',
      afterImage: '/portfolio/patio-after.jpg'
    },
    {
      id: 'solar-panel-1',
      title: 'Solar Panel Cleaning',
      category: 'residential',
      description: 'Cleaning of residential solar panel system to improve energy production efficiency. Removed dust, pollen, and bird droppings using specialized no-scratch techniques.',
      location: 'Sunny Acres Development',
      beforeImage: '/portfolio/solar-before.jpg',
      afterImage: '/portfolio/solar-after.jpg',
      testimonial: {
        quote: 'Our energy production increased by 25% after the cleaning! I had no idea how much dirt was affecting our system\'s performance.',
        author: 'David Chen',
        role: 'Homeowner'
      }
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work Portfolio</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Browse through our recent pressure washing projects and see the dramatic transformations we deliver.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-flex rounded-lg overflow-hidden">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-6 py-3 font-medium text-lg ${
                  activeFilter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition`}
              >
                All Projects
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

      {/* Portfolio Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition hover:scale-105 hover:shadow-xl"
                onClick={() => setActiveProject(project)}
              >
                <div className="relative h-64">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-sm text-gray-200">{project.location}</p>
                    </div>
                  </div>
                  <Image
                    src={project.afterImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.category === 'residential' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.category === 'residential' ? 'Residential' : 'Commercial'}
                    </span>
                    <span className="text-sm text-gray-500">View Details</span>
                  </div>
                  <p className="text-gray-600 line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">{activeProject.title}</h2>
              <button 
                onClick={() => setActiveProject(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Before</h3>
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src={activeProject.beforeImage}
                      alt={`${activeProject.title} before cleaning`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">After</h3>
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src={activeProject.afterImage}
                      alt={`${activeProject.title} after cleaning`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Details</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">{activeProject.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="font-medium capitalize">{activeProject.category}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{activeProject.description}</p>
                </div>
              </div>
              
              {activeProject.testimonial && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Testimonial</h3>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700 italic mb-4">&quot;Before and after photos speak for themselves. The transformation is incredible!&quot;</p>
                    <div>
                      <p className="font-bold text-gray-900">{activeProject.testimonial.author}</p>
                      <p className="text-sm text-gray-500">{activeProject.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex justify-center mt-6">
                <Link
                  href="/quote"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Get a Similar Result for Your Property
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Property?</h2>
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