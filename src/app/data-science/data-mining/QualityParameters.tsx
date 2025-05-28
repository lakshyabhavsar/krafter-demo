
import React from 'react';
import { Check } from 'lucide-react';

interface QualityFeatureProps {
  text: string;
  index: number;
}

const QualityFeature: React.FC<QualityFeatureProps> = ({ text, index }) => (
  <div 
    className="flex items-start mb-4 animate-slide-in"
    style={{ animationDelay: `${index * 0.15}s` }}
  >
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-ck mr-3 mt-0.5">
      <Check className="h-4 w-4 text-white" />
    </span>
    <span>{text}</span>
  </div>
);

const QualityParameters = () => {
  const features = [
    "Clean & preprocessed data pipelines",
    "Scalable algorithms for large datasets",
    "Accuracy and relevance of mined patterns",
    "Ethical & secure data handling",
    "Continuous model monitoring & improvement",
    "Integration with existing workflows"
  ];

  return (
    <section className="section-padding bg-ck-black text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quality Parameters</h2>
            <p className="text-lg text-white/70 mb-6">
              Our data mining solutions adhere to strict quality standards to ensure reliable insights and actionable results.
            </p>
            <p className="text-white/70">
              We build custom algorithms that scale with your data volume while maintaining high accuracy and performance.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            {features.map((feature, index) => (
              <QualityFeature key={index} text={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityParameters;
