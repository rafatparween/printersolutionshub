"use client";


import { useState } from 'react';
import Head from 'next/head';

const PrinterSetup = () => {
  const [activeTab, setActiveTab] = useState('wired');
  const [expandedSection, setExpandedSection] = useState(null);

  const setupSteps = {
    wired: [
      {
        title: "Unbox and Position Your Printer",
        icon: "📦",
        details: "Carefully remove all packaging materials and place the printer on a stable, flat surface near your workstation."
      },
      {
        title: "Power On",
        icon: "🔌",
        details: "Connect the power cable to your printer and plug it into a power outlet. Press the power button to turn it on."
      },
      {
        title: "Connect via USB/Ethernet",
        icon: "🖥️",
        details: "For USB connection, use the provided cable to connect directly to your computer. For Ethernet, connect to your office network."
      },
      {
        title: "Install Drivers",
        icon: "💾",
        details: "Download the latest drivers from the manufacturer's website or use the included installation CD."
      },
      {
        title: "Add Printer to Your Device",
        icon: "➕",
        details: "On Windows: Settings > Devices > Printers & scanners > Add a printer. On Mac: System Preferences > Printers & Scanners > +"
      },
      {
        title: "Test Print",
        icon: "🖨️",
        details: "Print a test page to verify everything is working correctly. Adjust settings as needed."
      }
    ],
    wireless: [
      {
        title: "Position Near Router",
        icon: "📶",
        details: "Place your printer within range of your WiFi router for best connectivity during setup."
      },
      {
        title: "Power On",
        icon: "🔋",
        details: "Connect to power and turn on the printer. Wait for the startup sequence to complete."
      },
      {
        title: "Connect to WiFi",
        icon: "🌐",
        details: "Use the printer's control panel to select your network and enter the password. Some models support WPS button pairing."
      },
      {
        title: "Install Software",
        icon: "📲",
        details: "Download the manufacturer's app or software package to enable full functionality and mobile printing."
      },
      {
        title: "Add Printer to Network",
        icon: "🔄",
        details: "Ensure all devices on your network can discover the printer. You may need to approve the connection."
      },
      {
        title: "Test Wireless Print",
        icon: "✈️",
        details: "Send a test print from multiple devices to verify network connectivity."
      }
    ]
  };

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900">
      <Head>
        <title>Ultimate Printer Setup Guide | Modern Office Solutions</title>
        <meta name="description" content="Step-by-step guide for setting up wired and wireless office printers with modern techniques" />
      </Head>

      {/* Floating Help Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center w-16 h-16">
          <span className="text-2xl">?</span>
        </button>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              Ultimate Printer Setup Guide
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Transform your office printing experience with our comprehensive setup guide for both wired and wireless printers.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto border border-white/20">
            <p className="text-blue-50 text-lg">
              "In today's hybrid work environment, proper printer setup is crucial for seamless document workflow. Follow our expert guide to maximize your printer's potential."
            </p>
          </div>
        </section>

        {/* Setup Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div 
            className={`rounded-2xl p-8 transition-all duration-500 ${activeTab === 'wired' ? 'bg-gradient-to-br from-blue-700 to-blue-800 shadow-2xl' : 'bg-white/5 hover:bg-white/10 cursor-pointer'}`}
            onClick={() => setActiveTab('wired')}
          >
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-lg mr-4 ${activeTab === 'wired' ? 'bg-white text-blue-700' : 'bg-blue-700 text-white'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className={`text-2xl font-bold ${activeTab === 'wired' ? 'text-white' : 'text-blue-200'}`}>Wired Printer Setup</h2>
            </div>
            <p className={activeTab === 'wired' ? 'text-blue-100' : 'text-blue-300'}>
              Traditional wired connection for maximum reliability and speed in high-volume environments.
            </p>
          </div>

          <div 
            className={`rounded-2xl p-8 transition-all duration-500 ${activeTab === 'wireless' ? 'bg-gradient-to-br from-purple-700 to-purple-800 shadow-2xl' : 'bg-white/5 hover:bg-white/10 cursor-pointer'}`}
            onClick={() => setActiveTab('wireless')}
          >
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-lg mr-4 ${activeTab === 'wireless' ? 'bg-white text-purple-700' : 'bg-purple-700 text-white'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h2 className={`text-2xl font-bold ${activeTab === 'wireless' ? 'text-white' : 'text-purple-200'}`}>Wireless Printer Setup</h2>
            </div>
            <p className={activeTab === 'wireless' ? 'text-purple-100' : 'text-purple-300'}>
              Modern wireless solution for flexible office layouts and mobile printing convenience.
            </p>
          </div>
        </div>

        {/* Setup Steps */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {activeTab === 'wired' ? 'Wired Printer' : 'Wireless Printer'} Setup Steps
          </h2>
          
          <div className="space-y-6">
            {setupSteps[activeTab].map((step, index) => (
              <div 
                key={index} 
                className={`rounded-xl overflow-hidden transition-all duration-300 ${expandedSection === index ? 'bg-white/20' : 'bg-white/10 hover:bg-white/15'}`}
              >
                <button 
                  onClick={() => toggleSection(index)}
                  className="w-full flex items-center p-6 text-left"
                >
                  <div className={`text-2xl mr-4 ${expandedSection === index ? 'text-cyan-400' : 'text-white'}`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold ${expandedSection === index ? 'text-cyan-300' : 'text-white'}`}>
                      {step.title}
                    </h3>
                  </div>
                  <svg 
                    className={`h-6 w-6 transform transition-transform ${expandedSection === index ? 'rotate-180 text-cyan-400' : 'text-white'}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {expandedSection === index && (
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-blue-100">{step.details}</p>
                    {index === 2 && activeTab === 'wireless' && (
                      <div className="mt-4 bg-black/20 rounded-lg p-4">
                        <h4 className="font-medium text-cyan-300 mb-2">WiFi Connection Tips:</h4>
                        <ul className="list-disc pl-5 text-blue-100 space-y-1">
                          <li>Ensure you're using the 2.4GHz band for better compatibility</li>
                          <li>Keep the printer within 10 feet of the router during setup</li>
                          <li>Temporarily disable VPN connections if having trouble</li>
                        </ul>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="mt-4 flex justify-center">
                        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                          Download Drivers
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tips Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-800 to-blue-800 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Pro Installation Tips</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-cyan-400/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-blue-100">Always use manufacturer-recommended cables for optimal performance</span>
              </li>
              <li className="flex items-start">
                <div className="bg-cyan-400/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-blue-100">Update your printer firmware immediately after setup</span>
              </li>
              <li className="flex items-start">
                <div className="bg-cyan-400/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-blue-100">For offices, assign a static IP to your network printers</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-800 to-indigo-800 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Troubleshooting</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-purple-400/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-purple-100">If connection fails, power cycle both printer and router</span>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-400/20 p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-purple-100">Check firewall settings if printer isn't detected</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Q: How do I know if my printer supports wireless connection?</h3>
              <p className="text-blue-100">
                Most modern printers have WiFi capability. Check for a wireless icon on the printer or consult your manual. You can also look for network/WiFi options in the printer's control panel menu.
              </p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Q: Why can't my computer find my wireless printer?</h3>
              <p className="text-blue-100">
                This could be due to several reasons: the printer might not be connected to the same network as your computer, your firewall may be blocking the connection, or the printer's network services might need to be restarted. Try power cycling both devices.
              </p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Q: Is wired or wireless better for office use?</h3>
              <p className="text-blue-100">
                Wired connections generally offer more reliability for high-volume printing, while wireless provides flexibility. For best results in an office, consider connecting via Ethernet (wired network) which combines the reliability of wired with the network accessibility of wireless.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Still need help with your printer setup?</h3>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transition-all hover:scale-105">
            Contact Our Support Team
          </button>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="bg-black/30 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-blue-300 mb-4">© {new Date().getFullYear()} Modern Office Solutions. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-300 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-blue-300 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-blue-300 hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default PrinterSetup;