import { useState } from "react";
import CertificationCard from "../components/CertificationCard";

const certifications = [
  { icon: "verified", badge: "Verified", title: "Cloud Solutions Architect", issuer: "Amazon Web Services (AWS)" },
  { icon: "terminal", badge: "Professional", title: "Professional Data Engineer", issuer: "Google Cloud Platform" },
  { icon: "integration_instructions", badge: "Specialist", title: "React Advanced Patterns", issuer: "Meta / Coursera" },
  { icon: "security", badge: "Certified", title: "Security Fundamentals", issuer: "Microsoft Azure" },
  { icon: "api", badge: "Technical", title: "Backend Architecture", issuer: "Udemy Academy" },
  { icon: "javascript", badge: "Expert", title: "Modern JavaScript Deep Dive", issuer: "Frontend Masters" },
  { icon: "design_services", badge: "Creative", title: "UI/UX Design Strategy", issuer: "Figma Academy" },
  { icon: "settings_input_component", badge: "Pro", title: "Full Stack Engineering", issuer: "Codecademy" },
  { icon: "database", badge: "Advanced", title: "NoSQL Database Design", issuer: "MongoDB University" },
  { icon: "developer_mode_tv", badge: "Specialist", title: "Mobile App Development", issuer: "Udacity" },
  { icon: "psychology_alt", badge: "AI Expert", title: "Machine Learning Specialization", issuer: "Stanford Online" },
  { icon: "hub", badge: "DevOps", title: "Kubernetes Administration", issuer: "Linux Foundation" },
  { icon: "code_off", badge: "Core", title: "Algorithms & Data Structures", issuer: "Princeton University" },
  { icon: "language", badge: "Web", title: "Web Accessibility (WCAG)", issuer: "W3C Certification" },
  { icon: "auto_fix_high", badge: "Design", title: "Interaction Design", issuer: "Interaction Design Foundation" },
  { icon: "history_edu", badge: "Management", title: "Scrum Master Certified", issuer: "Scrum Alliance" },
  { icon: "cloud_sync", badge: "Cloud", title: "Serverless Applications", issuer: "Amazon Web Services" },
  { icon: "storage", badge: "Data", title: "SQL for Data Science", issuer: "IBM Data Science" },
  { icon: "monitoring", badge: "Analytic", title: "Python for Finance", issuer: "QuantInsti" },
  { icon: "bolt", badge: "Advanced", title: "Rust Systems Programming", issuer: "O'Reilly Media" },
  { icon: "terminal", badge: "Professional", title: "Cloud Data Engineering", issuer: "Google Cloud" },
  { icon: "developer_board", badge: "Engineer", title: "Microservices Design", issuer: "Udemy Academy" },
];

const INITIAL_COUNT = 8;

export default function Certificacoes() {
  const [expanded, setExpanded] = useState(false);
  const visibleCertifications = expanded ? certifications : certifications.slice(0, INITIAL_COUNT);

  return (
    <section className="py-24 bg-background-dark text-white overflow-hidden" id="certificacoes">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
              Marcos
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Expertise & Certificações
            </h2>
            <p className="text-gray-400">
              Uma coleção de credenciais verificadas que demonstram habilidades
              especializadas em todo o stack tecnológico.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
          {visibleCertifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-900 rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-xl group cursor-pointer"
          >
            <span>{expanded ? "Mostrar menos" : "Mostrar mais"}</span>
            <span className={`material-icons text-sm transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}>
              expand_more
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
