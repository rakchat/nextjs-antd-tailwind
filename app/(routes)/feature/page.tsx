import type { Metadata } from "next";

// ~ TODO: SEO, metadata
export const metadata: Metadata = {
  title: "Gun Feature page Title Metadata Test",
  description: "Gun Feature page Description Metadata Test",
  openGraph: {
    url: "appUrl-something",
    title: "123",
    description: "123",
    images: "shareImage",
    type: "website",
    siteName: "gun",
  },
  twitter: {
    title: "12",
    description: "des",
    images: "image",
    card: "summary_large_image",
    site: "appUrl",
  },
};

export default function Feature() {
  return (
    <>
      <h1>Feature</h1>
    </>
  );
}
