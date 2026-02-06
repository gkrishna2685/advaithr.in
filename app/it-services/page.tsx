import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Laptop,
  ShoppingCart,
  Wrench,
  FileCheck,
  Network,
  Headphones,
  TrendingDown,
  Cpu,
  ClipboardCheck,
  Clock,
  ArrowUpCircle,
  Shield,
  HardDrive,
  Database,
  Lock,
  FileWarning,
  Search,
  Settings,
  Rocket,
  HeartHandshake,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IT Services - Advait Infotech",
  description:
    "Complete IT infrastructure solutions: rentals, repairs, AMC, network support, helpdesk, and more. Reliable, secure, scalable IT services for modern businesses.",
};

const coreServices = [
  { icon: Laptop, label: "Laptop & Desktop Rentals", desc: "Latest configurations for short or long-term use" },
  { icon: ShoppingCart, label: "IT Hardware Sales & Procurement", desc: "Full warranty and support included" },
  { icon: Wrench, label: "Repair & Break-Fix Support", desc: "Quick turnaround with minimal downtime" },
  { icon: FileCheck, label: "Annual Maintenance Contracts (AMC)", desc: "Preventive and corrective maintenance" },
  { icon: Network, label: "Network, Printer & Server Support", desc: "Full infrastructure management" },
  { icon: Headphones, label: "On-site & Remote IT Helpdesk", desc: "Dedicated support when you need it" },
];

const advantages = [
  { icon: TrendingDown, text: "Zero Capital Expenditure (CapEx to OpEx model)" },
  { icon: Cpu, text: "Access to latest hardware technology" },
  { icon: ClipboardCheck, text: "Preventive & corrective maintenance" },
  { icon: Clock, text: "SLA-based response & resolution timelines" },
  { icon: ArrowUpCircle, text: "Quick replacement and minimum downtime" },
];

const securityFeatures = [
  { icon: Shield, text: "Endpoint security & device protection" },
  { icon: HardDrive, text: "IT asset tracking and inventory management" },
  { icon: Database, text: "Data backup and recovery solutions" },
  { icon: Lock, text: "Network security & access control" },
  { icon: FileWarning, text: "Compliance-ready IT processes" },
];

const approach = [
  { icon: Search, step: "01", title: "Requirement Assessment", desc: "Deep-dive into your current IT landscape" },
  { icon: Settings, step: "02", title: "Infrastructure Planning", desc: "Design tailored solutions for your needs" },
  { icon: Rocket, step: "03", title: "Deployment & Configuration", desc: "Fast, disruption-free implementation" },
  { icon: HeartHandshake, step: "04", title: "Ongoing Support & Optimization", desc: "Continuous monitoring and improvement" },
];

export default function ITServicesPage() {
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
                <span className="h-2 w-2 rounded-full bg-primary" />
                IT Infrastructure Solutions
              </div>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Complete IT Infrastructure Solutions
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-70">
                Advait Infotech delivers end-to-end IT infrastructure and support services that help organizations maintain high availability, security, and operational efficiency.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="mailto:connect@advaithr.in">
                    Request IT Support
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-background/30 bg-transparent text-background hover:bg-background/10">
                  <Link href="/#contact">
                    Get a Free Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About IT Services */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-primary">
                About IT Services
              </p>
              <h2 className="font-display text-3xl font-bold text-foreground text-balance lg:text-4xl">
                Powering Business Operations Through Technology
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                We provide comprehensive IT infrastructure management services designed to support businesses of all sizes. From hardware lifecycle management to on-site and remote IT support, we ensure smooth and uninterrupted operations.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our solutions are cost-effective, SLA-driven, and aligned with industry best practices.
              </p>
            </div>
          </div>
        </section>

        {/* Core IT Offerings */}
        <section className="bg-muted py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-primary">
                IT Infrastructure Services
              </p>
              <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                Our Core IT Offerings
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {coreServices.map((service) => (
                <div
                  key={service.label}
                  className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground">
                    {service.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rental & AMC Advantage */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wider text-primary">
                    IT Rental & AMC Advantage
                  </p>
                  <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                    Flexible & Cost-Controlled IT Management
                  </h2>
                </div>
                <ul className="flex flex-col gap-5">
                  {advantages.map((adv) => (
                    <li key={adv.text} className="flex items-center gap-4 text-sm text-foreground">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <adv.icon className="h-5 w-5 text-accent" />
                      </div>
                      {adv.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Security */}
        <section className="bg-muted py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-primary">
                  Technology & Security
                </p>
                <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                  Secure & Future-Ready IT Environments
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We help protect your infrastructure from operational and cyber risks with enterprise-grade security solutions.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {securityFeatures.map((feat) => (
                  <div
                    key={feat.text}
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <feat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{feat.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* IT Service Approach */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-primary">
                IT Service Approach
              </p>
              <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                Our Proven Process
              </h2>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {approach.map((item, i) => (
                <div key={item.title} className="relative text-center">
                  {i < approach.length - 1 && (
                    <div className="absolute right-0 top-10 hidden h-px w-full translate-x-1/2 bg-border lg:block" />
                  )}
                  <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
                    <item.icon className="h-8 w-8 text-primary" />
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-foreground py-20 text-background lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-display text-3xl font-bold text-balance lg:text-4xl">
              Need Reliable IT Support?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed opacity-70">
              Let us manage your IT while you focus on growing your business.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="mailto:connect@advaithr.in">
                  Request IT Support
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
