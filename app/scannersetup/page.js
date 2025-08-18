"use client";
import { useState } from 'react';
import Head from 'next/head';

export default function ScannerSetupGuide() {
  const [activeTab, setActiveTab] = useState('windows');
  const [expandedStep, setExpandedStep] = useState(null);
  const [completedSteps, setCompletedSteps] = useState([]);

  const toggleStep = (index) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  const toggleComplete = (index) => {
    if (completedSteps.includes(index)) {
      setCompletedSteps(completedSteps.filter(step => step !== index));
    } else {
      setCompletedSteps([...completedSteps, index]);
    }
  };

  const scannerSetupSteps = {
    windows: [
      {
        title: "Connect Your Scanner",
        content: "Plug your scanner into a USB port on your Windows computer. Ensure the power cable is connected and the scanner is turned on.",
        tips: ["Use the original USB cable that came with your scanner", "Try different USB ports if not detected"],
        image: "/usb-connection.png",
        video: "https://example.com/scanner-usb-connection"
      },
      {
        title: "Install Drivers",
        content: "Windows will attempt to automatically install drivers. If not, download the latest drivers from the manufacturer's website.",
        tips: ["Visit support.[brand].com for official drivers", "Run the installer as administrator"],
        image: "/driver-install.png",
        video: "https://example.com/scanner-driver-install"
      },
      {
        title: "Configure Scanner Settings",
        content: "Open 'Devices and Printers' in Control Panel. Right-click your scanner and select 'Scan Profiles' to configure default settings.",
        tips: ["Set your preferred file format (PDF/JPEG)", "Adjust resolution to 300dpi for standard documents"],
        image: "/scanner-settings.png",
        video: "https://example.com/scanner-settings"
      },
      {
        title: "Test Your Scanner",
        content: "Open Windows Fax and Scan or your scanning software. Perform a test scan to verify everything works correctly.",
        tips: ["Try both flatbed and feeder scanning", "Check scan quality before important projects"],
        image: "/test-scan.png",
        video: "https://example.com/scanner-test"
      }
    ],
    mac: [
      {
        title: "Connect Your Scanner",
        content: "Connect your scanner to your Mac using a USB cable. Make sure the scanner is powered on and ready.",
        tips: ["Use USB 2.0 or higher ports", "Check for power indicator lights"],
        image: "/mac-usb.png",
        video: "https://example.com/mac-scanner-connect"
      },
      {
        title: "Install Required Software",
        content: "Open Image Capture application. If your scanner isn't detected, download drivers from the manufacturer.",
        tips: ["Check System Preferences > Printers & Scanners", "Some scanners require proprietary software"],
        image: "/image-capture.png",
        video: "https://example.com/mac-scanner-software"
      },
      {
        title: "Configure Scanning Options",
        content: "In Image Capture, select your scanner and adjust settings like document size, color mode, and resolution.",
        tips: ["Set default scan location", "Enable 'Show Details' for advanced options"],
        image: "/mac-scan-settings.png",
        video: "https://example.com/mac-scan-settings"
      }
    ],
    network: [
      {
        title: "Connect Scanner to Network",
        content: "Connect your scanner to your network via Ethernet or Wi-Fi following the manufacturer's instructions.",
        tips: ["Ensure scanner and computer are on same network", "Note the scanner's IP address"],
        image: "/network-setup.png",
        video: "https://example.com/network-scanner-setup"
      },
      {
        title: "Install Network Scanning Software",
        content: "Install any required network scanning software from the manufacturer's website.",
        tips: ["May require admin privileges", "Configure firewall if needed"],
        image: "/network-software.png",
        video: "https://example.com/network-scanner-software"
      },
      {
        title: "Add Network Scanner",
        content: "In your computer's scanner settings, add the network scanner using its IP address or hostname.",
        tips: ["Run network discovery if scanner isn't found", "Test connection before proceeding"],
        image: "/add-network-scanner.png",
        video: "https://example.com/add-network-scanner"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      <Head>
        <title>Scanner Setup Guide | Easy Step-by-Step Instructions</title>
        <meta name="description" content="Comprehensive guide to set up your scanner on Windows, Mac, or Network" />
      </Head>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Scanner Setup Made Easy</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Follow our step-by-step guide to get your scanner working perfectly on any device
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>15-30 min setup</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Guaranteed to work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Platform Selector */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Select Your Setup Type</h2>
            <p className="text-gray-600">Choose your operating system or connection type</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-gray-200">
            <button
              onClick={() => setActiveTab('windows')}
              className={`py-6 px-4 flex flex-col items-center transition-all ${activeTab === 'windows' ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-50'}`}
            >
              <svg className="w-10 h-10 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4m0 0v4m0-4H8m4 0h4" />
              </svg>
              <span className="font-medium">Windows</span>
            </button>
            <button
              onClick={() => setActiveTab('mac')}
              className={`py-6 px-4 flex flex-col items-center transition-all ${activeTab === 'mac' ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-50'}`}
            >
              <svg className="w-10 h-10 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2.5a9.5 9.5 0 019.5 9.5c0 5.248-3.589 9.5-9.5 9.5a9.5 9.5 0 010-19z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3" />
              </svg>
              <span className="font-medium">Mac OS</span>
            </button>
            <button
              onClick={() => setActiveTab('network')}
              className={`py-6 px-4 flex flex-col items-center transition-all ${activeTab === 'network' ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-50'}`}
            >
              <svg className="w-10 h-10 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              <span className="font-medium">Network</span>
            </button>
          </div>
        </div>

        {/* Setup Steps */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              {activeTab === 'windows' && 'Windows Scanner Setup'}
              {activeTab === 'mac' && 'Mac OS Scanner Setup'}
              {activeTab === 'network' && 'Network Scanner Setup'}
            </h2>
            <div className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              {scannerSetupSteps[activeTab].length} steps
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {scannerSetupSteps[activeTab].map((step, index) => (
              <div key={index} className={`border-b border-gray-200 last:border-b-0 ${completedSteps.includes(index) ? 'bg-green-50' : ''}`}>
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${completedSteps.includes(index) ? 'bg-green-500 text-white' : 'bg-blue-100 text-blue-600'}`}
                        onClick={() => toggleComplete(index)}
                      >
                        {completedSteps.includes(index) ? (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className="font-medium">{index + 1}</span>
                        )}
                      </div>
                    </div>
                    <div className="ml-4 flex-1">
                      <button
                        onClick={() => toggleStep(index)}
                        className="text-left w-full focus:outline-none"
                      >
                        <h3 className={`text-lg font-medium ${completedSteps.includes(index) ? 'text-green-800 line-through' : 'text-gray-800'}`}>
                          {step.title}
                        </h3>
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <span>{completedSteps.includes(index) ? 'Completed' : 'Click to expand'}</span>
                          <svg 
                            className={`ml-2 h-4 w-4 transform transition-transform ${expandedStep === index ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>

                      {expandedStep === index && (
                        <div className="mt-4 animate-fadeIn">
                          <div className="prose prose-blue max-w-none">
                            <p className="text-gray-700">{step.content}</p>
                            
                            {step.tips && step.tips.length > 0 && (
                              <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r">
                                <h4 className="text-sm font-medium text-blue-800 mb-2">Pro Tips:</h4>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-blue-700">
                                  {step.tips.map((tip, tipIndex) => (
                                    <li key={tipIndex}>{tip}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                              {step.image && (
                                <div className="bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                                  <div className="bg-gray-300 h-48 flex items-center justify-center text-gray-500">
                                    <span>Step {index + 1} Visual Guide</span>
                                  </div>
                                  <div className="p-3 text-center text-sm text-gray-600">
                                    <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center w-full">
                                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                      </svg>
                                      Enlarge Image
                                    </button>
                                  </div>
                                </div>
                              )}

                              {step.video && (
                                <div className="bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                                  <div className="bg-gray-300 h-48 flex items-center justify-center text-gray-500">
                                    <span>Step {index + 1} Video Tutorial</span>
                                  </div>
                                  <div className="p-3 text-center text-sm text-gray-600">
                                    <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center w-full">
                                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                      Watch Video
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Troubleshooting Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Troubleshooting Common Issues</h2>
            <p className="text-gray-600">Having problems? Try these solutions</p>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Scanner not detected</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Restart both your computer and scanner</li>
                <li>Try a different USB cable or port</li>
                <li>Check manufacturer's website for latest drivers</li>
              </ul>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Poor scan quality</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Clean scanner glass with lint-free cloth</li>
                <li>Increase resolution in scanner settings</li>
                <li>Ensure documents are placed flat on the scanner</li>
              </ul>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Network scanner connection issues</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Verify scanner and computer are on same network</li>
                <li>Check firewall settings for scanner software</li>
                <li>Reinstall network scanning software</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Support CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need Personalized Help?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our scanner experts can help you troubleshoot any setup issues remotely
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition duration-200"
              >
                Chat with Support
              </a>
              <a
                href="tel:18005551234"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-6 rounded-lg transition duration-200"
              >
                Call: 1-800-555-1234
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Scanner Setup Guide. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}