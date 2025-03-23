import { education } from "../data/profile";

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-200 dark:bg-purple-900"></div>

          {education.map((edu, index) => (
            <div
              key={index}
              className={`mb-12 flex ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-1/2 px-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg group hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.school}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.years}
                  </p>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold mt-2">
                    {edu.grade}
                  </p>

                  <div className="overflow-hidden max-h-0 group-hover:max-h-48 transition-all duration-300">
                    <h4 className="text-sm font-semibold mt-4 mb-2">
                      Key Coursework:
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside">
                      {edu.coursework?.map((course, i) => (
                        <li key={i}>{course}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full mt-6"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
