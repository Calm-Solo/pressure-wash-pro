'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Service type definition
type Service = {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  pricing: {
    basic: string;
    additional?: string;
  };
  popular?: boolean;
};

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial'>('residential');

  // Services data
  const residentialServices: Service[] = [
    {
      id: 'house-washing',
      name: 'House Washing',
      description: 'Our soft wash house cleaning removes dirt, mold, mildew, and algae from your home\'s exterior without damaging surfaces.',
      features: [
        'Safe for all siding types (vinyl, wood, brick, stucco)',
        'Eco-friendly cleaning solutions',
        'Removes mold, mildew, dirt, and algae',
        'Improves curb appeal and extends siding life'
      ],
      image: '/services/pr_2.png',
      pricing: {
        basic: 'Starting at $199',
        additional: 'Price varies based on square footage and level of dirt/stains'
      },
      popular: true
    },
    {
      id: 'driveway-cleaning',
      name: 'Driveway & Sidewalk Cleaning',
      description: 'Restore your concrete surfaces to like-new condition with our high-pressure cleaning service.',
      features: [
        'Removes oil stains, dirt, grime, and organic growth',
        'Safe for concrete, pavers, and aggregate surfaces',
        'Optional sealing service available',
        'Prevents slip hazards and extends surface life'
      ],
      image: '/services/pr_3.png',
      pricing: {
        basic: 'Starting at $99',
        additional: 'Based on square footage'
      }
    },
    {
      id: 'deck-patio',
      name: 'Deck & Patio Restoration',
      description: 'Bring your outdoor living spaces back to life with our specialized wood and composite deck cleaning.',
      features: [
        'Safe for wood, composite, and PVC decking',
        'Removes dirt, mildew, algae, and weathering',
        'Optional staining and sealing available',
        'Extends deck life and improves appearance'
      ],
      image: '/services/pr_6.png',
      pricing: {
        basic: 'Starting at $149',
        additional: 'Staining/sealing services priced separately'
      }
    },
    {
      id: 'roof-cleaning',
      name: 'Roof Cleaning',
      description: 'Our no-pressure roof cleaning safely removes black streaks, moss, and algae without damaging shingles.',
      features: [
        'Soft wash technique safe for all roof types',
        'Removes black streaks, moss, and algae',
        'Extends roof life and improves energy efficiency',
        'Restores original appearance'
      ],
      image: '/services/pr_4.png',
      pricing: {
        basic: 'Starting at $249',
        additional: 'Based on roof size and pitch'
      }
    },
    {
      id: 'fence-cleaning',
      name: 'Fence Cleaning',
      description: 'Restore your fence to its original beauty with our specialized cleaning service.',
      features: [
        'Works on wood, vinyl, and metal fences',
        'Removes dirt, mold, mildew, and algae',
        'Optional staining and sealing for wood fences',
        'Extends fence life and improves appearance'
      ],
      image: '/services/pr_5.png',
      pricing: {
        basic: 'Starting at $2.50 per linear foot',
        additional: 'Staining/sealing services priced separately'
      }
    }
  ];

  const commercialServices: Service[] = [
    {
      id: 'commercial-exterior',
      name: 'Commercial Building Exterior',
      description: 'Maintain your business\'s professional appearance with our commercial exterior cleaning services.',
      features: [
        'Safe for all building materials',
        'Scheduled maintenance plans available',
        'Improves business appearance and customer impression',
        'Prevents long-term damage from dirt and organic growth'
      ],
      image: '/services/pr_7.png',
      pricing: {
        basic: 'Custom quotes based on building size',
        additional: 'Maintenance plans available'
      },
      popular: true
    },
    {
      id: 'parking-lot',
      name: 'Parking Lot & Garage Cleaning',
      description: 'Remove oil stains, gum, and dirt from your business\'s parking areas.',
      features: [
        'Surface cleaning for concrete and asphalt',
        'Removes oil stains, gum, and ground-in dirt',
        'Improves safety and appearance',
        'After-hours service available'
      ],
      image: '/services/pr_8.png',
      pricing: {
        basic: 'Custom quotes based on square footage',
        additional: 'Discounts for regular maintenance'
      }
    },
    {
      id: 'storefront',
      name: 'Storefront & Awning Cleaning',
      description: 'Make a great first impression with clean windows, awnings, and entryways.',
      features: [
        'Cleans windows, awnings, and entrance areas',
        'Removes dirt, cobwebs, and stains',
        'Improves business visibility and appeal',
        'Regular maintenance plans available'
      ],
      image: '/services/pr_9.png',
      pricing: {
        basic: 'Starting at $149',
        additional: 'Based on storefront size and features'
      }
    },
    {
      id: 'solar-panel',
      name: 'Solar Panel Cleaning',
      description: 'Maximize your solar energy production with our specialized solar panel cleaning service.',
      features: [
        'Increases energy production efficiency by up to 30%',
        'Safe, no-scratch cleaning techniques',
        'Removes dirt, pollen, bird droppings, and other debris',
        'Regular maintenance plans available'
      ],
      image: '/services/pr_10.png',
      pricing: {
        basic: 'Starting at $149',
        additional: 'Based on system size and accessibility'
      }
    }
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Pressure Washing Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Professional cleaning solutions for residential and commercial properties.
          </p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-flex rounded-lg overflow-hidden">
              <button
                onClick={() => setActiveTab('residential')}
                className={`px-6 py-3 font-medium text-lg ${
                  activeTab === 'residential'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition`}
              >
                Residential Services
              </button>
              <button
                onClick={() => setActiveTab('commercial')}
                className={`px-6 py-3 font-medium text-lg ${
                  activeTab === 'commercial'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition`}
              >
                Commercial Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Services Section */}
      <section id="residential" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Residential Services</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {residentialServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col h-full relative"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    POPULAR
                  </div>
                )}
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-800">Pricing:</span>
                    <span className="text-blue-600 font-bold">{service.pricing.basic}</span>
                  </div>
                  {service.pricing.additional && (
                    <p className="text-sm text-gray-500">{service.pricing.additional}</p>
                  )}
                  <div className="mt-4">
                    <Link
                      href={`/quote?service=${service.id}`}
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Commercial Services Section */}
      <section id="commercial" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Commercial Services</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {commercialServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col h-full relative"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    POPULAR
                  </div>
                )}
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-800">Pricing:</span>
                    <span className="text-blue-600 font-bold">{service.pricing.basic}</span>
                  </div>
                  {service.pricing.additional && (
                    <p className="text-sm text-gray-500">{service.pricing.additional}</p>
                  )}
                  <div className="mt-4">
                    <Link
                      href={`/quote?service=${service.id}`}
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specialty Services Section */}
      <section id="specialty" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Specialty Services</h2>
          {/* Rest of specialty services content */}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Cleaning Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure the best results for every surface we clean.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: "Inspection",
                  description: "We thoroughly assess the surface condition and identify any special needs or concerns.",
                  icon: "🔍"
                },
                {
                  step: 2,
                  title: "Preparation",
                  description: "We protect surrounding areas and vegetation, and select the appropriate cleaning method.",
                  icon: "🛠️"
                },
                {
                  step: 3,
                  title: "Cleaning",
                  description: "Using the right pressure and cleaning solutions, we safely remove dirt, grime, and stains.",
                  icon: "💦"
                },
                {
                  step: 4,
                  title: "Inspection",
                  description: "We review our work to ensure everything meets our high standards and your expectations.",
                  icon: "✅"
                }
              ].map((step) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: step.step * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-md text-center relative"
                >
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  
                  {step.step < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Professional Equipment & Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We invest in the best equipment and eco-friendly cleaning solutions to deliver superior results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Commercial-Grade Pressure Washers",
                description: "Our professional equipment delivers the right pressure for each surface, from gentle cleaning to high-pressure dirt removal.",
                image: "/services/pr_11.png"
              },
              {
                title: "Eco-Friendly Cleaning Solutions",
                description: "We use biodegradable, environmentally safe cleaning solutions that are tough on dirt but gentle on your property and landscaping.",
                image: "/services/pr_12.jpg"
              },
              {
                title: "Surface-Specific Attachments",
                description: "Specialized tools and attachments allow us to clean efficiently and effectively on any surface, from concrete to delicate siding.",
                image: "/services/pr_13.jpg"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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