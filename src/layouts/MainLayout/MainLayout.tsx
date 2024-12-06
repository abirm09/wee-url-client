import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>From header</header>
      <main>{children}</main>
      <footer>From footer</footer>
    </>
  );
};

export default MainLayout;
