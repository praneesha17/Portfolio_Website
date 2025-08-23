import Image from 'next/image'

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-pastel-blue rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-pastel-pink rounded-full opacity-60 animate-float-delayed"></div>
        <div className="absolute bottom-32 left-32 w-28 h-28 bg-pastel-yellow rounded-full opacity-60 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-pastel-green rounded-full opacity-60 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-pastel-purple rounded-full opacity-60 animate-pulse-soft"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-pastel-orange rounded-full opacity-60 animate-pulse-soft"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-heading mb-6">
              Praneesha Voleti
            </h1>
            <p className="text-xl md:text-2xl text-gray-text mb-6 font-medium">
              Full-Stack Developer
            </p>
            <p className="text-lg text-gray-text mb-8 max-w-md mx-auto lg:mx-0">
              I build intelligent systems and beautiful interfaces that solve real-world problems
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>View My Work</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <a
                href="/Praneesha_Voleti_resume.pdf"  // 👉 place your resume in public/resume.pdf
                download
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <span>Download Resume</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/profile.png"
                  alt="Praneesha Voleti"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  // priority
                />
              </div>
              {/* Decorative elements around image */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent-blue rounded-full animate-pulse-soft"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent-pink rounded-full animate-float"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-accent-yellow rounded-full animate-pulse-soft"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
