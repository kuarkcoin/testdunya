/** @type {import('next').NextConfig} */
const nextConfig = {
  // These server routes read quiz JSON by validated ID at request time.
  // Keep the files in serverless bundles as well as in the public asset store.
  outputFileTracingIncludes: Object.fromEntries(
    [
      '/test/*',
      '/sitemap.xml',
      '/lgs/*',
      '/gorevde-yukselme',
      '/gorevde-yukselme/*',
      '/paragraf/*',
      '/zeka-bulmacalari/*',
    ].map((route) => [route, ['./public/data/tests/*.json']]),
  ),
};

export default nextConfig;
