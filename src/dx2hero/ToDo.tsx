/* eslint-disable @typescript-eslint/no-shadow */
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from "@heroui/react";
import { PConnProps } from "@pega/react-sdk-components/lib/types/PConnProps";

const DEFAULT_ROUTING_MESSAGE =
  "Thank you! The next step in this case has been routed appropriately.";

interface ToDoProps extends PConnProps {
  // If any, enter additional props that only exist on this component
  datasource?: any;
  myWorkList?: any;
  // eslint-disable-next-line react/no-unused-prop-types
  caseInfoID?: string;
  headerText?: string;
  // eslint-disable-next-line react/no-unused-prop-types
  itemKey?: string;
  showTodoList?: boolean;
  type?: string;

  context?: string;
  isConfirm?: boolean;
}

export default function ToDo(props: ToDoProps) {
  const { itemKey = "" } = props;

  const messages = PCore.getStoreValue(
    "caseMessages",
    "",
    itemKey,
  ) as Array<string>;
  const businessID = PCore.getStoreValue("caseInfo.businessID", "", itemKey);

  function mailHref() {
    return `mailto:concierge@hotelbeaumont.com?subject=Lost Property Inquiry ${businessID}`;
  }

  return (
    <div className="max-w-prose justify-self-center">
      <Card className="card-elevated m-4">
        <CardHeader>
          <p className="text-lg">
            Your reference number is{" "}
            <span className="font-bold">{businessID}</span>
          </p>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            We've noted the particulars and have the staff looking into it.
            You should hear from the concierge desk within three to five
            business days. Thank you for staying with us at Hotel Beaumont.
          </p>
        </CardBody>
        <Divider />
        <CardFooter>
          <p className="text-sm">
            Email{" "}
            <Link className="text-sm font-bold" href={mailHref()}>
              concierge@hotelbeaumont.com
            </Link>{" "}
            should you need anything sooner
          </p>
        </CardFooter>
      </Card>
      {messages?.map((message: string) => (
        <div
          key={message}
          className="card-elevated m-4 p-4 text-left text-sm text-default-700 dark:text-default-600"
        >
          {message === DEFAULT_ROUTING_MESSAGE
            ? "Consider it handled — we've passed your note along to the right hands."
            : message}
        </div>
      ))}
    </div>
  );
}
