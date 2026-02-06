import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Monitor,
  Users,
  UserCheck,
  Briefcase,
  Clock,
  FileText,
  Layers,
  Search,
  Filter,
  CalendarCheck,
  CheckSquare,
  HeartHandshake,
  Building2,
  Rocket,
  Factory,
  GraduationCap,
  Truck,
  Award,
  Zap,
  TrendingDown,
  Eye,
  Handshake,
  Phone,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "HR & Manpower Services - Advait Infotech",
  description:
    "Trusted HR & Manpower consulting partner. IT & Non-IT staffing across India with permanent, contract, temporary, and project-based hiring models.",
};

const itRoles = [
  "IT Support Engineers",
  "Desktop & Network Engineers",
  "System Administrators",
  "Helpdesk Executives",
];

const nonItRoles = [
  "Office Administrators",
  "Data Entry Operators",
  "Back-Office Executives",
  "Field & Operations Staff",
  "Coordinators & Support Staff",
];

const engagementModels = [
  { icon: UserCheck, label: "Permanent Staffing", desc: "Full-time employees for long-term roles" },
  { icon: FileText, label: "Contract Staffing", desc: "Flexible contracts for specific durations" },
  { icon: Clock, label: "Temporary Staffing", desc: "Short-term workforce for peak periods" },
  { icon: Briefcase, label: "Project-Based Hiring", desc: "Dedicated teams for specific projects" },
  { icon: Layers, label: "Bulk / Mass Hiring", desc: "High-volume recruitment drives" },
];

const hrProcess = [
  { icon: Search, step: "01", title: "Understand Role & Business Needs", desc: "Comprehensive requirement analysis" },
  { icon: Filter, step: "02", title: "Talent Sourcing & Screening", desc: "Multi-channel recruitment approach" },
  { icon: CalendarCheck, step: "03", title: "Interview Coordination", desc: "Seamless scheduling and management" },
  { icon: CheckSquare, step: "04", title: "Candidate Selection & Deployment", desc: "Quick onboarding and deployment" },
  { icon: HeartHandshake, step: "05", title: "Post-Placement Support", desc: "Ongoing follow-up and retention" },
];

const industries = [
  { icon: Building2, label: "Corporate & Commercial Offices" },
  { icon: Monitor, label: "IT & Technology Companies" },
  { icon: Rocket, label: "Startups & MSMEs" },
  { icon: Factory, label: "Manufacturing Units" },
  { icon: GraduationCap, label: "Educational Institutions" },
  { icon: Truck, label: "Logistics & Warehousing" },
];

const whyChoose = [
  { icon: Award, text: "One-stop IT & HR solutions" },
  { icon: Zap, text: "Faster closures and deployment" },
  { icon: TrendingDown, text: "Cost-effective hiring models" },
  { icon: Users, text: "Experienced IT & HR professionals" },
  { icon: Eye, text: "Transparent processes & communication" },
  { icon: Handshake, text: "Long-term partnership approach" },
];

export default function HRServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-foreground text-background">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-36">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-1.5 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-accent" />
                IT & Non-IT Staffing Across India
              </div>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Trusted HR & Manpower Consulting Partner
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-70">
                Advait Infotech provides reliable, ethical, and result-driven manpower solutions to help organizations build strong, scalable teams.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href="mailto:connect@advaithr.in">
                    Hire Talent
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-background/30 bg-transparent text-background hover:bg-background/10">
                  <Link href="/#contact">
                    Speak to Our HR Team
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About HR */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-accent">
                About HR Services
              </p>
              <h2 className="font-display text-3xl font-bold text-foreground text-balance lg:text-4xl">
                Building Teams That Drive Business Success
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                We specialize in IT and Non-IT manpower staffing solutions tailored to meet immediate, short-term, and long-term workforce requirements.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our recruitment approach focuses on quality, cultural fit, and long-term retention.
              </p>
            </div>
          </div>
        </section>

        {/* Recruitment Solutions */}
        <section className="bg-muted py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-accent">
                HR Services
              </p>
              <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                Our Recruitment Solutions
              </h2>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {/* IT Staffing */}
              <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Monitor className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">IT Staffing</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {itRoles.map((role) => (
                    <li key={role} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Non-IT Staffing */}
              <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">Non-IT Staffing</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {nonItRoles.map((role) => (
                    <li key={role} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Verification badge */}
            <div className="mt-8 flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-6 py-4">
              <ShieldCheck className="h-5 w-5 text-accent" />
              <p className="text-sm font-medium text-foreground">
                All candidates are professionally screened, verified, and deployment-ready.
              </p>
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-accent">
                Engagement Models
              </p>
              <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                Flexible Hiring Options
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {engagementModels.map((model) => (
                <div
                  key={model.label}
                  className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <model.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground">
                    {model.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {model.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HR Working Process */}
        <section className="bg-muted py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-accent">
                HR Working Process
              </p>
              <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                From Requirement to Deployment
              </h2>
            </div>

            <div className="mt-14 flex flex-col gap-6">
              {hrProcess.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-6 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md lg:p-8"
                >
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-muted">
                    <item.icon className="h-7 w-7 text-accent" />
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-accent">
                Industries We Serve
              </p>
              <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                Across Sectors & Verticals
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <p className="font-display text-sm font-semibold text-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-muted py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-accent">
                  Why Choose Advait HR
                </p>
                <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                  Our Advantage
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We combine deep industry expertise with a people-first approach to deliver staffing solutions that truly work.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {whyChoose.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-foreground py-20 text-background lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-display text-3xl font-bold text-balance lg:text-4xl">
              Ready to Build Your Dream Team?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed opacity-70">
              Let us find the right talent for your organization. Speak with our HR experts today.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="mailto:connect@advaithr.in">
                  Hire Talent
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-background/30 bg-transparent text-background hover:bg-background/10">
                <a href="tel:+919899979044">
                  <Phone className="mr-2 h-4 w-4" />
                  +91 9899979044
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
