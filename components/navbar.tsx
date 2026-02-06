"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Monitor,
  Users,
  Home,
  Phone,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/it-services", label: "IT Services", icon: Monitor },
  { href: "/hr-services", label: "HR & Manpower", icon: Users },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">A</span>
          </div>
          <span className="font-display text-xl font-bold text-foreground">
            Advait Infotech
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/#contact">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          </Button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-muted md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-border bg-card px-6 pb-4 md:hidden">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
          <Button asChild size="sm" className="mt-2 w-full">
            <Link href="/#contact">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
