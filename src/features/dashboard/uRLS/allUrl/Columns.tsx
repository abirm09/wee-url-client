import { Avatar, AvatarFallback, AvatarImage } from "@/components";
import { env } from "@/lib";
import { TURL } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import toast from "react-hot-toast";
import UrlAction from "./UrlAction";

const Columns: ColumnDef<TURL>[] = [
  {
    accessorKey: "",
    header: "SL",
    cell: ({ row }) => (
      <div className="capitalize">
        <span className="">{row?.index + 1}</span>
      </div>
    ),
  },
  {
    accessorKey: "Icon",
    header: "Icon",
    cell: ({ row }) => {
      const url = new URL(row?.original?.fullUrl);
      const iconUrl = `https://www.google.com/s2/favicons?domain=${url.origin}`;
      return (
        <Avatar>
          <AvatarImage src={iconUrl} alt={`${url.host}'s icon`} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "shortCode",
    header: "Short Code",
    cell: ({ row }) => (
      <div className="capitalize">
        <span>{row?.original?.shortCode}</span>
      </div>
    ),
  },
  {
    accessorKey: "ShortenedURL",
    header: "Shortened URL",
    cell: ({ row }) => {
      const url = `${env.next_public_core_service_url}/${row?.original?.shortCode}`;
      return (
        <div className="">
          <span
            onClick={() => {
              navigator.clipboard
                .writeText(url)
                .then(() => {
                  toast.success("Text copied to clipboard!");
                })
                .catch(() => {
                  toast.success("Failed to copy text!");
                });
            }}
            className="cursor-pointer"
            title={`click to copy = ${url}`}
          >{`${url.length > 20 ? `${url.slice(0, 20)}...` : url}`}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "OriginalURL",
    header: "Original URL",
    cell: ({ row }) => {
      const url = row?.original?.fullUrl;
      return (
        <div className="">
          <span
            onClick={() => {
              navigator.clipboard
                .writeText(url)
                .then(() => {
                  toast.success("Text copied to clipboard!");
                })
                .catch(() => {
                  toast.success("Failed to copy text!");
                });
            }}
            className="cursor-pointer"
            title={`click to copy = ${url}`}
          >{`${url.length > 20 ? `${url.slice(0, 20)}...` : url}`}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "clickCount",
    header: "Click Count",
    cell: ({ row }) => (
      <div className="capitalize">
        <span>{row?.original?._count?.urlMetrics}</span>
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const date = new Date(row?.original?.createdAt);
      return (
        <div className="capitalize whitespace-nowrap inline-flex flex-col">
          <span>
            {date
              .toLocaleDateString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })
              .toLowerCase()}
          </span>
          <span>
            {date.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "tags",
    header: () => <span className="!text-end">Tags</span>,
    cell: ({ row }) => (
      <>
        {row?.original?.tags?.length ? (
          <div className="flex gap-2 flex-wrap">
            {row?.original?.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : (
          <span>N/A</span>
        )}
      </>
    ),
  },
  {
    accessorKey: "action",
    header: () => <span className="!text-end">Action</span>,
    cell: ({ row }) => <UrlAction url={row?.original} />,
  },
];

export default Columns;
