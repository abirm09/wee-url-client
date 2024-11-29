import { TWeeButton } from "@/types";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui";

const WeeButton = ({
  children,
  className,
  loading = false,
  loadingElement = "Please wait...",
  loadingClassName,
  ...rest
}: TWeeButton) => {
  if (loading) {
    return (
      <Button
        className={`${twMerge("transition-all font-semibold select-none", loadingClassName)}`}
        disabled
        {...rest}
      >
        {loadingElement}
      </Button>
    );
  }

  return (
    <Button
      className={`${twMerge("text-primary-foreground hover:bg-primary-subtle active:scale-95 transition-all select-none", className)}`}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default WeeButton;
