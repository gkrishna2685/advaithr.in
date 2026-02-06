import {
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
} from "lucide-react";

const services = [
  { icon: Laptop, label: "Laptop & Desktop Rentals", desc: "Latest configurations" },
  { icon: ShoppingCart, label: "IT Hardware Sales", desc: "With warranty support" },
  { icon: Wrench, label: "Repair & Break-Fix Support", desc: "Quick turnaround" },
  { icon: FileCheck, label: "Annual Maintenance (AMC)", desc: "Preventive & corrective" },
  { icon: Network, label: "Network, Printer & Server", desc: "Full infrastructure" },
  { icon: Headphones, label: "IT Helpdesk Services", desc: "On-site & remote" },
];

const advantages = [
  { icon: TrendingDown, text: "Zero Capital Expenditure (CapEx to OpEx model)" },
  { icon: Cpu, text: "Access to latest hardware technology" },
  { icon: ClipboardCheck, text: "Preventive & corrective maintenance" },
  { icon: Clock, text: "SLA-based support with defined response times" },
  { icon: ArrowUpCircle, text: "Maximum uptime assurance for critical systems" },
];

export function ITServicesOverview() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-primary">
            IT Infrastructure Services
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground text-balance lg:text-4xl">
            Comprehensive IT Lifecycle Management
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Our services are designed to keep your business running securely, smoothly, and efficiently.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.label}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-foreground">
                  {service.label}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Rental & AMC Advantage */}
        <div className="mt-16 rounded-2xl border border-border bg-muted p-8 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wider text-primary">
                IT Rental & AMC Advantage
              </p>
              <h3 className="font-display text-2xl font-bold text-foreground lg:text-3xl">
                Flexible. Reliable. Cost-Controlled.
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {advantages.map((adv) => (
                <li key={adv.text} className="flex items-center gap-3 text-sm text-foreground">
                  <adv.icon className="h-5 w-5 shrink-0 text-accent" />
                  {adv.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
