export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Let's Connect
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, opportunities, or just having a chat.
          Feel free to reach out!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hiro127@my.yorku.ca"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg font-medium"
          >
            📧 Email Me
          </a>
          <a
            href="https://github.com/Hiroki0127"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg font-medium"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hiro-mukai-8758a6273"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg font-medium"
          >
            LinkedIn
          </a>
        </div>
      </div>
      
      <footer className="mt-20 pt-8 border-t border-gray-200">
        <p className="text-center text-gray-600">
          © 2025 Hiro. Built with Next.js & Tailwind CSS.
        </p>
      </footer>
    </section>
  )
}

