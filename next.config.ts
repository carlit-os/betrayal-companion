import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/betrayal-companion" : "",
  serverExternalPackages: ["better-sqlite3"],
};

export default nextConfig;
