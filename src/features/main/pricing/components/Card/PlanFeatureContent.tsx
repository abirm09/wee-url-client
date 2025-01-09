import { Check, X } from "lucide-react";

const PlanFeatureContent = ({
  text,
  checked,
}: {
  text: string;
  checked: boolean;
}) => {
  return (
    <li className="flex gap-2 items-center">
      <span
        className={`flex justify-center items-center w-4 h-4 rounded-full ${checked ? "bg-secondary" : "bg-red-100"}`}
      >
        {checked ? (
          <Check className="w-3 h-3 text-primary font-bold" />
        ) : (
          <X className="w-3 h-3 text-red-800 font-bold" />
        )}
      </span>
      <span>{text}</span>
    </li>
  );
};

export default PlanFeatureContent;
