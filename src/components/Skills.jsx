import { Code2, Database, Layout, Server } from "lucide-react";
import { skillCategories } from "../data/profile";

const iconComponents = {
  Code2,
  Layout,
  Server,
  Database,
};

const SkillCategory = ({ title, items, icon }) => {
  const IconComponent = iconComponents[icon];

  return (
    <div className="mb-16 last:mb-0 animate-fadeIn">
      <h3 className="text-xl font-semibold mt-9 mb-3 flex items-center gap-2">
        <IconComponent className="text-purple-500" />
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="skill-card bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex items-center justify-center gap-3"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img src={item.icon} alt={item.name} className="w-6 h-6" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center animate-slideInLeft">
          Skills
        </h2>
        <div className="max-w-4xl mx-auto">
          {Object.entries(skillCategories).map(([key, category], index) => (
            <div key={key} style={{ animationDelay: `${index * 200}ms` }}>
              <SkillCategory {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
