import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...projects.map((project) => `/work/${project.slug}`)].map(
    (path) => ({ url: `https://kumarnikhil.vercel.app${path}` }),
  );
}
