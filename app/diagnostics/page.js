"use client"
import { FaPowerOff, FaWifi, FaPrint, FaTint, FaTools, FaQuestionCircle, FaHeadset, FaSyncAlt, FaDownload, FaCog } from 'react-icons/fa';
import { MdOutlineSettings, MdOutlineMemory, MdOutlineDevices, MdOutlineFactory } from 'react-icons/md';
import { RiHealthBookLine } from 'react-icons/ri';

export default function PrinterDiagnosticsGuide() {
  const manufacturers = [
    { name: "HP", tool: "HP Print and Scan Doctor" },
    { name: "Canon", tool: "Canon IJ Printer Assistant Tool" },
    { name: "Epson", tool: "Epson Printer Utility" },
    { name: "Brother", tool: "Brother Printer Diagnostic Tool" },
    { name: "Lexmark", tool: "Lexmark Printer Diagnostics" },
    { name: "Xerox", tool: "Xerox Print Diagnostics" }
  ];

  const benefits = [
    { icon: <RiHealthBookLine className="text-blue-500" />, text: "Detect hardware or software issues early" },
    { icon: <FaPrint className="text-blue-500" />, text: "Improve print quality and speed" },
    { icon: <FaWifi className="text-blue-500" />, text: "Fix connectivity problems" },
    { icon: <MdOutlineMemory className="text-blue-500" />, text: "Extend printer lifespan" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-6 py-2 bg-blue-100 rounded-full mb-4">
            <RiHealthBookLine className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-600 font-medium">Printer Maintenance</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            <span className="text-blue-600">Printer Diagnostics</span> Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A complete guide to help you run tests, identify issues, and restore your printer's performance — from connection checks to print quality tests.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Run Printer Diagnostics?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mx-auto mb-4">
                  {benefit.icon}
                </div>
                <p className="text-lg font-medium text-gray-800">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Steps Section */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden mb-12">
          <div className="bg-blue-600 px-6 py-4">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <FaTools className="mr-2" />
              Step-by-Step Printer Diagnostics Guide
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-10">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    1
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <FaPowerOff className="text-blue-500 mr-2" />
                    Check Power & Basic Setup
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Make sure the printer is plugged in securely and switched ON.</li>
                    <li>Check the display panel for any error messages or blinking lights.</li>
                    <li>If nothing happens, try a different power outlet.</li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    2
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <FaWifi className="text-blue-500 mr-2" />
                    Verify Printer Connections
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>USB Connection:</strong> Ensure cable is firmly connected to both printer and computer.</li>
                    <li><strong>Wi-Fi Connection:</strong> Check your printer's wireless icon — it should be steady, not blinking.</li>
                    <li>Reconnect to the network if disconnected.</li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    3
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <FaPrint className="text-blue-500 mr-2" />
                    Run Built-in Printer Self-Test
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Most printers have a self-test or demo page option.</li>
                    <li>On the printer's control panel, go to Settings &gt; Reports &gt; Print Test Page.</li>
                    <li>If the page prints fine, your hardware is okay — the issue may be software-related.</li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    4
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <FaTint className="text-blue-500 mr-2" />
                    Check Ink or Toner Levels
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>On the printer's display or computer software, view ink/toner status.</li>
                    <li>If low, replace cartridges or refill toner.</li>
                    <li>Sometimes, even half-full cartridges can cause print quality issues — try cleaning the printhead.</li>
                  </ul>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    5
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <RiHealthBookLine className="text-blue-500 mr-2" />
                    Print Quality Test
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Open printer software on your PC.</li>
                    <li>Select Tools &gt; Print Quality Diagnostics Page.</li>
                    <li>This page shows if colors are missing, faded, or misaligned.</li>
                    <li>Follow on-screen instructions to fix detected issues.</li>
                  </ul>
                </div>
              </div>

              {/* Step 6 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    6
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <FaTools className="text-blue-500 mr-2" />
                    Clean & Align Printhead
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Go to Maintenance &gt; Clean Printhead.</li>
                    <li>For alignment, choose Align Printer from the same menu.</li>
                    <li>This helps fix blurry text, faded prints, or wrong color output.</li>
                  </ul>
                </div>
              </div>

              {/* Step 7 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    7
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Check for Paper Feed Problems
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Remove all paper and check for dust, curled edges, or jams.</li>
                    <li>Fan the stack of paper before loading to prevent multiple sheets feeding at once.</li>
                    <li>Use recommended paper type and size.</li>
                  </ul>
                </div>
              </div>

              {/* Step 8 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    8
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <FaDownload className="text-blue-500 mr-2" />
                    Update Printer Drivers & Firmware
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Go to your printer manufacturer's website (HP, Canon, Epson, etc.).</li>
                    <li>Download the latest drivers and firmware for your model.</li>
                    <li>Outdated drivers can cause connection errors or poor print quality.</li>
                  </ul>
                </div>
              </div>

              {/* Step 9 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    9
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <MdOutlineSettings className="text-blue-500 mr-2" />
                    Check Printer Settings
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>On Windows:</strong> Control Panel &gt; Devices and Printers &gt; Your Printer &gt; Printer Preferences.</li>
                    <li><strong>On Mac:</strong> System Preferences &gt; Printers & Scanners.</li>
                    <li>Ensure paper size, quality, and color settings match your needs.</li>
                  </ul>
                </div>
              </div>

              {/* Step 10 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    10
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <FaCog className="text-blue-500 mr-2" />
                    Run Manufacturer's Diagnostic Tool
                  </h3>
                  <div className="bg-blue-50 rounded-lg p-4 mb-3">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {manufacturers.map((mfg, index) => (
                        <div key={index} className="bg-white p-3 rounded-md shadow-sm">
                          <p className="font-bold text-blue-600">{mfg.name}</p>
                          <p className="text-sm text-gray-600">{mfg.tool}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">These automatically detect and fix common printer problems.</p>
                </div>
              </div>

              {/* Step 11 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    11
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <MdOutlineDevices className="text-blue-500 mr-2" />
                    Test Printing from Another Device
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Connect the printer to another computer or smartphone.</li>
                    <li>If it works fine, the issue is with your original device — not the printer.</li>
                  </ul>
                </div>
              </div>

              {/* Step 12 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    12
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <MdOutlineFactory className="text-blue-500 mr-2" />
                    Reset Printer to Factory Settings
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>In Settings &gt; Restore Defaults (location may vary by model).</li>
                    <li>This clears old settings and fixes stubborn software errors.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
            <FaQuestionCircle className="text-blue-500 mr-3" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How often should I run printer diagnostics?</h3>
              <p className="text-gray-700">Once every 2–3 months or whenever print quality drops.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Will running diagnostics fix all problems?</h3>
              <p className="text-gray-700">It can fix most common issues, but hardware damage may still require repairs.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Do I need special tools for diagnostics?</h3>
              <p className="text-gray-700">No — most printers have built-in tools and software for this.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What if diagnostics don't solve my problem?</h3>
              <p className="text-gray-700">If diagnostics don't resolve your issue, it may indicate a more serious hardware problem that requires professional service.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <FaHeadset className="mr-3" />
            Still Having Printer Problems?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our experts can run advanced diagnostics remotely and guide you step-by-step through any printer issue.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:1-800-PRINT-DIAG"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl bg-white text-blue-600 hover:bg-gray-100 transition-colors"
            >
              📞 Call Support: 1-800-PRINT-DIAG
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-lg font-bold rounded-xl text-white hover:bg-blue-700 transition-colors"
            >
              💬 Get Expert Help Now
            </a>
          </div>
          <p className="mt-6 text-blue-200 font-medium">Quick remote assistance available 24/7</p>
        </div>

        {/* Additional Tips Section */}
        <div className="mt-12 bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Pro Maintenance Tips
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <FaSyncAlt className="text-blue-500 mr-2" />
                Regular Cleaning
              </h3>
              <p className="text-gray-700">Clean your printer monthly with a dry lint-free cloth to prevent dust buildup that can affect performance.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <FaTint className="text-blue-500 mr-2" />
                Ink Conservation
              </h3>
              <p className="text-gray-700">Use draft mode for everyday printing and print in grayscale when color isn't needed to extend ink life.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <FaPrint className="text-blue-500 mr-2" />
                Prevent Clogs
              </h3>
              <p className="text-gray-700">Print a test page weekly if you don't use your printer often to keep ink flowing and prevent nozzle clogs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}