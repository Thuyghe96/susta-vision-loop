import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/sustavision-logo.png";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navigation = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.contact, href: "/contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  const toggleLanguage = () => setLanguage(language === "en" ? "nl" : "en");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2" aria-label="Sustavision home">
          <img src={logo} alt="Sustavision" className="h-9 w-auto md:h-10" />
          <span className="sr-only">Sustavision</span>
        </Link>

        <div className="hidden md:flex md:items-center md:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm transition-colors hover:text-primary ${
                isActive(item.href) ? "text-foreground font-medium" : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={toggleLanguage}
            className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-primary"
            aria-label="Toggle language"
          >
            {language === "en" ? "EN · NL" : "NL · EN"}
          </button>
          <Button asChild size="sm" className="rounded-md">
            <Link to="/contact">{t.nav.bookConsultation}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLanguage}
            className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground"
            aria-label="Toggle language"
          >
            {language === "en" ? "NL" : "EN"}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container mx-auto space-y-4 px-4 py-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block text-base transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full rounded-md">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.bookConsultation}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
