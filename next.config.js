module.exports = {
  i18n: {
    locales: ["is"],
    defaultLocale: 'is'
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://litasyn.is/",
        permanent: true,
      },
      {
        source: "/málarameistari",
        destination: "https://litasyn.is/málarameistari",
        permanent: true,
      },
      {
        source: "/málari",
        destination: "https://litasyn.is/málari",
        permanent: true,
      },
      {
        source: "/málningarþjónusta",
        destination: "https://litasyn.is/málningarþjónusta",
        permanent: true,
      },
      {
        source: "/verkefni",
        destination: "https://litasyn.is/verkefni",
        permanent: true,
      },
      {
        source: "/verkefni/hjarðarhagi24-32",
        destination: "https://litasyn.is/verkefni/hjarðarhagi24-32",
        permanent: true,
      },
      {
        source: "/verkefni/vefarastræti",
        destination: "https://litasyn.is/verkefni/vefarastræti",
        permanent: true,
      },
      {
        source: "/verkefni/blikahöfði5-7",
        destination: "https://litasyn.is/verkefni/blikahöfði5-7",
        permanent: true,
      },
      {
        source: "/verkefni/fosshótel",
        destination: "https://litasyn.is/verkefni/fosshótel",
        permanent: true,
      },
      {
        source: "/verkefni/lindex",
        destination: "https://litasyn.is/verkefni/lindex",
        permanent: true,
      },
      {
        source: "/verkefni/sólvangur",
        destination: "https://litasyn.is/verkefni/sólvangur",
        permanent: true,
      },
      {
        source: "/verkefni/vegghamrar2-10",
        destination: "https://litasyn.is/verkefni/vegghamrar2-10",
        permanent: true,
      },
    ]
  },
}

