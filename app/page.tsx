import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="bg-white rounded-2xl shadow-lg p-10 md:p-16">
          <p className="text-blue-600 font-semibold mb-4">
            WELCOME TO MY PERSONAL WEBSITE
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hello, I am <span className="text-blue-600">Ruth Lagurin!</span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            I am a BSIT student from Mater Dei College,
            passionate about learning technology and
            exploring the world of web development.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            I enjoy playing with cats and dogs. They bring
            happiness and fun to my everyday life.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            During my free time, I love playing online games
            and watching K-dramas.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              See My Projects →
            </Link>

            <Link
              href="/about"
              className="border border-gray-300 text-gray-700 px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              About Me
            </Link>
          </div>
        </div>

        <p className="text-center text-gray-400 mt-8 text-sm">
          © 2026 Ruth Lagurin | My Personal Website
        </p>
      </section>
    </main>
  );
}
