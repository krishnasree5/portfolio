import { about } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <p className="max-w-2xl mx-auto text-center text-gray-600 dark:text-gray-400">
          {about.description}
        </p>
      </div>
    </section>
  );
}