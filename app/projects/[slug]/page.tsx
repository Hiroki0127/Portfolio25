import { getProjectBySlug, projects } from '@/lib/projectsData'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link
            href="/#projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Project Title & Short Description */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {project.shortDescription}
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg font-medium"
            >
              View on GitHub →
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg font-medium"
              >
                Live Demo →
              </a>
            )}
          </div>
        </div>

        {/* Demo Video Section */}
        {project.demoVideo && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Demo Video</h2>
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg">
              {/* Replace with actual video embed */}
              <iframe
                src={project.demoVideo}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {/* Screenshots Section */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-video flex items-center justify-center"
                >
                  {/* Placeholder - replace with actual images */}
                  <div className="text-gray-500 text-center p-8">
                    <p className="font-medium">Screenshot {index + 1}</p>
                    <p className="text-sm mt-2">Add your image to:</p>
                    <p className="text-xs font-mono mt-1">{screenshot}</p>
                  </div>
                  {/* Uncomment when you have images:
                  <Image
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Purpose & Goal Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Purpose & Goal
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {project.purpose}
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Project Goals
            </h3>
            <ul className="space-y-3">
              {project.goals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold text-xl">•</span>
                  <span className="text-gray-700 leading-relaxed">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Tech Stack & Implementation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:border-blue-400 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-base font-medium">
                    {tech.name}
                  </span>
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Problems & Solutions Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Challenges & Solutions
          </h2>
          <div className="space-y-6">
            {project.problems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md border border-gray-200"
              >
                <div className="flex items-start mb-4">
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-lg text-sm font-semibold mr-4">
                    Challenge {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.problem.split(':')[0]}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {item.problem.split(':')[1]}
                </p>
                <div className="border-l-4 border-green-500 pl-6 bg-green-50 p-4 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-green-800 mb-2">
                    Solution
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer navigation */}
        <div className="border-t border-gray-200 pt-12">
          <Link
            href="/#projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-lg"
          >
            ← Back to all projects
          </Link>
        </div>
      </div>
    </main>
  )
}

