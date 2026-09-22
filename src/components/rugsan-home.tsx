import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowDown, ArrowRight, Award, Building2, Check, Compass, DraftingCompass, Facebook, HardHat, Lightbulb, Mail, MapPin, Menu, Phone, Ruler, Shapes, Sparkles, Users, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContact } from "@/lib/contact.functions";
import { getCopy, services, type Language } from "@/lib/rugsan-content";
import logoAsset from "@/assets/rugsan-logo.png.asset.json";
import founderAsset from "@/assets/rugsan-founder.png.asset.json";
import heroImage from "@/assets/hero-project.jpg";
import brandImage from "@/assets/about-architecture.jpg";
import missionImage from "@/assets/mission-project.jpg";
import architectureImage from "@/assets/service-architecture.jpg";
import interiorImage from "@/assets/service-interior.jpg";
import engineeringImage from "@/assets/service-engineering.jpg";
import projectOneImage from "@/assets/project-1.jpg";
import projectTwoImage from "@/assets/project-2.jpg";
import projectThreeImage from "@/assets/project-3.jpg";

const sectionIds = ["home", "about", "services", "projects", "founder", "contact"] as const;
const serviceImages = [architectureImage, interiorImage, engineeringImage];
const projectImages = [projectOneImage, projectTwoImage, projectThreeImage];
const reasonIcons = [Compass, Shapes, Award, Users, Sparkles];
const processIcons = [Lightbulb, DraftingCompass, Ruler, HardHat];
const mapAddress = "Waaberi Mall, Floor 2, Apartment 202, Waabari District, front of Adani Tower, Mogadishu, Somalia";

function LanguageSwitch({ language, onChange }: { language: Language; onChange: (language: Language) => void }) {
  return <div className="language-switch" aria-label="Language">{(["so", "en", "ar"] as const).map((item) => <button key={item} type="button" aria-pressed={language === item} className={language === item ? "active" : ""} onClick={() => onChange(item)}>{item.toUpperCase()}</button>)}</div>;
}

function BrandMark({ compact = false }: { compact?: boolean }) {
  return <a href="#home" className={`brand-mark ${compact ? "compact" : ""}`} aria-label="Rugsan home"><img src={logoAsset.url} alt="Rugsan Construction Company" decoding="async" /></a>;
}

function HeroTitle({ title }: { title: string }) {
  const comma = title.indexOf(",");
  if (comma < 0) return <h1><span>{title}</span></h1>;
  return <h1><span>{title.slice(0, comma + 1)}</span><span>{title.slice(comma + 1).trim()}</span></h1>;
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry?.isIntersecting) { element.classList.add("is-visible"); observer.disconnect(); } }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export function RugsanHome() {
  const [language, setLanguage] = useState<Language>("so");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const submit = useServerFn(submitContact);
  const copy = useMemo(() => getCopy(language), [language]);
  const rtl = language === "ar";

  useEffect(() => {
    const saved = window.localStorage.getItem("rugsan-language");
    if (saved === "so" || saved === "en" || saved === "ar") setLanguage(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("rugsan-language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.title = copy.metaTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", copy.metaDescription);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", copy.metaTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", copy.metaDescription);
  }, [language, rtl, copy]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      const current = [...sectionIds].reverse().find((id) => (document.getElementById(id)?.getBoundingClientRect().top ?? 999) <= 160);
      if (current) setActive(current);
    };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey);
  }, []);

  const changeLanguage = (next: Language) => { setLanguage(next); setMenuOpen(false); };
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setStatus("loading");
    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      await submit({ data: { name: String(data.get("name")), phone: String(data.get("phone")), email: String(data.get("email")), service: String(data.get("service")), projectDescription: String(data.get("description")), language } });
      setStatus("success");
    } catch { setStatus("error"); }
  };

  return <div className="site-shell" dir={rtl ? "rtl" : "ltr"}>
    <header className={`site-header ${scrolled || menuOpen ? "solid" : ""}`}>
      <div className="header-inner">
        <BrandMark compact />
        <nav className="desktop-nav" aria-label="Main navigation">{sectionIds.map((id, index) => <button key={id} className={active === id ? "active" : ""} onClick={() => go(id)}>{copy.nav[index]}</button>)}</nav>
        <div className="header-actions"><LanguageSwitch language={language} onChange={changeLanguage} /><Button variant="iconGhost" size="icon" className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X /> : <Menu />}</Button></div>
      </div>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}><nav>{sectionIds.map((id, index) => <button key={id} onClick={() => go(id)}><span>0{index + 1}</span>{copy.nav[index]}</button>)}</nav></div>
    </header>

    <main>
      <section id="home" className="hero">
        <img src={heroImage} alt="Rugsan residential architectural design" fetchPriority="high" decoding="async" />
        <div className="hero-overlay" />
        <div className="container hero-content"><p className="eyebrow hero-kicker">{copy.heroEyebrow}</p><HeroTitle title={copy.heroTitle} /><p className="hero-copy">{copy.heroBody}</p><div className="hero-buttons"><Button variant="hero" size="xl" onClick={() => go("projects")}>{copy.projectsCta}<ArrowRight /></Button><Button variant="heroOutline" size="xl" onClick={() => go("contact")}>{copy.consultCta}</Button></div></div>
        <button className="scroll-indicator" onClick={() => go("about")}><span>{copy.scroll}</span><ArrowDown /></button>
      </section>

      <section id="about" className="section about-section"><div className="container about-grid">
        <Reveal className="about-copy"><p className="eyebrow">{copy.aboutLabel}</p><h2>{copy.aboutTitle}</h2><p className="lead">{copy.aboutBody}</p><div className="value-grid">{copy.aboutPoints.map((point, i) => <div key={point}><span>0{i + 1}</span>{point}</div>)}</div><Button variant="text" onClick={() => go("contact")}>{copy.learn}<ArrowRight /></Button></Reveal>
        <Reveal className="about-image"><img src={brandImage} alt="Rugsan architecture, interior design and civil engineering presentation" loading="lazy" decoding="async" /><span>R / 01</span></Reveal>
      </div></section>

      <section id="services" className="section services-section"><div className="container"><Reveal><p className="eyebrow">{copy.servicesLabel}</p><div className="section-heading"><h2>{copy.servicesTitle}</h2><span>01 — 03</span></div></Reveal><div className="services-grid">{services.map((service, index) => <Reveal className="service-card" key={service.key}><div className="service-image"><img src={serviceImages[index]} alt="" loading="lazy" decoding="async" /><span>{service.number}</span></div><div className="service-body"><h3>{copy.serviceNames[service.key]}</h3><p>{copy.serviceDescriptions[service.key]}</p><ul>{service.items.map((item) => <li key={item}><Check />{item}</li>)}</ul><button type="button" onClick={() => go("contact")}>{copy.explore}<ArrowRight /></button></div></Reveal>)}</div></div></section>

      <section id="projects" className="section projects-section"><div className="container"><Reveal><p className="eyebrow">{copy.projectsLabel}</p><div className="section-heading"><h2>{copy.projectsTitle}</h2></div></Reveal><div className="projects-grid">{projectImages.map((image, item) => <Reveal className={`project-card project-${item + 1}`} key={image}><button type="button" onClick={() => go("contact")} aria-label={`${copy.projectsLearn}: ${copy.projectTitles[item]}`}><img src={image} alt={copy.projectTitles[item]} loading="lazy" decoding="async" /><span className="project-shade"/><span className="project-caption"><small>{copy.categories[item]}</small><strong>{copy.projectTitles[item]}</strong><span className="project-link">{copy.projectsLearn}<ArrowRight /></span></span></button></Reveal>)}</div></div></section>

      <section className="section why-section"><div className="container why-grid"><Reveal><p className="eyebrow">{copy.whyLabel}</p><h2>{copy.whyTitle}</h2></Reveal><div className="reasons">{copy.reasons.map((reason, i) => { const Icon = reasonIcons[i] ?? Building2; return <Reveal className="reason" key={reason[0]}><span className="reason-icon"><Icon aria-hidden="true" /></span><div><h3>{reason[0]}</h3><p>{reason[1]}</p></div></Reveal>; })}</div></div></section>

      <section className="section process-section"><div className="container"><Reveal><p className="eyebrow">{copy.processLabel}</p><h2>{copy.processTitle}</h2></Reveal><div className="process-grid">{copy.process.map((step, i) => { const Icon = processIcons[i] ?? HardHat; return <Reveal className="process-step" key={step[0]}><span className="process-icon"><Icon aria-hidden="true" /></span><h3>{step[0]}</h3><p>{step[1]}</p></Reveal>; })}</div></div></section>

      <section className="mission-section"><img src={missionImage} alt="Rugsan architectural project" loading="lazy" decoding="async" /><div className="mission-overlay"/><Reveal className="container mission-content"><p className="eyebrow">{copy.missionLabel}</p><h2>{copy.missionTitle}</h2><p>{copy.missionBody}</p></Reveal></section>

      <section id="founder" className="section founder-section"><div className="container founder-grid"><Reveal className="founder-image"><img src={founderAsset.url} alt={copy.founderTitle} loading="lazy" decoding="async" /></Reveal><Reveal className="founder-copy"><p className="eyebrow">{copy.founderLabel}</p><h2>{copy.founderTitle}</h2><h3>{copy.founderRole}</h3><p>{copy.founderBody}</p></Reveal></div></section>

      <section className="cta-section"><div className="cta-glow"/><Reveal className="container cta-inner"><div><p className="eyebrow">RUGSAN</p><h2>{copy.ctaTitle}</h2><p>{copy.ctaBody}</p></div><div><Button variant="hero" size="xl" onClick={() => go("contact")}>{copy.consultCta}<ArrowRight /></Button><Button variant="heroOutline" size="xl" asChild><a href="tel:+252615969854"><Phone />{copy.call}</a></Button></div></Reveal></section>

      <section id="contact" className="section contact-section"><div className="container contact-grid"><Reveal className="contact-intro"><p className="eyebrow">{copy.contactLabel}</p><h2>{copy.contactTitle}</h2><p>{copy.contactBody}</p><div className="contact-details"><h3>{copy.info}</h3><a href="mailto:info@rugsancco.com"><Mail />info@rugsancco.com</a><a href="tel:+252615969854"><Phone />+252-615969854</a><a href="tel:+252614044302"><Phone />+252-614044302</a><div><MapPin /><address>{copy.address.map((line) => <span key={line}>{line}</span>)}</address></div></div></Reveal>
        <Reveal>{status === "success" ? <div className="contact-success" role="status"><span><Check aria-hidden="true" /></span><p>{copy.success}</p></div> : <form className="contact-form" onSubmit={onSubmit}><div className="field-row"><label>{copy.fields.name}<Input name="name" required minLength={2} autoComplete="name" /></label><label>{copy.fields.phone}<Input name="phone" required minLength={6} type="tel" autoComplete="tel" /></label></div><label>{copy.fields.email}<Input name="email" required type="email" autoComplete="email" /></label><label>{copy.fields.service}<select name="service" required defaultValue=""><option value="" disabled>{copy.choose}</option>{services.map((service) => <option key={service.key} value={service.key}>{copy.serviceNames[service.key]}</option>)}</select></label><label>{copy.fields.description}<Textarea name="description" required minLength={10} rows={6} /></label><Button variant="hero" size="xl" type="submit" disabled={status === "loading"}>{status === "loading" ? copy.sending : copy.send}<ArrowRight /></Button>{status === "error" && <div className="form-error" role="alert"><p>{copy.error}</p><Button type="submit" variant="heroOutline" size="sm">{copy.retry}</Button></div>}</form>}</Reveal>
        <Reveal className="contact-map"><iframe title={mapAddress} src={`https://www.google.com/maps?q=${encodeURIComponent(mapAddress)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></Reveal>
      </div></section>
    </main>

    <footer><div className="container footer-grid"><div><BrandMark/><p>{copy.footerBody}</p><LanguageSwitch language={language} onChange={changeLanguage}/></div><div><h3>{copy.footerNav}</h3>{sectionIds.map((id,index) => <button key={id} onClick={() => go(id)}>{copy.nav[index]}</button>)}</div><div><h3>{copy.footerContact}</h3><a href="mailto:info@rugsancco.com">info@rugsancco.com</a><a href="tel:+252615969854">+252-615969854</a><a href="tel:+252614044302">+252-614044302</a><address>{copy.address.join(" · ")}</address><a href="https://www.facebook.com/Rugsancco" target="_blank" rel="noreferrer"><Facebook />Facebook</a></div></div><div className="container footer-bottom"><span>© RUGSAN CONSTRUCTION COMPANY. {copy.copyright}</span><span>{copy.signature}</span></div></footer>
  </div>;
}