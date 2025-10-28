import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formType, setFormType] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    organization: '',
    interest: ''
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'Natural Nagas Conservation Organization',
        'Reg. No. HOME/SRC-6390 dated 07-08-2012',
        'Wokha, Nagaland 797111, India'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@naturalnagas.org',
        'programs@naturalnagas.org',
        'media@naturalnagas.org'
      ]
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        '+91 98765 43210',
        '+91 98765 43211'
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 1:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  const formTypes = [
    { id: 'general', label: 'General Inquiry', icon: MessageCircle },
    { id: 'media', label: 'Media & Press', icon: MessageCircle },
    { id: 'volunteer', label: 'Volunteer Application', icon: MessageCircle },
    { id: 'partnership', label: 'Partnership Proposal', icon: MessageCircle }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      organization: '',
      interest: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-emerald-200 max-w-3xl mx-auto">
            Get in touch with our team for partnerships, volunteering, media inquiries, or general questions
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              {/* Form Type Selection */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {formTypes.map(type => {
                  const IconComponent = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setFormType(type.id)}
                      className={`flex items-center gap-2 p-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                        formType === type.id
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      {type.label}
                    </button>
                  );
                })}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  {(formType === 'volunteer' || formType === 'partnership') && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all duration-300"
                        placeholder="Your organization name"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all duration-300"
                    placeholder="Brief subject line"
                  />
                </div>

                {formType === 'volunteer' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Area of Interest
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select your area of interest</option>
                      <option value="field-research">Field Research</option>
                      <option value="education">Education Programs</option>
                      <option value="community-outreach">Community Outreach</option>
                      <option value="digital-content">Digital Content</option>
                      <option value="administration">Administration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all duration-300"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                <p className="text-lg text-gray-700 mb-8">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-6 bg-emerald-50 rounded-xl">
                      <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <div key={idx} className="text-gray-700">{detail}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Interactive Map */}
              <div className="bg-gray-200 rounded-xl h-64 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230520.60741370522!2d94.09279589338378!3d26.094156762693064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374828e78f070a8d%3A0x93d32284886e27ba!2sWokha%2C%20Nagaland%20797111!5e0!3m2!1sen!2sin!4v1725872745684!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Natural Nagas Location - Wokha, Nagaland"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Check our frequently asked questions or get in touch directly for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/faq"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              View FAQ
            </Link>
            <button className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;