import React, { useState } from 'react';
import { 
  Menu, X, Download, ExternalLink, Github, Linkedin, Mail, 
  Phone, Moon, Sun, MapPin, Calendar, Code, 
  Cpu, Database, Cloud, Bot, Monitor, Award, TrendingUp,
  User, Briefcase, FolderOpen, GraduationCap, Terminal, Wrench
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToPage = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const skills = {
    physicalDesign: [
      'PnR Flows', 'Physical Synthesis', 'RTL Optimization', 'Place-and-Route',
      'Static Timing Analysis (STA)', 'PPA Analysis', 'Low-Power (UPF)',
      'Logical Equivalence Checking (LEC)', 'Standard Cell CMOS Design',
      'SDC Constraints', 'ASIC Development', 'CTS'
    ],
    languages: [
      'Python', 'C/C++', 'Go', 'Java', 'JavaScript', 'SQL',
      'Bash', 'Assembly', 'OpenCL'
    ],
    scriptingEDA: [
      'Tcl', 'Python', 'RTL-to-GDS Flow Scripting', 'EDA Tool Integration',
      'openROAD', 'OpenSTA', 'Yosys', 'Magic', 'Verilator', 'QuestaSim'
    ],
    logicDesign: [
      'Verilog', 'SystemVerilog', 'RTL Design', 'Finite State Machines',
      'Memory/Array Logic', 'Computer Architecture'
    ],
    webBackend: [
      'React', 'Node.js', 'Express', 'REST APIs', 'MongoDB', 'Docker'
    ],
    aiGenAI: [
      'PyTorch', 'TensorFlow', 'HuggingFace', 'scikit-learn', 'LangChain',
      'RAG', 'MCP', 'KGs', 'Agentic AI', 'PEFT (LoRA)', 'Instruction Tuning'
    ],
    toolsPlatforms: [
      'Linux', 'Git', 'GitHub Actions', 'AWS', 'Azure', 'GCP',
      'Neo4j', 'Object-Oriented Design', 'Software QA'
    ]
  };

  const projects = [
    {
      title: 'TapeOut AI',
      badge: 'YC S26 Interviewed',
      description: 'Co-founded autonomous RTL-to-GDS pipeline using 15 multi-agent systems orchestrating 7 EDA tool stages (Yosys, OpenROAD, Magic, Verilator). Selected for YC Spring 2026 interview (top 1-2% of applicants). Implemented AST transformation engine with Pyverilog parsing 27,000+ lines of design code, built Neo4j knowledge graph storing 10,000+ error patterns. Agents autonomously debug/fix RTL, run equivalence checks, and optimize PPA/timing closure — achieving 90% end-to-end convergence. Developed Tcl/Python scripts to validate results at each checkpoint.',
      technologies: ['Python', 'C++', 'Tcl', 'openROAD', 'Yosys', 'Magic', 'OpenSTA', 'Verilator', 'Neo4j', 'Pyverilog', 'KGs'],
      github: 'https://github.com/sriyajammula',
      type: 'both',
      highlight: true
    },
    {
      title: 'AI-Powered PR Reviewer',
      description: 'Built privacy-first AI code reviewer as VS Code extension analyzing git diffs and acceptance criteria. Integrated local LLMs via Ollama reducing dependency on cloud APIs, surfacing actionable feedback in-editor and reducing review time by 30%. Designed provider adapter architecture supporting OpenAI/Azure/Anthropic via user-supplied API keys stored in VS Code SecretStorage.',
      technologies: ['TypeScript', 'VS Code API', 'Ollama', 'OpenAI', 'Azure', 'Anthropic', 'SecretStorage'],
      github: 'https://github.com/sriyajammula',
      type: 'software',
      highlight: true
    },
    {
      title: 'Custom 9-bit MIPS Processor',
      description: 'Engineered from scratch with unique ISA, opcodes, and instruction formats. Implemented ALU, control unit, register file, and memory in SystemVerilog applying ASIC development principles. Verified and debugged full instruction execution using QuestaSim and custom-built testbenches.',
      technologies: ['SystemVerilog', 'MIPS', 'ASIC Design', 'QuestaSim', 'RTL Design', 'Testbenches'],
      github: 'https://github.com/sriyajammula',
      type: 'hardware'
    },
    {
      title: 'Low-Price Center E-commerce Platform',
      description: 'Led 6-7 member team to build secure e-commerce platform supporting 1,000+ users. Architected backend with Node.js and MongoDB, designed REST APIs for product catalog and user authentication. Established CI/CD pipelines with GitHub Actions, cut integration issues by 30%.',
      technologies: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'GitHub Actions', 'CI/CD'],
      github: 'https://github.com/sriyajammula',
      type: 'software'
    },
    {
      title: 'Cancer Cell Image Annotation GUI',
      description: 'Designed a Python GUI with Tkinter for cancer cell image annotation, built data labeling workflows reducing manual labeling time by 30%. Processed and analyzed large-scale gene expression datasets (10,000+ samples) with Pandas and NumPy.',
      technologies: ['Python', 'Tkinter', 'Pandas', 'NumPy', 'Data Analysis'],
      github: 'https://github.com/sriyajammula',
      type: 'software'
    }
  ];

  const experiences = [
    {
      title: 'Engineering Manager',
      company: 'Computer Science and Engineering Society, UC San Diego',
      location: 'California',
      period: 'June 2025 - Present',
      type: 'leadership',
      achievements: [
        'Led 6-7 member team developing Low-Price Center, a secure e-commerce platform for 1,000+ users',
        'Architected modular software systems with object-oriented design, reducing development cycle time by 20%',
        'Established CI/CD pipelines with GitHub Actions, implemented software QA practices cutting integration issues by 30%',
        'Mentored peers in React, Node.js, MongoDB, and Git workflows'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Matson Money',
      location: 'Phoenix, Arizona',
      period: 'June 2025 - Dec 2025',
      type: 'internship',
      achievements: [
        'Built end-to-end client portal features connecting React UIs with Node.js/Express REST services processing 1000s of requests',
        'Integrated secure third-party APIs with OAuth 2.0 token-based authentication',
        'Resolved 15+ high-impact production defects across authentication flows and data pipelines',
        'Automated routine operations with Python scripts, cutting help-desk tickets by 7%'
      ]
    },
    {
      title: 'Engineering Intern',
      company: 'Intel India Tech Pvt Ltd',
      location: 'India',
      period: 'June 2024 - Sept 2024',
      type: 'internship',
      achievements: [
        'Exposed to full physical synthesis and PD flows under a Senior Graphics Hardware Engineer: RTL synthesis, physical synthesis constraints (SDC/UPF), placement, CTS, routing, and STA',
        'Observed methodology and automated flow development practices used in production ASIC silicon',
        'Built ML models with NumPy, scikit-learn, TensorFlow and PyTorch for regression, classification, clustering',
        'Developed deep RL models with policy gradients achieving 15% faster convergence on benchmarks'
      ]
    },
    {
      title: 'Undergraduate Student Researcher',
      company: 'Boolean Lab, UC San Diego',
      location: 'California',
      period: 'Sept 2023 - June 2024',
      type: 'research',
      achievements: [
        'Designed a Python GUI with Tkinter for cancer cell image annotation, reducing manual labeling time by 30%',
        'Processed and analyzed large-scale gene expression datasets (10,000+ samples) with Pandas and NumPy',
        'Implemented statistical analysis pipelines improving accuracy of data interpretation and visualization'
      ]
    }
  ];

  const navItems = [
    { id: 'home', label: 'Home', icon: Monitor },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  // ─── PAGE COMPONENTS ───────────────────────────────────────────

  const HomePage = () => (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className={`text-6xl md:text-7xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Sriya Jammula
        </h1>
        <p className={`text-2xl md:text-3xl mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Computer Engineering @ UC San Diego
        </p>
        <p className={`text-xl mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
          Physical Design & CAD | Full-Stack SWE | GenAI
        </p>
        <p className={`text-lg mb-12 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Final-year Computer Engineering student experienced with CMOS VLSI fundamentals, 
          physical synthesis & PD flows, full-stack development, and GenAI-powered EDA automation. 
          Co-founder of TapeOut AI (YC S26 Interviewed).
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a href="#" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold">
            <Download size={24} />
            Download Resume
          </a>
          <button
            onClick={() => navigateToPage('projects')}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 transition-colors duration-200 text-lg font-semibold ${isDarkMode ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900' : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'}`}
          >
            <FolderOpen size={24} />
            View Projects
          </button>
        </div>
        
        <div className="flex justify-center gap-8">
          <a href="https://github.com/sriyajammula" className={`p-4 rounded-full transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
            <Github size={32} className={isDarkMode ? 'text-gray-300' : 'text-gray-700'} />
          </a>
          <a href="https://linkedin.com/in/sriya-jammula1504" className={`p-4 rounded-full transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
            <Linkedin size={32} className="text-blue-600" />
          </a>
          <a href="mailto:jammulasriya@gmail.com" className={`p-4 rounded-full transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
            <Mail size={32} className="text-red-600" />
          </a>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className={`text-5xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h1>
      
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Who I Am</h2>
            <p className={`text-lg mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a final-year Computer Engineering student at UC San Diego experienced with CMOS VLSI fundamentals: 
              transistor-level gates, standard-cell design (combinational & sequential), memory circuits, sizing, 
              layout reasoning, and delay/power analysis.
            </p>
            <p className={`text-lg mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm proficient in Verilog/SystemVerilog RTL design & verification and computer architecture, 
              and familiar with industry physical synthesis and PD flows: RTL optimization, synthesis 
              (Fusion Compiler/Genus concepts), P&R, CTS, and STA, including SDC constraints, setup/hold timing, 
              corner-based analysis, and low-power implementation (UPF).
            </p>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              On the software side, I have hands-on experience with full-stack development, ML/AI frameworks, 
              and GenAI integration. I leverage RAG, Knowledge Graphs, MCP, and agentic workflows to automate 
              PD analysis workflows — as demonstrated by TapeOut AI, which was selected for a YC S26 interview.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="flex items-center mb-4">
              <Cpu className="text-green-600 mr-3" size={28} />
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Physical Design & CAD</h3>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Physical synthesis, PnR, CTS, STA, SDC/UPF constraints, PPA optimization, 
              and RTL-to-GDS flow automation with openROAD and industry EDA tools.
            </p>
          </div>
          
          <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="flex items-center mb-4">
              <Code className="text-blue-600 mr-3" size={28} />
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Software Engineering</h3>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Full-stack development with React, Node.js, Express, and cloud platforms. 
              Object-oriented design, REST APIs, and software QA practices.
            </p>
          </div>

          <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="flex items-center mb-4">
              <Bot className="text-purple-600 mr-3" size={28} />
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>GenAI & Automation</h3>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              RAG, MCP, Knowledge Graphs, Agentic AI workflows, LLM integration, 
              PEFT (LoRA), and instruction tuning for EDA automation.
            </p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className={`mt-12 p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="flex items-center mb-6">
          <GraduationCap className="text-blue-600 mr-4" size={32} />
          <div>
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>UC San Diego</h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>B.S in Computer Engineering • 2022 - 2026</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className={`font-semibold mb-4 text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Back-End (VLSI & PD):</h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              CMOS Digital Circuits, Combinational & Sequential Logic, Memory Design, VLSI CAD Tools, 
              PPA Analysis, Power Estimation & Optimization, Low-Power Design, RTL Synthesis
            </p>
          </div>
          <div>
            <h3 className={`font-semibold mb-4 text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Front-End (RTL):</h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              Digital Logic Design, RTL Design with SystemVerilog, FSM & Control Design, 
              Memory & Array Logic, Testbench Development & Simulation
            </p>
          </div>
          <div>
            <h3 className={`font-semibold mb-4 text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Software:</h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              Computer Architecture, Memory Systems, ISA, Advanced DSA, Algorithms, 
              Software Engineering, Operating Systems, Deep Learning, HPC, Full-Stack Development, Database Systems
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const SkillsPage = () => {
    const skillCategories = [
      { title: 'Physical Design', icon: Cpu, color: 'text-red-600', items: skills.physicalDesign },
      { title: 'Languages', icon: Code, color: 'text-blue-600', items: skills.languages },
      { title: 'Scripting & EDA', icon: Terminal, color: 'text-green-600', items: skills.scriptingEDA },
      { title: 'Logic Design & Hardware', icon: Wrench, color: 'text-orange-600', items: skills.logicDesign },
      { title: 'Web & Backend', icon: Database, color: 'text-purple-600', items: skills.webBackend },
      { title: 'AI/ML & GenAI', icon: Bot, color: 'text-pink-600', items: skills.aiGenAI },
      { title: 'Tools & Platforms', icon: Cloud, color: 'text-cyan-600', items: skills.toolsPlatforms }
    ];

    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className={`text-5xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Technical Skills</h1>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title} className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg ${category.title === 'Physical Design' ? 'md:col-span-2 xl:col-span-1' : ''}`}>
                <div className="flex items-center mb-6">
                  <Icon className={`${category.color} mr-4`} size={32} />
                  <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{category.title}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const ProjectsPage = () => (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className={`text-5xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Featured Projects</h1>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} ${project.highlight ? 'ring-2 ring-blue-500' : ''} hover:shadow-xl transition-shadow duration-300`}
          >
            <div className="p-8">
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                  {project.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-800">{project.badge}</span>
                  )}
                </div>
                <div className="flex space-x-2 mt-2 sm:mt-0">
                  {(project.type === 'hardware' || project.type === 'both') && <Cpu className="text-red-500" size={24} />}
                  {(project.type === 'software' || project.type === 'both') && <Code className="text-blue-500" size={24} />}
                  {project.highlight && <Award className="text-yellow-500" size={24} />}
                </div>
              </div>
              
              <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a href={project.github} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-semibold">
                  <Github size={18} />
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ExperiencePage = () => (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className={`text-5xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Experience</h1>
      
      <div className="relative">
        <div className={`absolute left-6 top-0 bottom-0 w-1 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full`}></div>
        
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-16 pb-12">
            <div className={`absolute left-4 w-4 h-4 rounded-full ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'} -translate-x-1/2`}></div>
            
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <div className="flex flex-wrap items-start justify-between mb-6">
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{exp.title}</h3>
                  <p className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{exp.company}</p>
                  <div className={`flex flex-wrap items-center gap-6 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <span className="flex items-center gap-2"><MapPin size={16} />{exp.location}</span>
                    <span className="flex items-center gap-2"><Calendar size={16} />{exp.period}</span>
                  </div>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  exp.type === 'internship' ? 'bg-green-100 text-green-800' :
                  exp.type === 'leadership' ? 'bg-purple-100 text-purple-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                </span>
              </div>
              
              <ul className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start">
                    <TrendingUp className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className={`text-5xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Let's Connect</h1>
      <p className={`text-xl text-center mb-16 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        I'm always open to discussing new opportunities in physical design, CAD, software engineering, and AI.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <a href="mailto:jammulasriya@gmail.com" className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-lg transition-all duration-200 group text-center`}>
          <Mail className="text-red-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-200" size={48} />
          <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email</h3>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>jammulasriya@gmail.com</p>
        </a>
        
        <a href="tel:+18589336668" className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-lg transition-all duration-200 group text-center`}>
          <Phone className="text-green-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-200" size={48} />
          <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Phone</h3>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>+1 (858) 933-6668</p>
        </a>
        
        <a href="https://linkedin.com/in/sriya-jammula1504" className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-lg transition-all duration-200 group text-center`}>
          <Linkedin className="text-blue-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-200" size={48} />
          <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>LinkedIn</h3>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Connect with me</p>
        </a>
        
        <a href="https://github.com/sriyajammula" className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-lg transition-all duration-200 group text-center`}>
          <Github className={`mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} size={48} />
          <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>GitHub</h3>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>View my code</p>
        </a>
      </div>
      
      <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg text-center`}>
        <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Download Resume</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
            <Download size={20} />
            Software Resume
          </a>
          <a href="#" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
            <Download size={20} />
            Hardware Resume
          </a>
        </div>
        <p className={`mt-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Tailored versions for software and hardware/PD positions
        </p>
      </div>
      
      <div className={`mt-12 text-center border-t pt-8 ${isDarkMode ? 'border-gray-600 text-gray-400' : 'border-gray-200 text-gray-500'}`}>
        <p>&copy; 2025 Sriya Jammula. Built with React & Tailwind CSS.</p>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'skills': return <SkillsPage />;
      case 'projects': return <ProjectsPage />;
      case 'experience': return <ExperiencePage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  // ─── MAIN LAYOUT ───────────────────────────────────────────────

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button
              onClick={() => navigateToPage('home')}
              className={`text-xl font-bold transition-colors duration-200 ${isDarkMode ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'}`}
            >
              Sriya Jammula
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigateToPage(item.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      currentPage === item.id
                        ? 'text-blue-600 bg-blue-50 font-semibold'
                        : isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile buttons */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden pb-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="pt-4 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => navigateToPage(item.id)}
                      className={`flex items-center gap-3 w-full text-left px-3 py-3 rounded-lg transition-colors duration-200 ${
                        currentPage === item.id
                          ? 'text-blue-600 font-semibold bg-blue-50'
                          : isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <Icon size={20} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="pt-16">
        {renderCurrentPage()}
      </main>
    </div>
  );
};

export default Portfolio;
