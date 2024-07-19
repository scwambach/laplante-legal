export const GLOBAL_QUERY = `*[_type == "globalSettings"][0] {
  "siteTitle": title,
  "siteDescription": description,
  footerCopy,
  "favicon": favicon.asset->url,
  socials,
  phone,
  fax,
  location {
    "street": address,
    city,
    state,
    zip,
  },
  "navigation": *[_type == "navigation" && title == "Main Navigation"][0].items[]
}`
