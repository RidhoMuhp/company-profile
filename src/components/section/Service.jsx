import React from 'react';
import ServiceCard from '../ui/ServiceCard';

export default function Services() {
  const servicesData = [
    {
      titleLine1: "Search engine",
      titleLine2: "optimization",
      variant: "gray",
      image: "/images/seo-illustration.png" // Replace with your exported assets
    },
    {
      titleLine1: "Pay-per-click",
      titleLine2: "advertising",
      variant: "lime",
      image: "/images/ppc-illustration.png"
    },
    {
      titleLine1: "Social Media",
      titleLine2: "Marketing",
      variant: "dark",
      image: "/images/smm-illustration.png"
    },
    {
      titleLine1: "Email",
      titleLine2: "Marketing",
      variant: "gray",
      image: "/images/email-illustration.png"
    },
    {
      titleLine1: "Content",
      titleLine2: "Creation",
      variant: "lime",
      image: "/images/content-illustration.png"
    },
    {
      titleLine1: "Analytics and",
      titleLine2: "Tracking",
      variant: "dark",
      image: "/images/analytics-illustration.png"
    }
  ];

  return (
    <section className="py-20" id="services">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20 px-4">
        <h2 className="bg-[#B9FF66] text-4xl font-bold px-2 rounded-md uppercase">
          Services
        </h2>
        <p className="max-w-[580px] text-zinc-700 text-lg">
          At our digital marketing agency, we offer a range of services to 
          help businesses grow and succeed online. These services include:
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            titleLine1={service.titleLine1}
            titleLine2={service.titleLine2}
            variant={service.variant}
            imageSrc={service.image}
          />
        ))}
      </div>
    </section>
  );
};
