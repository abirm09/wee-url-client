"use client";

import { WeeButton } from "@/components";
import { Copy } from "lucide-react";
import { toast } from "react-hot-toast";

const DemoUserCredentialsCopy = ({ value }: { value: string }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        toast.success("Text copied to clipboard!");
      })
      .catch(() => {
        toast.success("Failed to copy text!");
      });
  };
  return (
    <>
      <WeeButton
        variant={`ghost`}
        className="text-gray-700 hover:text-gray-800 hover:bg-gray-300"
        onClick={handleCopy}
      >
        <Copy />
      </WeeButton>
    </>
  );
};

export default DemoUserCredentialsCopy;
