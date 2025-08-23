import { Code, Globe, Database, Brain, Settings, Award } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: "Programming Languages",
      color: "bg-pastel-blue",
      iconColor: "text-blue-600",
      skills: ["Python", "Java", "JavaScript", "SQL"]
    },
    {
      icon: <Globe size={32} />,
      title: "Web Development", 
      color: "bg-pastel-purple",
      iconColor: "text-purple-600",
      skills: ["HTML5", "CSS3", "React", "Node.js"]
    },
    {
      icon: <Database size={32} />,
      title: "Database & Backend",
      color: "bg-pastel-yellow",
      iconColor: "text-yellow-600", 
      skills: ["MySQL", "REST APIs", "PHP"]
    },
    {
      icon: <Settings size={32} />,
      title: "Tools & Platforms",
      color: "bg-pastel-pink",
      iconColor: "text-pink-600",
      skills: ["VS Code", "XAMPP", "ServiceNow","Pycharm","GitHub"]
    },
    {
    icon: <Award size={32} />,
    title: "Soft Skills",
    color: "bg-pastel-green",
    iconColor: "text-green-600",
    skills: ["Communication", "Teamwork", "Problem-Solving", "Adaptability", "Leadership"]
  }

  ]

  return (
    <section id="skills" className="section-padding bg-white/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-heading mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-accent-purple mx-auto mb-6"></div>
          <p className="text-lg text-gray-text max-w-2xl mx-auto">
            A comprehensive toolkit spanning frontend, backend, AI/ML, and emerging technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover"
            >
              <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                <div className={category.iconColor}>
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-heading text-center mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-center">
                    <span className="inline-block px-3 py-2 bg-gray-100 text-gray-text text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills