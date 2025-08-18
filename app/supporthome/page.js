'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { 
  FiSearch, 
  FiHelpCircle, 
  FiPhone, 
  FiMail, 
  FiMessageSquare, 
  FiClock, 
  FiCheckCircle,
  FiAlertTriangle,
  FiDownload,
  FiUsers,
  FiBookOpen,
  FiVideo,
  FiFileText,
  FiSettings,
  FiCreditCard,
  FiTool,
  FiDatabase,
  FiShield,
  FiPlay
} from 'react-icons/fi';

export default function SupportHome() {
  const [activeTab, setActiveTab] = useState('help');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Support categories data
  const supportCategories = [
    {
      icon: <FiHelpCircle className="w-6 h-6" />,
      title: "Getting Started",
      description: "New user guides and setup",
      count: "12 Articles"
    },
    {
      icon: <FiSettings className="w-6 h-6" />,
      title: "Account Settings",
      description: "Profile and security",
      count: "8 Articles"
    },
    {
      icon: <FiCreditCard className="w-6 h-6" />,
      title: "Billing & Payments",
      description: "Subscriptions and invoices",
      count: "15 Articles"
    },
    {
      icon: <FiTool className="w-6 h-6" />,
      title: "Troubleshooting",
      description: "Fix common issues",
      count: "22 Articles"
    },
    {
      icon: <FiDatabase className="w-6 h-6" />,
      title: "API & Developers",
      description: "Integration guides",
      count: "18 Articles"
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Security",
      description: "Privacy and protection",
      count: "9 Articles"
    }
  ];

  // Popular resources
  const popularResources = [
    {
      icon: <FiFileText className="w-5 h-5 text-blue-500" />,
      title: "User Manual v3.2",
      type: "PDF",
      size: "4.2MB"
    },
    {
      icon: <FiVideo className="w-5 h-5 text-purple-500" />,
      title: "Getting Started Video",
      type: "MP4",
      size: "15MB"
    },
    {
      icon: <FiDownload className="w-5 h-5 text-green-500" />,
      title: "Mobile App Setup",
      type: "ZIP",
      size: "28MB"
    }
  ];

  // Support options
  const supportOptions = [
    {
      icon: <FiMessageSquare className="w-8 h-8" />,
      title: "Live Chat",
      description: "Instant messaging with our team",
      status: "Online now",
      statusColor: "text-green-500",
      action: "Start Chat"
    },
    {
      icon: <FiPhone className="w-8 h-8" />,
      title: "Phone Support",
      description: "Speak directly with an expert",
      status: "24/7 Availability",
      statusColor: "text-green-500",
      action: "Call Now"
    },
    {
      icon: <FiMail className="w-8 h-8" />,
      title: "Email Support",
      description: "Detailed help with attachments",
      status: "4hr avg response",
      statusColor: "text-yellow-500",
      action: "Send Email"
    }
  ];

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      <Head>
        <title>Support Center | Help & Resources</title>
        <meta name="description" content="Get help with our products, contact support, and find solutions" />
      </Head>

      {/* Hero Section with Search */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to our Support Center</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Find answers, guides, and expert help for all your questions
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative shadow-lg">
              <input
                type="text"
                placeholder="How can we help you today? Search articles, guides..."
                className="w-full py-4 px-6 pr-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">
                <FiSearch className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Popular Searches */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm">How to reset password</span>
            <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm">Update payment method</span>
            <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm">Two-factor authentication</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Knowledge Base Categories */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Browse Help Categories</h2>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View all categories →</a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportCategories.map((category) => (
              <div key={category.title} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex items-start border border-gray-100">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{category.title}</h3>
                  <p className="text-gray-600 mb-2">{category.description}</p>
                  <span className="text-sm text-gray-500">{category.count}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support Options */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Contact Our Support Team</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {supportOptions.map((option) => (
              <div key={option.title} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-transform transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                      {option.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{option.title}</h3>
                      <p className={`text-sm ${option.statusColor} flex items-center`}>
                        <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
                        {option.status}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition">
                    {option.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Resources */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Popular Resources</h2>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View all resources →</a>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resource</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                  <th scope="col" className="relative px-6 py-3"><span className="sr-only">Download</span></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {popularResources.map((resource) => (
                  <tr key={resource.title} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          {resource.icon}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{resource.title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{resource.type}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{resource.size}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-blue-600 hover:text-blue-900">Download</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Video Tutorials */}
        {/* <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Video Tutorials</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {['Getting Started', 'Advanced Features', 'Troubleshooting'].map((title) => (
              <div key={title} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                <div className="bg-gray-200 h-40 flex items-center justify-center text-gray-500">
                  [Video Thumbnail]
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{title} with Our Platform</h3>
                  <p className="text-gray-600 text-sm mb-4">5 min • Beginner Guide</p>
                  <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    <FiPlay className="mr-2" /> Watch Tutorial
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Emergency Support */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <FiAlertTriangle className="h-5 w-5 text-red-500" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-bold text-red-800">Emergency Support</h3>
              <div className="mt-2 text-red-700">
                <p>
                  For critical system outages or security issues, call our 24/7 emergency line at{' '}
                  <span className="font-bold">1-800-911-SUPPORT</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <section className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
          <div className="text-center">
            <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center text-blue-600 mb-4">
              <FiUsers className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Join Our Community</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Connect with other users, ask questions, and share solutions in our active community forum
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition">
                Visit Community
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-6 rounded-lg border border-gray-300 transition">
                View Events
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">System Status</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Submit a Ticket</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">API Reference</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Video Tutorials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Community</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Security</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">GDPR</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
}