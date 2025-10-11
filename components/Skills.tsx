export default function Skills() {
  const skills = [
    "Node.js",
    "Express",
    "PostgreSQL",
    "SwiftUI",
    "AWS (SAA)",
    "Randoop",
    "Java",
    "Python",
    "C++",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS"
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Skills & Technologies
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-400 cursor-default"
            >
              <span className="text-gray-800 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

