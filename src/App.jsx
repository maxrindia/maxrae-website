import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ContactModal from './components/ContactModal.jsx';
import BackToTop from './components/BackToTop.jsx';

// Dedicated Pages matching enterprise requirements
import HomePage from './pages/HomePage.jsx';

// Route-level code splitting to keep initial bundle ultra-lean for instant LCP and SI
const ServiceDetailPage = React.lazy(() => import('./pages/ServiceDetailPage.jsx'));
const IndustryDetailPage = React.lazy(() => import('./pages/IndustryDetailPage.jsx'));
const AboutPage = React.lazy(() => import('./pages/AboutPage.jsx'));
const BlogPage = React.lazy(() => import('./pages/BlogPage.jsx'));
const BlogPostPage = React.lazy(() => import('./pages/BlogPostPage.jsx'));
const ContactPage = React.lazy(() => import('./pages/ContactPage.jsx'));
const VoiceAgentsPage = React.lazy(() => import('./pages/VoiceAgentsPage.jsx'));
const CareersPage = React.lazy(() => import('./pages/CareersPage.jsx'));

// Scroll to top and update dynamic SEO page metadata on route change
function RouteMetaHandler() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    let title = "MaxR Technology — Enterprise AI Automation & Digital Systems";
    let desc = "MaxR Technology delivers enterprise AI automation, voice AI agents, custom web and mobile apps, and scalable digital solutions for high-growth businesses.";

    if (pathname.startsWith('/services/voice-agents') || pathname === '/voice-agents') {
      title = "Voice AI Agents — 24/7 Phone Answering & Speech AI | MaxR Technology";
      desc = "Deploy 24/7 multilingual conversational voice AI agents in UAE. Sub-450ms speech latency, automated appointment booking, and seamless CRM integrations.";
    } else if (pathname.startsWith('/services/web-development')) {
      title = "Web Development Services — High-Performance Web Apps | MaxR Technology";
      desc = "Ultra-fast Next.js and React web applications engineered to convert. 99/100 Lighthouse performance, accessible UI, and modern headless architectures.";
    } else if (pathname.startsWith('/services/app-development')) {
      title = "Mobile App Development — Native iOS & Android Apps | MaxR Technology";
      desc = "Custom iOS and Android mobile app engineering with Flutter and React Native. Smooth 60 FPS performance, secure payment gateways, and scalable backends.";
    } else if (pathname.startsWith('/services/ai-automation')) {
      title = "Enterprise AI Automation & Workflow Bots | MaxR Technology";
      desc = "Autonomous workflow bots, custom AI pipelines, and ERP integrations that cut manual overhead by 70%. Built for UAE and global enterprises.";
    } else if (pathname.startsWith('/services/software-development')) {
      title = "Custom Software & SaaS Development | MaxR Technology";
      desc = "Full-stack cloud applications, multi-tenant SaaS platforms, and secure internal tools engineered from the ground up for modern businesses.";
    } else if (pathname.startsWith('/services/digital-marketing')) {
      title = "Digital Marketing & SEO Services | MaxR Technology";
      desc = "Data-driven SEO, PPC campaigns, and conversion optimization strategies that rank your brand at the top of Google and generate qualified inquiries.";
    } else if (pathname.startsWith('/services/social-media-management')) {
      title = "Social Media Management & Automation | MaxR Technology";
      desc = "Multi-channel content scheduling, automated comment-to-DM funnels, and brand engagement systems that turn followers into paying clients.";
    } else if (pathname.startsWith('/services/crm-lead-solutions')) {
      title = "CRM Setup & Automated Lead Routing | MaxR Technology";
      desc = "Capture, qualify, and route incoming leads in under 60 seconds with automated sales pipelines across HubSpot, Zoho, and Salesforce.";
    } else if (pathname.startsWith('/services/cloud-technology')) {
      title = "Cloud Infrastructure & DevOps Scaling | MaxR Technology";
      desc = "High-availability cloud hosting, automated database backups, and zero-downtime CI/CD deployment pipelines on AWS, Azure, and GCP.";
    } else if (pathname.startsWith('/services/data-bi-analytics')) {
      title = "Data & Business Intelligence Dashboards | MaxR Technology";
      desc = "Real-time executive KPI dashboards, automated ETL pipelines, and predictive business intelligence reporting using Looker Studio and Power BI.";
    } else if (pathname.startsWith('/industries')) {
      title = "Industry Solutions & Sector-Specific Automation | MaxR Technology";
      desc = "Custom digital platforms and workflow automation tailored for Healthcare, Real Estate, E-Commerce, Finance, Education, Hospitality, and Web3.";
    } else if (pathname === '/about') {
      title = "About MaxR Technology — Enterprise AI & Digital Engineering";
      desc = "Learn about MaxR Technology, our global delivery team in Dubai and Chennai, our leadership, and our mission to engineer technology that drives ROI.";
    } else if (pathname === '/contact') {
      title = "Contact MaxR Technology — Start Your Digital Project";
      desc = "Speak with our enterprise digital engineers and AI architects in Dubai (UAE) and Chennai (India). Book a strategic technical consultation today.";
    } else if (pathname === '/blog') {
      title = "Tech Insights & AI Automation Blog | MaxR Technology";
      desc = "Engineering perspectives, autonomous AI agent blueprints, voice AI case studies, and enterprise digital transformation insights from MaxR.";
    } else if (pathname === '/careers') {
      title = "Careers at MaxR Technology — Join Our Engineering Team";
      desc = "Explore career opportunities at MaxR Technology in Dubai and Chennai. Build mission-critical enterprise AI, web, and mobile systems.";
    }

    document.title = title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', desc);
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', desc);
    
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', title);
    
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', desc);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://maxr.ae${pathname === '/' ? '' : pathname}`);
  }, [pathname]);

  return null;
}

function MainLayout() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Smoothly fade out the initial minimal HTML loader once React is mounted & ready
  useEffect(() => {
    const loader = document.getElementById('initial-loader');
    if (loader) {
      loader.classList.add('loader-hidden');
      const timer = setTimeout(() => {
        if (loader.parentNode) loader.parentNode.removeChild(loader);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <RouteMetaHandler />
      
      {/* ── Main Sticky Header with React Router Navigation ── */}
      <Header onOpenContact={() => setContactModalOpen(true)} />

      {/* ── Main Routed Page Content ── */}
      <main id="main" style={{ flex: 1, paddingTop: 0 }}>
        <React.Suspense fallback={<div style={{ minHeight: '60vh', background: '#FFFFFF' }} />}>
          <Routes>
            <Route path="/" element={<HomePage onOpenContact={() => setContactModalOpen(true)} />} />
            
            {/* Individual Service Pages */}
            <Route path="/services/voice-agents" element={<VoiceAgentsPage onOpenContact={() => setContactModalOpen(true)} />} />
            <Route path="/services/:slug" element={<ServiceDetailPage onOpenContact={() => setContactModalOpen(true)} />} />
            <Route path="/services" element={<Navigate to="/services/web-development" replace />} />
            
            {/* Individual Industry Pages */}
            <Route path="/industries/:slug" element={<IndustryDetailPage onOpenContact={() => setContactModalOpen(true)} />} />
            <Route path="/industries" element={<Navigate to="/industries/healthcare" replace />} />

            <Route path="/about" element={<AboutPage onOpenContact={() => setContactModalOpen(true)} />} />
            <Route path="/blog" element={<BlogPage onOpenContact={() => setContactModalOpen(true)} />} />
            <Route path="/blog/:slug" element={<BlogPostPage onOpenContact={() => setContactModalOpen(true)} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/voice-agents" element={<Navigate to="/services/voice-agents" replace />} />
            <Route path="/careers" element={<CareersPage onOpenContact={() => setContactModalOpen(true)} />} />
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage onOpenContact={() => setContactModalOpen(true)} />} />
          </Routes>
        </React.Suspense>
      </main>

      {/* ── Global Footer ── */}
      <Footer />

      {/* ── Contact Modal ── */}
      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
      <BackToTop />
      {/* ChatBot disabled as requested */}
    </BrowserRouter>
  );
}

