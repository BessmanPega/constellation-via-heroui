import { Card, CardBody } from "@heroui/react";
import { sectionTitle, sectionSubtitle } from "@/components/primitives";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
}

export const TeamCard = ({ name, role, bio }: TeamCardProps) => {
  return (
    <Card className="card-elevated hover:shadow-lg transition-all duration-250">
      <CardBody className="gap-4 p-6 text-center">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
          <span className="text-4xl font-serif font-semibold text-primary">
            {name.charAt(0)}
          </span>
        </div>
        <h3 className={sectionTitle({ color: "default" })}>{name}</h3>
        <p className="text-sm font-medium text-primary">{role}</p>
        <p className={sectionSubtitle({ color: "muted" })}>{bio}</p>
      </CardBody>
    </Card>
  );
};
