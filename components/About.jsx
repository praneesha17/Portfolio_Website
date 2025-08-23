const About = () => {
  return (
    <section id="about" className="section-padding bg-white/50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-heading mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent-blue mx-auto"></div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="space-y-6">
              <p className="text-lg text-gray-text leading-relaxed">
                Hi! I'm Praneesha Voleti, a passionate Full-Stack Developer from Andhra Pradesh, India. I 
                specialize in creating intelligent systems that bridge the gap between complex algorithms and user-friendly interfaces.
              </p>
              
              <p className="text-lg text-gray-text leading-relaxed">
                My journey in technology has been driven by curiosity and a desire to solve real-world problems. 
                From developing healthcare scheduling systems to exploring the frontiers of artificial intelligence, I 
                bring both technical expertise and creative problem-solving to every project.
              </p>
            </div>

            <div className="mt-12">
              <div className="bg-pastel-yellow/80 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-heading mb-4 flex items-center">
                  <span className="text-2xl mr-3">💡</span>
                  Fun Fact
                </h3>
                <p className="text-gray-text leading-relaxed">
                  When I'm not coding, you can find me exploring the latest AI research papers or brainstorming innovative 
                  solutions to everyday problems. I believe technology should be accessible, intuitive, and genuinely helpful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About