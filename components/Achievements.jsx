import { Award, Zap, Trophy } from 'lucide-react'

const Achievements = () => {
  const achievements = [
   
    {
      icon: <Zap size={32} />,
      title: "Smart Coder – Smart Interviews (DSA)",
      description: "Achieved Bronze Certification in Data Structures & Algorithms from Smart Interviews, demonstrating strong problem-solving and coding skills.",
      year: "2025",
      category: "Certification",
      categoryColor: "bg-accent-purple text-purple-800",
      iconBg: "bg-pastel-pink",
      iconColor: "text-pink-600",
      link: "https://smartinterviews.in/certificate/cd35adab" 
     },
     {
      icon: <Award size={32} />,
      title: "ServiceNow Certified System Administrator (CSA)",
      description: "Certified in ServiceNow platform administration, demonstrating expertise in enterprise service management and workflow automation.",
      year: "2025",
      category: "Certification",
      categoryColor: "bg-accent-yellow text-yellow-800",
      iconBg: "bg-pastel-blue",
      iconColor: "text-blue-600",
      link: "https://drive.google.com/file/d/1ATuD2VsOHXW-4_yDaOmpmY5AylVKJ1VF/view?usp=drive_link" 
    },

    {
      icon: <Trophy size={32} />,
      title: "Hackathon Participation",
      description: "Active participant in multiple hackathons, developing innovative solutions under time constraints and collaborating with diverse teams.",
      year: "2023-2025",
      category: "Competition",
      categoryColor: "bg-accent-green text-green-800",
      iconBg: "bg-pastel-yellow",
      iconColor: "text-yellow-600",
      link: "https://drive.google.com/drive/folders/1Nvw_JdaW7d6iOXNISJWxZK5wtxftzc52?usp=drive_link"
    }
  ]

  return (
    <section id="achievements" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-heading mb-4">
            Certificates & Achievements
          </h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-text max-w-2xl mx-auto">
            Recognition of my commitment to continuous learning and professional development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg card-hover">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${achievement.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <div className={achievement.iconColor}>
                    {achievement.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${achievement.categoryColor}`}>
                      {achievement.category}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">
                      {achievement.year}
                    </span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-heading mt-4 mb-3">
                {achievement.title}
              </h3>
              
              <p className="text-gray-text leading-relaxed">
                {achievement.description}
              </p>

              {achievement.link && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm font-medium text-accent-blue hover:underline"
                >
                  View Certificate →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
