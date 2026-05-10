import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const skills = [
  {
    category: "Languages",
    items: "C#, Java, Python, C++, JavaScript, TypeScript"
  },
  {
    category: "Frontend Systems",
    items: "Angular, React, RxJS, Redux, HTML/CSS"
  },
  {
    category: "Backend & Distributed Systems",
    items: ".NET Core, Node.js, RESTful APIs, OpenAPI (Swagger), Microservices, Oracle DB, MongoDB"
  },
  {
    category: "Cloud, Delivery & Tooling",
    items: "Pivotal Cloud Foundry, CI/CD (GitHub Actions), Release Engineering, Git, Linux, Splunk, API Testing"
  }
];

const passions = [
  {
    title: "Traveling & Outdoors",
    description: "Exploring new landscapes and hiking challenging trails. I find peace and inspiration in nature's vastness.",
    image: "https://images.unsplash.com/photo-1713959989861-2425c95e9777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWxpbmclMjBsYW5kc2NhcGUlMjBtb3VudGFpbnxlbnwxfHx8fDE3NzgzNjk2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Photography",
    description: "Capturing moments through a minimalist lens. I enjoy framing the world's simple, unnoticed details.",
    image: "https://images.unsplash.com/photo-1616497467126-4f87242298d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzc4MzY5NzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Workspace Aesthetics",
    description: "Curating a clean, green, and productive environment. A minimalist desk setup is crucial for my focus and creativity.",
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzayUyMHBsYW50fGVufDF8fHx8MTc3ODM2OTcwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function AboutPage() {
  return (
    <div className="space-y-24">
      
      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
          About Me
        </h1>
        <p className="text-lg text-neutral-600 max-w-3xl leading-relaxed">
          I'm Ryan, a software engineer based in Austin, TX, passionate about full-stack development, modern web architectures, and autonomous systems. I enjoy bridging the gap between elegant front-end interfaces and robust, scalable backend services.
        </p>
      </motion.div>

      {/* Skills and Education Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16"
      >
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 mb-8">Skills</h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-2">{skill.category}</h4>
                <p className="text-neutral-600 leading-relaxed">{skill.items}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 mb-8">Education</h2>
          <div className="p-6 bg-neutral-100 rounded-2xl">
            <h4 className="text-xl font-bold text-neutral-900">Texas A&M University</h4>
            <div className="text-neutral-500 font-medium mt-1">College Station, TX</div>
            <p className="text-neutral-700 mt-4 leading-relaxed">
              <strong>B.S. Electrical and Computer Engineering</strong><br/>
              Summa Cum Laude
            </p>
            <div className="inline-block mt-4 px-3 py-1 bg-white text-neutral-700 text-sm rounded-md font-bold shadow-sm">
              GPA: 3.94 / 4.00
            </div>
          </div>
        </div>
      </motion.section>

      {/* Passions Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 mb-4">Passions & Interests</h2>
        <p className="text-neutral-500 max-w-2xl mb-12 text-lg">
          Beyond the terminal and IDE, I have a few other things that keep me busy and inspired.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {passions.map((passion, index) => (
            <div key={index} className="group">
              <div className="aspect-square overflow-hidden rounded-2xl bg-neutral-100 mb-6 relative">
                <ImageWithFallback 
                  src={passion.image} 
                  alt={passion.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-2">{passion.title}</h4>
              <p className="text-neutral-600 leading-relaxed text-sm">
                {passion.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

    </div>
  );
}
