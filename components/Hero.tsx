export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
          Hi, I'm <span className="text-blue-600">Hiro</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
          Computer Science Student & Full-Stack Developer
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          I'm a passionate developer with experience in building scalable web applications,
          mobile apps, and cloud solutions. Currently exploring cloud architecture and
          modern web technologies.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg border border-gray-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

