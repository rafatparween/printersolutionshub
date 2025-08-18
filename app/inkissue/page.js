import { FaPowerOff, FaSync, FaTint, FaTools, FaQuestionCircle, FaHeadset } from 'react-icons/fa';
import { MdPrint, MdWarning, MdSettings, MdMemory } from 'react-icons/md';
import { RiInkBottleFill } from 'react-icons/ri';

export default function InkCartridgeGuide() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            <span className="text-blue-600">Ink Cartridges Issue?</span> Let's Fix It!
          </h1>
          <p className="text-xl text-gray-600">
            A complete guide to troubleshoot and resolve ink cartridge issues — from installation errors to low-ink warnings — with easy step-by-step solutions.
          </p>
        </div>

        {/* Common Problems Section */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <MdWarning className="text-yellow-500 mr-2" />
            Common Ink Cartridge Problems
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Cartridge not recognized",
              "Low or empty ink warning (even if new)",
              "Poor print quality (streaks, faded prints, wrong colors)",
              "Ink not flowing properly after replacement",
              "Cartridge stuck or jammed in printer"
            ].map((problem, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-blue-500 mt-0.5">•</div>
                <p className="ml-2 text-gray-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaTools className="text-blue-500 mr-2" />
            Fixing Ink Cartridge Issues
          </h2>
          
          <div className="space-y-8">
            {/* Solution 1 */}
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/4 mb-4 sm:mb-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                  <RiInkBottleFill className="h-6 w-6" />
                </div>
              </div>
              <div className="sm:w-3/4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">1. Check Compatibility</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Make sure the ink cartridge is compatible with your printer model (HP, Canon, Epson, Brother, etc.).</li>
                  <li>Check the cartridge number printed on the box or label against your printer manual.</li>
                  <li>If you're using third-party cartridges, ensure they are approved for your model.</li>
                </ul>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/4 mb-4 sm:mb-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                  <FaPowerOff className="h-6 w-6" />
                </div>
              </div>
              <div className="sm:w-3/4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">2. Power Cycle the Printer</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Turn off the printer and unplug it from the power source.</li>
                  <li>Wait 60 seconds to reset the internal memory.</li>
                  <li>Plug it back in and turn it on — sometimes this clears "cartridge not recognized" errors.</li>
                </ul>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/4 mb-4 sm:mb-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                  <FaSync className="h-6 w-6" />
                </div>
              </div>
              <div className="sm:w-3/4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">3. Remove and Reinsert Cartridges</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Open the printer's cartridge access door.</li>
                  <li>Wait until the carriage stops moving.</li>
                  <li>Remove the problematic cartridge carefully — don't touch the copper/gold contact points.</li>
                  <li>Reinsert it firmly until you hear a click.</li>
                </ul>
              </div>
            </div>

            {/* Solution 4 */}
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/4 mb-4 sm:mb-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                  <MdPrint className="h-6 w-6" />
                </div>
              </div>
              <div className="sm:w-3/4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">4. Clean Cartridge Contacts</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Use a lint-free cloth or cotton swab slightly dampened with distilled water.</li>
                  <li>Gently wipe the electrical contacts on both the cartridge and inside the printer.</li>
                  <li>Allow them to dry completely before reinserting.</li>
                </ul>
              </div>
            </div>

            {/* Solution 5 */}
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/4 mb-4 sm:mb-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                  <MdSettings className="h-6 w-6" />
                </div>
              </div>
              <div className="sm:w-3/4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">5. Align & Calibrate Printer</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Open your printer software on your computer.</li>
                  <li>Find "Maintenance" or "Tools" option.</li>
                  <li>Select Align Print Head or Calibrate Printer — this ensures accurate ink flow and color balance.</li>
                </ul>
              </div>
            </div>

            {/* Solution 6 */}
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/4 mb-4 sm:mb-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                  <FaTint className="h-6 w-6" />
                </div>
              </div>
              <div className="sm:w-3/4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">6. Run a Printhead Cleaning Cycle</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Go to printer settings &gt; Maintenance &gt; Clean Printhead.</li>
                  <li>This clears dried ink or blockages in the nozzles.</li>
                  <li>You may need to repeat this 2–3 times for best results.</li>
                </ul>
              </div>
            </div>

            {/* Solution 7 */}
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/4 mb-4 sm:mb-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                  <MdMemory className="h-6 w-6" />
                </div>
              </div>
              <div className="sm:w-3/4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">7. Check Ink Levels</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>From your printer's control panel or software, check ink levels.</li>
                  <li>If low, replace with a fresh cartridge.</li>
                  <li>Shake the cartridge gently before inserting (only if manufacturer allows).</li>
                </ul>
              </div>
            </div>

            {/* Solution 8 */}
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/4 mb-4 sm:mb-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                  <FaSync className="h-6 w-6" />
                </div>
              </div>
              <div className="sm:w-3/4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">8. Reset the Printer's Ink System</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>For some printers, pressing and holding the Resume/Cancel button for 5–10 seconds resets ink detection.</li>
                  <li>Refer to your printer manual for the correct reset method.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaQuestionCircle className="text-blue-500 mr-2" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "Why does my printer say 'Ink Cartridge Not Recognized' even after installing a new one?",
                answer: "This can be due to dirty contacts, firmware issues, or using an incompatible cartridge. Try cleaning and reinserting."
              },
              {
                question: "How can I make my ink cartridges last longer?",
                answer: "Print regularly, use draft mode for everyday prints, and store cartridges in a cool, dry place."
              },
              {
                question: "Why is my printer printing blank pages even with full ink?",
                answer: "The printhead may be clogged — run a cleaning cycle or manually clean the nozzles."
              },
              {
                question: "Can I use refilled or third-party cartridges?",
                answer: "Yes, but quality varies. Some printers may block them with firmware updates."
              }
            ].map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <p className="mt-1 text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center">
            <FaHeadset className="text-blue-600 mr-2" />
            Still Having Ink Cartridge Problems?
          </h2>
          <p className="text-gray-700 mb-6">
            Our expert technicians can help diagnose and fix your cartridge issues — from stubborn error messages to poor print quality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:1-800-INK-HELP"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              📞 Call Support: 1-800-INK-HELP
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
            >
              💬 Get Expert Help Now
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-600">Remote troubleshooting available</p>
        </div>
      </div>
    </div>
  );
}