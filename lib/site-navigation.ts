export type SiteNavLink = {
  label: string;
  href: string;
  isPage?: boolean;
};

export const primaryNavLinks: SiteNavLink[] = [
  { label: "News", href: "/news", isPage: true },
  { label: "Insights", href: "/insights", isPage: true },
  { label: "About", href: "/about", isPage: true },
];
