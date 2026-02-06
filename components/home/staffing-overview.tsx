import { Monitor, Users, ShieldCheck } from "lucide-react";

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

export function StaffingOverview() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-primary">
            Manpower Staffing
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground text-balance lg:text-4xl">
            Skilled Professionals, Ready to Deploy
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Available on contract, temporary, and long-term engagement models to match your business needs. All manpower is professionally trained, background verified, and deployment-ready.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {/* IT Manpower */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <Monitor className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">
                IT Manpower Staffing
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {itRoles.map((role) => (
                <li key={role} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {role}
                </li>
              ))}
            </ul>
          </div>

          {/* Non-IT Manpower */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                <Users className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">
                Non-IT Manpower Staffing
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {nonItRoles.map((role) => (
                <li key={role} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Verification badge */}
        <div className="mt-10 flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-6 py-4">
          <ShieldCheck className="h-5 w-5 text-accent" />
          <p className="text-sm font-medium text-foreground">
            All manpower is professionally trained, background verified, and deployment-ready.
          </p>
        </div>
      </div>
    </section>
  );
}
