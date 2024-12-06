import { cn } from "@/lib/utils";

const ErrorMessage = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <span className={`${cn("error-message", className)}`}>{children}</span>
    </>
  );
};

export default ErrorMessage;
