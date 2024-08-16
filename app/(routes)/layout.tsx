import React from "react";
import "../_styles/globals.css";
import type { Metadata } from "next";
import { ConfigProvider } from "antd";
import { Inter, Roboto } from "next/font/google";
import { APP_COLOR } from "../_libs/utils/theme";
import AppLayout from "../_components/layouts/AppLayout";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Gun Home page Title Metadata Test",
  description: "Gun Home page Description Metadata Test",
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    {/* declare font to tailwindcss */}
    <body className={`${inter.variable} ${roboto.variable} font-inter`}>
      <AntdRegistry>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: `${inter.style.fontFamily}`, // declare font to antd
              colorPrimary: APP_COLOR.primary,
            },
            // TODO: remove later ~
            // components: {
            //   Button: {
            //     // colorPrimaryHover: "red",
            //   },
            // },
          }}
        >
          {/* add, Header */}
          <AppLayout>{children}</AppLayout>
          {/* add, Footer */}
        </ConfigProvider>
      </AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
