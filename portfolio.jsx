import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Github, Mail, Code2, Briefcase, Award, Zap, ArrowRight, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-blue-500/20 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              AK
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-8">
              {['Home', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium hover:text-blue-400 transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 hover:bg-blue-500/10 rounded-lg transition-colors"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2">
              {['Home', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 rounded-lg transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Animated Background */}
      <section id="home" className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="max-w-6xl mx-auto w-full text-center">
          <div className="mb-6 animate-fade-in">
            <p className="text-2xl font-bold text-gray-300 mb-4">Ayush Kushwaha</p>
          </div>
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-5xl sm:text-6xl font-bold shadow-2xl animate-bounce">
              AK
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Building Systems at Scale
            </span>
          </h1>
          <p className="text-xl sm:text-2xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4 font-semibold">
            Full Stack Engineer | System Designer | Problem Solver
          </p>
          <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Production-grade full-stack systems. 51% latency improvements. MAANG-level DSA skills (LeetCode Knight). Ready to make an impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://github.com/ayush2609123"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Github size={20} /> View My GitHub
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-gradient-to-r border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Get in Touch <ArrowRight size={20} />
            </button>
          </div>

          <button
            onClick={() => scrollToSection('projects')}
            className="mx-auto block animate-bounce"
          >
            <ChevronDown size={32} className="text-blue-400" />
          </button>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-900/5 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { stat: '600+', label: 'Problems Solved', color: 'text-blue-400' },
              { stat: '1860', label: 'LeetCode Max Rating', color: 'text-cyan-400' },
              { stat: '51%', label: 'Latency Improvement', color: 'text-green-400' },
              { stat: '5x', label: 'Query Performance', color: 'text-purple-400' }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-4 bg-slate-900/40 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all">
                <p className={`text-2xl sm:text-3xl font-bold ${item.color} mb-1`}>{item.stat}</p>
                <p className="text-xs sm:text-sm text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - MAANG Focused */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-blue-900/10 to-black relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Production Projects
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Full-stack systems built to scale</p>
          </div>
          
          {/* Project Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            
            {/* 1. Campus Relay - Full Stack */}
            <div className="group relative bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-black px-3 py-1 rounded-full text-xs font-bold">FULL STACK</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">Campus Relay</h3>
                    <p className="text-cyan-300 text-sm font-semibold">Ride-Sharing & Shuttle Management</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap size={24} className="text-white" />
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                  Production MERN app with RBAC, real-time geolocation, and booking workflows. Deployed to production with robust monitoring and error handling.
                </p>

                <div className="mb-6 bg-black/30 p-4 rounded-lg border border-cyan-500/20">
                  <p className="text-sm font-semibold text-cyan-300 mb-3">📊 Performance Metrics:</p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-cyan-400">⚡</span> 51% latency reduction (p95)</li>
                    <li className="flex gap-2"><span className="text-cyan-400">🔒</span> 42% fewer auth errors</li>
                    <li className="flex gap-2"><span className="text-cyan-400">📈</span> 5x faster query responses</li>
                    <li className="flex gap-2"><span className="text-cyan-400">✅</span> 33% improved reliability</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">Stack: Database Optimization | Middleware | JWT Auth</p>
                  <div className="flex flex-wrap gap-2">
                    {['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Aggregation', 'Leaflet'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <a href="https://github.com/ayush2609123/Campus_Relay" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold text-sm group/link">
                    Code <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* 2. HEALTHLINK - Healthcare Platform */}
            <div className="group relative bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8 hover:border-green-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-gradient-to-r from-green-400 to-emerald-400 text-black px-3 py-1 rounded-full text-xs font-bold">IMPACT</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:text-green-300 transition-colors">HealthLink</h3>
                    <p className="text-green-300 text-sm font-semibold">Healthcare Accessibility Platform</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code2 size={24} className="text-white" />
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                  Comprehensive healthcare platform bridging accessibility gap in rural India. User-friendly interface for medical consultations and health information.
                </p>

                <div className="mb-6 bg-black/30 p-4 rounded-lg border border-green-500/20">
                  <p className="text-sm font-semibold text-green-300 mb-3">🎯 Impact:</p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-green-400">🌍</span> Serves rural communities</li>
                    <li className="flex gap-2"><span className="text-green-400">👥</span> Multi-role authentication</li>
                    <li className="flex gap-2"><span className="text-green-400">📱</span> Responsive web design</li>
                    <li className="flex gap-2"><span className="text-green-400">💾</span> Data-driven insights</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">Stack: Frontend | Backend | Data Management</p>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'React', 'Node.js', 'Database', 'Authentication', 'UI/UX'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium border border-green-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a href="https://github.com/ayush2609123/HEALTHLINK" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-semibold text-sm group/link">
                  Explore <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* 3. CartNest - E-Commerce */}
            <div className="group relative bg-gradient-to-br from-orange-900/20 to-amber-900/20 border border-orange-500/30 rounded-2xl p-8 hover:border-orange-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-gradient-to-r from-orange-400 to-amber-400 text-black px-3 py-1 rounded-full text-xs font-bold">E-COMMERCE</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:text-orange-300 transition-colors">CartNest</h3>
                    <p className="text-orange-300 text-sm font-semibold">Full-Stack E-Commerce Platform</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap size={24} className="text-white" />
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                  One-stop e-commerce platform with product catalog, shopping cart, checkout, and payment integration for seamless shopping experience.
                </p>

                <div className="mb-6 bg-black/30 p-4 rounded-lg border border-orange-500/20">
                  <p className="text-sm font-semibold text-orange-300 mb-3">🛍️ Features:</p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-orange-400">🏪</span> Product management</li>
                    <li className="flex gap-2"><span className="text-orange-400">🛒</span> Shopping cart system</li>
                    <li className="flex gap-2"><span className="text-orange-400">💳</span> Payment gateway</li>
                    <li className="flex gap-2"><span className="text-orange-400">📦</span> Order tracking</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">Stack: Frontend | Backend | Payment Integration</p>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Stripe/Razorpay'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-medium border border-orange-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a href="https://github.com/ayush2609123/CartNest" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors font-semibold text-sm group/link">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* 4. Appointment Booking System */}
            <div className="group relative bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-2xl p-8 hover:border-pink-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-gradient-to-r from-pink-400 to-rose-400 text-black px-3 py-1 rounded-full text-xs font-bold">BACKEND</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:text-pink-300 transition-colors">Appointment Booking</h3>
                    <p className="text-pink-300 text-sm font-semibold">Scheduling & Management System</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase size={24} className="text-white" />
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                  Robust appointment scheduling system with conflict resolution, notification system, and calendar integration for professionals.
                </p>

                <div className="mb-6 bg-black/30 p-4 rounded-lg border border-pink-500/20">
                  <p className="text-sm font-semibold text-pink-300 mb-3">⏰ Capabilities:</p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-pink-400">📅</span> Smart scheduling</li>
                    <li className="flex gap-2"><span className="text-pink-400">🔔</span> Notifications</li>
                    <li className="flex gap-2"><span className="text-pink-400">⚔️</span> Conflict resolution</li>
                    <li className="flex gap-2"><span className="text-pink-400">👤</span> Multi-user support</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">Stack: API Design | Database | Logic</p>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Scheduling'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs font-medium border border-pink-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a href="https://github.com/ayush2609123/Appointment_Booking_System" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors font-semibold text-sm group/link">
                  See Code <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* 5. Plant Disease Detection - AI/ML */}
            <div className="group relative bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-black px-3 py-1 rounded-full text-xs font-bold">AI/ML</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:text-purple-300 transition-colors">Plant Disease Detection</h3>
                    <p className="text-purple-300 text-sm font-semibold">Deep Learning Classification</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code2 size={24} className="text-white" />
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                  Hybrid ensemble deep learning model combining VGG16, ResNet, and DenseNet with attention mechanisms for interpretable plant health assessment.
                </p>

                <div className="mb-6 bg-black/30 p-4 rounded-lg border border-purple-500/20">
                  <p className="text-sm font-semibold text-purple-300 mb-3">🤖 ML Highlights:</p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-purple-400">📊</span> 92%+ accuracy</li>
                    <li className="flex gap-2"><span className="text-purple-400">🏗️</span> Ensemble architecture</li>
                    <li className="flex gap-2"><span className="text-purple-400">🔍</span> Attention mechanisms</li>
                    <li className="flex gap-2"><span className="text-purple-400">🌾</span> Real agricultural impact</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">Stack: Deep Learning | Computer Vision</p>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'TensorFlow', 'VGG16', 'ResNet', 'DenseNet', 'Attention'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a href="https://github.com/ayush2609123" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold text-sm group/link">
                  Research <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* 6. DDoS Mitigation - System Design */}
            <div className="group relative bg-gradient-to-br from-red-900/20 to-rose-900/20 border border-red-500/30 rounded-2xl p-8 hover:border-red-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-gradient-to-r from-red-400 to-rose-400 text-black px-3 py-1 rounded-full text-xs font-bold">SYSTEM DESIGN</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:text-red-300 transition-colors">DDoS Mitigation</h3>
                    <p className="text-red-300 text-sm font-semibold">Software Defined Networking</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap size={24} className="text-white" />
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                  Advanced SDN-based DDoS mitigation system with intelligent traffic filtering and network optimization using software-defined networking principles.
                </p>

                <div className="mb-6 bg-black/30 p-4 rounded-lg border border-red-500/20">
                  <p className="text-sm font-semibold text-red-300 mb-3">🛡️ Approach:</p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-red-400">🌐</span> SDN controller</li>
                    <li className="flex gap-2"><span className="text-red-400">📊</span> Traffic analysis</li>
                    <li className="flex gap-2"><span className="text-red-400">🔒</span> Attack detection</li>
                    <li className="flex gap-2"><span className="text-red-400">⚙️</span> Dynamic routing</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">Stack: SDN | Network Security</p>
                  <div className="flex flex-wrap gap-2">
                    {['Network', 'Security', 'SDN', 'Traffic Analysis', 'Optimization'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs font-medium border border-red-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a href="https://github.com/ayush2609123/DDos_mitigation_using_SDN" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors font-semibold text-sm group/link">
                  Details <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Additional Projects Summary */}
          <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-blue-300">Other Notable Projects</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <p className="font-semibold text-blue-300 mb-1">📈 Stock Market Prediction</p>
                <p className="text-gray-400">Time-series ML models for market analysis</p>
              </div>
              <div>
                <p className="font-semibold text-cyan-300 mb-1">🔗 Bajaj FinServ API Test</p>
                <p className="text-gray-400">REST API integration & testing</p>
              </div>
              <div>
                <p className="font-semibold text-purple-300 mb-1">👨‍🏫 Professor Appointment</p>
                <p className="text-gray-400">Academic scheduling system</p>
              </div>
              <div>
                <p className="font-semibold text-pink-300 mb-1">🚀 Backend Projects</p>
                <p className="text-gray-400">API design & server architecture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Experience & Education
              </span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Internship */}
            <div className="group relative bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-6 sm:p-8 hover:border-blue-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Briefcase className="text-white" size={32} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold">Software Developer Intern</h3>
                    <span className="text-blue-300 text-sm font-semibold whitespace-nowrap">June 2025 – Aug 2025</span>
                  </div>
                  <p className="text-blue-400 font-semibold mb-4">UnQue Cloudbook (Remote)</p>
                  <ul className="text-gray-300 space-y-2 text-sm sm:text-base">
                    <li className="flex gap-3"><span className="text-cyan-400 mt-1">→</span> <span>Authored automated test cases and resolved defects in CI/CD pipeline</span></li>
                    <li className="flex gap-3"><span className="text-cyan-400 mt-1">→</span> <span>Created and tested 20+ robust RESTful API endpoints using Node.js, Express, and MongoDB</span></li>
                    <li className="flex gap-3"><span className="text-cyan-400 mt-1">→</span> <span>Optimized booking history retrieval achieving 5x faster responses via MongoDB aggregation</span></li>
                    <li className="flex gap-3"><span className="text-cyan-400 mt-1">→</span> <span>Fixed Redux state logic reducing stale UI and duplicate renders</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="group relative bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-6 sm:p-8 hover:border-purple-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Code2 className="text-white" size={32} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold">B.Tech - Computer Science & Engineering</h3>
                    <span className="text-purple-300 text-sm font-semibold whitespace-nowrap">Nov 2022 – May 2026</span>
                  </div>
                  <p className="text-purple-400 font-semibold mb-2">Indian Institute of Information Technology, Pune</p>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm sm:text-base">
                    <span className="text-gray-300"><strong>CGPA:</strong> 8.2/10</span>
                    <span className="text-gray-300"><strong>Location:</strong> Pune, Maharashtra</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-cyan-900/10 to-black relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Tools and technologies I work with</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Languages',
                skills: ['C++', 'JavaScript', 'Python', 'SQL', 'C'],
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Frontend',
                skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'Bootstrap'],
                color: 'from-cyan-500 to-teal-500'
              },
              {
                title: 'Backend',
                skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT Auth'],
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Other',
                skills: ['Git/GitHub', 'DSA', 'Deep Learning', 'Linux', 'Postman'],
                color: 'from-orange-500 to-red-500'
              }
            ].map((category, idx) => (
              <div 
                key={category.title} 
                className="group relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" style={{backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`}}></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg mb-4 flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">{idx + 1}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-6 text-gray-100 group-hover:text-blue-300 transition-colors">{category.title}</h3>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-3 group/skill">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full group-hover/skill:scale-150 transition-transform"></div>
                        <span className="text-gray-300 group-hover/skill:text-cyan-300 transition-colors">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAANG Readiness Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Built for Scale
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Engineering principles that MAANG companies value</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '⚡',
                title: 'Performance Optimization',
                desc: 'Reduced API latency by 51% through MongoDB aggregation pipelines, compound indexes, and smart pagination strategies.',
                color: 'from-blue-400 to-cyan-400'
              },
              {
                icon: '🔐',
                title: 'Security & Auth',
                desc: 'Implemented rotating JWT tokens, HttpOnly cookies, and CORS security reducing auth/CORS issues by 68%.',
                color: 'from-green-400 to-emerald-400'
              },
              {
                icon: '📊',
                title: 'System Design',
                desc: 'Built scalable MERN architecture with proper middleware patterns, error handling, and structured logging.',
                color: 'from-purple-400 to-pink-400'
              },
              {
                icon: '🧪',
                title: 'Testing & CI/CD',
                desc: 'Automated test case creation, defect resolution in CI pipelines, and production deployment workflows.',
                color: 'from-yellow-400 to-orange-400'
              },
              {
                icon: '📈',
                title: 'Data-Driven Decisions',
                desc: 'Used metrics and performance monitoring to drive 33% improvement in release reliability.',
                color: 'from-red-400 to-pink-400'
              },
              {
                icon: '🎯',
                title: 'DSA & Problem-Solving',
                desc: 'LeetCode Knight (1860), Codeforces Specialist (1436), CodeChef 3-Star. 600+ competitive problems solved.',
                color: 'from-indigo-400 to-blue-400'
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-blue-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="mb-4 text-3xl">{item.icon}</div>
                <h3 className="font-bold text-lg mb-3 text-gray-100 group-hover:text-blue-300 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 p-8 sm:p-12 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/40 rounded-2xl text-center">
            <p className="text-xl font-semibold text-blue-300 mb-4">Ready to make an impact at scale?</p>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm not just looking for a job—I'm looking to solve hard problems with great teams. My track record shows I can optimize systems, ship production code, and continuously improve.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </section>
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold mb-4 flex items-center justify-center gap-3 flex-wrap">
              <Award size={40} className="text-yellow-400" />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Recognition and competitive achievements</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Competitive Programming */}
            <div className="group relative bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-2xl p-8 hover:border-yellow-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <h3 className="font-bold text-xl sm:text-2xl mb-6 text-yellow-300">Competitive Programming</h3>
                <div className="space-y-4">
                  {[
                    { icon: '★', title: 'LeetCode Knight', desc: 'Max Rating 1860 (Top 3%)' },
                    { icon: '★', title: 'Codeforces Specialist', desc: 'Max Rating 1436' },
                    { icon: '★', title: 'CodeChef 3-Star', desc: 'Max Rating 1704' },
                    { icon: '★', title: '600+ Problems Solved', desc: 'Across all platforms' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 group/item">
                      <div className="w-8 h-8 flex-shrink-0 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center text-sm font-bold">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-100 group-hover/item:text-yellow-300 transition-colors">{item.title}</p>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recognition & Certifications */}
            <div className="group relative bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <h3 className="font-bold text-xl sm:text-2xl mb-6 text-blue-300">Recognition & Certifications</h3>
                <div className="space-y-4">
                  {[
                    { icon: '✓', title: 'Hackathon Finalist', desc: 'Mediocre Health AI (1,600 participants)' },
                    { icon: '✓', title: 'Python HackerRank', desc: 'Professional Certificate' },
                    { icon: '✓', title: 'Problem-Solving HackerRank', desc: 'Advanced Certificate' },
                    { icon: '✓', title: 'ML Specialization', desc: 'DeepLearning.AI Certificate' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 group/item">
                      <div className="w-8 h-8 flex-shrink-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-sm font-bold">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-100 group-hover/item:text-blue-300 transition-colors">{item.title}</p>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-cyan-900/5 to-black relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-gray-300 mb-12 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to connect, feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a
              href="mailto:ayush2609123@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl"
            >
              <Mail size={20} /> 
              <span className="hidden sm:inline">ayush2609123@gmail.com</span>
              <span className="sm:hidden">Email Me</span>
            </a>
            <a
              href="https://github.com/ayush2609123"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Github size={20} /> GitHub Profile
            </a>
            <a
              href="tel:+917905371576"
              className="px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Call Me
            </a>
          </div>

          <div className="mt-16 p-6 sm:p-8 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-cyan-500/20 rounded-2xl">
            <p className="text-gray-400 text-sm">
              💡 Open to freelance projects, internships, and full-time opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 py-8 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© 2025 Ayush Kushwaha. All rights reserved.</p>
            <p>Built with React & Tailwind CSS | Hosted on Vercel</p>
          </div>
        </div>
      </footer>

      {/* Global Styles */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
}