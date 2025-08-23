import Link from 'next/link'
import Head from 'next/head'
import { Home, ArrowLeft } from 'lucide-react'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Praneesha Voleti</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>

      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background decorative blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-pastel-blue rounded-full opacity-60 animate-float"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-pastel-pink rounded-full opacity-60 animate-float-delayed"></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-pastel-yellow rounded-full opacity-60 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 bg-pastel-green rounded-full opacity-60 animate-float-delayed"></div>
        </div>

        <div className="text-center relative z-10 px-4">
          <div className="mb-8">
            <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-heading mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-gray-text mb-8 max-w-md mx-auto">
              The page you're looking for seems to have wandered off into the digital void. 
              Let's get you back on track!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/" className="btn-primary flex items-center space-x-2">
              <Home size={18} />
              <span>Go Home</span>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="btn-secondary flex items-center space-x-2"
            >
              <ArrowLeft size={18} />
              <span>Go Back</span>
            </button>
          </div>

          <div className="mt-12 bg-white/70 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-gray-heading mb-2">
              Looking for something specific?
            </h3>
            <p className="text-gray-text text-sm">
              Check out my projects, skills, or feel free to get in touch. I'm always happy to help!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}