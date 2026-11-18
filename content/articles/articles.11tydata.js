module.exports = {
  layout: "article.njk",
  tags: ["articles"],
  published: true,
  volume: "Vol. 1 - Autumn 2026",
  eleventyComputed: {
    permalink: (data) => `/articles/${data.page.fileSlug}/index.html`,
  },
};
