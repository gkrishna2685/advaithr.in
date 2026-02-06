import { Search, Lightbulb, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Understand",
    desc: "Business needs and challenges",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Strategise",
    desc: "Tailored IT & manpower solutions",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Deploy",
    desc: "Fast, disruption-free implementation",
  },
  {
    icon: HeartHandshake,
    step: "04",
    title: "Support",
    desc: "Continuous monitoring and optimization",
  },
];

export function WorkingApproach() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-primary">
            Our Working Approach
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
            Simple. Structured. Reliable.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, i) => (
            <div key={item.title} className="relative text-center">
              {/* Connector line (hidden on small screens and last item) */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-px w-full translate-x-1/2 bg-border lg:block" />
              )}
              <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
                <item.icon className="h-8 w-8 text-primary" />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {item.step}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
