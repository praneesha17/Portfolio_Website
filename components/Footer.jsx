import { Linkedin, Github, Mail, MapPin, Briefcase } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-heading">Praneesha Voleti</h3>
            <p className="text-gray-text text-sm leading-relaxed">
              Full-Stack Developer passionate about creating intelligent systems and beautiful interfaces that solve real-world problems.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/praneesha-voleti-962b33294/"
                target="_blank"
                className="w-10 h-10 bg-pastel-blue rounded-lg flex items-center justify-center text-blue-600 hover:bg-accent-blue hover:text-white transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/praneesha17"
                target="_blank"
                className="w-10 h-10 bg-pastel-pink rounded-lg flex items-center justify-center text-pink-600 hover:bg-accent-pink hover:text-white transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:praneeshavoleti@gmail.com"
                className="w-10 h-10 bg-pastel-yellow rounded-lg flex items-center justify-center text-yellow-600 hover:bg-accent-yellow hover:text-white transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-heading">Quick Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-text hover:text-accent-blue transition-colors duration-300 text-left text-sm py-1"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Get In Touch */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-heading">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-gray-text text-sm">Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gray-400" />
                <span className="text-gray-text text-sm">praneeshavoleti@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Briefcase size={16} className="text-gray-400" />
                <span className="text-gray-text text-sm">Open for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex justify-center items-center">
            <p className="text-gray-text text-sm text-center">
              © {currentYear} Praneesha Voleti. All rights reserved.
            </p>
          </div>
        </div>

        {/* Fun Footer Message */}
        <div className="mt-6 text-center">
          <div className="bg-pastel-yellow/50 rounded-lg px-4 py-2 inline-block">
            <p className="text-sm text-yellow-800">
              <span className="font-medium">💡 Always excited to discuss new projects and innovative ideas!</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
