import { Card, CardBody } from "@heroui/react";
import { sectionTitle, sectionSubtitle } from "@/components/primitives";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="card-elevated hover:shadow-lg transition-shadow duration-250">
      <CardBody className="gap-4 p-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className={sectionTitle({ color: "default" })}>{title}</h3>
        <p className={sectionSubtitle({ color: "muted" })}>{description}</p>
      </CardBody>
    </Card>
  );
};
