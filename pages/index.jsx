import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Achievements from '../components/Achievements'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Praneesha Voleti - Full-Stack Developer</title>
        <meta name="description" content="Full-Stack Developer passionate about creating intelligent systems and beautiful interfaces that solve real-world problems." />
        <meta name="keywords" content="Full-Stack Developer, Machine Learning, React, ServiceNow, Web Development, Praneesha Voleti" />
        <meta name="author" content="Praneesha Voleti" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Praneesha Voleti - Full-Stack Developer" />
        <meta property="og:description" content="Full-Stack Developer passionate about creating intelligent systems and beautiful interfaces that solve real-world problems." />
        <meta property="og:image" content="/profile.jpg" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Praneesha Voleti - Full-Stack Developer" />
        <meta name="twitter:description" content="Full-Stack Developer passionate about creating intelligent systems and beautiful interfaces." />
        <meta name="twitter:image" content="/profile.jpg" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}