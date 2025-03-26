import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import backgroundImg from './assets/modernbio05.png';
import avatarImg from './assets/avatar.png';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 100; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* Removed backdrop-blur */}
      </div>

      {/* Floating Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className={`mx-auto max-w-7xl px-8 border-2 border-gray-700 bg-gray-900/60 backdrop-blur-md shadow-lg ${isMobileMenuOpen ? 'rounded-2xl' : 'rounded-full'}`}>
          <div className="flex items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={avatarImg}
                alt="Avatar"
                className="h-10 w-10 rounded-full"
              />
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex flex-grow justify-center">
              <div className="flex items-center space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors">Home</button>
                <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors">Projects</button>
                <button onClick={() => scrollToSection('blog')} className="text-gray-300 hover:text-white transition-colors">Blog</button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://github.com/gerharddev" target='_blank' className="text-gray-300 hover:text-white transition-colors relative" data-tooltip="Visit my GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/gerhard-maree-90a77083/" target='_blank' className="text-gray-300 hover:text-white transition-colors" data-tooltip="Visit my LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden ml-auto">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden px-4 py-4 border-t border-gray-700">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-gray-300 hover:text-white transition-colors">Home</button>
                <button onClick={() => scrollToSection('projects')} className="text-left text-gray-300 hover:text-white transition-colors">Projects</button>
                <button onClick={() => scrollToSection('blog')} className="text-left text-gray-300 hover:text-white transition-colors">Blog</button>
                <div className="flex space-x-4 pt-2">
                  <a href="https://github.com/gerharddev" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/gerhard-maree-90a77083/" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-10 px-4 flex-grow">
        <div className="max-w-7xl mx-auto">
          {/* Home Section */}
          <section id="home" className="min-h-screen flex items-center justify-center pt-16 md:pt-0">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl w-full max-w-5xl">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-white mb-8">Hi! I'm Gerhard</h1>
                <h3 className="text-xl text-white font-bold">Tech Enthusiast & Problem Solver</h3>
                <br />
                <p className="text-l text-gray-200 max-w-4xl mx-auto">
                  I've been involved in the world of software for over 25 years, and I truly love what I do! I focus on building large-scale systems, crafting robust software architectures, and ensuring seamless cloud solutions.
                  <br /><br />
                  Currently, I'm a Lead Developer and Solutions Architect at SMS digital GmbH, where I get to play with cool tech and help drive innovation. It's all about finding smart solutions and making things work better.
                </p>
                <br />
                <h3 className="text-xl text-white font-bold">What I'm Good At:</h3>
                <div className="text-l text-gray-200 max-w-4xl mx-auto text-left">
                  ✅ <strong>Building Awesome Architectures</strong> – Using tools like C#, .NET, Python, React, and TypeScript to create scalable solutions.<br />
                  ✅ <strong>Cloud & DevOps Magic</strong> – Utilizing AWS, Azure DevOps, and GitHub for version control, CI/CD pipelines, and automation.<br />
                  ✅ <strong>Guiding & Inspiring</strong> – Mentoring teams, sharing best practices, and pushing for innovation.
                </div>
                <br />
                <p className="text-l text-gray-200 max-w-3xl mx-auto">
                  I'm super passionate about tackling tough challenges and creating solutions that make a real difference.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="min-h-screen py-20">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">Centralized SSO (Keycloak)</h3>
                  <p className="text-gray-200">
                    Implemented a secure Single Sign-On (SSO) solution using Keycloak, enhancing user authentication and access management across company applications.
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">Automated Contract Acceptance (DocuSign Integration)</h3>
                  <p className="text-gray-200">
                    Streamlined contract workflows by integrating DocuSign, automating acceptance processes and reducing manual effort.
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">CICD Pipeline Automation</h3>
                  <p className="text-gray-200">
                    Developed and implemented a robust CI/CD pipeline using GitHub Actions and AWS, enabling rapid and reliable deployments for a new startup.
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">Application Platform & Mobile App Development</h3>
                  <p className="text-gray-200">
                    Led the redevelopment of the company's online insurance application platform and created a mobile application for agents, enhancing accessibility and sales efficiency.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Section */}
          <section id="blog" className="min-h-screen py-20">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-6">Blog</h2>
              <div className="space-y-8">
                <article className="border-b border-white/10 pb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Quickly create a .Net 6 minimal API with swagger documentation</h3>
                  <p className="text-gray-200 mb-4">
                    Guide to rapidly building a .NET 6 Minimal API with integrated Swagger documentation for efficient development and testing.
                  </p>
                  <a href="https://medium.com/@gerhardmaree/quickly-create-a-net-6-minimal-api-with-swagger-documentation-720d88db79fb" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">Read more →</a>
                </article>
                <article className="border-b border-white/10 pb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Route handler filters with .Net 7 preview 3</h3>
                  <p className="text-gray-200 mb-4">
                    Exploring and implementing route handler filters in .NET 7 Preview 3 for enhanced request processing and validation
                  </p>
                  <a href="https://medium.com/@gerhardmaree/route-handler-filters-with-net-7-preview-3-fd98126a3fbb" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">Read more →</a>
                </article>
                <article className="border-b border-white/10 pb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">C# Source Generators (Metaprogramming)</h3>
                  <p className="text-gray-200 mb-4">
                    An introduction to C# Source Generators, demonstrating how to automate code generation and enhance development efficiency through metaprogramming.
                  </p>
                  <a href="https://medium.com/@gerhardmaree/c-source-generators-metaprogramming-ce014c1744aa" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">Read more →</a>
                </article>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900/60 backdrop-blur-md border-t border-gray-700 py-4 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-300">© 2025 Gerhard Maree. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;