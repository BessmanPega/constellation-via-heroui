import { Card, CardBody, CardFooter, Button, Chip } from "@heroui/react";

const CheckIcon = (props: any) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
);
import { sectionTitle } from "@/components/primitives";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export const PricingCard = ({
  name,
  price,
  description,
  features,
  isPopular,
}: PricingCardProps) => {
  return (
    <Card
      className={`card-elevated transition-all duration-250 ${
        isPopular ? "ring-2 ring-primary shadow-lg scale-105" : ""
      }`}
    >
      <CardBody className="gap-4 p-6">
        {isPopular && (
          <Chip className="w-fit" color="primary" size="sm" variant="flat">
            Most Popular
          </Chip>
        )}
        <h3 className={sectionTitle({ color: "default" })}>{name}</h3>
        <p className="text-default-500">{description}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-default-500">/month</span>
        </div>
        <ul className="space-y-3 my-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <span className="text-sm text-default-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardBody>
      <CardFooter>
        <Button
          className="w-full"
          color={isPopular ? "primary" : "default"}
          variant={isPopular ? "solid" : "bordered"}
        >
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
};
