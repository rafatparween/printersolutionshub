"use client";
import { FaShieldAlt, FaChartLine, FaNetworkWired, FaTools, FaQuestionCircle, FaHeadset, FaCog, FaFileInvoice, FaLaptopHouse } from 'react-icons/fa';
import { MdOutlineSettings, MdOutlineSecurity, MdOutlinePrint, MdOutlineSupportAgent } from 'react-icons/md';
import { RiPrinterCloudLine, RiTeamLine } from 'react-icons/ri';
import { HiOutlineLightningBolt, HiOutlineOfficeBuilding } from 'react-icons/hi';

export default function BusinessPrinterSupport() {
  const features = [
    {
      icon: <HiOutlineLightningBolt className="text-blue-600 text-2xl" />,
      title: "Minimal Downtime",
      description: "Quick response to keep your business running smoothly"
    },
    {
      icon: <FaChartLine className="text-blue-600 text-2xl" />,
      title: "Cost Optimization",
      description: "Reduce printing expenses without sacrificing quality"
    },
    {
      icon: <MdOutlineSecurity className="text-blue-600 text-2xl" />,
      title: "Secure Printing",
      description: "Protect sensitive business documents"
    },
    {
      icon: <RiPrinterCloudLine className="text-blue-600 text-2xl" />,
      title: "Cloud Integration",
      description: "Seamless connection with your business systems"
    }
  ];

  const troubleshootingItems = [
    {
      problem: "Printer Not Responding on Network",
      solutions: [
        "Ping the printer's IP address from a computer",
        "Restart the printer and router",
        "Reassign static IP if it has changed"
      ]
    },
    {
      problem: "Slow Printing",
      solutions: [
        "Reduce print resolution for non-essential documents",
        "Upgrade printer memory if available",
        "Check for firmware updates"
      ]
    },
    {
      problem: "Paper Jams in High-Volume Printing",
      solutions: [
        "Use recommended paper weight and quality",
        "Keep paper stored in a dry, cool place",
        "Regularly clean dust from the paper path"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-6 py-2 bg-blue-100 rounded-full mb-4">
            <HiOutlineOfficeBuilding className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-600 font-medium">Business Solutions</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            <span className="text-blue-600">Business Support</span> – We've Got You Covered
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive solutions to keep your office printing smooth, cost-effective, and reliable — from setup to advanced troubleshooting.
          </p>
        </div>

        {/* Features Section */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Businesses Need Dedicated Printer Support
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
            In a business, a slow or malfunctioning printer can disrupt workflow and cause costly delays. Our Business Support Services are designed to:
          </p>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guide Section */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden mb-16">
          <div className="bg-blue-600 px-6 py-4">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <RiTeamLine className="mr-2" />
              Step-by-Step Business Printer Support Guide
            </h2>
          </div>
          <div className="p-8">
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    1
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <MdOutlineSettings className="text-blue-500 mr-2" />
                    Initial Setup & Configuration
                  </h3>
                  <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li>Choose the right printer for your business workload (mono, color, multifunction).</li>
                    <li>Connect via Ethernet or secured Wi-Fi for stable performance.</li>
                    <li>Install the latest drivers and manufacturer software on all office computers.</li>
                    <li>Configure default print settings (paper size, duplex, color mode) to match company needs.</li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    2
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaNetworkWired className="text-blue-500 mr-2" />
                    Network Printing Setup
                  </h3>
                  <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li>Assign a static IP address to your printer to avoid connection drops.</li>
                    <li>Enable shared printing so all employees can access the device.</li>
                    <li>For large offices, integrate with a print server for better management.</li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    3
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaShieldAlt className="text-blue-500 mr-2" />
                    Secure Printing
                  </h3>
                  <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li>Enable PIN-protected printing so sensitive documents don't sit unattended.</li>
                    <li>Use encrypted connections (SSL/TLS) between printer and computers.</li>
                    <li>Regularly update printer firmware to patch security vulnerabilities.</li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    4
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaTools className="text-blue-500 mr-2" />
                    Scheduled Maintenance
                  </h3>
                  <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li>Clean the printer exterior and paper feed rollers monthly.</li>
                    <li>Run printhead cleaning cycles to prevent ink clogs.</li>
                    <li>Replace worn-out rollers, trays, or cartridges before they fail.</li>
                    <li>Keep spare ink/toner and essential parts on-site.</li>
                  </ul>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    5
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaFileInvoice className="text-blue-500 mr-2" />
                    Cost Management
                  </h3>
                  <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li>Use draft mode for internal documents to save ink.</li>
                    <li>Print in black & white unless color is necessary.</li>
                    <li>Track printing with usage reports to identify waste.</li>
                    <li>Consider high-capacity cartridges for lower cost per page.</li>
                  </ul>
                </div>
              </div>

              {/* Step 6 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    6
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <MdOutlinePrint className="text-blue-500 mr-2" />
                    Troubleshooting Common Business Printer Issues
                  </h3>
                  <div className="space-y-6">
                    {troubleshootingItems.map((item, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg text-gray-800 mb-2">{item.problem}</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {item.solutions.map((solution, i) => (
                            <li key={i}>{solution}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    7
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaLaptopHouse className="text-blue-500 mr-2" />
                    Integration with Business Systems
                  </h3>
                  <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li>Connect printers to document management systems.</li>
                    <li>Enable scan-to-email or scan-to-cloud features.</li>
                    <li>For retail or manufacturing, integrate with POS and label printing systems.</li>
                  </ul>
                </div>
              </div>

              {/* Step 8 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    8
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <MdOutlineSupportAgent className="text-blue-500 mr-2" />
                    Remote & On-Site Support
                  </h3>
                  <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li>Our experts can log in remotely to fix software or driver issues.</li>
                    <li>For hardware issues, schedule on-site visits to minimize downtime.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
            <FaQuestionCircle className="text-blue-500 mr-3" />
            Business Printing FAQs
          </h2>
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Can you manage multiple printers across different offices?</h3>
              <p className="text-gray-700">Yes, our remote monitoring tools allow us to manage and troubleshoot multiple devices from a central location.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Do you provide service contracts for businesses?</h3>
              <p className="text-gray-700">Yes, we offer monthly and yearly maintenance contracts for guaranteed uptime with SLAs tailored to your business needs.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Can you help us upgrade our current printer setup?</h3>
              <p className="text-gray-700">Absolutely — we assess your current needs, analyze usage patterns, and suggest better hardware/software solutions to optimize your workflow.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What industries do you specialize in?</h3>
              <p className="text-gray-700">We support all industries including legal, healthcare, education, finance, and retail with specialized printing solutions for each sector.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <FaHeadset className="mr-3" />
            Still Need Business Printing Assistance?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our Business Support Team specializes in keeping your office running efficiently with minimal downtime.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:1-800-BIZ-PRINT"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl bg-white text-blue-600 hover:bg-gray-100 transition-colors"
            >
              📞 Call Business Support: 1-800-BIZ-PRINT
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-lg font-bold rounded-xl text-white hover:bg-blue-700 transition-colors"
            >
              💬 Get Priority Assistance Now
            </a>
          </div>
          <p className="mt-6 text-blue-200 font-medium">Remote & On-Site Support Available</p>
        </div>

        {/* Additional Services Section */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Additional Business Services
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <FaCog className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Managed Print Services</h3>
              <p className="text-gray-700">Comprehensive print management including supplies, maintenance, and cost tracking with predictable monthly billing.</p>
            </div>
            <div className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <MdOutlineSecurity className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Secure Document Solutions</h3>
              <p className="text-gray-700">Implement secure printing workflows, document tracking, and compliance solutions for sensitive business data.</p>
            </div>
            <div className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <RiPrinterCloudLine className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Cloud Printing Setup</h3>
              <p className="text-gray-700">Enable printing from any device, anywhere with secure cloud printing solutions for hybrid work environments.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}