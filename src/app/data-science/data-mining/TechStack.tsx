
import React from 'react';

interface TechPillProps {
  name: string;
  index: number;
}

const TechPill: React.FC<TechPillProps> = ({ name, index }) => (
  <div 
    className="tech-pill bg-white border border-gray-200 px-5 py-2 rounded-full shadow-sm hover:shadow-md text-center animate-fade-in"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <span className="font-medium gradient-text">{name}</span>
  </div>
);

const TechStack = () => {
  const technologies = [
    "Python", "R", "SQL",
    "Apache Spark", "Weka", "KNIME",
    "Scikit-learn", "Pandas", "NumPy"
  ];

  return (
    <section id="tech-stack" className="section-padding bg-ck-black">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Our Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <TechPill key={tech} name={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
