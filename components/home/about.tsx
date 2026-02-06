import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-primary">
              About Us
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground text-balance lg:text-4xl">
              Powering Business Growth Through Technology & Talent
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Advait Infotech is a professionally managed organization delivering end-to-end IT infrastructure services combined with strategic IT and Non-IT manpower staffing solutions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We help businesses reduce operational costs, improve efficiency, and maintain uninterrupted operations through a reliable and responsive service delivery model.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Why an integrated approach?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Our integrated approach eliminates the complexity of managing multiple vendors while ensuring consistent quality across all technology and workforce touchpoints.
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {[
                "Reduce operational costs",
                "Improve efficiency & uptime",
                "Single vendor accountability",
                "Scalable & responsive delivery",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
