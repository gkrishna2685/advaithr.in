import { Target, Compass } from "lucide-react";

export function VisionMission() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-primary">
            Vision & Mission
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
            Driving Purpose & Direction
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <Compass className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">Our Vision</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To become the most trusted partner for IT infrastructure and manpower solutions across India.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Target className="h-7 w-7 text-accent" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">Our Mission</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To deliver reliable, scalable, and cost-efficient IT and staffing services that enable sustainable business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
