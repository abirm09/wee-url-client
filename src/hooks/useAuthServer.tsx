import { TAuthSlice } from "@/types";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

const useAuthServer = (cookieStore: ReadonlyRequestCookies) => {
  const persist = cookieStore.get("persist%3Aauth")?.value;
  const parsedData = JSON.parse(persist || "{}");

  const result: TAuthSlice = Object.fromEntries(
    Object.entries(parsedData).map(([key, value]) => {
      try {
        return [key, typeof value === "string" ? JSON.parse(value) : value];
      } catch {
        return [key, value]; // fallback in case something isn't JSON
      }
    })
  );
  return result;
};

export default useAuthServer;
