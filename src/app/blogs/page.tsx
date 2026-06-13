import type { Metadata } from "next";
import BlogsList from "./BlogsList";

export const metadata: Metadata = {
  title: "Blogs & News",
  description:
    "Stay updated with the latest FBR tax updates, SECP company registration rules, trademark guidelines, and compliance alerts in Pakistan.",
};

export default function BlogsPage() {
  return <BlogsList />;
}
