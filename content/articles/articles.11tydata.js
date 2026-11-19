module.exports = {
  layout: "article.njk",
  tags: ["articles"],
  published: true,
  eleventyComputed: {
    permalink: (data) => `/articles/${data.page.fileSlug}/index.html`,
  },
};
