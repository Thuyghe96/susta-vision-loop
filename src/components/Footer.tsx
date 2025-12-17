import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  const quickLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <footer className="border-t border-primary/20 bg-accent/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">Sustavision</h3>
            <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:th-consulting@outlook.be"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  {t.footer.email}
                </a>
              </li>
              <li>
                <a
                  href="tel:+32495632266"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  {t.footer.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/20">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sustavision. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
