import React from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';
import { workItems } from '../data';

export function WorkDetailPage() {
  const { id } = useParams();
  const item = workItems.find(w => w.id === id);

  if (!item) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Item not found</h2>
        <Link to="/work" className="text-blue-500 hover:underline">Return to Work</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl"
    >
      <Link 
        to="/work" 
        className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors mb-12 group font-medium"
      >
        <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
        Back to Work
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
          {item.title}
        </h1>
        <h2 className="text-2xl text-neutral-500 font-light mb-6">
          {item.subtitle}
        </h2>

        <div className="flex flex-wrap gap-6 text-sm text-neutral-500 font-medium border-b border-neutral-200 pb-8">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            {item.date}
          </div>
          {item.location && (
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              {item.location}
            </div>
          )}
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold text-neutral-900 mb-4">Overview</h3>
          <p className="text-lg text-neutral-600 leading-relaxed">
            {item.shortDescription}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-neutral-900 mb-4">Details & Contributions</h3>
          <ul className="space-y-4">
            {item.bullets.map((bullet, idx) => (
              <li key={idx} className="flex gap-4 text-neutral-600 leading-relaxed text-lg">
                <span className="text-neutral-300 mt-2 shrink-0">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-neutral-900 mb-4">Technologies & Skills</h3>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="px-4 py-2 bg-neutral-100 text-neutral-700 text-sm font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
