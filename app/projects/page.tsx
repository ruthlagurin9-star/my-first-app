export const metadata = {
  title: "Projects | Ruth Lagurin",
  description: "A collection of projects by Ruth Lagurin.",
};

const projects = [
  {
    id: 1,
    title: "Personal Website",
    description:
      "A personal website created using Next.js to introduce myself and showcase my work.",
    technology: "Next.js and Tailwind CSS",
  },
  {
    id: 2,
    title: "Planning and Scheduling System",
    description:
      "A system designed to help users organize schedules and manage their activities.",
    technology: "React and Laravel",
  },
  {
    id: 3,
    title: "Mobile Application",
    description:
      "A mobile application project focused on creating a simple and user-friendly interface.",
    technology: "Flutter and Dart",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-blue-600 font-semibold mb-3">
          MY WORK
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          My Projects
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Here are some projects that represent my learning
          and experience in technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md p-7 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h2>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              <p className="text-sm text-blue-600 font-semibold">
                {project.technology}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
