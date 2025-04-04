import EditIco from "@/assets/images/dashboard/edit.svg";
import EyeIco from "@/assets/images/dashboard/eye.svg";
import SendIco from "@/assets/images/dashboard/send.svg";
import { WeeButton } from "@/components";
import { env } from "@/lib";
import { TURL } from "@/types";
import Link from "next/link";

const UrlAction = ({ url }: { url?: TURL }) => {
  const redirectLink = `${env.next_public_core_service_url}/${url?.shortCode}`;
  return (
    <div className="flex gap-2">
      <Link href={redirectLink} target="_blank" rel="noopener noreferrer">
        <WeeButton
          variant={"ghost"}
          className="w-8 h-8 rounded-full flex justify-center items-center border"
        >
          <SendIco />
        </WeeButton>
      </Link>
      <Link href={`urls/${url?.id}`}>
        <WeeButton
          variant={"ghost"}
          className="w-8 h-8 rounded-full flex justify-center items-center border"
        >
          <EyeIco />
        </WeeButton>
      </Link>
      <Link href={`urls/${url?.id}/edit`}>
        <WeeButton
          variant={"ghost"}
          className="w-8 h-8 rounded-full flex justify-center items-center border"
        >
          <EditIco />
        </WeeButton>
      </Link>
    </div>
  );
};

export default UrlAction;
