import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="font-display text-2xl font-medium text-foreground">
              Sustavision
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
            <p className="mt-4 font-display text-sm italic text-primary/80">{t.footer.positioning}</p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">{t.footer.quickLinks}</p>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-foreground/80 transition-colors hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow mb-4">{t.footer.contact}</p>
            <ul className="space-y-3">
              <li>
                <a href="mailto:thomas@sustavision.com" className="flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary">
                  <Mail className="h-4 w-4" />
                  thomas@sustavision.com
                </a>
              </li>
              <li>
                <a href="tel:+32495632266" className="flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary">
                  <Phone className="h-4 w-4" />
                  +32 495 632 266
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-hairline pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Sustavision. {t.footer.rights}</p>
          <p>{t.footer.positioning}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
