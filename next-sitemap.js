// A config for next-sitemap to generate a robots.txt and sitemap.xml files for improved SEO. This
// config is used by the "postbuild" step in package.json. Essentially this config adds a
// robots.txt file that permits crawling in production but disallows it for any other deployment.
// All other deployments are dev or staging builds and should not be crawled by search engines to
// prevent the risk of a duplicate content penalty. A sitemap.xml file is created for production
// that helps search engines know which routes this site offers. For all non-production deployments
// no sitemap file is created.
//
// Note: we optionally exclude some routes from the sitemap but we don't explicitly disallow those
// routes in robots.txt. This is intentional. Listing `Disallow` directive in robots.txt does not
// guarantee it being excluded from search engines. For that we have to add a `noindex` to either
// the HTML or HTTP header of each page. Listing excluded routes in robots.txt may reveal routes we
// do not intend to reveal yet so it's better to be silent on them.
//
// See: https://github.com/iamvishnusankar/next-sitemap
const siteUrl = process.env.VERCEL_URL ? process.env.VERCEL_URL : "https://jonogmarteinn.is";
const isProduction = process.env.VERCEL_ENV === "production";
const excludeAllRoutes = ["*"]; // Excluding with a "*" prevents the creation of sitemap.xml
const allowCrawlingOnAllRoutes = "";
const preventCrawlingOnAllRoutes = "/";

// Work in progress routes if any we don't want search engines to know about
const routesToHideInProduction = ["/málari", "/málningarþjónusta*"];

module.exports = {
  siteUrl: siteUrl,
  exclude: isProduction ? routesToHideInProduction : excludeAllRoutes,

  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: isProduction ? allowCrawlingOnAllRoutes : preventCrawlingOnAllRoutes,
      }
    ]
  }
};