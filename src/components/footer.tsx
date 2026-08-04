import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";
import {
  Logo,
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/icons";

const footerLinks = [
  {
    title: "Stay",
    links: [
      { label: "Amenities", href: "/amenities" },
      { label: "Accommodations", href: "/accommodations" },
    ],
  },
  {
    title: "The Hotel",
    links: [
      { label: "About", href: "/about" },
      { label: "The Dispatch", href: "/dispatch" },
    ],
  },
  {
    title: "Guest Services",
    links: [
      { label: "Lost Property", href: "/lost-property" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-default-200">
      <div className="container mx-auto max-w-7xl px-6 py-section-md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link
              className="flex items-center gap-1 text-current"
              href="/"
            >
              <Logo />
              <p className="font-serif font-semibold text-inherit tracking-tight">
                Hotel Beaumont
              </p>
            </Link>
            <p className="text-sm text-default-500 mt-3 max-w-xs">
              {siteConfig.description}
            </p>
            <p className="text-sm text-default-500 mt-4">
              33 Marlborough Street
              <br />
              Boston, Massachusetts 02116
              <br />
              (617) 555-0142
            </p>
            <div className="flex items-center gap-3 mt-4">
              <Link
                isExternal
                href={siteConfig.links.twitter}
                title="Twitter"
              >
                <TwitterIcon className="text-default-500 hover:text-foreground transition-colors duration-250" />
              </Link>
              <Link
                isExternal
                href={siteConfig.links.instagram}
                title="Instagram"
              >
                <InstagramIcon className="text-default-500 hover:text-foreground transition-colors duration-250" />
              </Link>
              <Link
                isExternal
                href={siteConfig.links.facebook}
                title="Facebook"
              >
                <FacebookIcon className="text-default-500 hover:text-foreground transition-colors duration-250" />
              </Link>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-foreground mb-3">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="text-sm text-default-500 hover:text-foreground transition-colors duration-250"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-section-md pt-6 border-t border-default-200">
          <p className="text-sm text-default-500">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <Link
            isExternal
            className="flex items-center gap-1 text-current text-sm"
            href="https://heroui.com"
            title="heroui.com homepage"
          >
            <span className="text-default-500">Powered by</span>
            <span className="text-primary font-medium">HeroUI</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};
