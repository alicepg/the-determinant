module.exports = function (eleventyConfig) {
  // ── Passthrough copies ────────────────────────────────────────────────────
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy({ "public/images": "images" });

  // ── Filters ───────────────────────────────────────────────────────────────

  // Filter to published articles only
  eleventyConfig.addFilter("publishedOnly", (arr) =>
    arr.filter((a) => a.data.published !== false)
  );

  // Sort array of collection items by date descending
  eleventyConfig.addFilter("sortByDate", (arr) =>
    [...arr].sort(
      (a, b) => new Date(b.data.date) - new Date(a.data.date)
    )
  );

  // Filter by category
  eleventyConfig.addFilter("byCategory", (arr, cat) =>
    arr.filter((a) => a.data.category === cat)
  );

  // Exclude a specific url from an array
  eleventyConfig.addFilter("excludeUrl", (arr, url) =>
    arr.filter((a) => a.url !== url)
  );

  // Return first item that has coverStory: true, else first item
  eleventyConfig.addFilter("coverStory", (arr) => {
    const pinned = arr.find((a) => a.data.coverStory === true);
    return pinned || arr[0];
  });

  // Human-readable date  e.g. "November 17, 2026"
  eleventyConfig.addFilter("dateDisplay", (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  // ISO date string for <time datetime="">
  eleventyConfig.addFilter("dateISO", (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr).toISOString().slice(0, 10);
  });

  // Group collection items by their data.volume field;
  // returns an object { volLabel: [articles] } sorted newest-first per group
  eleventyConfig.addFilter("groupByVolume", (arr) => {
    const groups = {};
    arr.forEach((a) => {
      const vol = a.data.volume || "Unknown";
      if (!groups[vol]) groups[vol] = [];
      groups[vol].push(a);
    });
    Object.values(groups).forEach((g) =>
      g.sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
    );
    return groups;
  });

  // Limit an array to n items
  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));

  // ── Config ────────────────────────────────────────────────────────────────
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "data",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
