import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { workItems } from "../data";
import { ArrowRight, Briefcase, Rocket } from "lucide-react";

export function WorkPage() {
  const experiences = workItems.filter(item => item.type === 'experience');
  const projects = workItems.filter(item => item.type === 'project');

  const Card = ({ item, index }: { item: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link 
        to={`/work/${item.id}`}
        className="group block p-6 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-400 hover:shadow-lg transition-all duration-300"
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-neutral-500 text-sm font-medium">
              {item.type === 'experience' ? <Briefcase size={16} /> : <Rocket size={16} />}
              <span className="uppercase tracking-wider">{item.type}</span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900">{item.title}</h3>
            <div className="text-neutral-500 mt-1">{item.subtitle} {item.location && `• ${item.location}`}</div>
          </div>
          <div className="p-2 rounded-full bg-neutral-100 text-neutral-500 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
            <ArrowRight size={20} className="transform group-hover:-rotate-45 transition-transform" />
          </div>
        </div>
        
        <p className="text-neutral-600 line-clamp-2 mb-6">
          {item.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {item.tags.slice(0, 4).map((tag: string) => (
            <span key={tag} className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
              {tag}
            </span>
          ))}
          {item.tags.length > 4 && (
            <span className="px-3 py-1 bg-neutral-100 text-neutral-500 text-xs font-medium rounded-full">
              +{item.tags.length - 4}
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );

  return (
    <div className="space-y-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
          Experience & Projects
        </h1>
        <p className="text-lg text-neutral-500 max-w-2xl">
          A showcase of my professional experience and technical projects, ranging from full-stack systems at Charles Schwab to autonomous robotics.
        </p>
      </motion.div>

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
          Professional Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((item, idx) => (
            <Card key={item.id} item={item} index={idx} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
          Key Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((item, idx) => (
            <Card key={item.id} item={item} index={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}
