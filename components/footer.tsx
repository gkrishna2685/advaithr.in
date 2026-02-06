import Link from "next/link";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">A</span>
              </div>
              <span className="font-display text-xl font-bold">Advait Infotech</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-70">
              Your trusted technology and workforce partner delivering reliable, scalable, and cost-effective IT and manpower solutions across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider opacity-60">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/it-services" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  IT Services
                </Link>
              </li>
              <li>
                <Link href="/hr-services" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  HR & Manpower Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider opacity-60">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="text-sm opacity-70">IT Rentals & Sales</li>
              <li className="text-sm opacity-70">Annual Maintenance (AMC)</li>
              <li className="text-sm opacity-70">IT & Non-IT Staffing</li>
              <li className="text-sm opacity-70">Network & Server Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider opacity-60">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm opacity-70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                Saket, Delhi, India
              </li>
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Phone className="h-4 w-4 shrink-0" />
                +91 9899979044
              </li>
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Mail className="h-4 w-4 shrink-0" />
                connect@advaithr.in
              </li>
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Globe className="h-4 w-4 shrink-0" />
                advaithr.in
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8 text-center text-sm opacity-50">
          &copy; {new Date().getFullYear()} Advait Infotech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
