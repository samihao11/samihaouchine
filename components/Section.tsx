import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ title, children, className = '' }: SectionProps) {
  return (
    <section className={className}>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
        {title}
      </h2>
      <div className="h-6"></div>
      <div className="flex flex-col gap-6">
        {children}
      </div>
    </section>
  );
}

