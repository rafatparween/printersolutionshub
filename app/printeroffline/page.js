// pages/index.js
"use client"
import { useState } from 'react';
import Head from 'next/head';

export default function PrinterTroubleshooting() {
  const [activeTab, setActiveTab] = useState('connection');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: ''
  });

  const faqs = [
    {
      question: "Why does my printer keep going offline?",
      answer: "This can happen due to connection drops, outdated drivers, or incorrect settings. Follow the troubleshooting steps above to resolve it."
    },
    {
      question: "How do I get my HP/Epson/Canon printer back online?",
      answer: "The steps are similar for most printers. Ensure proper connection, update drivers, and clear print queue."
    },
    {
      question: "Can a printer go offline due to Wi-Fi issues?",
      answer: "Yes. If the printer disconnects from Wi-Fi, it may show as offline. Restart the router and reconnect the printer."
    },
    {
      question: "How do I stop my printer from going offline repeatedly?",
      answer: "Keep drivers updated, use a stable connection, and disable 'Use Printer Offline' mode in settings."
    }
  ];

  const handleFaqToggle = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Your query has been submitted! Our team will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      issue: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Head>
        <title>Printer Troubleshooting Guide | Fix Offline Printer Issues</title>
        <meta name="description" content="Comprehensive guide to fix printer offline and connectivity issues" />
      </Head>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Printer Offline? Let's Fix It!</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Comprehensive guide to troubleshoot and resolve printer connectivity issues with easy step-by-step solutions.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveTab('connection')}
            className={`px-6 py-3 rounded-lg font-medium ${activeTab === 'connection' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            Connection Issues
          </button>
          <button
            onClick={() => setActiveTab('wifi')}
            className={`px-6 py-3 rounded-lg font-medium ${activeTab === 'wifi' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            WiFi Setup
          </button>
          <button
            onClick={() => setActiveTab('sleep')}
            className={`px-6 py-3 rounded-lg font-medium ${activeTab === 'sleep' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            Sleep Mode
          </button>
          <button
            onClick={() => setActiveTab('expert')}
            className={`px-6 py-3 rounded-lg font-medium ${activeTab === 'expert' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            Expert Help
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          {activeTab === 'connection' && (
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Fixing Printer Connection Issues</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">1</span>
                    Check Basic Connections
                  </h3>
                  <p className="text-gray-600">Ensure the printer is powered on and not in sleep mode. Check all cables (USB/power) are properly connected.</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">2</span>
                    Restart Devices
                  </h3>
                  <p className="text-gray-600">Turn off the printer, unplug for 30 seconds, then restart. Also restart your computer to refresh connections.</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">3</span>
                    Set Printer to Online Mode
                  </h3>
                  <p className="text-gray-600">Go to Control Panel &gt; Devices and Printers. Right-click your printer and ensure "Use Printer Offline" is not selected.</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">4</span>
                    Clear Print Queue
                  </h3>
                  <p className="text-gray-600">Open print queue and cancel all documents. Restart the print spooler service from Windows Services.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'wifi' && (
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Connecting Your Printer to WiFi</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Check Network Connection</h3>
                    <p className="text-gray-600">Move your printer and computer closer to the router. Check signal quality and try opening a website to test internet connection.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Restart Your Router</h3>
                    <p className="text-gray-600">Unplug the router's power cord, wait 15 seconds, then reconnect it. This often resolves intermittent WiFi issues.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Check Wireless Settings</h3>
                    <p className="text-gray-600">Ensure wireless signal is turned on in printer settings. Look for a light next to the wireless button/icon on your printer.</p>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 mt-6">
                  <h3 className="font-semibold text-purple-800 mb-2">Pro Tip:</h3>
                  <p className="text-purple-700">If you recently changed your WiFi password or network security settings, you'll need to reconnect your printer to the network with the new credentials.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sleep' && (
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Resolving Printer Sleep Mode Issues</h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Wake Up Your Printer</h3>
                  <p className="text-gray-700 mb-4">If your printer is in sleep mode, touch the printer's touchscreen or press the Power button to wake it up and put it in ready state.</p>
                  <div className="bg-white p-3 rounded inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Quick Tip</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Adjust Power Settings</h3>
                  <p className="text-gray-700 mb-4">Access your printer's settings menu to adjust sleep timer or disable power-saving mode completely.</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Location varies by printer model
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Check for Error Messages</h3>
                  <p className="text-gray-700 mb-4">Look for any warning lights or error messages on the printer display that might indicate why it's not waking up.</p>
                  <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Important
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Perform a Power Cycle</h3>
                  <p className="text-gray-700">Turn off the printer, unplug it from power, wait 60 seconds, then reconnect and power on. This often resolves unresponsive behavior.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'expert' && (
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Need Expert Help?</h2>
              <p className="text-gray-600 mb-8">Our printer support team is ready to help you resolve any printer issues quickly. Fill out the form below and we'll contact you shortly.</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Contact Our Experts</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1">Describe Your Issue</label>
                      <textarea
                        id="issue"
                        name="issue"
                        value={formData.issue}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                    >
                      Submit Request
                    </button>
                  </form>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Why Choose Our Support?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">24/7 support from printer specialists</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Remote troubleshooting available</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Step-by-step guidance for any printer model</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Free initial diagnosis</span>
                    </li>
                  </ul>

                  <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                          For immediate assistance, call our support line at <span className="font-semibold">1-800-PRINTER</span> (1-800-774-6837)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => handleFaqToggle(index)}
                    className="flex justify-between items-center w-full text-left focus:outline-none"
                  >
                    <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                    <svg
                      className={`h-5 w-5 text-gray-500 transform transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {expandedFaq === index && (
                    <div className="mt-2 text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Still Having Printer Problems?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Our expert technicians can help diagnose and fix your printer issues remotely or guide you through the solution.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#expert"
                onClick={() => setActiveTab('expert')}
                className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition duration-200"
              >
                Get Expert Help Now
              </a>
              <a
                href="tel:18007746837"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-6 rounded-lg transition duration-200"
              >
                Call Support: 1-800-PRINTER
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Printer Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">HP Printers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Epson Printers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Canon Printers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Brother Printers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Driver Downloads</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Setup Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Troubleshooting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <address className="not-italic text-gray-300">
              <p>123 Tech Support Lane</p>
              <p>San Francisco, CA 94107</p>
              <p className="mt-2">Phone: 1-800-PRINTER</p>
              <p>Email: support@printerhelp.com</p>
            </address>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Printer Troubleshooting Guide. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};