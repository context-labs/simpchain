import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Navigation from "./components/Navigation";
import { Github, Discord, Twitter } from "./components/Social";

const useDark = () => {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
    return () => false;
  }, [resolvedTheme]);
  return isDark;
};
/** @type import('nextra-theme-docs').DocsThemeConfig */
const theme = {
  docsRepositoryBase: "https://github.com/context-labs/context-docs/blob/main",
  editLink: {
    text: "Edit this page on GitHub",
  },
  feedback: {
    content: "Question? Give us feedback →",
  },
  toc: {
    float: true,
  },
  logo: function Logo() {
    const isDark = useDark();
    return (
      <>
        <img
          width="24"
          src={`/logo${isDark ? "-dark" : ""}.svg`}
          alt="Context Logo"
        />
        <span className="w-full font-bold pl-2">Context Documentation</span>
      </>
    );
  },
  useNextSeoProps: () => ({
    titleTemplate: `%s | Context Documentation`,
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: "https://usecontext.io",
      siteName: "Context Documentation | Build AI-Powered chatbots",
      description:
        "Learn how to create the worlds most powerful AI-powered chatbots with Context.",
      images: [
        {
          url: "https://storage.googleapis.com/use-context-production-assets/context-standard-opengraph.png",
          alt: "Context Image",
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      handle: "@contextbots",
      site: "@contextbots",
      cardType: "summary_large_image",
    },
  }),
  gitTimestamp({ timestamp }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dateString, setDateString] = useState(timestamp.toISOString());

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      try {
        setDateString(
          timestamp.toLocaleDateString(navigator.language, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        );
      } catch (e) {
        // Ignore errors here; they get the ISO string.
        // At least one person out there has manually misconfigured navigator.language.
      }
    }, [timestamp]);

    return <>Last updated on {dateString}</>;
  },
  navbar: {
    component: <Navigation />,
    extraContent: (
      <>
        <Github />
        <Discord />
        <Twitter />
      </>
    ),
  },
};
export default theme;
