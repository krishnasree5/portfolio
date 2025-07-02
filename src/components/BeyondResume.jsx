import { hackathons } from "../data/profile";
import HackathonCard from "./HackathonCard";

export default function BeyondResume() {
  return (
    <section id="beyond-resume" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Beyond the Resume
        </h2>
        <div className="max-w-5xl mx-auto space-y-8">
          {hackathons.map((hackathon, index) => (
            <HackathonCard key={index} hackathon={hackathon} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
