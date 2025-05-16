'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    propertyType: 'residential',
    squareFootage: '',
    message: '',
    preferredDate: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        serviceType: '',
        propertyType: 'residential',
        squareFootage: '',
        message: '',
        preferredDate: '',
      });
    }, 1500);
    
    // In a real application, you would send the data to your backend:
    // try {
    //   const response = await fetch('/api/submit-quote', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    //   });
    //   const data = await response.json();
    //   setIsSubmitting(false);
    //   setIsSubmitted(true);
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    //   setIsSubmitting(false);
    // }
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Quote</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Fill out the form below and we'll get back to you with a customized quote for your pressure washing needs.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Form Side */}
              <div className="md:w-2/3 p-8 md:p-12">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-green-500 text-6xl mb-6">✓</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
                    <p className="text-gray-600 mb-8">
                      Your quote request has been submitted successfully. We'll get back to you within 24 hours with a customized quote.
                    </p>
                    <Link 
                      href="/"
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                      Return to Home
                    </Link>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Request a Quote</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Personal Information */}
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                            Property Address *
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      {/* Service Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                            Service Type *
                          </label>
                          <select
                            id="serviceType"
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="" disabled>Select a service</option>
                            <option value="house-washing">House Washing</option>
                            <option value="driveway-cleaning">Driveway Cleaning</option>
                            <option value="deck-cleaning">Deck & Patio Cleaning</option>
                            <option value="roof-cleaning">Roof Cleaning</option>
                            <option value="commercial">Commercial Cleaning</option>
                            <option value="other">Other (Specify in Message)</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                            Property Type
                          </label>
                          <div className="flex space-x-4">
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name="propertyType"
                                value="residential"
                                checked={formData.propertyType === 'residential'}
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                              />
                              <span className="ml-2 text-gray-700">Residential</span>
                            </label>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name="propertyType"
                                value="commercial"
                                checked={formData.propertyType === 'commercial'}
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                              />
                              <span className="ml-2 text-gray-700">Commercial</span>
                            </label>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="squareFootage" className="block text-sm font-medium text-gray-700 mb-1">
                            Approximate Square Footage
                          </label>
                          <input
                            type="text"
                            id="squareFootage"
                            name="squareFootage"
                            value={formData.squareFootage}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., 1500"
                          />
                        </div>
                        <div>
                          <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                            Preferred Service Date
                          </label>
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      {/* Additional Information */}
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Additional Details
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Tell us more about your needs, specific areas to clean, concerns, etc."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold ${
                          isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
                        } transition`}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                      </button>
                    </form>
                  </>
                )}
              </div>

              {/* Image/Info Side */}
              <div className="md:w-1/3 bg-blue-900 text-white p-8 md:p-12">
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Free, no-obligation quotes</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Licensed and insured professionals</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Eco-friendly cleaning solutions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Satisfaction guaranteed</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Contact Us Directly</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-blue-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-blue-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>info@pressurewashpro.com</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/pr_1.jpg" // Replace with your image
                    alt="Professional pressure washing"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto grid gap-6">
            {[
              {
                question: "How soon can you start the work?",
                answer: "In most cases, we can schedule your service within 1-2 weeks of approving your quote. For urgent needs, we offer expedited services when available."
              },
              {
                question: "Do I need to be home during the service?",
                answer: "No, you don't need to be present as long as we have access to the areas that need cleaning and water sources. However, we're happy to walk through the completed work with you if you're available."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, checks, and cash. Payment is typically due upon completion of the service, and we can provide electronic receipts."
              },
              {
                question: "Is pressure washing safe for all surfaces?",
                answer: "Different surfaces require different cleaning approaches. We use appropriate pressure levels and techniques for each surface to ensure safe, effective cleaning without damage."
              },
              {
                question: "Do you offer any guarantees?",
                answer: "Yes! We offer a 100% satisfaction guarantee. If you're not completely satisfied with our work, we'll return and address any areas of concern at no additional cost."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 