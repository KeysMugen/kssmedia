"use client";
import React, { useState } from "react";
import { SiLinkedin, SiInstagram, SiYoutube, SiTiktok, SiX } from "react-icons/si";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiAngular, SiSpring, SiPhp, SiLaravel,
  SiSvelte, SiBootstrap, SiShopify, SiStripe, SiZenn, SiWix, SiWordpress,
  SiFigma, SiAdobecreativecloud, SiAdobepremierepro, SiAdobeaftereffects,
  SiDavinciresolve, SiBlender, SiMongodb, SiPostgresql, SiTailwindcss,
  SiGoogleads, SiFacebook, SiMailchimp, SiJirasoftware, SiGithubactions,
  SiGitlab, SiCircleci, SiPython, SiDjango, SiTensorflow, SiPytorch,
  SiFastapi, SiAmazon, SiTypescript, SiJenkins
} from "react-icons/si";
import { FiMenu, FiX } from "react-icons/fi";

const techStack = [
  { name: "React.js", icon: <SiReact className="text-blue-500 text-2xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black text-2xl" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600 text-2xl" /> },
  { name: "Angular", icon: <SiAngular className="text-red-600 text-2xl" /> },
  { name: "Spring Boot", icon: <SiSpring className="text-green-600 text-2xl" /> },
  { name: "PHP", icon: <SiPhp className="text-indigo-600 text-2xl" /> },
  { name: "Laravel", icon: <SiLaravel className="text-red-600 text-2xl" /> },
  { name: "Svelte", icon: <SiSvelte className="text-orange-500 text-2xl" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 text-2xl" /> },
  { name: "Shopify", icon: <SiShopify className="text-green-700 text-2xl" /> },
  { name: "Stripe", icon: <SiStripe className="text-indigo-500 text-2xl" /> },
  { name: "Zeplin", icon: <SiZenn className="text-yellow-500 text-2xl" /> },
  { name: "Wix", icon: <SiWix className="text-gray-600 text-2xl" /> },
  { name: "WordPress", icon: <SiWordpress className="text-gray-800 text-2xl" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500 text-2xl" /> },
  { name: "Amazon AWS", icon: <SiAmazon className="text-red-500 text-2xl" /> },
  { name: "Adobe Suite", icon: <SiAdobecreativecloud className="text-red-500 text-2xl" /> },
  { name: "Adobe Premiere Pro", icon: <SiAdobepremierepro className="text-indigo-600 text-2xl" /> },
  { name: "After Effects", icon: <SiAdobeaftereffects className="text-purple-500 text-2xl" /> },
  { name: "DaVinci Resolve", icon: <SiDavinciresolve className="text-sky-600 text-2xl" /> },
  { name: "Blender", icon: <SiBlender className="text-orange-400 text-2xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-2xl" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700 text-2xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },
  { name: "Google Ads", icon: <SiGoogleads className="text-yellow-500 text-2xl" /> },
  { name: "Facebook Ads", icon: <SiFacebook className="text-sky-600 text-2xl" /> },
  { name: "Mailchimp", icon: <SiMailchimp className="text-yellow-400 text-2xl" /> },
  { name: "Jira", icon: <SiJirasoftware className="text-blue-500 text-2xl" /> },
  { name: "GitHub Actions", icon: <SiGithubactions className="text-gray-900 text-2xl" /> },
  { name: "GitLab CI", icon: <SiGitlab className="text-orange-600 text-2xl" /> },
  { name: "CircleCI", icon: <SiCircleci className="text-black text-2xl" /> },
  { name: "Python", icon: <SiPython className="text-yellow-500 text-2xl" /> },
  { name: "Django", icon: <SiDjango className="text-green-700 text-2xl" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500 text-2xl" /> },
  { name: "PyTorch", icon: <SiPytorch className="text-red-500 text-2xl" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-green-600 text-2xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-2xl" /> },
  { name: "Social Media", icon: <span className="text-2xl">📱</span> },
  { name: "Highcharts", icon: <span className="text-2xl">📊</span> },
  { name: "Jenkins", icon: <SiJenkins className="text-blue-600 text-2xl" /> },
];

const services = [
  ["Digital Strategy", "We develop custom strategies grounded in data and insights to grow your brand across platforms.", "🧠"],
  ["Advertising & PPC", "Maximize ROI through targeted ad campaigns on Google, Meta, YouTube, and more.", "📢"],
  ["Web Design & Dev", "We build fast, responsive, SEO-optimized websites that convert visitors into customers.", "💻"],
  ["Brand Identity", "We help define and elevate your brand through impactful design and storytelling.", "🎯"],
  ["Search Optimization", "Climb rankings with optimized content, keywords, local SEO, and on-page improvements.", "🔍"],
  ["Email Marketing", "Engage and retain customers with high-converting email campaigns and automation.", "✉️"],
  ["Multimedia Creation", "From graphics to video content, we create powerful visual assets tailored to your goals.", "🎨"],
  ["E-Commerce Solutions", "Build scalable, secure online stores with seamless payment integrations and modern UX.", "🛒"],
  ["Content Management", "Implement and customize CMS platforms for easy publishing and digital presence management.", "📝"]
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
     <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div onClick={() => scrollTo("head")} className="logo-container">
            <img src='/assets/images/logo.png' alt="Logo" />
            <h1 className="text-2xl font-bold text-blue-900">KSSMedia</h1>
          </div>
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <button onClick={() => scrollTo("services")} className="hover:underline">Services</button>
            <button onClick={() => scrollTo("approach")} className="hover:underline">Commitment</button>
            <button onClick={() => scrollTo("stack")} className="hover:underline">Tools</button>
            <button onClick={() => scrollTo("about")} className="hover:underline">About</button>
            <button onClick={() => scrollTo("contact")} className="hover:underline">Contact</button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Get a Quote</button>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <FiX size={24} /> : <FiMenu size={24} />}</button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white border-t shadow px-4 py-4 space-y-3 text-gray-800 font-medium">
            <button onClick={() => scrollTo("services")} className="block w-full text-left">Services</button>
            <button onClick={() => scrollTo("approach")} className="block w-full text-left">Commitment</button>
            <button onClick={() => scrollTo("stack")} className="block w-full text-left">Tools</button>
            <button onClick={() => scrollTo("about")} className="block w-full text-left">About</button>
            <button onClick={() => scrollTo("contact")} className="block w-full text-left">Contact</button>
            <button className="mt-2 bg-orange-500 text-white px-4 py-2 w-full rounded hover:bg-orange-600">Get a Quote</button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="head" className="h-screen flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
        // style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1650&q=80')" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold">NYC&apos;s Full-Service Digital Agency</h2>
        <p className="text-lg mt-4 max-w-xl">We help businesses scale with tailored strategies in branding, web design, advertising, and digital content. Let&apos;s build something extraordinary.</p>
        <div className="mt-6 space-x-4">
          <button onClick={() => scrollTo("services")} className="bg-sky-600 px-6 py-3 rounded text-white font-semibold">Our Services</button>
          <button onClick={() => scrollTo("contact")} className="bg-white text-blue-900 px-6 py-3 rounded font-semibold">Contact Us</button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white text-center">
        <h3 className="text-3xl font-bold mb-10">What We Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {services.map(([title, desc, icon], index) => (
            <div key={index} className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{icon}</div>
              <h4 className="font-semibold text-xl mb-2">{title}</h4>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment Section */}
      <section id="approach" className="py-20 bg-blue-50 text-center">
        <h3 className="text-3xl font-bold mb-10">Precision at Every Step</h3>
        <div className="max-w-4xl mx-auto px-4 text-left space-y-8">
          <div>
            <h4 className="text-xl font-semibold text-blue-900">1. Transparent Collaboration</h4>
            <p className="text-gray-700 mt-2">We believe in open communication and proactive planning. From day one, you&apos;ll know exactly who is working on your project, what&apos;s happening next, and how we&apos;re tracking toward your goals. No surprises. No jargon. Just clarity.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-blue-900">2. Clear Timelines & Accountability</h4>
            <p className="text-gray-700 mt-2">You&apos;ll receive a detailed timeline with key milestones, checkpoints, and deliverables. We stick to deadlines, and when unexpected challenges arise, we communicate early and adjust with your priorities in mind.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-blue-900">3. Quality Craftsmanship</h4>
            <p className="text-gray-700 mt-2">We treat your brand as if it were our own. Every line of code, design decision, and campaign strategy is held to a high standard. Our work isn&apos;t done until you&apos;re confident and satisfied with the final product.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-blue-900">4. Long-Term Partnership</h4>
            <p className="text-gray-700 mt-2">Whether you&apos;re launching a one-off campaign or a complete rebrand, we&apos;re here for the long run. We offer continuous support, performance reviews, and strategic insights to keep you growing.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-blue-900">5. Results You Can Measure</h4>
            <p className="text-gray-700 mt-2">Our work is rooted in real outcomes. From increased conversions to boosted brand awareness, we track and report progress through data you can understand and act on.</p>
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section id="stack" className="py-20 bg-white text-center">
        <h3 className="text-3xl font-bold mb-10">Tools & Technologies We Rely On</h3>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-700">
          {techStack.map((tech, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow hover:shadow-md flex flex-col items-center">
              <div>{tech.icon}</div>
              <div className="mt-2">{tech.name}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-gray-600 max-w-3xl mx-auto">We are passionate about using the best modern tools to streamline workflow, improve efficiency, and deliver high-quality digital experiences.</p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Our Commitment to Craft</h3>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto">
            At KSSMedia, excellence isn&apos;t just an outcome — it&apos;s built into every step of our process. Behind every project is a multidisciplinary team of strategists, designers, developers, and creative thinkers dedicated to delivering pixel-perfect results. We obsess over the details, plan with precision, and test every solution to ensure it exceeds expectations.
          </p>
          <p className="mt-6 text-gray-200">
            We don&apos;t believe in cutting corners — every line of code, every brand mark, and every campaign reflects our values: quality, clarity, and forward-thinking execution.
          </p>
          <p className="mt-4 text-gray-400 text-sm italic">
            We may work behind the scenes, but our impact speaks for itself.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-2">KSSMedia</h4>
            <p className="text-sm">123 Digital Ave, NYC<br />hello@kssmedia.com<br />(555) 123-4567</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Explore</h4>
            <ul className="space-y-1 text-sm">
              <li><a onClick={() => scrollTo("services")} className="hover:underline">Services</a></li>
              <li><a onClick={() => scrollTo("approach")} className="hover:underline">Approach</a></li>
              <li><a onClick={() => scrollTo("stack")} className="hover:underline">Our Tools</a></li>
              <li><a onClick={() => scrollTo("about")} className="hover:underline">About</a></li>
              <li><a onClick={() => scrollTo("contact")} className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
            <p className="text-sm mb-2">Sign up to get insights, updates & offers straight to your inbox.</p>
            <div className="flex space-x-2">
              <input type="email" placeholder="Your email" className="bg-white p-2 rounded text-black w-full" />
              <button className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600">Subscribe</button>
            </div>
            <div className="mt-4 flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <SiLinkedin className="hover:text-blue-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <SiInstagram className="hover:text-pink-400" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <SiYoutube className="hover:text-red-500" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <SiTiktok className="hover:text-white" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <SiFacebook className="hover:text-blue-600" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
                <SiX className="hover:text-sky-400" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm mt-8">© 2025 KSSMedia. All Rights Reserved.</div>
      </footer>
    </div>
  );
}
