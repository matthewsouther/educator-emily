const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addLayoutAlias("base", "layouts/base.html");
  eleventyConfig.addLayoutAlias("blog", "layouts/blog.html");
  eleventyConfig.addFilter("toMDYyyy", (value) =>
    new Date(value).toLocaleDateString("en-US"),
  );

  return { dir: { input: "src", output: "_site" } };
};
