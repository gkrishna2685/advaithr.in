import {
  Building2,
  Monitor,
  Rocket,
  Factory,
  GraduationCap,
  Truck,
} from "lucide-react";

const industries = [
  { icon: Building2, label: "Corporate & Commercial Offices" },
  { icon: Monitor, label: "IT & Technology Companies" },
  { icon: Rocket, label: "Startups & MSMEs" },
  { icon: Factory, label: "Manufacturing Units" },
  { icon: GraduationCap, label: "Educational Institutions" },
  { icon: Truck, label: "Logistics & Warehousing" },
];

export function IndustriesSection() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-primary">
            Industries We Serve
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
            Solutions Aligned With Your Industry
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Each solution is aligned with industry-specific requirements.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="font-display text-sm font-semibold text-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
