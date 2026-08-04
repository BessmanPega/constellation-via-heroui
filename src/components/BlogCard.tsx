import { Card, CardBody, CardFooter, Chip } from "@heroui/react";
import { sectionTitle, sectionSubtitle } from "@/components/primitives";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

export const BlogCard = ({
  title,
  excerpt,
  date,
  category,
  slug,
}: BlogCardProps) => {
  return (
    <Card className="card-elevated hover:shadow-lg transition-all duration-250 hover:-translate-y-1 cursor-pointer">
      <CardBody className="gap-3 p-6">
        <div className="flex items-center justify-between">
          <Chip
            className="text-xs font-medium"
            color="primary"
            size="sm"
            variant="flat"
          >
            {category}
          </Chip>
          <span className="text-xs text-default-500">{date}</span>
        </div>
        <h3 className={sectionTitle({ color: "default" })}>{title}</h3>
        <p className={sectionSubtitle({ color: "muted" })}>{excerpt}</p>
      </CardBody>
      <CardFooter className="px-6 py-3">
        <a
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          href={`/blog/${slug}`}
        >
          Read more →
        </a>
      </CardFooter>
    </Card>
  );
};
