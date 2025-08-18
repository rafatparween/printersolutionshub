"use client"
import { usePathname } from 'next/navigation';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useLayoutEffect, useRef,useEffect,useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import BlogHeader from './BlogHeader';
import BlogDigonode from './BlogDignode';
import BlogFooter from './BlogFooter';
import JivoChat from '../JivoChat';

gsap.registerPlugin(ScrollTrigger);

export default function BlogPage() {
const sectionRefs = useRef([]);
  const pathname = usePathname();

  useEffect(() => {
    // Kill all ScrollTriggers before re-init
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Animate sections
    gsap.utils.toArray(".animate-section").forEach((section, i) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
          markers: false,
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power2.out",
      });
    });

    // Animate blog cards
    gsap.utils.toArray(".blog-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
          markers: false,
        },
        opacity: 0,
        y: 100,
        duration: 0.8,
        delay: i * 0.1,
        ease: "back.out(1.2)",
      });
    });

    // Refresh ScrollTrigger after mounting
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);


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
    <>
       <Head>
        <title>Hewlett Hub Blog | s123printersolutionshub</title>
        <meta
          name="description"
          content="Expert insights on printers, maintenance, and printing technology from 123printersolutionshub."
        />
      </Head>

      <div className="bg-gray-950 text-white overflow-x-hidden">
        <BlogHeader />
    

        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden pt-20 will-change-transform will-change-opacity">
          {/* Animated background lines */}
          <svg
            className="background-lines absolute inset-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <line
                key={i}
                x1={i * 5 + "%"}
                y1="100%"
                x2={i * 5 + "%"}
                y2="100%"
                stroke="url(#lineGradient)"
                strokeWidth="1"
              />
            ))}
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              key={pathname}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
               123printersolutionshub
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              key={pathname + "subtitle"}
            >
              Expert insights on printing technology and solutions
            </motion.p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-950 to-transparent"></div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16 -mt-16 relative z-10">
          {/* Featured Post */}
          <section className="animate-section mb-16">
  <motion.div 
    className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400 transition-colors"
    whileHover={{ y: -5 }}
  >
    <div className="md:flex">
      <div className="md:w-1/2 bg-gray-800 h-64 md:h-auto flex items-center justify-center">
        <div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-gray-900 flex items-center justify-center">
          <Image 
            src="/blog4.jpg" 
            alt="Featured blog post about refurbished printers" 
            width={500} 
            height={300} 
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="md:w-1/2 p-8">
        <div className="flex items-center mb-4">
          {/* <span className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full">NEW</span> */}
          {/* <span className="text-gray-500 text-sm ml-4">June 15, 2023</span> */}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Diagnose the problem and resolve it effectively
        </h2>
        <h1 className="text-3xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
          Contact Support – Chat Live
        </h1>
        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
          Instant expert help for printer setup, connectivity, and performance issues.<br/><br/>
          
          • Printer installation and configuration<br/>
          • Network connectivity and wireless setup<br/>
          • Print quality issues and maintenance<br/><br/>
         
          
          Simply click to start a live chat with one of our experienced support agents available 24/7. You'll receive step-by-step guidance in real time, with screen sharing options available for complex issues.
        </p>
        <div className="flex flex-wrap gap-3 mb-2">
        </div>

        <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-medium flex items-center group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
        onClick={handleSetupClick}
        disabled={!jivoReady}>
        
          <span className="relative z-10">
            Click Here For Chat Support
            
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
          
        </button>
      </div>
    </div>
  </motion.div>
</section>


              <BlogDigonode/>

          {/* Blog Categories */}
          <section className="animate-section mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: 'All', count: 12 },
                { name: 'Buying Guides', count: 4 },
                { name: 'Maintenance', count: 3 },
                { name: 'Troubleshooting', count: 2 },
                { name: 'Industry News', count: 3 }
              ].map((category, i) => (
                <motion.button
                  key={i}
                  className={`py-3 px-4 rounded-lg border text-left ${i === 0 ? 'border-cyan-400 bg-cyan-400/10' : 'border-gray-700 hover:border-cyan-400'} transition-colors`}
                  whileHover={{ y: -2 }}
                >
                  <span className={`block ${i === 0 ? 'text-cyan-400' : 'text-gray-300'}`}>{category.name}</span>
                  <span className="text-xs text-gray-500">{category.count} articles</span>
                </motion.button>
              ))}
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="animate-section mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "How to Extend Your Printer's Lifespan",
                  excerpt: "Proven maintenance tips to keep your printer running like new for years to come.",
                  date: "June 8, 2023",
                  readTime: "5 min read",
                  tags: ['Maintenance', 'Tips'],
                  image: "/blog1.jpg"
                },
                {
                  title: "Inkjet vs Laser: Which is Right for You?",
                  excerpt: "We compare the two most popular printer technologies to help you make the best choice.",
                  date: "May 25, 2023",
                  readTime: "7 min read",
                  tags: ['Buying Guide', 'Comparison'],
                  image: "/blog2.jpg"
                },
                {
                  title: "The Environmental Benefits of Refurbished Printers",
                  excerpt: "How choosing refurbished can reduce e-waste and your carbon footprint.",
                  date: "May 12, 2023",
                  readTime: "4 min read",
                  tags: ['Sustainability', 'Eco-Friendly'],
                  image: "/blog3.jpg"
                },
                {
                  title: "Solving Common Printer Connectivity Issues",
                  excerpt: "Step-by-step solutions for WiFi and USB connection problems.",
                  date: "April 28, 2023",
                  readTime: "6 min read",
                  tags: ['Troubleshooting', 'How-To'],
                  image: "/blog5.jpg"
                },
                {
                  title: "Top 5 Printers for Small Businesses in 2023",
                  excerpt: "Our picks for the best refurbished printers for your growing business.",
                  date: "April 15, 2023",
                  readTime: "8 min read",
                  tags: ['Business', 'Recommendations'],
                  image: "/blog6.jpg"
                },
                {
                  title: "Understanding Printer Page Yields",
                  excerpt: "How to calculate your true printing costs based on ink/toner yields.",
                  date: "March 30, 2023",
                  readTime: "5 min read",
                  tags: ['Buying Guide', 'Cost Analysis'],
                  image: "/blog7.jpg"
                }
              ].map((post, i) => (
                <motion.div 
                  key={i}
                  className="blog-card bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <div className="h-48 bg-gray-800 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        width={500} 
                        height={300} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, j) => (
                        <span key={j} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-cyan-400 text-sm font-medium flex items-center group">
                      Read More
                      <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="animate-section bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 md:p-12 border border-gray-700">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest printer tips, deals, and industry news.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <motion.button
                  className="bg-cyan-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </section>
        </div>
      </div>
      <BlogFooter/>
      <JivoChat/>
    </>
  );
}




