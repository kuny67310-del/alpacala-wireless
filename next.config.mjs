/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allows overriding the build output directory in restricted local environments.
  // On Vercel this stays unset, so the default `.next` directory is used.
  ...(process.env.NEXT_DIST_DIR ? { distDir: process.env.NEXT_DIST_DIR } : {}),
  // `NEXT_EXPORT=1 npm run build` emits plain static HTML/CSS/JS into ./out
  // for hosting on any static server. Leave unset for normal Vercel deploys.
  ...(process.env.NEXT_EXPORT === "1" ? { output: "export" } : {}),
};

export default nextConfig;
