import React from 'react';
import { Shield, Eye, Lock, UserCheck, Mail, Phone } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-emerald-300" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl md:text-2xl text-emerald-200 max-w-3xl mx-auto">
            We are committed to protecting your privacy and handling your personal information responsibly
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-emerald-50 rounded-lg p-6 mb-8">
              <p className="text-emerald-800 font-medium mb-2">Last Updated: January 1, 2025</p>
              <p className="text-gray-700">
                This Privacy Policy explains how Natural Nagas Conservation Initiative ("we", "our", or "us") 
                collects, uses, and protects your personal information when you visit our website or engage with our services.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="w-8 h-8 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Information We Collect</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                    <p className="text-gray-700 mb-4">We may collect personal information that you provide to us, including:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Name and contact information (email, phone number, address)</li>
                      <li>Donation and payment information</li>
                      <li>Volunteer application details</li>
                      <li>Event registration information</li>
                      <li>Newsletter subscription preferences</li>
                      <li>Communication preferences and feedback</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Website Usage Information</h3>
                    <p className="text-gray-700 mb-4">We automatically collect certain information when you visit our website:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>IP address and browser information</li>
                      <li>Pages visited and time spent on our website</li>
                      <li>Referring website information</li>
                      <li>Device and operating system information</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <UserCheck className="w-8 h-8 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">How We Use Your Information</h2>
                </div>
                
                <p className="text-gray-700 mb-4">We use the information we collect for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Processing donations and maintaining donor records</li>
                  <li>Managing volunteer applications and assignments</li>
                  <li>Sending newsletters and program updates</li>
                  <li>Organizing events and educational programs</li>
                  <li>Improving our website and services</li>
                  <li>Complying with legal and regulatory requirements</li>
                  <li>Communicating about our conservation work and impact</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="w-8 h-8 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">Information Protection</h2>
                </div>
                
                <p className="text-gray-700 mb-4">We implement appropriate security measures to protect your personal information:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Secure data transmission using SSL encryption</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Regular security audits and updates</li>
                  <li>Secure storage of physical and digital records</li>
                  <li>Staff training on data protection practices</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>With service providers who help us operate our programs (under strict confidentiality agreements)</li>
                  <li>When required by law or legal process</li>
                  <li>With your explicit consent</li>
                  <li>In aggregated, non-personally identifiable form for research or reporting purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
                <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Access to the personal information we hold about you</li>
                  <li>Correction of inaccurate or incomplete information</li>
                  <li>Deletion of your personal information (subject to legal requirements)</li>
                  <li>Opt-out of email communications at any time</li>
                  <li>Request information about how your data is used</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
                <p className="text-gray-700 mb-4">
                  Our website uses cookies and similar technologies to enhance your browsing experience and analyze website usage. 
                  You can control cookie settings through your browser preferences. We use cookies for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Website functionality and user preferences</li>
                  <li>Analytics to improve our website performance</li>
                  <li>Social media integration</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
                <p className="text-gray-700">
                  We do not knowingly collect personal information from children under 13 years of age without 
                  parental consent. If you believe we have collected information from a child under 13, please 
                  contact us immediately so we can remove such information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                  We will notify you of any material changes by posting the updated policy on our website with a new effective date.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Privacy Questions */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Privacy?</h2>
          <p className="text-xl text-emerald-200 mb-8">
            If you have any questions about this Privacy Policy or our data practices, please contact us.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Mail className="w-8 h-8 mx-auto mb-4 text-emerald-300" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a 
                href="mailto:privacy@naturalnagas.org"
                className="text-emerald-300 hover:text-white transition-colors duration-300"
              >
                privacy@naturalnagas.org
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Phone className="w-8 h-8 mx-auto mb-4 text-emerald-300" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a 
                href="tel:+919876543210"
                className="text-emerald-300 hover:text-white transition-colors duration-300"
              >
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;