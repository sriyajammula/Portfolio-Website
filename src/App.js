import React, { useState } from 'react';
import { 
  Menu, X, Download, ExternalLink, Github, Linkedin, Mail, 
  Phone, Moon, Sun, ChevronDown, MapPin, Calendar, Code, 
  Cpu, Database, Cloud, Bot, Monitor, Award, Users, TrendingUp,
  User, Briefcase, FolderOpen, GraduationCap
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
    languages: ['Python', 'Java', 'C/C++', 'JavaScript', 'Assembly', 'Verilog', 'SystemVerilog', 'VHDL'],
    frameworks: ['React', 'Node.js', 'TensorFlow', 'PyTorch', 'scikit-learn', 'HuggingFace'],
    cloudDevOps: ['AWS', 'Azure', 'GCP', 'Docker', 'Linux', 'Bash', 'Git/GitHub'],
    aiGenAI: ['GitHub Copilot', 'RAG', 'MCP', 'Agentic AI', 'LLMs', 'Deep Learning'],
    hardwareVLSI: ['RTL Design', 'FPGA', 'EDA Tools', 'Synthesis', 'STA', 'P&R', 'QuestaSim', 'Vivado', 'Synopsys']
  };

  const projects = [
    {
      title: 'VLSI Copilot',
      description: 'Fine-tuned Gemma-3-270M with LoRA/PEFT and integrated RAG + MCP tools for automated Verilog code generation, improving RTL design productivity.',
      technologies: ['Python', 'Gemma-3', 'LoRA', 'RAG', 'MCP', 'Verilog'],
      github: 'https://github.com/sriyajammula',
      type: 'hardware',
      highlight: true
    },
    {
      title: 'AI-Powered PR Reviewer',
      description: 'Privacy-first VS Code extension with local LLM integration via Ollama. Reduces actionable feedback by 30% through git diff analysis and acceptance criteria matching.',
      technologies: ['VS Code API', 'Ollama', 'OpenAI', 'Azure', 'Anthropic', 'TypeScript'],
      github: 'https://github.com/sriyajammula',
      type: 'software',
      highlight: true
    },
    {
      title: 'Custom 9-bit MIPS Processor',
      description: 'Engineered from scratch with unique ISA, opcodes, and instruction formats. Implemented ALU, Control Unit, register file, and memory in SystemVerilog with comprehensive testbenches.',
      technologies: ['SystemVerilog', 'MIPS', 'RTL Design', 'Testbenches', 'Digital Logic'],
      github: 'https://github.com/sriyajammula',
      type: 'hardware'
    },
    {
      title: 'Low-Price Center E-commerce Platform',
      description: 'Led 6-7 member team to build secure e-commerce platform supporting 1,000+ users. Implemented CI/CD pipelines and code reviews, reducing development cycle time by 20%.',
      technologies: ['React', 'Node.js', 'MongoDB', 'CI/CD', 'GitHub'],
      github: 'https://github.com/sriyajammula',
      demo: '#',
      type: 'software'
    },
    {
      title: 'Marine Sensor Data Acquisition',
      description: 'Programmed microcontrollers in Simplicity Studio for precise, low-latency sensor data acquisition in marine applications. Refined hardware integration processes.',
      technologies: ['C', 'Microcontrollers', 'Simplicity Studio', 'Hardware Integration'],
      github: 'https://github.com/sriyajammula',
      type: 'hardware'
    },
    {
      title: 'Rocket Engine Hardware Design',
      description: 'Developed custom hardware for UCSD\'s Halya rocket engine. Recreated ESP32 schematics and board design for data acquisition and solenoid control systems.',
      technologies: ['PCB Design', 'ESP32', 'Schematics', 'Hardware Design'],
      github: 'https://github.com/sriyajammula',
      type: 'hardware'
    }
  ];

  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Matson Money',
      location: 'Phoenix, Arizona',
      period: '06/2025 - Ongoing',
      type: 'internship',
      achievements: [
        'Delivered end-to-end client portal features connecting React UIs with Node.js/REST services',
        'Integrated secure third-party APIs and token-based authentication for new data sources',
        'Reduced help-desk tickets by 7% through automation and production defect fixes'
      ]
    },
    {
      title: 'Engineering Manager',
      company: 'Computer Science and Engineering Society, UC San Diego',
      location: 'California',
      period: '06/2025 - Ongoing',
      type: 'leadership',
      achievements: [
        'Led 6–7 member team building Low-Price Center e-commerce platform for 1,000+ users',
        'Coordinated code reviews, CI/CD pipelines, and GitHub management',
        'Reduced development cycle time by 20% through process optimization'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Intel India Tech Pvt Ltd',
      location: 'India',
      period: '06/2024 - 09/2024',
      type: 'internship',
      achievements: [
        'Mentored by Senior Graphics Hardware Engineer on physical design flow',
        'Built ML models with NumPy, scikit-learn, TensorFlow for regression, classification, clustering',
        'Optimized neural networks (CNNs, RNNs, LSTMs) reducing model error by 10%',
        'Developed deep RL models with 15% faster convergence for sequential decision-making'
      ]
    },
    {
      title: 'Computer Engineering Student Aide',
      company: 'Scripps MOD Lab, UC San Diego',
      location: 'California',
      period: '09/2023 - 06/2024',
      type: 'research',
      achievements: [
        'Programmed microcontrollers in Simplicity Studio for marine sensor applications',
        'Refined hardware integration processes, reducing setup/calibration by 15%'
      ]
    },
    {
      title: 'Undergraduate Student Researcher',
      company: 'Boolean Lab, UC San Diego',
      location: 'California',
      period: '09/2023 - 06/2024',
      type: 'research',
      achievements: [
        'Engaged in cancer cell annotation image analysis through GUI development',
        'Processed and analyzed complex gene expression datasets'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Custom Health',
      location: 'Mountain View, California',
      period: '06/2023 - 09/2024',
      type: 'internship',
      achievements: [
        'Spearheaded automation using TestCafe framework, improving testing efficiency by 5%',
        'Implemented containerization using Docker and mastered agile methodologies',
        'Instituted efficient QA processes including automated, regression and UAT testing'
      ]
    },
    {
      title: 'Electrical Engineer',
      company: 'Students For Exploration and Development of Space, UC San Diego',
      location: 'California',
      period: '09/2023 - 06/2024',
      type: 'project',
      achievements: [
        'Developed custom hardware for UCSD\'s Halya rocket engine',
        'Recreated ESP32 schematics and board design for data acquisition and solenoid control'
      ]
    }
  ];

  // Navigation items with icons
  const navItems = [
    { id: 'home', label: 'Home', icon: Monitor },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  // Page Components
  const HomePage = () => (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className={`text-6xl md:text-7xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Sriya Jammula
        </h1>
        <p className={`text-2xl md:text-3xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Computer Engineering @ UC San Diego
        </p>
        <p className={`text-xl mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
          SWE & VLSI Enthusiast
        </p>
        <p className={`text-lg mb-12 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Final-year Computer Engineering student specializing in full-stack development, AI/GenAI, and hardware design. 
          Passionate about bridging software innovation with hardware optimization.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold"
          >
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
          <a
            href="https://github.com/sriyajammula"
            className={`p-4 rounded-full transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            <Github size={32} className={isDarkMode ? 'text-gray-300' : 'text-gray-700'} />
          </a>
          <a
            href="https://linkedin.com/in/sriya-jammula1504"
            className={`p-4 rounded-full transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            <Linkedin size={32} className="text-blue-600" />
          </a>
          <a
            href="mailto:sjammula@ucsd.edu"
            className={`p-4 rounded-full transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            <Mail size={32} className="text-red-600" />
          </a>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className={`text-5xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        About Me
      </h1>
      
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Personal Introduction */}
        <div className="lg:col-span-2">
          <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8`}>
            <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Who I Am
            </h2>
            <p className={`text-lg mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a final-year Computer Engineering student at UC San Diego with a unique blend of software development 
              and hardware design expertise. My passion lies at the intersection of cutting-edge AI technologies and 
              efficient hardware architectures.
            </p>
            <p className={`text-lg mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              With hands-on experience in full-stack development, machine learning, and VLSI design, I bring a 
              comprehensive approach to solving complex technical challenges. I'm particularly interested in 
              leveraging GenAI tools to accelerate both software development and hardware design workflows.
            </p>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Currently interning at Matson Money as a Software Engineer, I'm continuously exploring ways to 
              integrate AI automation into traditional development processes while maintaining a strong foundation 
              in computer architecture and digital systems.
            </p>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="space-y-6">
          <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="flex items-center mb-4">
              <Code className="text-blue-600 mr-3" size={28} />
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Software Development
              </h3>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Full-stack development with React, Node.js, and cloud platforms. Experience with AI/ML frameworks 
              and GenAI integration.
            </p>
          </div>
          
          <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="flex items-center mb-4">
              <Cpu className="text-green-600 mr-3" size={28} />
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Hardware & VLSI
              </h3>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              RTL design, verification, and physical design flows. Proficient in Verilog/SystemVerilog and 
              EDA tool chains from synthesis to GDSII.
            </p>
          </div>

          <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="flex items-center mb-4">
              <Bot className="text-purple-600 mr-3" size={28} />
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                AI & Innovation
              </h3>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Specializing in GenAI applications, from fine-tuning models for VLSI workflows to building 
              AI-powered development tools.
            </p>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className={`mt-12 p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="flex items-center mb-6">
          <GraduationCap className="text-blue-600 mr-4" size={32} />
          <div>
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              UC San Diego
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              B.S in Computer Engineering • Expected June 2026
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className={`font-semibold mb-4 text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Computer Science Focus:
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              Advanced Data Structures & Algorithms, Software Engineering, Operating Systems, 
              Computer Architecture, High-Performance Computing, Full-Stack Development & APIs, 
              Database Systems, Deep Learning
            </p>
          </div>
          <div>
            <h3 className={`font-semibold mb-4 text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Electrical Engineering Focus:
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              Finite State Machines, Processor Design, Control Systems, Memory Architecture, 
              Instruction Set Architecture, CMOS Logic Design, Sequential Circuits, 
              Linear Systems & Signal Processing
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const SkillsPage = () => (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className={`text-5xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Technical Skills
      </h1>
      
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Programming Languages */}
        <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="flex items-center mb-6">
            <Code className="text-blue-600 mr-4" size={32} />
            <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Languages
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {skills.languages.map((skill) => (
              <div
                key={skill}
                className={`px-4 py-3 rounded-lg text-center font-medium transition-colors duration-200 ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="flex items-center mb-6">
            <Database className="text-green-600 mr-4" size={32} />
            <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Frameworks
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {skills.frameworks.map((skill) => (
              <div
                key={skill}
                className={`px-4 py-3 rounded-lg text-center font-medium transition-colors duration-200 ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Cloud & DevOps */}
        <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="flex items-center mb-6">
            <Cloud className="text-purple-600 mr-4" size={32} />
            <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Cloud & DevOps
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {skills.cloudDevOps.map((skill) => (
              <div
                key={skill}
                className={`px-4 py-3 rounded-lg text-center font-medium transition-colors duration-200 ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* AI & GenAI */}
        <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="flex items-center mb-6">
            <Bot className="text-orange-600 mr-4" size={32} />
            <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              AI & GenAI
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {skills.aiGenAI.map((skill) => (
              <div
                key={skill}
                className={`px-4 py-3 rounded-lg text-center font-medium transition-colors duration-200 ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Hardware & VLSI */}
        <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg lg:col-span-2 xl:col-span-1`}>
          <div className="flex items-center mb-6">
            <Cpu className="text-red-600 mr-4" size={32} />
            <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Hardware & VLSI
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {skills.hardwareVLSI.map((skill) => (
              <div
                key={skill}
                className={`px-4 py-3 rounded-lg text-center font-medium transition-colors duration-200 ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proficiency Legend */}
      <div className={`mt-12 p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg text-center`}>
        <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Core Competencies
        </h3>
        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Experienced in both software development and hardware design with strong foundations in computer architecture, 
          full-stack development, AI/ML, and VLSI design flows. Passionate about leveraging GenAI to enhance productivity 
          across all technical domains.
        </p>
      </div>
    </div>
  );

  const ProjectsPage = () => (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className={`text-5xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Featured Projects
      </h1>
      
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} ${project.highlight ? 'ring-2 ring-blue-500' : ''} hover:shadow-xl transition-shadow duration-300`}
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <div className="flex space-x-2">
                  {project.type === 'hardware' && <Cpu className="text-red-500" size={24} />}
                  {project.type === 'software' && <Code className="text-blue-500" size={24} />}
                  {project.highlight && <Award className="text-yellow-500" size={24} />}
                </div>
              </div>
              
              <p className={`text-gray-600 mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
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
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-semibold"
                >
                  <Github size={18} />
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors duration-200 font-semibold"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Categories Info */}
      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="flex items-center mb-4">
            <Code className="text-blue-600 mr-3" size={28} />
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Software Projects
            </h3>
          </div>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Full-stack applications, AI-powered tools, and automation solutions that demonstrate 
            proficiency in modern development practices and emerging technologies.
          </p>
        </div>

        <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="flex items-center mb-4">
            <Cpu className="text-red-600 mr-3" size={28} />
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Hardware Projects
            </h3>
          </div>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            RTL designs, processor architectures, and embedded systems that showcase expertise 
            in digital logic design and hardware-software integration.
          </p>
        </div>
      </div>
    </div>
  );

  const ExperiencePage = () => (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className={`text-5xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Experience & Education
      </h1>
      
      {/* Education Section */}
      <div className={`mb-16 p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="flex items-center mb-8">
          <GraduationCap className="text-blue-600 mr-4" size={36} />
          <div>
            <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              UC San Diego
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              B.S in Computer Engineering • Expected June 2026
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className={`font-bold mb-4 text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Computer Science Coursework:
            </h3>
            <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>• Advanced Data Structures & Algorithms</li>
              <li>• Design & Analysis of Algorithms</li>
              <li>• Software Engineering</li>
              <li>• Operating Systems</li>
              <li>• Computer Architecture</li>
              <li>• High-Performance Computing</li>
              <li>• Full-Stack Development & APIs</li>
              <li>• Database Systems</li>
              <li>• Deep Learning</li>
            </ul>
          </div>
          <div>
            <h3 className={`font-bold mb-4 text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Electrical Engineering Coursework:
            </h3>
            <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>• Finite State Machines</li>
              <li>• Processor Design</li>
              <li>• Control Design</li>
              <li>• Memory Systems</li>
              <li>• Instruction Set Architecture</li>
              <li>• Field Effect Transistors</li>
              <li>• CMOS Combinational Logic</li>
              <li>• Sequential Circuits</li>
              <li>• Linear Systems & Signal Processing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        <div className={`absolute left-6 top-0 bottom-0 w-1 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-full`}></div>
        
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-16 pb-12">
            <div className={`absolute left-4 w-4 h-4 rounded-full ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'} -translate-x-1/2`}></div>
            
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <div className="flex flex-wrap items-start justify-between mb-6">
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {exp.title}
                  </h3>
                  <p className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {exp.company}
                  </p>
                  <div className={`flex flex-wrap items-center gap-6 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <span className="flex items-center gap-2">
                      <MapPin size={16} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      {exp.period}
                    </span>
                  </div>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  exp.type === 'internship' ? 'bg-green-100 text-green-800' :
                  exp.type === 'leadership' ? 'bg-purple-100 text-purple-800' :
                  exp.type === 'research' ? 'bg-blue-100 text-blue-800' :
                  'bg-orange-100 text-orange-800'
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
      <h1 className={`text-5xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Let's Connect
      </h1>
      <p className={`text-xl text-center mb-16 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        I'm always open to discussing new opportunities, collaborations, or interesting projects.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <a
          href="mailto:sjammula@ucsd.edu"
          className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-lg transition-all duration-200 group text-center`}
        >
          <Mail className="text-red-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-200" size={48} />
          <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email</h3>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>sjammula@ucsd.edu</p>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Primary contact method</p>
        </a>
        
        <a
          href="mailto:jammulasriya@gmail.com"
          className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-lg transition-all duration-200 group text-center`}
        >
          <Mail className="text-red-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-200" size={48} />
          <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Personal Email</h3>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>jammulasriya@gmail.com</p>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Alternative contact</p>
        </a>
        
        <a
          href="https://linkedin.com/in/sriya-jammula1504"
          className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-lg transition-all duration-200 group text-center`}
        >
          <Linkedin className="text-blue-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-200" size={48} />
          <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>LinkedIn</h3>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>Connect with me</p>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Professional networking</p>
        </a>
        
        <a
          href="https://github.com/sriyajammula"
          className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-lg transition-all duration-200 group text-center`}
        >
          <Github className={`mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} size={48} />
          <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>GitHub</h3>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>View my code</p>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Open source contributions</p>
        </a>
      </div>
      
      <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg text-center`}>
        <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Download Resume
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
          >
            <Download size={20} />
            Software Resume
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold"
          >
            <Download size={20} />
            Hardware Resume
          </a>
        </div>
        <p className={`mt-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Different versions optimized for software and hardware positions
        </p>
      </div>
      
      <div className={`mt-12 text-center border-t pt-8 ${isDarkMode ? 'border-gray-600 text-gray-400' : 'border-gray-200 text-gray-500'}`}>
        <p>&copy; 2025 Sriya Jammula. Built with React & Tailwind CSS.</p>
      </div>
    </div>
  );

  // Render current page
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

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <button
                onClick={() => navigateToPage('home')}
                className={`text-xl font-bold transition-colors duration-200 ${isDarkMode ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'}`}
              >
                Sriya Jammula
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
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

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className={`md:hidden pb-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} border-t`}>
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

      {/* Main Content */}
      <main className="pt-16">
        {renderCurrentPage()}
      </main>
    </div>
  );
};

export default Portfolio;
