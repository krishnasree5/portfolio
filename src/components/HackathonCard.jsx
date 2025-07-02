import { Calendar, Users, Lightbulb } from "lucide-react";

export default function HackathonCard({ hackathon, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div
        className={`flex flex-col lg:flex-row ${
          !isEven ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="lg:w-1/3">
          <img
            src={hackathon.image}
            alt={hackathon.title}
            className="w-full h-64 lg:h-full object-cover"
          />
        </div>
        <div className="lg:w-2/3 p-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="text-purple-500" size={20} />
            <span className="text-purple-600 dark:text-purple-400 font-semibold">
              {hackathon.date}
            </span>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {hackathon.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {hackathon.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {hackathon.teamSize && (
                <div className="flex items-center gap-3">
                  <Users className="text-purple-500" size={18} />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Team Size:</strong> {hackathon.teamSize}
                  </span>
                </div>
              )}

              {hackathon.techStack && hackathon.techStack.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-900 dark:text-gray-100">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {hackathon.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {hackathon.takeaways && hackathon.takeaways.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="text-purple-500" size={18} />
                  <span className="text-gray-900 dark:text-gray-100 font-semibold">
                    Key Takeaways:
                  </span>
                </div>
                <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                  {hackathon.takeaways.map((takeaway, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1 text-sm">•</span>
                      <span className="text-sm leading-relaxed">
                        {takeaway}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
