import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { getSkillIcon, getSkillColor } from "../data/skillIcons";

export default function ProjectCard({ project }) {
  return (
    <div className="group h-full flex flex-col bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/50 hover:-translate-y-1 transition-all duration-300">
      <div className="aspect-video overflow-hidden bg-surfaceLight shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl font-semibold text-text mb-2">{project.title}</h3>

        <div className="flex-1">
          <p className="text-muted mb-3 line-clamp-3">{project.description}</p>

          {project.highlights?.length > 0 && (
            <ul className="space-y-1.5">
              {project.highlights.slice(0, 2).map((h, idx) => (
                <li key={idx} className="text-sm text-muted flex gap-2">
                  <span className="text-gold shrink-0">▹</span>
                  <span className="line-clamp-2">{h}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => {
              const Icon = getSkillIcon(t);
              const color = getSkillColor(t);
              return (
                <span
                  key={t}
                  className="font-mono text-xs text-accent bg-accent/10 px-2 py-1 rounded-md flex items-center gap-1.5"
                >
                  <Icon
                    className={`text-sm shrink-0 ${color ? "" : "text-accent"}`}
                    style={color ? { color } : undefined}
                  />
                  {t}
                </span>
              );
            })}
          </div>

          <div className="flex gap-4">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-text hover:text-accent transition-colors">
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-text hover:text-accent transition-colors">
                <FaGithub /> Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}