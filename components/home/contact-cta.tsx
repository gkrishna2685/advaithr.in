import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe, ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="bg-foreground py-20 text-background lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Get In Touch
            </p>
            <h2 className="font-display text-3xl font-bold text-balance lg:text-4xl">
              {"Let's Work Together"}
            </h2>
            <p className="mt-4 text-base leading-relaxed opacity-70">
              Whether you need IT infrastructure support, manpower staffing, or a complete integrated solution — we are ready to help.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="mailto:connect@advaithr.in">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="rounded-2xl border border-background/10 bg-background/5 p-8 backdrop-blur-sm lg:p-10">
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Location</p>
                  <p className="mt-1 text-sm opacity-70">Saket, Delhi, India</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Phone</p>
                  <p className="mt-1 text-sm opacity-70">+91 9899979044</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <p className="mt-1 text-sm opacity-70">connect@advaithr.in</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Website</p>
                  <p className="mt-1 text-sm opacity-70">advaithr.in</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
