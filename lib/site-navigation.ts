export type SiteNavLink = {
  label: string;
  href: string;
  isPage?: boolean;
};

export const primaryNavLinks: SiteNavLink[] = [
  { label: "News", href: "/news", isPage: true },
  { label: "Insights", href: "/insights", isPage: true },
  {
    label: "Markets",
    href: "/markets",
    isPage: true,
  },
  { label: "Events", href: "/events", isPage: true },
  { label: "Career Paths", href: "/career-paths", isPage: true },
];
