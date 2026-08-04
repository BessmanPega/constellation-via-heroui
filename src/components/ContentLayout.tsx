import { ReactNode } from "react";

interface ContentLayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
}

export const ContentLayout = ({ sidebar, children }: ContentLayoutProps) => {
  return (
    <div className="flex gap-8 lg:gap-12">
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-20">{sidebar}</div>
      </aside>
      <main className="flex-1 min-w-0">
        <div className="prose prose-sm dark:prose-invert max-w-none">
          {children}
        </div>
      </main>
    </div>
  );
};
