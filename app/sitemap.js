export const dynamic = "force-static";

const BASE = "https://alpacala-wireless.vercel.app";

const ROUTES = ["", "/bulk-sim", "/activation", "/carriers", "/partnership", "/about", "/contact"];

export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${BASE}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
