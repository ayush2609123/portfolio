import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Github, Mail, Code2, Briefcase, Award, Zap, ArrowRight, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navItems = ['Home', 'Projects', 'Skills', 'Experience', 'Contact'];
  const stats = [
    { stat: '600+', label: 'Problems Solved', color: 'text-blue-400' },
    { stat: '1860', label: 'LeetCode Rating', color: 'text-cyan-400' },
    { stat: '51%', label: 'Latency Cut', color: 'text-green-400' },
    { stat: '5x', label: 'Performance Gain', color: 'text-purple-400' }
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-blue-500/20 shadow-2xl' : 'bg-transparent'} fixed top-0 w-full z-50 transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">AK</div>
            
            <div className="hidden lg:flex gap-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium hover:text-blue-400 transition-all relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 hover:bg-blue-500/10 rounded-lg transition-colors"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {menuOpen && (
            <div className="lg:hidden pb-4 space-y-2">
              {navItems.map((item) => (
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

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.7s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto w-full text-center">
          <div className="mb-8">
            <p className="text-3xl sm:text-4xl font-bold text-white mb-6">Ayush Kushwaha</p>
          </div>
          <div className="mb-12">
            <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-6xl sm:text-7xl font-bold shadow-2xl animate-bounce">AK</div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent block">Building Systems</span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent block">at Scale</span>
          </h1>
          <p className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-300">Full Stack Engineer | System Designer | Problem Solver</p>
          <p className="text-gray-300 text-lg sm:text-xl mb-12 max-w-3xl mx-auto">Production-grade full-stack systems. 51% latency improvements. MAANG-level DSA skills. Ready to make an impact.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://github.com/ayush2609123" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-xl font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg">
              <Github size={20} /> View My GitHub
            </a>
            <button onClick={() => scrollToSection('contact')} className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 rounded-xl font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2">
              Get in Touch <ArrowRight size={20} />
            </button>
          </div>

          <button onClick={() => scrollToSection('projects')} className="mx-auto block text-blue-400 text-3xl animate-bounce">⬇</button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-900/5 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-slate-900/60 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all hover:bg-slate-800">
                <p className={`text-3xl sm:text-4xl font-bold ${item.color} mb-2`}>{item.stat}</p>
                <p className="text-sm sm:text-base text-gray-300 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-blue-900/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Featured Projects</span>
            </h2>
            <p className="text-gray-400 text-lg">Full-stack systems built to scale</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Campus Relay */}
            <div className="group relative bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-black px-3 py-1 rounded-full text-xs font-bold">FULL STACK</span>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 mt-3 group-hover:text-cyan-300 transition-colors">Campus Relay</h3>
                  <p className="text-cyan-300 text-sm font-semibold">Ride-Sharing & Shuttle Management</p>
                </div>
              </div>
              <p className="text-gray-200 mb-6 leading-relaxed text-base sm:text-lg">Production MERN app with RBAC, real-time geolocation, and booking workflows. Deployed to production with robust monitoring.</p>
              <div className="mb-6 bg-black/30 p-4 rounded-lg border border-cyan-500/20">
                <p className="text-sm font-semibold text-cyan-300 mb-3">📊 Performance Metrics:</p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>⚡ 51% latency reduction (p95)</li>
                  <li>🔒 42% fewer auth errors</li>
                  <li>📈 5x faster query responses</li>
                  <li>✅ 33% improved reliability</li>
                </ul>
              </div>
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Leaflet'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a href="https://github.com/ayush2609123/Campus_Relay" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm inline-flex items-center gap-2">
                View Code <ExternalLink size={16} />
              </a>
            </div>

            {/* HealthLink */}
            <div className="group relative bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8 hover:border-green-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 text-black px-3 py-1 rounded-full text-xs font-bold">IMPACT</span>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 mt-3 group-hover:text-green-300 transition-colors">HealthLink</h3>
                  <p className="text-green-300 text-sm font-semibold">Healthcare Accessibility Platform</p>
                </div>
              </div>
              <p className="text-gray-200 mb-6 leading-relaxed text-base sm:text-lg">Comprehensive healthcare platform bridging accessibility gap in rural India. User-friendly interface for medical consultations.</p>
              <div className="mb-6 bg-black/30 p-4 rounded-lg border border-green-500/20">
                <p className="text-sm font-semibold text-green-300 mb-3">🎯 Impact:</p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>🌍 Serves rural communities</li>
                  <li>👥 Multi-role authentication</li>
                  <li>📱 Responsive web design</li>
                  <li>💾 Data-driven insights</li>
                </ul>
              </div>
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'Node.js', 'Authentication', 'UI/UX'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium border border-green-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a href="https://github.com/ayush2609123/HEALTHLINK" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 font-semibold text-sm inline-flex items-center gap-2">
                Explore <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-cyan-900/10 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Technical Skills</span>
            </h2>
            <p className="text-gray-400 text-lg">Tools and technologies I work with</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Languages', items: ['C++', 'JavaScript', 'Python', 'SQL'] },
              { title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'] },
              { title: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'REST APIs'] },
              { title: 'Other', items: ['Git/GitHub', 'DSA', 'Deep Learning', 'Linux'] }
            ].map((category, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-400/60 transition-all">
                <h3 className="font-bold text-lg mb-6 text-gray-100">{category.title}</h3>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-8">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0"><Briefcase className="text-white" size={32} /></div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Software Developer Intern</h3>
                  <p className="text-blue-400 font-semibold mb-2">UnQue Cloudbook (Remote)</p>
                  <p className="text-gray-400 text-sm mb-4">June 2025 – Aug 2025</p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>→ Authored automated test cases and resolved defects</li>
                    <li>→ Created 20+ robust RESTful API endpoints</li>
                    <li>→ Optimized queries achieving 5x faster responses</li>
                    <li>→ Fixed Redux state logic reducing stale UI</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-8">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0"><Code2 className="text-white" size={32} /></div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">B.Tech - Computer Science & Engineering</h3>
                  <p className="text-purple-400 font-semibold mb-2">Indian Institute of Information Technology, Pune</p>
                  <p className="text-gray-400 text-sm">CGPA: 8.2 | Nov 2022 – May 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-blue-900/5 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Achievements</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-yellow-300">Competitive Programming</h3>
              <div className="space-y-4">
                {[
                  { title: 'LeetCode Knight', desc: 'Max Rating 1860 (Top 3%)' },
                  { title: 'Codeforces Specialist', desc: 'Max Rating 1436' },
                  { title: 'CodeChef 3-Star', desc: 'Max Rating 1704' },
                  { title: '600+ Problems Solved', desc: 'Across all platforms' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center flex-shrink-0 font-bold">★</div>
                    <div>
                      <p className="font-semibold text-gray-100">{item.title}</p>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-blue-300">Recognition & Certifications</h3>
              <div className="space-y-4">
                {[
                  { title: 'Hackathon Finalist', desc: 'Mediocre Health AI (1,600 participants)' },
                  { title: 'Python HackerRank', desc: 'Professional Certificate' },
                  { title: 'Problem-Solving HackerRank', desc: 'Advanced Certificate' },
                  { title: 'ML Specialization', desc: 'DeepLearning.AI Certificate' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0 font-bold">✓</div>
                    <div>
                      <p className="font-semibold text-gray-100">{item.title}</p>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-cyan-900/5 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">Let's Work Together</span>
          </h2>
          <p className="text-gray-300 mb-12 text-lg sm:text-xl leading-relaxed">I'm always interested in hearing about new projects and opportunities. Reach out!</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a href="mailto:ayush2609123@gmail.com" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-xl font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg">
              <Mail size={20} /> Email Me
            </a>
            <a href="https://github.com/ayush2609123" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 rounded-xl font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2">
              <Github size={20} /> GitHub Profile
            </a>
            <a href="tel:+917905371576" className="px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10 rounded-xl font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2">
              Call Me
            </a>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-2xl">
            <p className="text-gray-400">💡 Open to freelance projects, internships, and full-time opportunities</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 py-8 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© 2025 Ayush Kushwaha. All rights reserved.</p>
            <p>Built with React & Tailwind CSS</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce { animation: bounce 2s infinite; }
      `}</style>
    </div>
  );
}
