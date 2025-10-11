export default function Projects() {
  const projects = [
    {
      title: "OutfitEase",
      description: "Fashion outfit management app with Node.js backend and iOS frontend, helping users organize and plan their wardrobe.",
      techStack: ["Swift", "SwiftUI", "Node.js", "iOS"],
      github: "https://github.com/Hiroki0127/OutfitEase",
      demo: null
    },
    {
      title: "ToeicLearningAssistant",
      description: "An AI-powered study app designed to help learners prepare for the TOEIC exam with flashcards, progress tracking, and modern AI techniques.",
      techStack: ["TypeScript", "AI/ML", "React", "Node.js"],
      github: "https://github.com/Hiroki0127/ToeicLearningAssistant",
      demo: null
    },
    {
      title: "TastyCompass",
      description: "iOS restaurant discovery app built with SwiftUI and Node.js backend featuring location-based search, user reviews, favorites, and Google Places integration.",
      techStack: ["SwiftUI", "Node.js", "Google Places API", "iOS"],
      github: "https://github.com/Hiroki0127/TastyCompass",
      demo: null
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects showcasing my skills in web development,
          mobile apps, and cloud infrastructure.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                >
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

