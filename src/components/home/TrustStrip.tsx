import { useLanguage } from "@/i18n/LanguageContext";

const TrustStrip = () => {
  const { t } = useLanguage();
  const items = t.trustStrip.items;

  return (
    <section className="border-b border-border bg-background">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6 text-sm text-muted-foreground">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="inline-block h-1 w-1 rounded-full bg-primary/60" />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustStrip;
