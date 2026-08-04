/* eslint-disable no-console */
import { useState, useEffect } from "react";
import { Textarea } from "@heroui/input";
import handleEvent from "@pega/react-sdk-components/lib/components/helpers/event-utils";
import { PConnFieldProps } from "@pega/react-sdk-components/lib/types/PConnProps";

interface TextAreaProps extends PConnFieldProps {
  // If any, enter additional props that only exist on TextArea here
  fieldMetadata?: any;
}

export default function TextArea(props: TextAreaProps) {
  const {
    getPConnect,
    label,
    required,
    disabled,
    value = "",
    validatemessage,
    status,
    readOnly,
    fieldMetadata,
    helperText,
    placeholder,
  } = props;

  const pConn = getPConnect();
  const actions = pConn.getActionsApi();
  const propName = (pConn.getStateProps() as any).value;

  const [inputValue, setInputValue] = useState("");
  const maxLength = fieldMetadata?.maxLength;

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  function handleChange(event: any) {
    // update internal value
    setInputValue(event?.target?.value);
  }

  function handleBlur() {
    // Register new value with the SDK.
    handleEvent(actions, "changeNblur", propName, inputValue);
  }

  return (
    <Textarea
      description={helperText}
      errorMessage={validatemessage}
      isDisabled={disabled}
      isInvalid={status === "error"}
      isReadOnly={readOnly}
      isRequired={required}
      label={label}
      maxLength={maxLength}
      minRows={4}
      placeholder={placeholder}
      value={inputValue}
      variant={readOnly ? "bordered" : "flat"}
      onBlur={!readOnly ? handleBlur : undefined}
      onChange={handleChange}
    />
  );
}
