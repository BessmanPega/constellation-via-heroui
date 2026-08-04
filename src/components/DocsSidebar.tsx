import { Link } from "@heroui/react";
import { label } from "@/components/primitives";

interface DocSection {
  title: string;
  items: Array<{
    label: string;
    href: string;
    active?: boolean;
  }>;
}

interface DocsSidebarProps {
  sections: DocSection[];
}

export const DocsSidebar = ({ sections }: DocsSidebarProps) => {
  return (
    <nav className="space-y-6">
      {sections.map((section, idx) => (
        <div key={idx} className="space-y-3">
          <h4 className={label()}>{section.title}</h4>
          <ul className="space-y-2 pl-2 border-l-2 border-default-200">
            {section.items.map((item, itemIdx) => (
              <li key={itemIdx}>
                <Link
                  className={`text-sm transition-colors ${
                    item.active
                      ? "text-primary font-medium"
                      : "text-default-600 hover:text-foreground"
                  }`}
                  href={item.href}
                  underline={item.active ? "always" : "hover"}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};
