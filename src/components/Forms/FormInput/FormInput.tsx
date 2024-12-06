import { Input } from "@/components/ui";
import { cn } from "@/lib/utils";
import React from "react";

type TFormInput = {
  name: string;
  className?: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
};

// Use React.forwardRef to forward the ref to the actual input element
const FormInput = React.forwardRef<HTMLInputElement, TFormInput>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ name, className, placeholder, defaultValue, value, ...rest }, ref) => {
    return (
      <div>
        <Input
          ref={ref} // Pass the forwarded ref here
          placeholder={placeholder}
          className={cn(
            "outline outline-2 outline-primary-subtle focus-visible:outline-primary",
            className
          )}
          defaultValue={defaultValue}
          value={value}
          {...rest}
        />
      </div>
    );
  }
);

FormInput.displayName = "FormInput"; // Optional, for better debugging in React DevTools

export default FormInput;
