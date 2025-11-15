import Header from '@/components/Header';
import Section from '@/components/Section';
import ExperienceCard from '@/components/ExperienceCard';
import ProjectCard from '@/components/ProjectCard';
import { socialLinks, experiences, projects } from '@/data/portfolio';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 flex items-center justify-center py-10 px-4 md:px-8">
      {/* Main Content Card */}
      <main className="w-full max-w-7xl bg-[#111111] rounded-2xl shadow-[8px_8px_24px_rgba(0,0,0,0.6)] border border-white/5 p-6">
        {/* Everything inside the card now has 24px space from the edges */}

        <div className="space-y-6">
          {/* Header Section */}
          <div className="flex items-center border-b border-white/5 pb-4">
            <Header
              name="Sami Haouchine"
              descriptors={['software engineer @ shield ai', 'content creator', 'umich alum']}
              socialLinks={socialLinks}
            />
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Experience & Projects */}
            <div className="flex flex-col gap-6">
              {/* Experience Card */}
              <div className="bg-zinc-900/50 rounded-xl border border-white/10 p-6">
                <Section title="Experience">
                  {experiences.map((exp) => (
                    <ExperienceCard key={exp.id} experience={exp} />
                  ))}
                </Section>
              </div>

              {/* Projects Card */}
              <div className="bg-zinc-900/50 rounded-xl border border-white/10 p-6">
                <Section title="Projects">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </Section>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="bg-zinc-900/50 rounded-xl border border-white/10 p-6">
              <Section title="Content">
                <div className="text-zinc-400 text-sm">
                  <p>Content section - TODO: add matcha power hour episodes here.</p>
                </div>
              </Section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
