import { useState } from 'react'
import { MapPin, Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual Formspree endpoint
      const response = await fetch('https://formspree.io/f/xkgzljgj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New message from portfolio website'
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="section-padding bg-white/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-heading mb-4">
            Let's Build Something Together!
          </h2>
          <div className="w-20 h-1 bg-accent-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-text max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear from you. Let's discuss how we can bring 
            your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-heading mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-heading mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-heading mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-300 resize-vertical"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary flex items-center justify-center space-x-2 transition-all duration-300 ${
                  isSubmitting 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:transform hover:scale-105'
                }`}
              >
                <Send size={18} className={isSubmitting ? 'animate-pulse' : ''} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  <CheckCircle size={20} />
                  <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  <AlertCircle size={20} />
                  <span className="font-medium">Something went wrong. Please try again or contact me directly.</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-heading mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pastel-blue rounded-xl flex items-center justify-center">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-heading mb-1">Location</h4>
                    <p className="text-gray-text">Andhra Pradesh, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pastel-yellow rounded-xl flex items-center justify-center">
                    <Mail className="text-yellow-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-heading mb-1">Email</h4>
                    <a 
                      href="mailto:praneeshavoleti@gmail.com"
                      className="text-gray-text hover:text-accent-blue transition-colors duration-300"
                    >
                      praneeshavoleti@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-heading mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/praneesha-voleti-962b33294/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-pastel-blue rounded-xl flex items-center justify-center text-blue-600 hover:bg-accent-blue hover:text-white transition-all duration-300 hover:transform hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/praneesha17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-pastel-pink rounded-xl flex items-center justify-center text-pink-600 hover:bg-accent-pink hover:text-white transition-all duration-300 hover:transform hover:scale-110"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-pastel-yellow/80 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-heading mb-2">Ready to Collaborate?</h4>
              <p className="text-gray-text text-sm leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just 
                having a chat about technology and innovation. Feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact