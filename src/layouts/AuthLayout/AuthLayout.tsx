import { Toaster } from "react-hot-toast";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>{children}</main>
      <Toaster />
    </>
  );
};

export default AuthLayout;
