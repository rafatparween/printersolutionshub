// // import Image from 'next/image';
// // import { motion } from 'framer-motion';


// // export default function BlogDigonode() {
// //   const items = [
// //     { 
// //       name: "Printer Setup", 
// //       icon: "https://cdn-icons-png.freepik.com/512/8625/8625321.png",
// //       description: "Step-by-step installation guides for all printer models"
// //     },
// //     { 
// //       name: "Printer Offline", 
// //       icon: "https://static.vecteezy.com/system/resources/previews/024/198/139/non_2x/printer-icon-in-blue-color-vector.jpg",
// //       description: "Troubleshoot and restore printer connectivity"
// //     },
// //     { 
// //       name: "Wireless Printing", 
// //       icon: "https://cdn-icons-png.freepik.com/512/6864/6864708.png",
// //       description: "Configure WiFi and network printing solutions"
// //     },
// //     { 
// //       name: "Ink Issues", 
// //       icon: "https://www.shareicon.net/data/2015/05/04/33421_printer_256x256.png",
// //       description: "Fix cartridge recognition and print quality problems"
// //     },
// //     { 
// //       name: "Scanner Setup", 
// //       icon: "https://t3.ftcdn.net/jpg/04/81/66/56/360_F_481665663_aij2vpvwMjSS1LltlvcgmjzsOYSuHgbe.jpg",
// //       description: "Install and configure scanning functionality"
// //     },
// //     { 
// //       name: "Fax Solutions", 
// //       icon: "https://pngimg.com/d/printer_PNG101582.png",
// //       description: "Resolve fax transmission and reception issues"
// //     },
// //     { 
// //       name: "Driver Downloads", 
// //       icon: "/download.png",
// //       description: "Latest drivers for all printer models"
// //     },
// //     { 
// //       name: "Expert Support", 
// //       icon: "/call.png",
// //       description: "24/7 assistance from printer technicians"
// //     },
// //   ];

// //   return (
// //     <div className="bg-gradient-to-b from-gray-50 to-white py-16 w-full">
// //       {/* Section Header */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
// //         <motion.h2 
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           viewport={{ once: true }}
// //           className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
// //         >
// //           Printer Support Solutions
// //         </motion.h2>
// //         <motion.p
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, delay: 0.1 }}
// //           viewport={{ once: true }}
// //           className="text-lg text-gray-600 max-w-3xl mx-auto"
// //         >
// //           Quick access to all printer troubleshooting guides and support resources
// //         </motion.p>
// //       </div>

// //       {/* Grid Container */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
// //           {items.map((item, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: index * 0.1 }}
// //               viewport={{ once: true, margin: "-50px" }}
// //               whileHover={{ y: -8 }}
// //               className="group"
// //             >
// //               <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full transition-all duration-300 group-hover:shadow-2xl border border-gray-100">
// //                 {/* Icon Container */}
// //                 <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-40 flex items-center justify-center">
// //                   <div className="relative w-20 h-20">
// //                     <Image
// //                       src={item.icon}
// //                       alt={item.name}
// //                       fill
// //                       height={80}
// //                       width={80}
// //                       className="object-contain filter drop-shadow-lg"
// //                       quality={100}
// //                     />
// //                   </div>
// //                 </div>
                
// //                 {/* Content */}
// //                 <div className="p-6">
// //                   <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
// //                     {item.name}
// //                   </h3>
// //                   <p className="text-gray-600 mb-4">
// //                     {item.description}
// //                   </p>
// //                   <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
// //                     <span>Get Help</span>
// //                     <svg 
// //                       className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
// //                       fill="none" 
// //                       stroke="currentColor" 
// //                       viewBox="0 0 24 24"
// //                     >
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
// //                     </svg>
// //                   </div>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* CTA Section */}
// //       <motion.div
// //         initial={{ opacity: 0 }}
// //         whileInView={{ opacity: 1 }}
// //         transition={{ duration: 0.6, delay: 0.4 }}
// //         viewport={{ once: true }}
// //         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
// //       >
// //         <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-10 text-center text-white shadow-xl">
// //           <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Immediate Assistance?</h3>
// //           <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
// //             Our printer experts are available 24/7 to help resolve your issues quickly.
// //           </p>
// //           <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg">
// //             Chat with Support Now
// //           </button>
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // }




// import { motion } from 'framer-motion';
// import Image from 'next/image';

// // Local image imports (place these in your public folder)
// const printerIcon = '/icons/printer-main.png';
// const serviceIcons = [
//   '/icons/setup.png',
//   '/icons/offline.png',
//   '/icons/wireless.png',
//   '/icons/ink.png',
//   '/icons/scan.png',
//   '/icons/driver.png',
//   '/icons/fax.png',
//   '/icons/support.png'
// ];

// const BlogDignode = () => {
//   const printerServices = [
//     {
//       title: "Instant Setup Wizard",
//       icon: serviceIcons[0],
//       description: "Step-by-step guidance for new printer installation",
//       color: "from-blue-500 to-blue-600"
//     },
//     {
//       title: "Offline Recovery",
//       icon: serviceIcons[1],
//       description: "Fix connection issues in minutes",
//       color: "from-purple-500 to-purple-600"
//     },
//     {
//       title: "Wireless Connect",
//       icon: serviceIcons[2],
//       description: "WiFi & network troubleshooting",
//       color: "from-green-500 to-green-600"
//     },
//     {
//       title: "Ink Solutions",
//       icon: serviceIcons[3],
//       description: "Cartridge errors & print quality fixes",
//       color: "from-amber-500 to-amber-600"
//     },
//     {
//       title: "Scanning Pro",
//       icon: serviceIcons[4],
//       description: "Document feeder & software setup",
//       color: "from-red-500 to-red-600"
//     },
//     {
//       title: "Driver Doctor",
//       icon: serviceIcons[5],
//       description: "Automatic driver updates",
//       color: "from-indigo-500 to-indigo-600"
//     },
//     {
//       title: "Fax Specialist",
//       icon: serviceIcons[6],
//       description: "Transmission & reception fixes",
//       color: "from-pink-500 to-pink-600"
//     },
//     {
//       title: "24/7 Support",
//       icon: serviceIcons[7],
//       description: "Live expert assistance",
//       color: "from-cyan-500 to-cyan-600"
//     }
//   ];

//   return (
//     <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center justify-center mb-4">
//             <Image 
//               src={printerIcon}
//               alt="Printer Icon"
//               width={60}
//               height={60}
//               className="mr-3"
//               priority
//             />
//             <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
//               Printer Support Hub
//             </h2>
//           </div>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Comprehensive solutions for all your printing challenges
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {printerServices.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -10 }}
//               className="group"
//             >
//               <div className={`bg-gradient-to-br ${service.color} rounded-2xl overflow-hidden shadow-xl h-full transition-all duration-300 group-hover:shadow-2xl`}>
//                 <div className="p-6 flex flex-col items-center text-center h-full">
//                   <div className="bg-white/20 p-4 rounded-full mb-6 backdrop-blur-sm">
//                     <Image 
//                       src={service.icon}
//                       alt={service.title}
//                       width={48}
//                       height={48}
//                       className="filter drop-shadow-md"
//                       priority={index < 4} // Prioritize first 4 icons
//                     />
//                   </div>
//                   <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
//                   <p className="text-white/90 mb-6 flex-grow">{service.description}</p>
//                   <button className="bg-white text-gray-800 font-medium px-6 py-2 rounded-full hover:bg-gray-100 transition-colors flex items-center">
//                     Get Help
//                     <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden"
//         >
//           <div className="md:flex">
//             <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-cyan-500 p-8 flex items-center justify-center">
//               <Image
//                 src={serviceIcons[7]} // Using support icon
//                 alt="Support Icon"
//                 width={120}
//                 height={120}
//                 className="opacity-90"
//                 priority
//               />
//             </div>
//             <div className="md:w-2/3 p-8 md:p-12">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Can't Find Your Solution?</h3>
//               <p className="text-gray-600 mb-6">
//                 Our certified printer technicians are standing by to provide personalized assistance for any issue.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">
//                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
//                   </svg>
//                   Call Support
//                 </button>
//                 <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center">
//                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
//                   </svg>
//                   Live Chat
//                 </button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default BlogDignode;



import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState,useEffect } from 'react';

const BlogDigonode = () => {
  // Printer service data
  const services = [
    {
      title: "Setup Guide",
      icon: "/set2.png",
      description: "Step-by-step installation for all printer models",
      border: "border-blue-400/30"
    },
    {
      title: "Offline Fix",
      icon: "/set4.png",
      description: "Restore connection in minutes",
      border: "border-blue-500/30"
    },
    {
      title: "Wireless Setup",
      icon: "/set5.png",
      description: "Configure WiFi & network printing",
      border: "border-cyan-400/30"
    },
    {
      title: "Ink Solutions",
      icon: "/set4.png",
      description: "Fix cartridge & print quality issues",
      border: "border-blue-400/30"
    },
    {
      title: "Scanning Help",
      icon: "/set6.png",
      description: "Document feeder & software setup",
      border: "border-cyan-500/30"
    },
    {
      title: "Driver Support",
      icon: "/set7.png",
      description: "Download & update printer drivers",
      border: "border-blue-500/30"
    },
    {
      title: "Fax Support",
      icon: "/set3.png",
      description: "Transmission & reception solutions",
      border: "border-cyan-400/30"
    },
    {
      title: "24/7 Support",
      icon: "/set5.png",
      description: "Live expert printer assistance",
      border: "border-blue-400/30"
    }
  ];


  
      const [jivoReady, setJivoReady] = useState(false);
  
    useEffect(() => {
      if (typeof window === "undefined") return;
  
      // Prevent adding the script multiple times
      if (!document.getElementById("jivo-script")) {
        const script = document.createElement("script");
        script.src = "//code.jivosite.com/widget/kd9uAKn19v";
        script.async = true;
        script.id = "jivo-script";
  
        script.onload = () => {
          const waitForJivo = setInterval(() => {
            if (typeof window !== "undefined" && window.jivo_api) {
              setJivoReady(true);
              clearInterval(waitForJivo);
            }
          }, 500);
        };
  
        document.body.appendChild(script);
      } else {
        // If script already exists, check if jivo_api is ready
        if (window.jivo_api) {
          setJivoReady(true);
        } else {
          const waitForJivo = setInterval(() => {
            if (window.jivo_api) {
              setJivoReady(true);
              clearInterval(waitForJivo);
            }
          }, 500);
        }
      }
  
      // Do not remove the script on unmount to avoid reloading the widget
      return () => {};
    }, []);
  
    const handleSetupClick = () => {
      if (typeof window !== "undefined" && jivoReady && window.jivo_api) {
        window.jivo_api.open();
      } else {
        alert("Chat is still loading. Please wait a moment...");
      }
    };
  

  return (
    <div className="bg-gray-950 min-h-screen py-20 px-4">
      {/* Glow Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-cyan-400/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-6">
            {/* <div className="relative w-16 h-16 mr-4">
              <Image 
                src="/icons/printer-main.png" 
                alt="Printer Icon"
                fill
                className="object-contain"
              />
            </div> */}
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              123printersolutionshub
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Premium support for all your printing needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 h-full border ${service.border} hover:border-cyan-300/50 transition-all duration-300 shadow-lg hover:shadow-blue-400/10`}>
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-5 p-3 bg-gradient-to-br from-blue-900/30 to-gray-900 rounded-full">
                    <div className="relative w-12 h-12">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-5 flex-grow">{service.description}</p>
                  <button className="mt-auto bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity flex items-center"
                   onClick={handleSetupClick}
        disabled={!jivoReady}>
                    Get Help
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-900/40 to-cyan-900/30 rounded-2xl p-8 md:p-10 border border-cyan-400/20 relative overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-400/10 rounded-full filter blur-[80px]"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Expert Printer Help?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our certified printer technicians provide 24/7 support for all major brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Call Now: 808-468-1018
              </button>
              <button className="bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold px-8 py-3 rounded-lg hover:bg-cyan-400/10 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                Live Chat Support
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDigonode;