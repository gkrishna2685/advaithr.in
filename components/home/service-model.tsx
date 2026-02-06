import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Monitor, Users, ArrowRight } from "lucide-react";

export function ServiceModelSection() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-primary">
            Our Integrated Service Model
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground text-balance lg:text-4xl">
            One Partner. Complete Responsibility.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            This dual-service model simplifies vendor management, reduces administrative overhead, and delivers measurable business value.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {/* IT Infrastructure */}
          <div className="group rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg lg:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <Monitor className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">
              IT Infrastructure Solutions
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Complete hardware lifecycle management including rentals, sales, repairs, AMC, networking, servers, and helpdesk support.
            </p>
            <Button asChild variant="link" className="mt-4 px-0 text-primary">
              <Link href="/it-services">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* HR & Manpower */}
          <div className="group rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg lg:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Users className="h-7 w-7 text-accent" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">
              IT & Non-IT Manpower Staffing
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Skilled, verified professionals across technical and operational roles, available for immediate deployment.
            </p>
            <Button asChild variant="link" className="mt-4 px-0 text-accent">
              <Link href="/hr-services">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
