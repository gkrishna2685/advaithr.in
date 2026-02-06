import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Users, Wrench, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-foreground text-background">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-1.5 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-accent" />
            IT Rentals | Repairs | AMC | IT & Non-IT Staffing
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Complete IT Infrastructure & Manpower Solutions
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-70">
            Your trusted technology and workforce partner delivering reliable, scalable, and cost-effective IT and manpower solutions across India.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/#contact">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-background/30 bg-transparent text-background hover:bg-background/10">
              <Link href="/it-services">
                Our Services
              </Link>
            </Button>
          </div>
        </div>

        {/* Floating stat cards */}
        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { icon: Monitor, label: "IT Rentals", desc: "Latest configurations" },
            { icon: Wrench, label: "Repairs & AMC", desc: "Quick turnaround" },
            { icon: Users, label: "IT Staffing", desc: "Ready to deploy" },
            { icon: Shield, label: "Security", desc: "Endpoint protection" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-background/10 bg-background/5 p-5 backdrop-blur-sm transition-colors hover:bg-background/10"
            >
              <item.icon className="mb-3 h-6 w-6 text-accent" />
              <p className="font-display text-sm font-semibold">{item.label}</p>
              <p className="mt-1 text-xs opacity-60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
