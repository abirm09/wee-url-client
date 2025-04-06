import { env } from "@/lib";
import Cookies from "js-cookie";

const cookieStorage = {
  getItem: (key: string): Promise<string | null> => {
    const value = Cookies.get(key);
    return Promise.resolve(value ?? null);
  },
  setItem: (key: string, value: string): Promise<void> => {
    Cookies.set(key, value, {
      expires: 1, // days
      secure: env.node_env === "development" ? true : false,
      sameSite: "Lax",
    });
    return Promise.resolve();
  },
  removeItem: (key: string): Promise<void> => {
    Cookies.remove(key);
    return Promise.resolve();
  },
};

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem() {
      return Promise.resolve();
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined" ? cookieStorage : createNoopStorage();

export default storage;
