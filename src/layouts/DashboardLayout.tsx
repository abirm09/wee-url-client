import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>From header</header>
      <main>{children}</main>
      <footer>From footer</footer>
    </>
  );
};

export default DashboardLayout;
