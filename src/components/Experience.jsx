import { experience } from '../data/profile';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto relative">

          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-200 dark:bg-purple-900"></div>
          
          {experience.map((exp, index) => (
            <div key={index} className={`mb-12 flex ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-1/2 px-6">
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-purple-600 dark:text-purple-400">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-400">{exp.years}</p>
                  <p className="mt-2">{exp.description}</p>
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