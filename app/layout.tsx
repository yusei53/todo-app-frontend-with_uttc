import type { Metadata } from "next";
import { Box } from "@chakra-ui/react";
import Header from "./components/organisms/Header";
import { Providers } from "./provider";
import SideBarTemplate from "./components/templates/SidebarTemplate";

export const metadata: Metadata = {
  title: "uttc × PeachTech",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#373D61" }}>
        <Providers>
          <Header />
          <Box display={"flex"}>
            <SideBarTemplate />
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
