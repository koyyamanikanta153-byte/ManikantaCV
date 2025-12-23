
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  FileText,
  Globe,
  Award,
  Send,
  Linkedin,
  Github,
  Twitter
} from 'lucide-react';
import { INITIAL_DATA } from './constants';
import { PortfolioData } from './types';

const App: React.FC = () => {
  const [data] = useState<PortfolioData>(INITIAL_DATA);
  const [activeTab, setActiveTab] = useState('About');

  const tabs = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Certifications', 'Contact'];

  return (
    <div className="min-h-screen relative selection:bg-cyan-500 selection:text-white pb-20 overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-600/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150 mix-blend-overlay" />
      </div>

      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center glass border-b border-white/5">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-sync text-lg tracking-tighter font-bold flex items-center gap-2">
          <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center text-black text-xs">P</div>
          PROPORTFOLIO<span className="text-cyan-500">.</span>
        </motion.div>
        
        <div className="hidden lg:flex gap-6 items-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:text-cyan-400 relative py-1 ${
                activeTab === tab ? 'text-cyan-400' : 'text-zinc-500'
              }`}
            >
              {tab}
              {activeTab === tab && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-500" />}
            </button>
          ))}
        </div>

        <div className="flex gap-3 items-center">
          <a 
            href={`mailto:${data.email}`}
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-500 text-black hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 text-xs font-bold transition-all"
          >
            HIRE ME
          </a>
        </div>
      </nav>

      <main className="relative z-10 pt-32 max-w-7xl mx-auto px-6">
        {/* Mobile Tab Scroller */}
        <div className="lg:hidden flex overflow-x-auto gap-4 pb-8 no-scrollbar scroll-smooth">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap text-[10px] uppercase tracking-[0.15em] font-bold px-4 py-2 rounded-full glass ${
                activeTab === tab ? 'border-cyan-500 text-cyan-400' : 'border-white/5 text-zinc-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Hero Section */}
        <section className="mb-20 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex justify-center">
            <div className="relative group">
              <div className="w-64 h-64 rounded-[40px] overflow-hidden border border-white/10 glow-cyan relative rotate-3 group-hover:rotate-0 transition-transform duration-700">
                <img src={data.profileImage} alt="Profile" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-4 -right-4 glass p-4 rounded-2xl border-white/10 animate-bounce">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] bg-zinc-800" />)}
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.h1 initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="text-6xl lg:text-8xl font-sync font-bold mb-4 tracking-tighter leading-none">
              {data.name}
            </motion.h1>
            <motion.p initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="text-xl lg:text-2xl text-cyan-400 font-light tracking-[0.3em] uppercase mb-8">
              {data.title}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-4 text-zinc-400">
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-xl text-xs font-medium border-white/5">
                <Mail size={14} className="text-cyan-500" />
                {data.email}
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-xl text-xs font-medium border-white/5">
                <Phone size={14} className="text-cyan-500" />
                {data.phone}
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-xl text-xs font-medium border-white/5">
                <MapPin size={14} className="text-cyan-500" />
                {data.address}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Dynamic Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'About' && (
            <motion.div key="about" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass p-10 rounded-[40px] border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl group-hover:bg-cyan-500/10 transition-colors" />
                <h3 className="text-3xl font-sync font-bold mb-8 flex items-center gap-4">
                  <FileText className="text-cyan-500" size={32} />
                  SUMMARY
                </h3>
                <div className="text-xl leading-relaxed text-zinc-300 font-light italic">
                  {data.objective}
                </div>
              </div>
              <div className="glass p-10 rounded-[40px] border-white/5 relative overflow-hidden group">
                <h3 className="text-3xl font-sync font-bold mb-8 flex items-center gap-4">
                  <Globe className="text-cyan-500" size={32} />
                  VITALS
                </h3>
                <div className="space-y-6">
                  {[
                    { label: "BORN", val: data.personalInfo.dob },
                    { label: "LANGUAGES", val: data.personalInfo.languages.join(', ') },
                    { label: "INTERESTS", val: data.personalInfo.hobbies.join(', ') }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                      <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{item.label}</span>
                      <span className="text-lg text-zinc-200">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'Skills' && (
            <motion.div key="skills" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.skills.map((skill, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ rotateY: 10, rotateX: -10, translateZ: 20 }}
                  className="glass p-6 rounded-3xl border-white/5 hover:border-cyan-500/30 transition-all cursor-default relative perspective-1000"
                >
                  <div className="flex justify-between items-end mb-4">
                    <h4 className="font-bold text-zinc-100 text-sm leading-tight max-w-[70%]">
                      {skill.name}
                    </h4>
                    <span className="text-cyan-500 font-sync text-xs">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'Experience' && (
            <motion.div key="exp" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              {data.experience.map((exp, idx) => (
                <div key={idx} className="group glass p-10 rounded-[40px] border-white/5 hover:border-cyan-500/20 transition-all relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
                  <div className="flex flex-col md:flex-row justify-between mb-8">
                    <div>
                      <h4 className="text-3xl font-bold text-white mb-2 italic">
                        {exp.role}
                      </h4>
                      <div className="flex items-center gap-3 text-cyan-400 font-sync text-sm tracking-widest">
                        <Briefcase size={16} />
                        {exp.company}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 glass px-6 py-2 rounded-full border-white/10 h-fit text-xs font-bold text-zinc-500">
                      {exp.duration}
                    </div>
                  </div>
                  <ul className="space-y-4 max-w-4xl">
                    {exp.description.map((desc, dIdx) => (
                      <li key={dIdx} className="flex gap-4 text-zinc-400 text-lg leading-relaxed">
                        <div className="mt-3 w-2 h-2 rounded-full bg-cyan-500 shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'Projects' && (
            <motion.div key="projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {data.projects.map((project, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -10, rotateX: 5 }}
                  className="group glass rounded-[40px] overflow-hidden border-white/5 hover:border-cyan-500/40 transition-all perspective-1000"
                >
                  <div className="aspect-[4/3] w-full relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="text-[10px] font-bold tracking-[0.2em] px-3 py-1 glass text-white rounded-full uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-bold mb-4 flex items-center justify-between group-hover:text-cyan-400 transition-colors">
                      {project.title}
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink size={20} />
                      </a>
                    </h4>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-6">Innovative digital transformation showcase featuring core industry specializations.</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'Certifications' && (
            <motion.div key="certs" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.certifications.map((cert, idx) => (
                <div key={idx} className="glass p-10 rounded-[40px] border-white/5 hover:border-cyan-500/20 transition-all group flex flex-col justify-center items-center text-center">
                  <div className="w-20 h-20 rounded-full glass border-white/5 mb-6 flex items-center justify-center text-cyan-500 group-hover:scale-110 transition-transform">
                    <Award size={40} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-cyan-400 font-sync text-[10px] tracking-widest uppercase mb-4">
                    {cert.issuer}
                  </p>
                  <div className="text-zinc-600 text-xs font-bold bg-white/5 px-4 py-2 rounded-full">
                    {cert.date}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'Contact' && (
            <motion.div key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto glass p-12 rounded-[50px] border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-4xl font-sync font-bold mb-8 leading-tight">GET IN <span className="text-cyan-500 underline decoration-white/20 underline-offset-8">TOUCH</span>.</h3>
                  <p className="text-zinc-400 text-lg mb-10 font-light">Available for new opportunities and collaborations. Reach out for high-impact marketing strategies.</p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl glass border-white/10 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all"><Mail size={20} /></div>
                      <div>
                        <p className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest">EMAIL</p>
                        <p className="font-bold">{data.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl glass border-white/10 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all"><Phone size={20} /></div>
                      <div>
                        <p className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest">PHONE</p>
                        <p className="font-bold">{data.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">YOUR NAME</label>
                    <input type="text" className="w-full glass bg-white/[0.02] border-white/10 rounded-2xl p-4 text-white outline-none focus:border-cyan-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">MESSAGE</label>
                    <textarea className="w-full glass bg-white/[0.02] border-white/10 rounded-3xl p-4 text-white outline-none focus:border-cyan-500 transition-colors" rows={5} placeholder="Let's build something amazing..." />
                  </div>
                  <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-cyan-500/20 active:scale-95">
                    SEND TRANSMISSION
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {activeTab === 'Education' && (
            <motion.div key="edu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.education.map((edu, idx) => (
                <div key={idx} className="glass p-10 rounded-[40px] border-white/5 relative group">
                  <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                    <GraduationCap size={80} />
                  </div>
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold text-white mb-2 leading-tight">
                      {edu.achievement}
                    </h4>
                    <span className="text-cyan-500 font-sync text-xs tracking-widest">{edu.year}</span>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <label className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest block mb-1">STREAM</label>
                      <p className="text-zinc-200">{edu.stream}</p>
                    </div>
                    <div>
                      <label className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest block mb-1">INSTITUTION</label>
                      <p className="text-zinc-200 font-bold">{edu.college}</p>
                      <p className="text-zinc-500 text-sm mt-1">{edu.university}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="mt-20 border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-sync text-xl font-black">
            KMR<span className="text-cyan-500">.</span>
          </div>
          <div className="flex gap-10">
            <a href="#" className="text-zinc-500 hover:text-cyan-400 transition-colors uppercase font-bold text-[10px] tracking-widest">LinkedIn</a>
            <a href="#" className="text-zinc-500 hover:text-cyan-400 transition-colors uppercase font-bold text-[10px] tracking-widest">Twitter</a>
            <a href="#" className="text-zinc-500 hover:text-cyan-400 transition-colors uppercase font-bold text-[10px] tracking-widest">GitHub</a>
          </div>
          <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
            DESIGNED FOR THE DIGITAL FRONTIER
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
