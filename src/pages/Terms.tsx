import React from 'react';
import { FileText, Shield, AlertCircle, Scale, Mail, Phone } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="w-16 h-16 mx-auto mb-6 text-emerald-300" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl md:text-2xl text-emerald-200 max-w-3xl mx-auto">
            Terms and conditions governing your use of our website and services
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-emerald-50 rounded-lg p-6 mb-8">
              <p className="text-emerald-800 font-medium mb-2">Last Updated: January 1, 2025</p>
              <p className="text-gray-700">
                Please read these Terms of Service carefully before using the Natural Nagas Conservation Initiative 
                website or engaging with our services. By using our website, you agree to be bound by these terms.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
                <p className="text-gray-700">
                  By accessing and using the Natural Nagas Conservation Initiative website (naturalnagas.org), 
                  you accept and agree to be bound by the terms and provision of this agreement. These terms 
                  apply to all visitors, users, and others who access or use our service.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">2. Use of Website</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Permitted Uses</h3>
                    <p className="text-gray-700 mb-4">You may use our website for:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Learning about our conservation work and programs</li>
                      <li>Making donations to support our mission</li>
                      <li>Applying for volunteer opportunities</li>
                      <li>Accessing educational resources and publications</li>
                      <li>Contacting us for legitimate purposes</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Prohibited Uses</h3>
                    <p className="text-gray-700 mb-4">You agree not to:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Use our website for any unlawful purpose or activity</li>
                      <li>Attempt to gain unauthorized access to our systems</li>
                      <li>Transmit viruses, malware, or other harmful code</li>
                      <li>Impersonate any person or entity</li>
                      <li>Violate any applicable laws or regulations</li>
                      <li>Interfere with the proper functioning of the website</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Donations and Payments</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    All donations made through our website are voluntary contributions to support our conservation 
                    mission. By making a donation, you agree that:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Donations are made willingly and without expectation of goods or services in return</li>
                    <li>All donation information provided is accurate and complete</li>
                    <li>You have the legal authority to make the donation</li>
                    <li>Donations are generally non-refundable, except in cases of technical errors</li>
                    <li>We will use donations in accordance with our stated mission and programs</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  The content on our website, including text, graphics, logos, images, and software, is the 
                  property of Natural Nagas Conservation Initiative or our content suppliers and is protected 
                  by copyright and other intellectual property laws.
                </p>
                <p className="text-gray-700">
                  You may view and download content for personal, non-commercial use only. Any other use, 
                  including reproduction, modification, distribution, or republication, requires our prior 
                  written consent.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-8 h-8 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">5. Disclaimers and Limitations</h2>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    Our website and services are provided "as is" without warranties of any kind, either express or implied. 
                    We do not warrant that:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>The website will be available at all times or free from errors</li>
                    <li>Information on the website is complete, accurate, or up-to-date</li>
                    <li>The website will meet your specific requirements</li>
                    <li>Any defects will be corrected</li>
                  </ul>
                  
                  <p className="mt-4">
                    To the maximum extent permitted by law, Natural Nagas Conservation Initiative shall not be 
                    liable for any direct, indirect, incidental, special, or consequential damages resulting 
                    from your use of our website or services.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">6. User Content</h2>
                <p className="text-gray-700 mb-4">
                  If you submit content to our website (such as comments, testimonials, or volunteer applications), 
                  you grant us a non-exclusive, royalty-free license to use, modify, and display such content for 
                  our conservation and educational purposes.
                </p>
                <p className="text-gray-700">
                  You represent that any content you submit is original, accurate, and does not violate any 
                  third-party rights or applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Privacy</h2>
                <p className="text-gray-700">
                  Your privacy is important to us. Our collection and use of personal information is governed 
                  by our Privacy Policy, which is incorporated into these Terms of Service by reference. 
                  Please review our Privacy Policy to understand our practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Modifications</h2>
                <p className="text-gray-700">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective 
                  immediately upon posting on our website. Your continued use of the website after any changes 
                  constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Scale className="w-8 h-8 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900 m-0">9. Governing Law</h2>
                </div>
                <p className="text-gray-700">
                  These Terms of Service are governed by and construed in accordance with the laws of India. 
                  Any disputes arising from these terms or your use of our website shall be subject to the 
                  exclusive jurisdiction of the courts in Nagaland, India.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Termination</h2>
                <p className="text-gray-700">
                  We reserve the right to terminate or suspend your access to our website at any time, 
                  without prior notice, for conduct that we believe violates these Terms of Service or 
                  is harmful to other users or our organization.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-2 text-gray-700">
                    <div>Natural Nagas Conservation Initiative</div>
                    <div>Wokha, Nagaland 797111, India</div>
                    <div>Email: legal@naturalnagas.org</div>
                    <div>Phone: +91 98765 43210</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Legal Questions?</h2>
          <p className="text-xl text-emerald-200 mb-8">
            Contact us if you have any questions about these terms or our legal policies.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Mail className="w-8 h-8 mx-auto mb-4 text-emerald-300" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a 
                href="mailto:legal@naturalnagas.org"
                className="text-emerald-300 hover:text-white transition-colors duration-300"
              >
                legal@naturalnagas.org
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

export default Terms;