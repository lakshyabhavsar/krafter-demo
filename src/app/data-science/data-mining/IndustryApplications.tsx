"use client";
import React, { useState } from 'react';
import { Store, Hospital, CreditCard } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const ApplicationCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const IndustryApplications = () => {
  const applications = [
    {
      id: "retail",
      title: "Retail",
      description: "Identify purchase patterns with market basket analysis to improve product placement, recommendations, and targeted marketing campaigns.",
      icon: <Store className="h-8 w-8 text-ck-violet" />,
    },
    {
      id: "finance",
      title: "Finance",
      description: "Detect fraudulent transactions and patterns of financial crimes by identifying anomalies and unusual behavior in transaction data.",
      icon: <CreditCard className="h-8 w-8 text-ck-violet" />,
    },
    {
      id: "healthcare",
      title: "Healthcare",
      description: "Predict patient diagnoses and treatment outcomes by analyzing historical medical data, symptoms, and treatment efficacy patterns.",
      icon: <Hospital className="h-8 w-8 text-ck-violet" />,
    }
  ];

  return (
    <section id="applications" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Industry Applications
        </h2>
        
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((app) => (
              <ApplicationCard 
                key={app.id}
                title={app.title} 
                description={app.description} 
                icon={app.icon} 
              />
            ))}
          </div>
        </div>
        
        <div className="md:hidden">
          <Tabs defaultValue="retail" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              {applications.map((app) => (
                <TabsTrigger key={app.id} value={app.id}>{app.title}</TabsTrigger>
              ))}
            </TabsList>
            
            {applications.map((app) => (
              <TabsContent key={app.id} value={app.id}>
                <ApplicationCard 
                  title={app.title} 
                  description={app.description} 
                  icon={app.icon} 
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default IndustryApplications;
