import React from 'react';
import { Eye, Ear, Mouse, Keyboard, Monitor, Smartphone, Mail, Phone } from 'lucide-react';

const Accessibility = () => {
  const accessibilityFeatures = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      features: [
        'High contrast color schemes',
        'Large, readable fonts',
        'Alt text for all images',
        'Screen reader compatible',
        'Scalable text up to 200%'
      ]
    },
    {
      icon: Keyboard,
      title: 'Navigation Accessibility',
      features: [
        'Full keyboard navigation',
        'Skip to main content links',
        'Logical tab order',
        'Clear focus indicators',
        'Consistent navigation structure'
      ]
    },
    {
      icon: Monitor,
      title: 'Technical Compatibility',
      features: [
        'Works with assistive technologies',
        'Compatible with screen readers',
        'Voice recognition software support',
        'Mobile device accessibility',
        'Reduced motion options'
      ]
    }
  ];

  const keyboardShortcuts = [
    { keys: 'Tab', description: 'Navigate to next interactive element' },
    { keys: 'Shift + Tab', description: 'Navigate to previous interactive element' },
    { keys: 'Enter or Space', description: 'Activate buttons and links' },
    { keys: 'Escape', description: 'Close modals and dropdown menus' },
    { keys: 'Arrow Keys', description: 'Navigate within menus and lists' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Eye className="w-16 h-16 mx-auto mb-6 text-emerald-300" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Accessibility</h1>
          <p className="text-xl md:text-2xl text-emerald-200 max-w-3xl mx-auto">
            We're committed to making our website accessible to everyone, regardless of ability or technology
          </p>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Accessibility Commitment</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Natural Nagas Conservation Initiative is committed to ensuring digital accessibility for people 
              with disabilities. We continually improve the user experience for everyone and apply relevant 
              accessibility standards to ensure we provide equal access to information and functionality.
            </p>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Standards We Follow</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">WCAG 2.1 Guidelines</h4>
                <p className="text-gray-700">
                  We strive to conform to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards 
                  to ensure our website is accessible to users with disabilities.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Inclusive Design Principles</h4>
                <p className="text-gray-700">
                  Our design follows inclusive principles ensuring that our conservation message reaches 
                  the widest possible audience, regardless of abilities or technology used.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Accessibility Features</h2>
            <p className="text-xl text-gray-600">Built-in features to enhance accessibility for all users</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {accessibilityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-emerald-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start gap-2">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Keyboard Shortcuts */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Keyboard Navigation</h2>
            <p className="text-xl text-gray-600">Use these keyboard shortcuts to navigate our website efficiently</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid gap-4">
              {keyboardShortcuts.map((shortcut, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <kbd className="px-3 py-2 bg-gray-200 rounded-lg font-mono text-sm text-gray-800 border border-gray-300">
                      {shortcut.keys}
                    </kbd>
                    <span className="text-gray-700">{shortcut.description}</span>
                  </div>
                  <Keyboard className="w-5 h-5 text-emerald-600" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Browser and Device Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Supported Technologies</h2>
            <p className="text-xl text-gray-600">Our website works across various devices and assistive technologies</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Monitor className="w-8 h-8 text-emerald-600" />
                <h3 className="text-xl font-bold text-gray-900">Browsers & Devices</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Supported Browsers</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Chrome 90+</li>
                    <li>• Firefox 88+</li>
                    <li>• Safari 14+</li>
                    <li>• Edge 90+</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Device Compatibility</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Desktop and laptop computers</li>
                    <li>• Tablets and mobile devices</li>
                    <li>• Screen readers and assistive devices</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="w-8 h-8 text-emerald-600" />
                <h3 className="text-xl font-bold text-gray-900">Assistive Technologies</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Screen Readers</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• JAWS (Windows)</li>
                    <li>• NVDA (Windows)</li>
                    <li>• VoiceOver (macOS/iOS)</li>
                    <li>• TalkBack (Android)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Other Tools</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Voice recognition software</li>
                    <li>• Switch navigation devices</li>
                    <li>• Magnification software</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Accessibility Feedback</h2>
          <p className="text-xl text-emerald-200 mb-8">
            We welcome your feedback on the accessibility of our website. If you encounter any barriers 
            or have suggestions for improvement, please let us know.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Mail className="w-8 h-8 mx-auto mb-4 text-emerald-300" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-emerald-200 mb-2">Send us your accessibility feedback</p>
              <a 
                href="mailto:accessibility@naturalnagas.org"
                className="text-emerald-300 hover:text-white transition-colors duration-300"
              >
                accessibility@naturalnagas.org
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Phone className="w-8 h-8 mx-auto mb-4 text-emerald-300" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-emerald-200 mb-2">Speak with our team directly</p>
              <a 
                href="tel:+919876543210"
                className="text-emerald-300 hover:text-white transition-colors duration-300"
              >
                +91 98765 43210
              </a>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <p className="text-emerald-200 text-sm">
              We aim to respond to accessibility feedback within 48 hours and will work to address 
              any issues as quickly as possible.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accessibility;