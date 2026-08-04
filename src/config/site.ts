export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Hotel Beaumont",
  description:
    "A quiet corner of the city, held to an old standard. Established in confidence, maintained by habit.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Amenities",
      href: "/amenities",
    },
    {
      label: "Accommodations",
      href: "/accommodations",
    },
    {
      label: "The Dispatch",
      href: "/dispatch",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Lost Property",
      href: "/lost-property",
    },
  ],
  navMenuItems: [
    {
      label: "My Reservations",
      href: "/my-reservations",
    },
    {
      label: "Loyalty Account",
      href: "/loyalty",
    },
    {
      label: "Concierge Requests",
      href: "/concierge",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Sign Out",
      href: "/logout",
    },
  ],
  links: {
    twitter: "#",
    instagram: "#",
    facebook: "#",
  },
};
