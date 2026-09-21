import { cn } from "@/lib/utils";

interface SectionIntroProps {
  id: string;
  title: string;
  description: string;
  inverse?: boolean;
  className?: string;
}

const SectionIntro = ({ id, title, description, inverse = false, className }: SectionIntroProps) => (
  <div className={cn("max-w-3xl text-left", className)}>
    <span
      className={cn("mb-4 block h-px w-8", inverse ? "bg-primary-glow" : "bg-primary")}
      aria-hidden="true"
    />
    <h2
      id={id}
      className={cn(
        "font-display text-3xl font-medium leading-tight tracking-normal text-balance md:text-4xl",
        inverse ? "text-primary-foreground" : "text-primary",
      )}
    >
      {title}
    </h2>
    <p
      className={cn(
        "mt-5 text-base leading-relaxed text-pretty md:text-lg",
        inverse ? "text-primary-foreground/80" : "text-muted-foreground",
      )}
    >
      {description}
    </p>
  </div>
);

export default SectionIntro;