import Link from 'next/link'
import { projects } from '@/lib/projectsData'

export default function Projects() {

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
            <Link
              key={index}
              href={`/projects/${project.slug}`}
              className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-200 hover:border-blue-400 cursor-pointer group"
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  View Details →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

