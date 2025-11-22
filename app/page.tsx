import Header from '@/components/Header';
import Section from '@/components/Section';
import ExperienceCard from '@/components/ExperienceCard';
import ProjectCard from '@/components/ProjectCard';
import VideoPlayer from '@/components/VideoPlayer';
import { Glow } from '@/components/ui/glow';
import { socialLinks, experiences, projects } from '@/data/portfolio';

export default function Home() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-rose-300 via-pink-200 to-orange-300 flex items-center justify-center py-10 px-4 md:px-8 overflow-hidden">
      {/* Animated Glow Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Glow 
          variant="center" 
          className="opacity-60 scale-150 blur-3xl animate-pulse" 
        />
      </div>
      
      {/* Main Content Card */}
      <main className="relative z-10 w-full max-w-7xl h-auto bg-[#111111]/95 backdrop-blur-md rounded-2xl shadow-[8px_8px_32px_rgba(0,0,0,0.7)] border border-orange-400/30 p-6">

        <div className="space-y-6">
          {/* Header Section */}
          <div className="flex flex-col">
            {/* 24px spacer above */}
            <div className="h-6"></div>
            <div className="flex items-center">
              <Header
                name="Sami Haouchine"
                descriptors={['software engineer', 'content creator', 'umich alum']}
                socialLinks={socialLinks}
              />
            </div>
          </div>

          {/* Three Column Layout - Centered Container */}
          <div className="flex flex-col">
            {/* 24px spacer above */}
            <div className="h-6"></div>
            
            {/* Horizontal container with left and right spacers */}
            <div className="flex flex-row">
              {/* 24px spacer left */}
              <div className="w-6"></div>
              
              <div className="flex-1 flex flex-col md:flex-row gap-6">
                {/* Experience Section - 1/3 */}
                <div className="flex-1 p-6">
                  <Section title="Experience">
                    {experiences.map((exp) => (
                      <ExperienceCard key={exp.id} experience={exp} />
                    ))}
                  </Section>
                </div>

                {/* Projects Section - 1/3 */}
                <div className="flex-1 p-6">
                  <Section title="Projects">
                    {projects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </Section>
                </div>

                {/* Content Section - 1/3 */}
                <div className="flex-1 p-6">
                  <Section title="Content">
                    <VideoPlayer 
                      videoSrc="/media/mph-4.mov"
                      username="sami.hao"
                      description="Matcha Power Hour - Episode"
                      verified={true}
                      profileImage="/sami.jpg"
                    />
                  </Section>
                </div>
              </div>
              
              {/* 24px spacer right */}
              <div className="w-6"></div>
            </div>
            
            {/* 24px spacer below */}
            <div className="h-6"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
