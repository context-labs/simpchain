import React from "react";
import { Navbar } from "nextra-theme-docs";

function Navigation(props) {
  return (
    <>
      <Navbar
        {...props}
        items={[
          {
            title: "Login",
            type: "page",
            href: "https://app.usecontext.io/login",
          },
          {
            title: "Register",
            type: "page",
            href: "https://app.usecontext.io/register",
          },
        ]}
      />
    </>
  );
}

export default Navigation;
