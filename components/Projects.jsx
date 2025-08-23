import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "LeaveEase: Smart Leave Management & Automation Portal",
      description:
        "A role-based leave management system for students, faculty, and administrators with multi-step approval workflows, real-time notifications, and analytics dashboard. Includes leave balance tracking, conflict detection with holiday calendar, and document uploads.",
      image: "/project2.png",
      technologies: ["Django", "PostgreSQL", "HTML5", "CSS3", "JavaScript"],
      category: "Web Application",
      categoryColor: "bg-accent-blue text-blue-800",
      // demoUrl: "https://github.com/praneesha17/LeaveEase",
      githubUrl: "https://github.com/praneesha17/LeaveEase",
    },
    {
      
      id: 2, 
      title: "Med Visit Scheduler", 
      description: "A comprehensive healthcare scheduling system that streamlines appointment booking for medical facilities. Features include secure patient management, doctor availability tracking, automated appointment reminders, and real-time booking. The system supports role-based authentication for doctors, patients, and staff, ensuring secure and efficient access. Patients can view doctor schedules, manage their history, and receive notifications.",
       image: "/project1.png",
       technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS" ], 
       category: "Web Application", 
       categoryColor: "bg-accent-yellow text-yellow-800",
      //  demoUrl: "https://github.com/praneesha17/med_visit_schedular",
       githubUrl: "https://github.com/praneesha17/med_visit_schedular"
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-heading mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-accent-pink mx-auto mb-6"></div>
          <p className="text-lg text-gray-text max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in 
            full-stack development .
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full ${project.categoryColor}`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-heading mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-text mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-pastel-blue text-blue-800 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                  
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-text hover:text-gray-heading transition-colors duration-300"
                    >
                      <Github size={18} />
                      <span className="font-medium">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-text mb-6">
            Want to see more projects or discuss a collaboration?
          </p>
          <button
            onClick={() =>
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;