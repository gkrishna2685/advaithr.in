import {
  Award,
  TrendingDown,
  Zap,
  Users,
  Settings,
  Eye,
  DollarSign,
  Gauge,
  Clock,
  Layers,
  ArrowUpRight,
  Handshake,
} from "lucide-react";

const advantages = [
  { icon: Award, text: "One-stop solution provider" },
  { icon: TrendingDown, text: "Significant cost reduction" },
  { icon: Zap, text: "Rapid deployment & support" },
  { icon: Users, text: "Experienced technical & HR teams" },
  { icon: Settings, text: "Customized and scalable solutions" },
  { icon: Eye, text: "Transparent service delivery" },
];

const benefits = [
  { icon: DollarSign, text: "Lower IT and staffing costs" },
  { icon: Gauge, text: "Improved operational efficiency" },
  { icon: Clock, text: "Faster issue resolution" },
  { icon: Layers, text: "Simplified vendor management" },
  { icon: ArrowUpRight, text: "Scalable growth support" },
  { icon: Handshake, text: "Long-term strategic partnership" },
];

export function WhyChooseUs() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Why Choose Us */}
          <div>
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-primary">
              Why Choose Us
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
              The Advait Advantage
            </h2>
            <div className="mt-8 flex flex-col gap-5">
              {advantages.map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Business Benefits */}
          <div>
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Business Benefits
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
              What Our Clients Gain
            </h2>
            <div className="mt-8 flex flex-col gap-5">
              {benefits.map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
